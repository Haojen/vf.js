import { AbstractFilter } from './AbstractFilter';


export interface CrossZoomFilterUniforms {
        filterMatrix: vf.Matrix;
        resolution: number;
        previousTexture: vf.RenderTexture;
        progress: number;
        strength: number;
    }

export class CrossZoomFilter extends AbstractFilter {

        private static readonly linearBlurUniforms = {
            filterMatrix:    vf.Matrix.TEMP_MATRIX,
            resolution:      vf.settings.RESOLUTION,
            previousTexture: null,
            progress:        0.0,
            strength:        0.4,
        };

        private static readonly fragmentSrc: string = `
            #ifdef GL_ES
            precision highp float;
            #endif
            uniform sampler2D uSampler;
            uniform sampler2D previousTexture;
            uniform float progress;
            uniform float resolution;
            uniform float strength;
            
            varying vec2 vTextureCoord;
            varying vec2 vFilterCoord;
            
            const float PI = 3.141592653589793;
            
            float Linear_ease(in float begin, in float change, in float duration, in float time) {
                return change * time / duration + begin;
            }
            
            float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
                if (time == 0.0)
                    return begin;
                else if (time == duration)
                    return begin + change;
                time = time / (duration / 2.0);
                if (time < 1.0)
                    return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
                return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
            }
            
            float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {
                return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;
            }
            
            float random(in vec3 scale, in float seed) {
                return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
            }
            
            vec3 crossFade(in vec2 uv1, in vec2 uv2, in float dissolve) {
                return mix(texture2D(previousTexture, uv1).rgb, texture2D(uSampler, uv2).rgb, dissolve);
            }
            
            void main() {
            
                vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);
                float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);
            
                float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);
                
                vec3 color = vec3(0.0);
                float total = 0.0;
                vec2 toCenter = center - vTextureCoord;
        
                float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
            
                for (float t = 0.0; t <= 40.0; t++) {
                    float percent = (t + offset) / 40.0;
                    float weight = 4.0 * (percent - percent * percent);
                    vec2 p = toCenter * percent * strength;
                    color += crossFade(vFilterCoord + p, vTextureCoord + p, dissolve) * weight;
                    total += weight;
                }
                gl_FragColor = vec4(color / total, 1.0);
            }
        `;

        constructor() {
            super(AbstractFilter.vertexSrc, CrossZoomFilter.fragmentSrc, CrossZoomFilter.linearBlurUniforms);
        }
    }

