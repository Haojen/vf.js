/**
 * @namespace vf
 */
declare namespace vf {
    /**
     * String of the current vf version.
     *
     * @static
     * @constant
     * @memberof vf
     * @name VERSION
     * @type {string}
     */
    var VERSION: string;
    /**
     * This namespace contains WebGL-only display filters that can be applied
     * to DisplayObjects using the {@link vf.DisplayObject#filters filters} property.
     *
     * Since PixiJS only had a handful of built-in filters, additional filters
     * can be downloaded {@link https://github.com/pixijs/pixi-filters here} from the
     * PixiJS Filters repository.
     *
     * All filters must extend {@link vf.Filter}.
     *
     * @example
     * // Create a new application
     * const app = new vf.Application();
     *
     * // Draw a green rectangle
     * const rect = new vf.Graphics()
     *     .beginFill(0x00ff00)
     *     .drawRect(40, 40, 200, 200);
     *
     * // Add a blur filter
     * rect.filters = [new vf.filters.BlurFilter()];
     *
     * // Display rectangle
     * app.stage.addChild(rect);
     * document.body.appendChild(app.view);
     * @namespace vf.filters
     */
    namespace filters {
        /**
         * @param {number} [alpha=1] Amount of alpha from 0 to 1, where 0 is transparent
         */
        class AlphaFilter extends vf.Filter {
            constructor(alpha?: number);
            /**
             * Coefficient for alpha multiplication
             *
             * @member {number}
             * @default 1
             */
            alpha: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Applies the filter
             *
             * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {vf.RenderTexture} input - The input render target.
             * @param {vf.RenderTexture} output - The target to output to.
             * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * @param {number} [strength=8] - The strength of the blur filter.
         * @param {number} [quality=4] - The quality of the blur filter.
         * @param {number} [resolution=1] - The resolution of the blur filter.
         * @param {number} [kernelSize=5] - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
         */
        class BlurFilter extends vf.Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);
            /**
             * Applies the filter.
             *
             * @param {vf.systems.FilterSystem} filterManager - The manager.
             * @param {vf.RenderTexture} input - The input target.
             * @param {vf.RenderTexture} output - The output target.
             * @param {vf.CLEAR_MODES} clearMode - How to clear
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES): void;
            /**
             * Sets the strength of both the blurX and blurY properties simultaneously
             *
             * @member {number}
             * @default 2
             */
            blur: number;
            /**
             * Sets the number of passes for blur. More passes means higher quaility bluring.
             *
             * @member {number}
             * @default 1
             */
            quality: number;
            /**
             * Sets the strength of the blurX property
             *
             * @member {number}
             * @default 2
             */
            blurX: number;
            /**
             * Sets the strength of the blurY property
             *
             * @member {number}
             * @default 2
             */
            blurY: number;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * If set to true the edge of the target will be clamped
             *
             * @member {boolean}
             * @default false
             */
            repeatEdgePixels: boolean;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * @param {boolean} horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
         * @param {number} [strength=8] - The strength of the blur filter.
         * @param {number} [quality=4] - The quality of the blur filter.
         * @param {number} [resolution=1] - The resolution of the blur filter.
         * @param {number} [kernelSize=5] - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
         */
        class BlurFilterPass extends vf.Filter {
            constructor(horizontal: boolean, strength?: number, quality?: number, resolution?: number, kernelSize?: number);
            /**
             * Applies the filter.
             *
             * @param {vf.systems.FilterSystem} filterManager - The manager.
             * @param {vf.RenderTexture} input - The input target.
             * @param {vf.RenderTexture} output - The output target.
             * @param {vf.CLEAR_MODES} clearMode - How to clear
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES): void;
            /**
             * Sets the strength of both the blur.
             *
             * @member {number}
             * @default 16
             */
            blur: number;
            /**
             * Sets the quality of the blur by modifying the number of passes. More passes means higher
             * quaility bluring but the lower the performance.
             *
             * @member {number}
             * @default 4
             */
            quality: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        class ColorMatrixFilter extends vf.Filter {
            /**
             * Transforms current matrix and set the new one
             *
             * @param {number[]} matrix - 5x4 matrix
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            _loadMatrix(matrix: number[], multiply: boolean): void;
            /**
             * Adjusts brightness
             *
             * @param {number} b - value of the brigthness (0-1, where 0 is black)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            brightness(b: number, multiply: boolean): void;
            /**
             * Set the matrices in grey scales
             *
             * @param {number} scale - value of the grey (0-1, where 0 is black)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            greyscale(scale: number, multiply: boolean): void;
            /**
             * Set the black and white matrice.
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            blackAndWhite(multiply: boolean): void;
            /**
             * Set the hue property of the color
             *
             * @param {number} rotation - in degrees
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            hue(rotation: number, multiply: boolean): void;
            /**
             * Set the contrast matrix, increase the separation between dark and bright
             * Increase contrast : shadows darker and highlights brighter
             * Decrease contrast : bring the shadows up and the highlights down
             *
             * @param {number} amount - value of the contrast (0-1)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            contrast(amount: number, multiply: boolean): void;
            /**
             * Set the saturation matrix, increase the separation between colors
             * Increase saturation : increase contrast, brightness, and sharpness
             *
             * @param {number} amount - The saturation amount (0-1)
             * @param {boolean} [multiply] - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            saturate(amount: number, multiply?: boolean): void;
            /**
             * Desaturate image (remove color)
             *
             * Call the saturate function
             *
             */
            desaturate(): void;
            /**
             * Negative image (inverse of classic rgb matrix)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            negative(multiply: boolean): void;
            /**
             * Sepia image
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            sepia(multiply: boolean): void;
            /**
             * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            technicolor(multiply: boolean): void;
            /**
             * Polaroid filter
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            polaroid(multiply: boolean): void;
            /**
             * Filter who transforms : Red -> Blue and Blue -> Red
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            toBGR(multiply: boolean): void;
            /**
             * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            kodachrome(multiply: boolean): void;
            /**
             * Brown delicious browni filter (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            browni(multiply: boolean): void;
            /**
             * Vintage filter (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            vintage(multiply: boolean): void;
            /**
             * We don't know exactly what it does, kind of gradient map, but funny to play with!
             *
             * @param {number} desaturation - Tone values.
             * @param {number} toned - Tone values.
             * @param {number} lightColor - Tone values, example: `0xFFE580`
             * @param {number} darkColor - Tone values, example: `0xFFE580`
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            colorTone(desaturation: number, toned: number, lightColor: number, darkColor: number, multiply: boolean): void;
            /**
             * Night effect
             *
             * @param {number} intensity - The intensity of the night effect.
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            night(intensity: number, multiply: boolean): void;
            /**
             * Predator effect
             *
             * Erase the current matrix by setting a new indepent one
             *
             * @param {number} amount - how much the predator feels his future victim
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            predator(amount: number, multiply: boolean): void;
            /**
             * LSD effect
             *
             * Multiply the current matrix
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            lsd(multiply: boolean): void;
            /**
             * Erase the current matrix by setting the default one
             *
             */
            reset(): void;
            /**
             * The matrix of the color matrix filter
             *
             * @member {number[]}
             * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
             */
            matrix: number[];
            /**
             * The opacity value to use when mixing the original and resultant colors.
             *
             * When the value is 0, the original color is used without modification.
             * When the value is 1, the result color is used.
             * When in the range (0, 1) the color is interpolated between the original and result by this amount.
             *
             * @member {number}
             * @default 1
             */
            alpha: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Applies the filter
             *
             * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {vf.RenderTexture} input - The input render target.
             * @param {vf.RenderTexture} output - The target to output to.
             * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * @param {vf.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
         * @param {number} [scale] - The scale of the displacement
         */
        class DisplacementFilter extends vf.Filter {
            constructor(sprite: vf.Sprite, scale?: number);
            /**
             * scaleX, scaleY for displacements
             * @member {vf.Point} vf.filters.DisplacementFilter#scale
             */
            scale: vf.Point;
            /**
             * Applies the filter.
             *
             * @param {vf.systems.FilterSystem} filterManager - The manager.
             * @param {vf.RenderTexture} input - The input target.
             * @param {vf.RenderTexture} output - The output target.
             * @param {vf.CLEAR_MODES} clearMode - clearMode.
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES): void;
            /**
             * The texture used for the displacement map. Must be power of 2 sized texture.
             *
             * @member {vf.Texture}
             */
            map: vf.Texture;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        class FXAAFilter extends vf.Filter {
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Applies the filter
             *
             * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {vf.RenderTexture} input - The input render target.
             * @param {vf.RenderTexture} output - The target to output to.
             * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * @param {number} [noise=0.5] - The noise intensity, should be a normalized value in the range [0, 1].
         * @param {number} [seed] - A random seed for the noise generation. Default is `Math.random()`.
         */
        class NoiseFilter extends vf.Filter {
            constructor(noise?: number, seed?: number);
            /**
             * The amount of noise to apply, this value should be in the range (0, 1].
             *
             * @member {number}
             * @default 0.5
             */
            noise: number;
            /**
             * A seed value to apply to the random noise generation. `Math.random()` is a good value to use.
             *
             * @member {number}
             */
            seed: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} vf.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} vf.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} vf.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} vf.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} vf.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {vf.State} vf.Filter#state
             */
            state: vf.State;
            /**
             * Applies the filter
             *
             * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {vf.RenderTexture} input - The input render target.
             * @param {vf.RenderTexture} output - The target to output to.
             * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default vf.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {vf.Program} vf.Shader#program
             */
            program: vf.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
    }
    /**
     * This namespace contains an accessibility plugin for allowing interaction via the keyboard.
     *
     * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
     * See {@link vf.CanvasRenderer#plugins} or {@link vf.Renderer#plugins}.
     * @namespace vf.accessibility
     */
    namespace accessibility {
        /**
         * @param {vf.CanvasRenderer|vf.Renderer} renderer - A reference to the current renderer
         */
        class AccessibilityManager {
            constructor(renderer: vf.CanvasRenderer | vf.Renderer);
            /**
             * Setting this to true will visually show the divs.
             *
             * @type {boolean}
             */
            debug: boolean;
            /**
             * The renderer this accessibility manager works for.
             *
             * @member {vf.AbstractRenderer} vf.accessibility.AccessibilityManager#renderer
             */
            renderer: vf.AbstractRenderer;
            /**
             * A flag
             * @member {boolean}
             * @readonly
             */
            readonly isActive: boolean;
            /**
             * A flag
             * @member {boolean}
             * @readonly
             */
            readonly isMobileAccessibility: boolean;
            /**
             * private function that will visually add the information to the
             * accessability div
             *
             * @param {HTMLElement} div
             */
            updateDebugHTML(div: HTMLElement): void;
            /**
             * Adjust the hit area based on the bounds of a display object
             *
             * @param {vf.Rectangle} hitArea - Bounds of the child
             */
            capHitArea(hitArea: vf.Rectangle): void;
            /**
             * Destroys the accessibility manager
             *
             */
            destroy(): void;
        }
    }
    /**
     * @param {object} [options] - The optional renderer parameters.
     * @param {boolean} [options.autoStart=true] - Automatically starts the rendering after the construction.
     * **Note**: Setting this parameter to false does NOT stop the shared ticker even if you set
     *     options.sharedTicker to true in case that it is already started. Stop it by your own.
     * @param {number} [options.width=800] - The width of the renderers view.
     * @param {number} [options.height=600] - The height of the renderers view.
     * @param {HTMLCanvasElement} [options.view] - The canvas to use as a view, optional.
     * @param {boolean} [options.transparent=false] - If the render view is transparent.
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1.
     * @param {boolean} [options.antialias=false] - Sets antialias
     * @param {boolean} [options.preserveDrawingBuffer=false] - Enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the WebGL context.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2.
     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present, this
     *   option only is available when using **pixi.js-legacy** or **@pixi/canvas-renderer** modules, otherwise
     *   it is ignored.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
     *  for devices with dual graphics card. **(WebGL only)**.
     * @param {boolean} [options.sharedTicker=false] - `true` to use vf.Ticker.shared, `false` to create new ticker.
     *  If set to false, you cannot register a handler to occur before anything that runs on the shared ticker.
     *  The system ticker will always run before both the shared ticker and the app ticker.
     * @param {boolean} [options.sharedLoader=false] - `true` to use vf.Loader.shared, `false` to create new Loader.
     * @param {Window|HTMLElement} [options.resizeTo] - Element to automatically resize stage to.
     */
    class Application {
        constructor(options?: {
            autoStart?: boolean;
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
            resolution?: number;
            forceCanvas?: boolean;
            backgroundColor?: number;
            clearBeforeRender?: boolean;
            powerPreference?: string;
            sharedTicker?: boolean;
            sharedLoader?: boolean;
            resizeTo?: Window | HTMLElement;
        });
        /**
         * WebGL renderer if available, otherwise CanvasRenderer.
         * @member {vf.Renderer|vf.CanvasRenderer} vf.Application#renderer
         */
        renderer: vf.Renderer | vf.CanvasRenderer;
        /**
         * The root display container that's rendered.
         * @member {vf.Container} vf.Application#stage
         */
        stage: vf.Container;
        /**
         * Register a middleware plugin for the application
         * @static
         * @param {vf.Application.Plugin} plugin - Plugin being installed
         */
        static registerPlugin(plugin: vf.Application.Plugin): void;
        /**
         * Render the current stage.
         */
        render(): void;
        /**
         * Reference to the renderer's canvas element.
         * @member {HTMLCanvasElement}
         * @readonly
         */
        readonly view: HTMLCanvasElement;
        /**
         * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
         * @member {vf.Rectangle}
         * @readonly
         */
        readonly screen: vf.Rectangle;
        /**
         * Destroy and don't use after this.
         * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
         * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'stageOptions' will be passed on to those calls.
         * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
         *  to true. Should it destroy the texture of the child sprite
         * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
         *  to true. Should it destroy the base texture of the child sprite
         */
        destroy(removeView?: boolean, stageOptions?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The HTML element or window to automatically resize the
         * renderer's view element to match width and height.
         * @type {Window|HTMLElement}
         * @name resizeTo
         * @memberof vf.Application#
         */
        resizeTo: Window | HTMLElement;
        /**
         * Resize is throttled, so it's
         * safe to call this multiple times per frame and it'll
         * only be called once.
         * @method vf.Application#queueResize
         */
        queueResize(): void;
        /**
         * Execute an immediate resize on the renderer, this is not
         * throttled and can be expensive to call many times in a row.
         * Will resize only if `resizeTo` property is set.
         * @method vf.Application#resize
         */
        resize(): void;
        /**
         * Loader instance to help with asset loading.
         * @name vf.Application#loader
         * @type {vf.Loader}
         * @readonly
         */
        readonly loader: vf.Loader;
        /**
         * Convenience method for stopping the render.
         *
         * @method vf.Application#stop
         */
        stop(): void;
        /**
         * Convenience method for starting the render.
         *
         * @method vf.Application#start
         */
        start(): void;
        /**
         * Ticker for doing render updates.
         *
         * @type {vf.Ticker}
         * @name ticker
         * @memberof vf.Application#
         * @default vf.Ticker.shared
         */
        ticker: vf.Ticker;
    }
    module Application {
        /**
         * @memberof vf.Application
         * @typedef {object} Plugin
         * @property {function} init - Called when Application is constructed, scoped to Application instance.
         *  Passes in `options` as the only argument, which are Application constructor options.
         * @property {function} destroy - Called when destroying Application, scoped to Application instance
         */
        type Plugin = {
            init: (...params: any[]) => any;
            destroy: (...params: any[]) => any;
        };
    }
    /**
     * @param {vf.CanvasRenderer} renderer - A reference to the current renderer
     */
    class CanvasExtract {
        constructor(renderer: vf.CanvasRenderer);
        /**
         * Will return a HTML Image of the target
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
         * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
         * @return {HTMLImageElement} HTML Image of the target
         */
        image(target: vf.DisplayObject | vf.RenderTexture, format?: string, quality?: number): HTMLImageElement;
        /**
         * Will return a a base64 encoded string of this target. It works by calling
         *  `CanvasExtract.getCanvas` and then running toDataURL on that.
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
         * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
         * @return {string} A base64 encoded string of the texture.
         */
        base64(target: vf.DisplayObject | vf.RenderTexture, format?: string, quality?: number): string;
        /**
         * Creates a Canvas element, renders this target to it and then returns it.
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
         */
        canvas(target: vf.DisplayObject | vf.RenderTexture): HTMLCanvasElement;
        /**
         * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
         * order, with integer values between 0 and 255 (included).
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @return {Uint8ClampedArray} One-dimensional array containing the pixel data of the entire texture
         */
        pixels(target: vf.DisplayObject | vf.RenderTexture): Uint8ClampedArray;
        /**
         * Destroys the extract
         *
         */
        destroy(): void;
    }
    /**
     * @param {vf.CanvasRenderer} renderer - The current vf renderer.
     */
    class CanvasGraphicsRenderer {
        constructor(renderer: vf.CanvasRenderer);
        /**
         * Renders a Graphics object to a canvas.
         *
         * @param {vf.Graphics} graphics - the actual graphics object to render
         */
        render(graphics: vf.Graphics): void;
        /**
         * Updates the tint of a graphics object
         *
         * @protected
         * @param {vf.Graphics} graphics - the graphics that will have its tint updated
         */
        protected updateGraphicsTint(graphics: vf.Graphics): void;
        /**
         * destroy graphics object
         *
         */
        destroy(): void;
    }
    /**
     * @param {vf.CanvasRenderer} renderer - The renderer this downport works for
     */
    class CanvasMeshRenderer {
        constructor(renderer: vf.CanvasRenderer);
        /**
         * Renders the Mesh
         *
         * @param {vf.Mesh} mesh - the Mesh to render
         */
        render(mesh: vf.Mesh): void;
        /**
         * destroy the the renderer.
         *
         */
        destroy(): void;
    }
    /**
     * @param {vf.CanvasRenderer} renderer - A reference to the current renderer
     */
    class CanvasPrepare extends vf.BasePrepare {
        constructor(renderer: vf.CanvasRenderer);
        /**
         * Destroys the plugin, don't use after this.
         *
         */
        destroy(): void;
        /**
         * The limiter to be used to control how quickly items are prepared.
         * @type {vf.CountLimiter|vf.TimeLimiter}
         */
        limiter: vf.CountLimiter | vf.TimeLimiter;
        /**
         * Reference to the renderer.
         * @type {vf.AbstractRenderer}
         * @protected
         */
        protected renderer: vf.AbstractRenderer;
        /**
         * The only real difference between CanvasPrepare and Prepare is what they pass
         * to upload hooks. That different parameter is stored here.
         * @type {object}
         * @protected
         */
        protected uploadHookHelper: any;
        /**
         * Upload all the textures and graphics to the GPU.
         *
         * @param {Function|vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text} item -
         *        Either the container or display object to search for items to upload, the items to upload themselves,
         *        or the callback function, if items have been added using `prepare.add`.
         * @param {Function} [done] - Optional callback when all queued uploads have completed
         */
        upload(item: ((...params: any[]) => any) | vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text, done?: (...params: any[]) => any): void;
        /**
         * Adds hooks for finding items.
         *
         * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
         *          function must return `true` if it was able to add item to the queue.
         * @return {this} Instance of plugin for chaining.
         */
        registerFindHook(addHook: (...params: any[]) => any): this;
        /**
         * Adds hooks for uploading items.
         *
         * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
         *          function must return `true` if it was able to handle upload of item.
         * @return {this} Instance of plugin for chaining.
         */
        registerUploadHook(uploadHook: (...params: any[]) => any): this;
        /**
         * Manually add an item to the uploading queue.
         *
         * @param {vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text|*} item - Object to
         *        add to the queue
         * @return {this} Instance of plugin for chaining.
         */
        add(item: vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text | any): this;
    }
    /**
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the screen
     * @param {number} [options.height=600] - the height of the screen
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1
     * @param {boolean} [options.antialias=false] - sets antialias
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
     *  resolution of the renderer retina would be 2.
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the webgl context.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *      not before the new render pass.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     */
    class CanvasRenderer extends vf.AbstractRenderer {
        constructor(options?: {
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            resolution?: number;
            preserveDrawingBuffer?: boolean;
            clearBeforeRender?: boolean;
            backgroundColor?: number;
        });
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         *
         * @member {vf.CanvasExtract} extract
         * @memberof vf.CanvasRenderer#
         * @see vf.CanvasExtract
         */
        extract: vf.CanvasExtract;
        /**
         * The root canvas 2d context that everything is drawn with.
         *
         * @member {CanvasRenderingContext2D} vf.CanvasRenderer#rootContext
         */
        rootContext: CanvasRenderingContext2D;
        /**
         * The currently active canvas 2d context (could change with renderTextures)
         *
         * @member {CanvasRenderingContext2D} vf.CanvasRenderer#context
         */
        context: CanvasRenderingContext2D;
        /**
         * Boolean flag controlling canvas refresh.
         *
         * @member {boolean} vf.CanvasRenderer#refresh
         */
        refresh: boolean;
        /**
         * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
         *
         * @member {vf.CanvasMaskManager} vf.CanvasRenderer#maskManager
         */
        maskManager: vf.CanvasMaskManager;
        /**
         * The canvas property used to set the canvas smoothing property.
         *
         * @member {string} vf.CanvasRenderer#smoothProperty
         */
        smoothProperty: string;
        /**
         * Tracks the blend modes useful for this renderer.
         *
         * @member {object<number, string>} vf.CanvasRenderer#blendModes
         */
        blendModes: {
            [key: number]: string;
        };
        /**
         * Renders the object to this canvas view
         *
         * @param {vf.DisplayObject} displayObject - The object to be rendered
         * @param {vf.RenderTexture} [renderTexture] - A render texture to be rendered to.
         *  If unset, it will render to the root context.
         * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
         * @param {vf.Matrix} [transform] - A transformation to be applied
         * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
         */
        render(displayObject: vf.DisplayObject, renderTexture?: vf.RenderTexture, clear?: boolean, transform?: vf.Matrix, skipUpdateTransform?: boolean): void;
        /**
         * sets matrix of context
         * called only from render() methods
         * takes care about resolution
         * @param {vf.Matrix} transform world matrix of current element
         * @param {boolean} [roundPixels] whether to round (tx,ty) coords
         * @param {number} [localResolution] If specified, used instead of `renderer.resolution` for local scaling
         */
        setContextTransform(transform: vf.Matrix, roundPixels?: boolean, localResolution?: number): void;
        /**
         * Clear the canvas of renderer.
         *
         * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
         */
        clear(clearColor?: string): void;
        /**
         * Sets the blend mode of the renderer.
         *
         * @param {number} blendMode - See {@link vf.BLEND_MODES} for valid values.
         * @param {boolean} [readyForOuterBlend=false] - Some blendModes are dangerous, they affect outer space of sprite.
         * Pass `true` only if you are ready to use them.
         */
        setBlendMode(blendMode: number, readyForOuterBlend?: boolean): void;
        /**
         * Removes everything from the renderer and optionally removes the Canvas DOM element.
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         */
        destroy(removeView?: boolean): void;
        /**
         * Resizes the canvas view to the specified width and height.
         *
         * @extends vf.AbstractRenderer#resize
         *
         * @param {number} screenWidth - the new width of the screen
         * @param {number} screenHeight - the new height of the screen
         */
        resize(screenWidth: number, screenHeight: number): void;
        /**
         * Checks if blend mode has changed.
         */
        invalidateBlendMode(): void;
        /**
         * Collection of installed plugins. These are included by default in vf, but can be excluded
         * by creating a custom build. Consult the README for more information about creating custom
         * builds and excluding plugins.
         * @name vf.CanvasRenderer#plugins
         * @type {object}
         * @readonly
         * @property {vf.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
         * @property {vf.CanvasExtract} extract Extract image data from renderer.
         * @property {vf.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
         * @property {vf.CanvasPrepare} prepare Pre-render display objects.
         */
        readonly plugins: {
            accessibility: vf.accessibility.AccessibilityManager;
            extract: vf.CanvasExtract;
            interaction: vf.interaction.InteractionManager;
            prepare: vf.CanvasPrepare;
        };
        /**
         * Adds a plugin to the renderer.
         *
         * @method
         * @param {string} pluginName - The name of the plugin.
         * @param {Function} ctor - The constructor function or class for the plugin.
         */
        static registerPlugin(pluginName: string, ctor: (...params: any[]) => any): void;
        /**
         * The supplied constructor options.
         *
         * @member {Object} vf.AbstractRenderer#options
         * @readOnly
         */
        readonly options: any;
        /**
         * The type of the renderer.
         *
         * @member {number} vf.AbstractRenderer#type
         * @default vf.RENDERER_TYPE.UNKNOWN
         * @see vf.RENDERER_TYPE
         */
        type: number;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {vf.Rectangle} vf.AbstractRenderer#screen
         */
        screen: vf.Rectangle;
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement} vf.AbstractRenderer#view
         */
        view: HTMLCanvasElement;
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number} vf.AbstractRenderer#resolution
         * @default 1
         */
        resolution: number;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean} vf.AbstractRenderer#transparent
         */
        transparent: boolean;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean} vf.AbstractRenderer#autoDensity
         */
        autoDensity: boolean;
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean} vf.AbstractRenderer#preserveDrawingBuffer
         */
        preserveDrawingBuffer: boolean;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean} vf.AbstractRenderer#clearBeforeRender
         * @default
         */
        clearBeforeRender: boolean;
        /**
         * The background color as a number.
         *
         * @member {number} vf.AbstractRenderer#_backgroundColor
         * @protected
         */
        protected _backgroundColor: number;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]} vf.AbstractRenderer#_backgroundColorRgba
         * @protected
         */
        protected _backgroundColorRgba: number[];
        /**
         * The background color as a string.
         *
         * @member {string} vf.AbstractRenderer#_backgroundColorString
         * @protected
         */
        protected _backgroundColorString: string;
        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_tempDisplayObjectParent
         * @protected
         */
        protected _tempDisplayObjectParent: vf.DisplayObject;
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_lastObjectRendered
         * @protected
         */
        protected _lastObjectRendered: vf.DisplayObject;
        /**
         * Initialize the plugins.
         *
         * @protected
         * @param {object} staticMap - The dictionary of statically saved plugins.
         */
        protected initPlugins(staticMap: any): void;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: number;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        readonly height: number;
        /**
         * Useful function that returns a texture of the display object that can then be used to create sprites
         * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
         *
         * @param {vf.DisplayObject} displayObject - The displayObject the object will be generated from.
         * @param {vf.SCALE_MODES} scaleMode - The scale mode of the texture.
         * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
         * @param {vf.Rectangle} [region] - The region of the displayObject, that shall be rendered,
         *        if no region is specified, defaults to the local bounds of the displayObject.
         * @return {vf.RenderTexture} A texture of the graphics object.
         */
        generateTexture(displayObject: vf.DisplayObject, scaleMode: vf.SCALE_MODES, resolution: number, region?: vf.Rectangle): vf.RenderTexture;
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        backgroundColor: number;
    }
    /**
     * Utility methods for Sprite/Texture tinting.
     *
     * Tinting with the CanvasRenderer involves creating a new canvas to use as a texture,
     * so be aware of the performance implications.
     *
     * @namespace vf.canvasUtils
     * @memberof vf
     */
    namespace canvasUtils {
        /**
         * Basically this method just needs a sprite and a color and tints the sprite with the given color.
         *
         * @memberof vf.canvasUtils
         * @param {vf.Sprite} sprite - the sprite to tint
         * @param {number} color - the color to use to tint the sprite with
         * @return {HTMLCanvasElement} The tinted canvas
         */
        function getTintedCanvas(sprite: vf.Sprite, color: number): HTMLCanvasElement;
        /**
         * Basically this method just needs a sprite and a color and tints the sprite with the given color.
         *
         * @memberof vf.canvasUtils
         * @param {vf.Texture} texture - the sprite to tint
         * @param {number} color - the color to use to tint the sprite with
         * @return {HTMLCanvasElement} The tinted canvas
         */
        function getTintedPattern(texture: vf.Texture, color: number): HTMLCanvasElement;
        /**
         * Tint a texture using the 'multiply' operation.
         *
         * @memberof vf.canvasUtils
         * @param {vf.Texture} texture - the texture to tint
         * @param {number} color - the color to use to tint the sprite with
         * @param {HTMLCanvasElement} canvas - the current canvas
         */
        function tintWithMultiply(texture: vf.Texture, color: number, canvas: HTMLCanvasElement): void;
        /**
         * Tint a texture using the 'overlay' operation.
         *
         * @memberof vf.canvasUtils
         * @param {vf.Texture} texture - the texture to tint
         * @param {number} color - the color to use to tint the sprite with
         * @param {HTMLCanvasElement} canvas - the current canvas
         */
        function tintWithOverlay(texture: vf.Texture, color: number, canvas: HTMLCanvasElement): void;
        /**
         * Tint a texture pixel per pixel.
         *
         * @memberof vf.canvasUtils
         * @param {vf.Texture} texture - the texture to tint
         * @param {number} color - the color to use to tint the sprite with
         * @param {HTMLCanvasElement} canvas - the current canvas
         */
        function tintWithPerPixel(texture: vf.Texture, color: number, canvas: HTMLCanvasElement): void;
        /**
         * Rounds the specified color according to the canvasUtils.cacheStepsPerColorChannel.
         *
         * @memberof vf.canvasUtils
         * @param {number} color - the color to round, should be a hex color
         * @return {number} The rounded color.
         */
        function roundColor(color: number): number;
        /**
         * Number of steps which will be used as a cap when rounding colors.
         *
         * @memberof vf.canvasUtils
         * @type {number}
         */
        var cacheStepsPerColorChannel: number;
        /**
         * Tint cache boolean flag.
         *
         * @memberof vf.canvasUtils
         * @type {boolean}
         */
        var convertTintToImage: boolean;
        /**
         * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
         *
         * @memberof vf.canvasUtils
         * @type {boolean}
         */
        var canUseMultiply: boolean;
    }
    /**
     * @param {vf.CanvasRenderer} renderer - The canvas renderer.
     */
    class CanvasMaskManager {
        constructor(renderer: vf.CanvasRenderer);
        /**
         * This method adds it to the current stack of masks.
         *
         * @param {vf.MaskData | vf.Graphics} maskData - the maskData that will be pushed
         */
        pushMask(maskData: vf.MaskData | vf.Graphics): void;
        /**
         * Renders all vf.Graphics shapes in a subtree.
         *
         * @param {vf.Container} container - container to scan.
         * @param {vf.Graphics[]} out - where to put found shapes
         */
        recursiveFindShapes(container: vf.Container, out: vf.Graphics[]): void;
        /**
         * Renders a vf.Graphics shape.
         *
         * @param {vf.Graphics} graphics - The object to render.
         */
        renderGraphicsShape(graphics: vf.Graphics): void;
        /**
         * Restores the current drawing context to the state it was before the mask was applied.
         *
         * @param {vf.CanvasRenderer} renderer - The renderer context to use.
         */
        popMask(renderer: vf.CanvasRenderer): void;
        /**
         * Destroys this canvas mask manager.
         *
         */
        destroy(): void;
    }
    /**
     * Types that can be passed to drawImage
     * @typedef {HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap} ICanvasImageSource
     * @memberof vf
     */
    type ICanvasImageSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;
    /**
     * @param {vf.Renderer} renderer -The renderer sprite this batch works for.
     */
    class CanvasSpriteRenderer {
        constructor(renderer: vf.Renderer);
        /**
         * Renders the sprite object.
         *
         * @param {vf.Sprite} sprite - the sprite to render when using this spritebatch
         */
        render(sprite: vf.Sprite): void;
        /**
         * destroy the sprite object.
         *
         */
        destroy(): void;
    }
    /**
     * Different types of environments for WebGL.
     *
     * @static
     * @memberof vf
     * @name ENV
     * @enum {number}
     * @property {number} WEBGL_LEGACY - Used for older v1 WebGL devices. PixiJS will aim to ensure compatibility
     *  with older / less advanced devices. If you experience unexplained flickering prefer this environment.
     * @property {number} WEBGL - Version 1 of WebGL
     * @property {number} WEBGL2 - Version 2 of WebGL
     */
    enum ENV {
        WEBGL_LEGACY,
        WEBGL,
        WEBGL2
    }
    /**
     * Constant to identify the Renderer Type.
     *
     * @static
     * @memberof vf
     * @name RENDERER_TYPE
     * @enum {number}
     * @property {number} UNKNOWN - Unknown render type.
     * @property {number} WEBGL - WebGL render type.
     * @property {number} CANVAS - Canvas render type.
     */
    enum RENDERER_TYPE {
        UNKNOWN,
        WEBGL,
        CANVAS
    }
    /**
     * Bitwise OR of masks that indicate the buffers to be cleared.
     *
     * @static
     * @memberof vf
     * @name BUFFER_BITS
     * @enum {number}
     * @property {number} COLOR - Indicates the buffers currently enabled for color writing.
     * @property {number} DEPTH - Indicates the depth buffer.
     * @property {number} STENCIL - Indicates the stencil buffer.
     */
    enum BUFFER_BITS {
        COLOR,
        DEPTH,
        STENCIL
    }
    /**
     * Various blend modes supported by vf.
     *
     * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
     * Anything else will silently act like NORMAL.
     *
     * @memberof vf
     * @name BLEND_MODES
     * @enum {number}
     * @property {number} NORMAL
     * @property {number} ADD
     * @property {number} MULTIPLY
     * @property {number} SCREEN
     * @property {number} OVERLAY
     * @property {number} DARKEN
     * @property {number} LIGHTEN
     * @property {number} COLOR_DODGE
     * @property {number} COLOR_BURN
     * @property {number} HARD_LIGHT
     * @property {number} SOFT_LIGHT
     * @property {number} DIFFERENCE
     * @property {number} EXCLUSION
     * @property {number} HUE
     * @property {number} SATURATION
     * @property {number} COLOR
     * @property {number} LUMINOSITY
     * @property {number} NORMAL_NPM
     * @property {number} ADD_NPM
     * @property {number} SCREEN_NPM
     * @property {number} NONE
     * @property {number} SRC_IN
     * @property {number} SRC_OUT
     * @property {number} SRC_ATOP
     * @property {number} DST_OVER
     * @property {number} DST_IN
     * @property {number} DST_OUT
     * @property {number} DST_ATOP
     * @property {number} SUBTRACT
     * @property {number} SRC_OVER
     * @property {number} ERASE
     * @property {number} XOR
     */
    enum BLEND_MODES {
        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY,
        NORMAL_NPM,
        ADD_NPM,
        SCREEN_NPM,
        NONE,
        SRC_IN,
        SRC_OUT,
        SRC_ATOP,
        DST_OVER,
        DST_IN,
        DST_OUT,
        DST_ATOP,
        SUBTRACT,
        SRC_OVER,
        ERASE,
        XOR
    }
    /**
     * Various webgl draw modes. These can be used to specify which GL drawMode to use
     * under certain situations and renderers.
     *
     * @memberof vf
     * @static
     * @name DRAW_MODES
     * @enum {number}
     * @property {number} POINTS
     * @property {number} LINES
     * @property {number} LINE_LOOP
     * @property {number} LINE_STRIP
     * @property {number} TRIANGLES
     * @property {number} TRIANGLE_STRIP
     * @property {number} TRIANGLE_FAN
     */
    enum DRAW_MODES {
        POINTS,
        LINES,
        LINE_LOOP,
        LINE_STRIP,
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN
    }
    /**
     * Various GL texture/resources formats.
     *
     * @memberof vf
     * @static
     * @name FORMATS
     * @enum {number}
     * @property {number} RGBA=6408
     * @property {number} RGB=6407
     * @property {number} ALPHA=6406
     * @property {number} LUMINANCE=6409
     * @property {number} LUMINANCE_ALPHA=6410
     * @property {number} DEPTH_COMPONENT=6402
     * @property {number} DEPTH_STENCIL=34041
     */
    enum FORMATS {
        RGBA,
        RGB,
        ALPHA,
        LUMINANCE,
        LUMINANCE_ALPHA,
        DEPTH_COMPONENT,
        DEPTH_STENCIL
    }
    /**
     * Various GL target types.
     *
     * @memberof vf
     * @static
     * @name TARGETS
     * @enum {number}
     * @property {number} TEXTURE_2D=3553
     * @property {number} TEXTURE_CUBE_MAP=34067
     * @property {number} TEXTURE_2D_ARRAY=35866
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_X=34069
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_X=34070
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Y=34071
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Y=34072
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Z=34073
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Z=34074
     */
    enum TARGETS {
        TEXTURE_2D,
        TEXTURE_CUBE_MAP,
        TEXTURE_2D_ARRAY,
        TEXTURE_CUBE_MAP_POSITIVE_X,
        TEXTURE_CUBE_MAP_NEGATIVE_X,
        TEXTURE_CUBE_MAP_POSITIVE_Y,
        TEXTURE_CUBE_MAP_NEGATIVE_Y,
        TEXTURE_CUBE_MAP_POSITIVE_Z,
        TEXTURE_CUBE_MAP_NEGATIVE_Z
    }
    /**
     * Various GL data format types.
     *
     * @memberof vf
     * @static
     * @name TYPES
     * @enum {number}
     * @property {number} UNSIGNED_BYTE=5121
     * @property {number} UNSIGNED_SHORT=5123
     * @property {number} UNSIGNED_SHORT_5_6_5=33635
     * @property {number} UNSIGNED_SHORT_4_4_4_4=32819
     * @property {number} UNSIGNED_SHORT_5_5_5_1=32820
     * @property {number} FLOAT=5126
     * @property {number} HALF_FLOAT=36193
     */
    enum TYPES {
        UNSIGNED_BYTE,
        UNSIGNED_SHORT,
        UNSIGNED_SHORT_5_6_5,
        UNSIGNED_SHORT_4_4_4_4,
        UNSIGNED_SHORT_5_5_5_1,
        FLOAT,
        HALF_FLOAT
    }
    /**
     * The scale modes that are supported by pixi.
     *
     * The {@link vf.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     *
     * @memberof vf
     * @static
     * @name SCALE_MODES
     * @enum {number}
     * @property {number} LINEAR Smooth scaling
     * @property {number} NEAREST Pixelating scaling
     */
    enum SCALE_MODES {
        LINEAR,
        NEAREST
    }
    /**
     * The wrap modes that are supported by pixi.
     *
     * The {@link vf.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
     * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
     * If the texture is non power of two then clamp will be used regardless as WebGL can
     * only use REPEAT if the texture is po2.
     *
     * This property only affects WebGL.
     *
     * @name WRAP_MODES
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} CLAMP - The textures uvs are clamped
     * @property {number} REPEAT - The texture uvs tile and repeat
     * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
     */
    enum WRAP_MODES {
        CLAMP,
        REPEAT,
        MIRRORED_REPEAT
    }
    /**
     * Mipmap filtering modes that are supported by pixi.
     *
     * The {@link vf.settings.MIPMAP_TEXTURES} affects default texture filtering.
     * Mipmaps are generated for a baseTexture if its `mipmap` field is `ON`,
     * or its `POW2` and texture dimensions are powers of 2.
     * Due to platform restriction, `ON` option will work like `POW2` for webgl-1.
     *
     * This property only affects WebGL.
     *
     * @name MIPMAP_MODES
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} OFF - No mipmaps
     * @property {number} POW2 - Generate mipmaps if texture dimensions are pow2
     * @property {number} ON - Always generate mipmaps
     */
    enum MIPMAP_MODES {
        OFF,
        POW2,
        ON
    }
    /**
     * How to treat textures with premultiplied alpha
     *
     * @name ALPHA_MODES
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} NO_PREMULTIPLIED_ALPHA - Source is not premultiplied, leave it like that.
     *  Option for compressed and data textures that are created from typed arrays.
     * @property {number} PREMULTIPLY_ON_UPLOAD - Source is not premultiplied, premultiply on upload.
     *  Default option, used for all loaded images.
     * @property {number} PREMULTIPLIED_ALPHA - Source is already premultiplied
     *  Example: spine atlases with `_pma` suffix.
     * @property {number} NPM - Alias for NO_PREMULTIPLIED_ALPHA.
     * @property {number} UNPACK - Default option, alias for PREMULTIPLY_ON_UPLOAD.
     * @property {number} PMA - Alias for PREMULTIPLIED_ALPHA.
     */
    enum ALPHA_MODES {
        NO_PREMULTIPLIED_ALPHA,
        PREMULTIPLY_ON_UPLOAD,
        PREMULTIPLIED_ALPHA,
        NPM,
        UNPACK,
        PMA
    }
    /**
     * How to clear renderTextures in filter
     *
     * @name CLEAR_MODES
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} BLEND - Preserve the information in the texture, blend above
     * @property {number} CLEAR - Must use `gl.clear` operation
     * @property {number} BLIT - Clear or blit it, depends on device and level of paranoia
     * @property {number} NO - Alias for BLEND, same as `false` in earlier versions
     * @property {number} YES - Alias for CLEAR, same as `true` in earlier versions
     * @property {number} AUTO - Alias for BLIT
     */
    enum CLEAR_MODES {
        BLEND,
        CLEAR,
        BLIT,
        NO,
        YES,
        AUTO
    }
    /**
     * The gc modes that are supported by pixi.
     *
     * The {@link vf.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
     * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
     * used for a specified period of time they will be removed from the GPU. They will of course
     * be uploaded again when they are required. This is a silent behind the scenes process that
     * should ensure that the GPU does not  get filled up.
     *
     * Handy for mobile devices!
     * This property only affects WebGL.
     *
     * @name GC_MODES
     * @enum {number}
     * @static
     * @memberof vf
     * @property {number} AUTO - Garbage collection will happen periodically automatically
     * @property {number} MANUAL - Garbage collection will need to be called manually
     */
    enum GC_MODES {
        AUTO,
        MANUAL
    }
    /**
     * Constants that specify float precision in shaders.
     *
     * @name PRECISION
     * @memberof vf
     * @constant
     * @static
     * @enum {string}
     * @property {string} LOW='lowp'
     * @property {string} MEDIUM='mediump'
     * @property {string} HIGH='highp'
     */
    const enum PRECISION {
        LOW,
        MEDIUM,
        HIGH
    }
    /**
     * Constants for mask implementations.
     * We use `type` suffix because it leads to very different behaviours
     *
     * @name MASK_TYPES
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} NONE - Mask is ignored
     * @property {number} SCISSOR - Scissor mask, rectangle on screen, cheap
     * @property {number} STENCIL - Stencil mask, 1-bit, medium, works only if renderer supports stencil
     * @property {number} SPRITE - Mask that uses SpriteMaskFilter, uses temporary RenderTexture
     */
    enum MASK_TYPES {
        NONE,
        SCISSOR,
        STENCIL,
        SPRITE
    }
    /**
     * Constants for multi-sampling antialiasing.
     *
     * @see vf.Framebuffer#multisample
     *
     * @name MSAA_QUALITY
     * @memberof vf
     * @static
     * @enum {number}
     * @property {number} NONE - No multisampling for this renderTexture
     * @property {number} LOW - Try 2 samples
     * @property {number} MEDIUM - Try 4 samples
     * @property {number} HIGH - Try 8 samples
     */
    enum MSAA_QUALITY {
        NONE,
        LOW,
        MEDIUM,
        HIGH
    }
    /**
     * @param {string} system - The name of the system this renderer is for.
     * @param {object} [options] - The optional renderer parameters.
     * @param {number} [options.width=800] - The width of the screen.
     * @param {number} [options.height=600] - The height of the screen.
     * @param {HTMLCanvasElement} [options.view] - The canvas to use as a view, optional.
     * @param {boolean} [options.transparent=false] - If the render view is transparent.
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1.
     * @param {boolean} [options.antialias=false] - Sets antialias
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
     *  resolution of the renderer retina would be 2.
     * @param {boolean} [options.preserveDrawingBuffer=false] - Enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the WebGL context.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *      not before the new render pass.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     */
    class AbstractRenderer extends vf.utils.EventEmitter {
        constructor(system: string, options?: {
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            resolution?: number;
            preserveDrawingBuffer?: boolean;
            clearBeforeRender?: boolean;
            backgroundColor?: number;
        });
        /**
         * The supplied constructor options.
         *
         * @member {Object} vf.AbstractRenderer#options
         * @readOnly
         */
        readonly options: any;
        /**
         * The type of the renderer.
         *
         * @member {number} vf.AbstractRenderer#type
         * @default vf.RENDERER_TYPE.UNKNOWN
         * @see vf.RENDERER_TYPE
         */
        type: number;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {vf.Rectangle} vf.AbstractRenderer#screen
         */
        screen: vf.Rectangle;
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement} vf.AbstractRenderer#view
         */
        view: HTMLCanvasElement;
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number} vf.AbstractRenderer#resolution
         * @default 1
         */
        resolution: number;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean} vf.AbstractRenderer#transparent
         */
        transparent: boolean;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean} vf.AbstractRenderer#autoDensity
         */
        autoDensity: boolean;
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean} vf.AbstractRenderer#preserveDrawingBuffer
         */
        preserveDrawingBuffer: boolean;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean} vf.AbstractRenderer#clearBeforeRender
         * @default
         */
        clearBeforeRender: boolean;
        /**
         * The background color as a number.
         *
         * @member {number} vf.AbstractRenderer#_backgroundColor
         * @protected
         */
        protected _backgroundColor: number;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]} vf.AbstractRenderer#_backgroundColorRgba
         * @protected
         */
        protected _backgroundColorRgba: number[];
        /**
         * The background color as a string.
         *
         * @member {string} vf.AbstractRenderer#_backgroundColorString
         * @protected
         */
        protected _backgroundColorString: string;
        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_tempDisplayObjectParent
         * @protected
         */
        protected _tempDisplayObjectParent: vf.DisplayObject;
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_lastObjectRendered
         * @protected
         */
        protected _lastObjectRendered: vf.DisplayObject;
        /**
         * Collection of plugins.
         * @readonly
         * @member {object} vf.AbstractRenderer#plugins
         */
        readonly plugins: any;
        /**
         * Initialize the plugins.
         *
         * @protected
         * @param {object} staticMap - The dictionary of statically saved plugins.
         */
        protected initPlugins(staticMap: any): void;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: number;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        readonly height: number;
        /**
         * Resizes the screen and canvas to the specified width and height.
         * Canvas dimensions are multiplied by resolution.
         *
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */
        resize(screenWidth: number, screenHeight: number): void;
        /**
         * Useful function that returns a texture of the display object that can then be used to create sprites
         * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
         *
         * @param {vf.DisplayObject} displayObject - The displayObject the object will be generated from.
         * @param {vf.SCALE_MODES} scaleMode - The scale mode of the texture.
         * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
         * @param {vf.Rectangle} [region] - The region of the displayObject, that shall be rendered,
         *        if no region is specified, defaults to the local bounds of the displayObject.
         * @return {vf.RenderTexture} A texture of the graphics object.
         */
        generateTexture(displayObject: vf.DisplayObject, scaleMode: vf.SCALE_MODES, resolution: number, region?: vf.Rectangle): vf.RenderTexture;
        /**
         * Removes everything from the renderer and optionally removes the Canvas DOM element.
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         */
        destroy(removeView?: boolean): void;
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        backgroundColor: number;
    }
    /**
     * @param {object} [options] - The optional renderer parameters.
     * @param {number} [options.width=800] - The width of the screen.
     * @param {number} [options.height=600] - The height of the screen.
     * @param {HTMLCanvasElement} [options.view] - The canvas to use as a view, optional.
     * @param {boolean} [options.transparent=false] - If the render view is transparent.
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1.
     * @param {boolean} [options.antialias=false] - Sets antialias. If not available natively then FXAA
     *  antialiasing is used.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer.
     *  The resolution of the renderer retina would be 2.
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear
     *  the canvas or not before the new render pass. If you wish to set this to false, you *must* set
     *  preserveDrawingBuffer to `true`.
     * @param {boolean} [options.preserveDrawingBuffer=false] - Enables drawing buffer preservation,
     *  enable this if you need to call toDataUrl on the WebGL context.
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {string} [options.powerPreference] - Parameter passed to WebGL context, set to "high-performance"
     *  for devices with dual graphics card.
     * @param {object} [options.context] If WebGL context already exists, all parameters must be taken from it.
     */
    class Renderer extends vf.AbstractRenderer {
        constructor(options?: {
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            resolution?: number;
            clearBeforeRender?: boolean;
            preserveDrawingBuffer?: boolean;
            backgroundColor?: number;
            powerPreference?: string;
            context?: any;
        });
        /**
         * WebGL context, set by the contextSystem (this.context)
         *
         * @readonly
         * @member {WebGLRenderingContext} vf.Renderer#gl
         */
        readonly gl: WebGLRenderingContext;
        /**
         * Global uniforms
         * @member {vf.UniformGroup} vf.Renderer#globalUniforms
         */
        globalUniforms: vf.UniformGroup;
        /**
         * Mask system instance
         * @member {vf.systems.MaskSystem} mask
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly mask: vf.systems.MaskSystem;
        /**
         * Context system instance
         * @member {vf.systems.ContextSystem} context
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly context: vf.systems.ContextSystem;
        /**
         * State system instance
         * @member {vf.systems.StateSystem} state
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly state: vf.systems.StateSystem;
        /**
         * Shader system instance
         * @member {vf.systems.ShaderSystem} shader
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly shader: vf.systems.ShaderSystem;
        /**
         * Texture system instance
         * @member {vf.systems.TextureSystem} texture
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly texture: vf.systems.TextureSystem;
        /**
         * Geometry system instance
         * @member {vf.systems.GeometrySystem} geometry
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly geometry: vf.systems.GeometrySystem;
        /**
         * Framebuffer system instance
         * @member {vf.systems.FramebufferSystem} framebuffer
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly framebuffer: vf.systems.FramebufferSystem;
        /**
         * Scissor system instance
         * @member {vf.systems.ScissorSystem} scissor
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly scissor: vf.systems.ScissorSystem;
        /**
         * Stencil system instance
         * @member {vf.systems.StencilSystem} stencil
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly stencil: vf.systems.StencilSystem;
        /**
         * Projection system instance
         * @member {vf.systems.ProjectionSystem} projection
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly projection: vf.systems.ProjectionSystem;
        /**
         * Texture garbage collector system instance
         * @member {vf.systems.TextureGCSystem} textureGC
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly textureGC: vf.systems.TextureGCSystem;
        /**
         * Filter system instance
         * @member {vf.systems.FilterSystem} filter
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly filter: vf.systems.FilterSystem;
        /**
         * RenderTexture system instance
         * @member {vf.systems.RenderTextureSystem} renderTexture
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly renderTexture: vf.systems.RenderTextureSystem;
        /**
         * Batch system instance
         * @member {vf.systems.BatchSystem} batch
         * @memberof vf.Renderer#
         * @readonly
         */
        readonly batch: vf.systems.BatchSystem;
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @member {boolean} vf.Renderer#renderingToScreen
         * @readonly
         * @default true
         */
        readonly renderingToScreen: boolean;
        /**
         * Add a new system to the renderer.
         * @param {Function} ClassRef - Class reference
         * @param {string} [name] - Property name for system, if not specified
         *        will use a static `name` property on the class itself. This
         *        name will be assigned as s property on the Renderer so make
         *        sure it doesn't collide with properties on Renderer.
         * @return {vf.Renderer} Return instance of renderer
         */
        addSystem(ClassRef: (...params: any[]) => any, name?: string): vf.Renderer;
        /**
         * Renders the object to its WebGL view
         *
         * @param {vf.DisplayObject} displayObject - The object to be rendered.
         * @param {vf.RenderTexture} [renderTexture] - The render texture to render to.
         * @param {boolean} [clear=true] - Should the canvas be cleared before the new render.
         * @param {vf.Matrix} [transform] - A transform to apply to the render texture before rendering.
         * @param {boolean} [skipUpdateTransform=false] - Should we skip the update transform pass?
         */
        render(displayObject: vf.DisplayObject, renderTexture?: vf.RenderTexture, clear?: boolean, transform?: vf.Matrix, skipUpdateTransform?: boolean): void;
        /**
         * Resizes the WebGL view to the specified width and height.
         *
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */
        resize(screenWidth: number, screenHeight: number): void;
        /**
         * Resets the WebGL state so you can render things however you fancy!
         *
         * @return {vf.Renderer} Returns itself.
         */
        reset(): vf.Renderer;
        /**
         * Clear the frame buffer
         */
        clear(): void;
        /**
         * Removes everything from the renderer (event listeners, spritebatch, etc...)
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         *  See: https://github.com/pixijs/pixi.js/issues/2233
         */
        destroy(removeView?: boolean): void;
        /**
         * Adds a plugin to the renderer.
         *
         * @method
         * @param {string} pluginName - The name of the plugin.
         * @param {Function} ctor - The constructor function or class for the plugin.
         */
        static registerPlugin(pluginName: string, ctor: (...params: any[]) => any): void;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         *
         * @member {vf.Extract} extract
         * @memberof vf.Renderer#
         * @see vf.Extract
         */
        extract: vf.Extract;
        /**
         * The supplied constructor options.
         *
         * @member {Object} vf.AbstractRenderer#options
         * @readOnly
         */
        readonly options: any;
        /**
         * The type of the renderer.
         *
         * @member {number} vf.AbstractRenderer#type
         * @default vf.RENDERER_TYPE.UNKNOWN
         * @see vf.RENDERER_TYPE
         */
        type: number;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {vf.Rectangle} vf.AbstractRenderer#screen
         */
        screen: vf.Rectangle;
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement} vf.AbstractRenderer#view
         */
        view: HTMLCanvasElement;
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number} vf.AbstractRenderer#resolution
         * @default 1
         */
        resolution: number;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean} vf.AbstractRenderer#transparent
         */
        transparent: boolean;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean} vf.AbstractRenderer#autoDensity
         */
        autoDensity: boolean;
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean} vf.AbstractRenderer#preserveDrawingBuffer
         */
        preserveDrawingBuffer: boolean;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean} vf.AbstractRenderer#clearBeforeRender
         * @default
         */
        clearBeforeRender: boolean;
        /**
         * The background color as a number.
         *
         * @member {number} vf.AbstractRenderer#_backgroundColor
         * @protected
         */
        protected _backgroundColor: number;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]} vf.AbstractRenderer#_backgroundColorRgba
         * @protected
         */
        protected _backgroundColorRgba: number[];
        /**
         * The background color as a string.
         *
         * @member {string} vf.AbstractRenderer#_backgroundColorString
         * @protected
         */
        protected _backgroundColorString: string;
        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_tempDisplayObjectParent
         * @protected
         */
        protected _tempDisplayObjectParent: vf.DisplayObject;
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {vf.DisplayObject} vf.AbstractRenderer#_lastObjectRendered
         * @protected
         */
        protected _lastObjectRendered: vf.DisplayObject;
        /**
         * Collection of plugins.
         * @readonly
         * @member {object} vf.AbstractRenderer#plugins
         */
        readonly plugins: any;
        /**
         * Initialize the plugins.
         *
         * @protected
         * @param {object} staticMap - The dictionary of statically saved plugins.
         */
        protected initPlugins(staticMap: any): void;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: number;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        readonly height: number;
        /**
         * Useful function that returns a texture of the display object that can then be used to create sprites
         * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
         *
         * @param {vf.DisplayObject} displayObject - The displayObject the object will be generated from.
         * @param {vf.SCALE_MODES} scaleMode - The scale mode of the texture.
         * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
         * @param {vf.Rectangle} [region] - The region of the displayObject, that shall be rendered,
         *        if no region is specified, defaults to the local bounds of the displayObject.
         * @return {vf.RenderTexture} A texture of the graphics object.
         */
        generateTexture(displayObject: vf.DisplayObject, scaleMode: vf.SCALE_MODES, resolution: number, region?: vf.Rectangle): vf.RenderTexture;
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        backgroundColor: number;
    }
    /**
     * @param {vf.Renderer} renderer - The renderer this manager works for.
     */
    class System {
        constructor(renderer: vf.Renderer);
        /**
         * The renderer this manager works for.
         *
         * @member {vf.Renderer} vf.System#renderer
         */
        renderer: vf.Renderer;
        /**
         * Generic destroy methods to be overridden by the subclass
         */
        destroy(): void;
    }
    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If WebGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @memberof vf
     * @function autoDetectRenderer
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the renderers view
     * @param {number} [options.height=600] - the height of the renderers view
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1
     * @param {boolean} [options.antialias=false] - sets antialias
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the webgl context
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present, this
     *   option only is available when using **pixi.js-legacy** or **@pixi/canvas-renderer** modules, otherwise
     *   it is ignored.
     * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
     *  for devices with dual graphics card **webgl only**
     * @return {vf.Renderer|vf.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    function autoDetectRenderer(options?: {
        width?: number;
        height?: number;
        view?: HTMLCanvasElement;
        transparent?: boolean;
        autoDensity?: boolean;
        antialias?: boolean;
        preserveDrawingBuffer?: boolean;
        backgroundColor?: number;
        clearBeforeRender?: boolean;
        resolution?: number;
        forceCanvas?: boolean;
        powerPreference?: string;
    }): vf.Renderer | vf.CanvasRenderer;
    /**
     * This will hook onto the renderer's `contextChange`
     * and `prerender` signals.
     *
     * @param {vf.Renderer} renderer - The renderer this works for.
     */
    class AbstractBatchRenderer extends vf.ObjectRenderer {
        constructor(renderer: vf.Renderer);
        /**
         * This is used to generate a shader that can
         * color each vertex based on a `aTextureId`
         * attribute that points to an texture in `uSampler`.
         *
         * This enables the objects with different textures
         * to be drawn in the same draw call.
         *
         * You can customize your shader by creating your
         * custom shader generator.
         *
         * @member {vf.BatchShaderGenerator} vf.AbstractBatchRenderer#shaderGenerator
         * @protected
         */
        protected shaderGenerator: vf.BatchShaderGenerator;
        /**
         * The class that represents the geometry of objects
         * that are going to be batched with this.
         *
         * @member {object} vf.AbstractBatchRenderer#geometryClass
         * @default vf.BatchGeometry
         * @protected
         */
        protected geometryClass: any;
        /**
         * Size of data being buffered per vertex in the
         * attribute buffers (in floats). By default, the
         * batch-renderer plugin uses 6:
         *
         * | aVertexPosition | 2 |
         * |-----------------|---|
         * | aTextureCoords  | 2 |
         * | aColor          | 1 |
         * | aTextureId      | 1 |
         *
         * @member {number} vf.AbstractBatchRenderer#vertexSize
         * @readonly
         */
        readonly vertexSize: number;
        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {vf.State} vf.AbstractBatchRenderer#state
         * @readonly
         */
        readonly state: vf.State;
        /**
         * The number of bufferable objects before a flush
         * occurs automatically.
         *
         * @member {number} vf.AbstractBatchRenderer#size
         * @default settings.SPRITE_BATCH_SIZE * 4
         */
        size: number;
        /**
         * This shader is generated by `this.shaderGenerator`.
         *
         * It is generated specifically to handle the required
         * number of textures being batched together.
         *
         * @member {vf.Shader} vf.AbstractBatchRenderer#_shader
         * @protected
         */
        protected _shader: vf.Shader;
        /**
         * Maximum number of textures that can be uploaded to
         * the GPU under the current context. It is initialized
         * properly in `this.contextChange`.
         *
         * @member {number} vf.AbstractBatchRenderer#MAX_TEXTURES
         * @see vf.AbstractBatchRenderer#contextChange
         * @readonly
         */
        readonly MAX_TEXTURES: number;
        /**
         * Handles the `contextChange` signal.
         *
         * It calculates `this.MAX_TEXTURES` and allocating the
         * packed-geometry object pool.
         */
        contextChange(): void;
        /**
         * Makes sure that static and dynamic flush pooled objects have correct dimensions
         */
        initFlushBuffers(): void;
        /**
         * Handles the `prerender` signal.
         *
         * It ensures that flushes start from the first geometry
         * object again.
         */
        onPrerender(): void;
        /**
         * Buffers the "batchable" object. It need not be rendered
         * immediately.
         *
         * @param {vf.DisplayObject} element - the element to render when
         *    using this renderer
         */
        render(element: vf.DisplayObject): void;
        /**
         * Populating drawcalls for rendering
         *
         * @param {vf.BatchTextureArray} texArray
         * @param {number} start
         * @param {number} finish
         */
        buildDrawCalls(texArray: vf.BatchTextureArray, start: number, finish: number): void;
        /**
         * Bind textures for current rendering
         *
         * @param {vf.BatchTextureArray} texArray
         */
        bindAndClearTexArray(texArray: vf.BatchTextureArray): void;
        /**
         * Renders the content _now_ and empties the current batch.
         */
        flush(): void;
        /**
         * Starts a new sprite batch.
         */
        start(): void;
        /**
         * Stops and flushes the current batch.
         */
        stop(): void;
        /**
         * Destroys this `AbstractBatchRenderer`. It cannot be used again.
         */
        destroy(): void;
        /**
         * Takes the four batching parameters of `element`, interleaves
         * and pushes them into the batching attribute/index buffers given.
         *
         * It uses these properties: `vertexData` `uvs`, `textureId` and
         * `indicies`. It also uses the "tint" of the base-texture, if
         * present.
         *
         * @param {vf.Sprite} element - element being rendered
         * @param {vf.ViewableBuffer} attributeBuffer - attribute buffer.
         * @param {Uint16Array} indexBuffer - index buffer
         * @param {number} aIndex - number of floats already in the attribute buffer
         * @param {number} iIndex - number of indices already in `indexBuffer`
         */
        packInterleavedGeometry(element: vf.Sprite, attributeBuffer: vf.ViewableBuffer, indexBuffer: Uint16Array, aIndex: number, iIndex: number): void;
        /**
         * Pool of `BatchDrawCall` objects that `flush` used
         * to create "batches" of the objects being rendered.
         *
         * These are never re-allocated again.
         * Shared between all batch renderers because it can be only one "flush" working at the moment.
         *
         * @static
         * @member {vf.BatchDrawCall[]}
         */
        static _drawCallPool: vf.BatchDrawCall[];
        /**
         * Pool of `BatchDrawCall` objects that `flush` used
         * to create "batches" of the objects being rendered.
         *
         * These are never re-allocated again.
         * Shared between all batch renderers because it can be only one "flush" working at the moment.
         *
         * @static
         * @member {vf.BatchTextureArray[]}
         */
        static _textureArrayPool: vf.BatchTextureArray[];
        /**
         * The renderer this manager works for.
         *
         * @member {vf.Renderer} vf.ObjectRenderer#renderer
         */
        renderer: vf.Renderer;
    }
    class BatchDrawCall {
        /**
         * data for uniforms or custom webgl state
         * @member {object} vf.BatchDrawCall#data
         */
        data: any;
    }
    /**
     * @param {boolean} [_static=false] Optimization flag, where `false`
     *        is updated every frame, `true` doesn't change frame-to-frame.
     */
    class BatchGeometry {
        constructor(_static?: boolean);
        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {vf.Buffer} vf.BatchGeometry#_buffer
         * @protected
         */
        protected _buffer: vf.Buffer;
        /**
         * Index buffer data
         *
         * @member {vf.Buffer} vf.BatchGeometry#_indexBuffer
         * @protected
         */
        protected _indexBuffer: vf.Buffer;
    }
    /**
     * @class
     * @memberof vf
     * @hideconstructor
     */
    class BatchPluginFactory {
        /**
         * Create a new BatchRenderer plugin for Renderer. this convenience can provide an easy way
         * to extend BatchRenderer with all the necessary pieces.
         * @example
         * const fragment = `
         * varying vec2 vTextureCoord;
         * varying vec4 vColor;
         * varying float vTextureId;
         * uniform sampler2D uSamplers[%count%];
         *
         * void main(void){
         *     vec4 color;
         *     %forloop%
         *     gl_FragColor = vColor * vec4(color.a - color.rgb, color.a);
         * }
         * `;
         * const InvertBatchRenderer = vf.BatchPluginFactory.create({ fragment });
         * vf.Renderer.registerPlugin('invert', InvertBatchRenderer);
         * const sprite = new vf.Sprite();
         * sprite.pluginName = 'invert';
         *
         * @static
         * @param {object} [options]
         * @param {string} [options.vertex=vf.BatchPluginFactory.defaultVertexSrc] - Vertex shader source
         * @param {string} [options.fragment=vf.BatchPluginFactory.defaultFragmentTemplate] - Fragment shader template
         * @param {number} [options.vertexSize=6] - Vertex size
         * @param {object} [options.geometryClass=vf.BatchGeometry]
         * @return {*} New batch renderer plugin
         */
        static create(options?: {
            vertex?: string;
            fragment?: string;
            vertexSize?: number;
            geometryClass?: any;
        }): any;
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultFragmentTemplate: string;
    }
    /**
     * @param {string} vertexSrc - Vertex shader
     * @param {string} fragTemplate - Fragment shader template
     */
    class BatchShaderGenerator {
        constructor(vertexSrc: string, fragTemplate: string);
        /**
         * Reference to the vertex shader source.
         *
         * @member {string} vf.BatchShaderGenerator#vertexSrc
         */
        vertexSrc: string;
        /**
         * Reference to the fragement shader template. Must contain "%count%" and "%forloop%".
         *
         * @member {string} vf.BatchShaderGenerator#fragTemplate
         */
        fragTemplate: string;
    }
    class BatchTextureArray {
        /**
         * inside textures array
         * @member {vf.BaseTexture[]} vf.BatchTextureArray#elements
         */
        elements: vf.BaseTexture[];
        /**
         * Respective locations for textures
         * @member {number[]} vf.BatchTextureArray#ids
         */
        ids: number[];
        /**
         * number of filled elements
         * @member {number} vf.BatchTextureArray#count
         */
        count: number;
    }
    /**
     * @param {vf.Renderer} renderer - The renderer this manager works for.
     */
    class ObjectRenderer extends vf.System {
        constructor(renderer: vf.Renderer);
        /**
         * The renderer this manager works for.
         *
         * @member {vf.Renderer} vf.ObjectRenderer#renderer
         */
        renderer: vf.Renderer;
        /**
         * Stub method that should be used to empty the current
         * batch by rendering objects now.
         */
        flush(): void;
        /**
         * Generic destruction method that frees all resources. This
         * should be called by subclasses.
         */
        destroy(): void;
        /**
         * Stub method that initializes any state required before
         * rendering starts. It is different from the `prerender`
         * signal, which occurs every frame, in that it is called
         * whenever an object requests _this_ renderer specifically.
         */
        start(): void;
        /**
         * Stops the renderer. It should free up any state and
         * become dormant.
         */
        stop(): void;
    }
    /**
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     */
    class Filter extends vf.Shader {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any);
        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number} vf.Filter#padding
         */
        padding: number;
        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number} vf.Filter#resolution
         */
        resolution: number;
        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean} vf.Filter#enabled
         */
        enabled: boolean;
        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean} vf.Filter#autoFit
         */
        autoFit: boolean;
        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean} vf.Filter#legacy
         * @readonly
         */
        readonly legacy: boolean;
        /**
         * The WebGL state the filter requires to render
         * @member {vf.State} vf.Filter#state
         */
        state: vf.State;
        /**
         * Applies the filter
         *
         * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
         * @param {vf.RenderTexture} input - The input render target.
         * @param {vf.RenderTexture} output - The target to output to.
         * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
         * @param {object} [currentState] - It's current state of filter.
         *        There are some useful properties in the currentState :
         *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
         */
        apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES, currentState?: any): void;
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL
         */
        blendMode: number;
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultFragmentSrc: string;
        /**
         * Program that the shader uses
         *
         * @member {vf.Program} vf.Shader#program
         */
        program: vf.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * @param {vf.Sprite} sprite - the target sprite
     */
    class SpriteMaskFilter extends vf.Filter {
        constructor(sprite: vf.Sprite);
        /**
         * Sprite mask
         * @member {vf.Sprite} vf.SpriteMaskFilter#maskSprite
         */
        maskSprite: vf.Sprite;
        /**
         * Mask matrix
         * @member {vf.Matrix} vf.SpriteMaskFilter#maskMatrix
         */
        maskMatrix: vf.Matrix;
        /**
         * Applies the filter
         *
         * @param {vf.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
         * @param {vf.RenderTexture} input - The input render target.
         * @param {vf.RenderTexture} output - The target to output to.
         * @param {vf.CLEAR_MODES} clearMode - Should the output be cleared before rendering to it.
         */
        apply(filterManager: vf.systems.FilterSystem, input: vf.RenderTexture, output: vf.RenderTexture, clearMode: vf.CLEAR_MODES): void;
        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number} vf.Filter#padding
         */
        padding: number;
        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number} vf.Filter#resolution
         */
        resolution: number;
        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean} vf.Filter#enabled
         */
        enabled: boolean;
        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean} vf.Filter#autoFit
         */
        autoFit: boolean;
        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean} vf.Filter#legacy
         * @readonly
         */
        readonly legacy: boolean;
        /**
         * The WebGL state the filter requires to render
         * @member {vf.State} vf.Filter#state
         */
        state: vf.State;
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL
         */
        blendMode: number;
        /**
         * Program that the shader uses
         *
         * @member {vf.Program} vf.Shader#program
         */
        program: vf.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * Default vertex shader
     * @memberof vf
     * @member {string} defaultVertex
     */
    var defaultVertex: string;
    /**
     * Default filter vertex shader
     * @memberof vf
     * @member {string} defaultFilterVertex
     */
    var defaultFilterVertex: string;
    /**
     * @param {number} width - Width of the frame buffer
     * @param {number} height - Height of the frame buffer
     */
    class Framebuffer {
        constructor(width: number, height: number);
        /**
         * Width of framebuffer in pixels
         * @member {number} vf.Framebuffer#width
         */
        width: number;
        /**
         * Height of framebuffer in pixels
         * @member {number} vf.Framebuffer#height
         */
        height: number;
        /**
         * Desired number of samples for antialiasing. 0 means AA should not be used.
         *
         * Experimental WebGL2 feature, allows to use antialiasing in individual renderTextures.
         * Antialiasing is the same as for main buffer with renderer `antialias:true` options.
         * Seriously affects GPU memory consumption and GPU performance.
         *
         *```js
         * renderTexture.framebuffer.multisample = vf.MSAA_QUALITY.HIGH;
         * //...
         * renderer.render(renderTexture, myContainer);
         * renderer.framebuffer.blit(); // copies data from MSAA framebuffer to texture
         *  ```
         *
         * @member {vf.MSAA_QUALITY} vf.Framebuffer#multisample
         * @default vf.MSAA_QUALITY.NONE
         */
        multisample: vf.MSAA_QUALITY;
        /**
         * Reference to the colorTexture.
         *
         * @member {vf.BaseTexture[]}
         * @readonly
         */
        readonly colorTexture: vf.BaseTexture[];
        /**
         * Add texture to the colorTexture array
         *
         * @param {number} [index=0] - Index of the array to add the texture to
         * @param {vf.BaseTexture} [texture] - Texture to add to the array
         */
        addColorTexture(index?: number, texture?: vf.BaseTexture): void;
        /**
         * Add a depth texture to the frame buffer
         *
         * @param {vf.BaseTexture} [texture] - Texture to add
         */
        addDepthTexture(texture?: vf.BaseTexture): void;
        /**
         * Enable depth on the frame buffer
         */
        enableDepth(): void;
        /**
         * Enable stencil on the frame buffer
         */
        enableStencil(): void;
        /**
         * Resize the frame buffer
         *
         * @param {number} width - Width of the frame buffer to resize to
         * @param {number} height - Height of the frame buffer to resize to
         */
        resize(width: number, height: number): void;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
    }
    class GLFramebuffer {
        /**
         * The WebGL framebuffer
         * @member {WebGLFramebuffer} vf.GLFramebuffer#framebuffer
         */
        framebuffer: WebGLFramebuffer;
        /**
         * stencil+depth , usually costs 32bits per pixel
         * @member {WebGLRenderbuffer} vf.GLFramebuffer#stencil
         */
        stencil: WebGLRenderbuffer;
        /**
         * latest known version of framebuffer
         * @member {number} vf.GLFramebuffer#dirtyId
         * @protected
         */
        protected dirtyId: number;
        /**
         * latest known version of framebuffer format
         * @member {number} vf.GLFramebuffer#dirtyFormat
         * @protected
         */
        protected dirtyFormat: number;
        /**
         * latest known version of framebuffer size
         * @member {number} vf.GLFramebuffer#dirtySize
         * @protected
         */
        protected dirtySize: number;
        /**
         * Detected AA samples number
         * @member {vf.MSAA_QUALITY} vf.GLFramebuffer#multisample
         */
        multisample: vf.MSAA_QUALITY;
        /**
         * In case MSAA, we use this Renderbuffer instead of colorTextures[0] when we write info
         * @member {WebGLRenderbuffer} vf.GLFramebuffer#msaaBuffer
         */
        msaaBuffer: WebGLRenderbuffer;
        /**
         * In case we use MSAA, this is actual framebuffer that has colorTextures[0]
         * The contents of that framebuffer are read when we use that renderTexture in sprites
         * @member {vf.Framebuffer} vf.GLFramebuffer#blitFramebuffer
         */
        blitFramebuffer: vf.Framebuffer;
    }
    /**
     * @param {string} buffer  the id of the buffer that this attribute will look for
     * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2.
     * @param {Boolean} [normalized=false] should the data be normalized.
     * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {@link vf.TYPES} to see the ones available
     * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
     * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
     */
    class Attribute {
        constructor(buffer: string, size?: number, normalized?: boolean, type?: number, stride?: number, start?: number);
        /**
         * Destroys the Attribute.
         */
        destroy(): void;
        /**
         * Helper function that creates an Attribute based on the information provided
         *
         * @static
         * @param {string} buffer  the id of the buffer that this attribute will look for
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {@link vf.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         *
         * @returns {vf.Attribute} A new {@link vf.Attribute} based on the information provided
         */
        static from(buffer: string, size?: number, normalized?: boolean, start?: number, type?: number, stride?: number): vf.Attribute;
    }
    /**
     * @param {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} data the data to store in the buffer.
     * @param {boolean} [_static=true] `true` for static buffer
     * @param {boolean} [index=false] `true` for index buffer
     */
    class Buffer {
        constructor(data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView, _static?: boolean, index?: boolean);
        /**
         * The data in the buffer, as a typed array
         *
         * @member {ArrayBuffer| SharedArrayBuffer | ArrayBufferView} vf.Buffer#data
         */
        data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView;
        /**
         * flags this buffer as requiring an upload to the GPU
         * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} [data] the data to update in the buffer.
         */
        update(data?: ArrayBuffer | SharedArrayBuffer | ArrayBufferView): void;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the buffer
         */
        destroy(): void;
        /**
         * Helper function that creates a buffer based on an array or TypedArray
         *
         * @static
         * @param {ArrayBufferView | number[]} data the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
         * @return {vf.Buffer} A new Buffer based on the data provided.
         */
        static from(data: ArrayBufferView | number[]): vf.Buffer;
    }
    /**
     * @param {vf.Buffer[]} [buffers]  an array of buffers. optional.
     * @param {object} [attributes] of the geometry, optional structure of the attributes layout
     */
    class Geometry {
        constructor(buffers?: vf.Buffer[], attributes?: any);
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} vf.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} vf.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {vf.TYPES} to see the ones available
         * @param {Number} [stride] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start] How far into the array to start reading values (used for interleaving data)
         * @param {boolean} [instance=false] Instancing flag
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: vf.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean): vf.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {vf.Attribute} the attribute requested.
         */
        getAttribute(id: string): vf.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {vf.Buffer} the buffer requested.
         */
        getBuffer(id: string): vf.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: vf.Buffer | number[]): vf.Geometry;
        /**
         * returns the index buffer
         *
         * @return {vf.Buffer} the index buffer.
         */
        getIndex(): vf.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        interleave(): vf.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {vf.Geometry} a new clone of this geometry
         */
        clone(): vf.Geometry;
        /**
         * merges an array of geometries into a new single one
         * geometry attribute styles must match for this operation to work
         *
         * @param {vf.Geometry[]} geometries array of geometries to merge
         * @returns {vf.Geometry} shiny new geometry!
         */
        static merge(geometries: vf.Geometry[]): vf.Geometry;
    }
    /**
     * @param {number} size - The size of the buffer in bytes.
     */
    class ViewableBuffer {
        constructor(size: number);
        /**
         * Underlying `ArrayBuffer` that holds all the data
         * and is of capacity `size`.
         *
         * @member {ArrayBuffer} vf.ViewableBuffer#rawBinaryData
         */
        rawBinaryData: ArrayBuffer;
        /**
         * View on the raw binary data as a `Uint32Array`.
         *
         * @member {Uint32Array} vf.ViewableBuffer#uint32View
         */
        uint32View: Uint32Array;
        /**
         * View on the raw binary data as a `Float32Array`.
         *
         * @member {Float32Array} vf.ViewableBuffer#float32View
         */
        float32View: Float32Array;
        /**
         * View on the raw binary data as a `Int8Array`.
         *
         * @member {Int8Array}
         */
        int8View: Int8Array;
        /**
         * View on the raw binary data as a `Uint8Array`.
         *
         * @member {Uint8Array}
         */
        uint8View: Uint8Array;
        /**
         * View on the raw binary data as a `Int16Array`.
         *
         * @member {Int16Array}
         */
        int16View: Int16Array;
        /**
         * View on the raw binary data as a `Uint16Array`.
         *
         * @member {Uint16Array}
         */
        uint16View: Uint16Array;
        /**
         * View on the raw binary data as a `Int32Array`.
         *
         * @member {Int32Array}
         */
        int32View: Int32Array;
        /**
         * Returns the view of the given type.
         *
         * @param {string} type - One of `int8`, `uint8`, `int16`,
         *    `uint16`, `int32`, `uint32`, and `float32`.
         * @return {object} typed array of given type
         */
        view(type: string): any;
        /**
         * Destroys all buffer references. Do not use after calling
         * this.
         */
        destroy(): void;
    }
    /**
     * Create MaskData
     *
     * @param {vf.DisplayObject} [maskObject=null] object that describes the mask
     */
    class MaskData {
        constructor(maskObject?: vf.DisplayObject);
        /**
         * Mask type
         * @member {vf.MASK_TYPES} vf.MaskData#type
         */
        type: vf.MASK_TYPES;
        /**
         * Whether we know the mask type beforehand
         * @member {boolean} vf.MaskData#autoDetect
         * @default true
         */
        autoDetect: boolean;
        /**
         * Which element we use to mask
         * @member {vf.DisplayObject} vf.MaskData#maskObject
         */
        maskObject: vf.DisplayObject;
        /**
         * Whether it belongs to MaskSystem pool
         * @member {boolean} vf.MaskData#pooled
         */
        pooled: boolean;
        /**
         * Indicator of the type
         * @member {boolean} vf.MaskData#isMaskData
         */
        isMaskData: boolean;
        /**
         * Scissor operation above the mask in stack.
         * Null if _scissorCounter is zero, rectangle instance if positive.
         * @member {vf.Rectangle} vf.MaskData#_scissorRect
         */
        _scissorRect: vf.Rectangle;
        /**
         * resets the mask data after popMask()
         */
        reset(): void;
        /**
         * copies counters from maskData above, called from pushMask()
         * @param {vf.MaskData|null} maskAbove
         */
        copyCountersOrReset(maskAbove: vf.MaskData | null): void;
    }
    /**
     * @param {object} [options]
     * @param {number} [options.width=100] - The width of the base render texture.
     * @param {number} [options.height=100] - The height of the base render texture.
     * @param {vf.SCALE_MODES} [options.scaleMode] - See {@link vf.SCALE_MODES} for possible values.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated.
     */
    class BaseRenderTexture extends vf.BaseTexture {
        constructor(options?: {
            width?: number;
            height?: number;
            scaleMode?: vf.SCALE_MODES;
            resolution?: number;
        });
        /**
         * A reference to the canvas render target (we only need one as this can be shared across renderers)
         *
         * @protected
         * @member {vf.utils.CanvasRenderTarget} _canvasRenderTarget
         * @memberof vf.BaseRenderTexture#
         */
        protected _canvasRenderTarget: vf.utils.CanvasRenderTarget;
        /**
         * The data structure for the stencil masks.
         *
         * @member {vf.MaskData[]} vf.BaseRenderTexture#maskStack
         */
        maskStack: vf.MaskData[];
        /**
         * The data structure for the filters.
         *
         * @member {Object[]} vf.BaseRenderTexture#filterStack
         */
        filterStack: any[];
        /**
         * Resizes the BaseRenderTexture.
         *
         * @param {number} width - The width to resize to.
         * @param {number} height - The height to resize to.
         */
        resize(width: number, height: number): void;
        /**
         * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires vf.BaseTexture#dispose
         */
        dispose(): void;
        /**
         * Destroys this texture.
         *
         */
        destroy(): void;
        /**
         * Get the drawable source, such as HTMLCanvasElement or HTMLImageElement suitable
         * for rendering with CanvasRenderer. Provided by **@pixi/canvas-renderer** package.
         * @method getDrawableSource
         * @memberof vf.BaseTexture#
         * @return {vf.ICanvasImageSource} Source to render with CanvasRenderer
         */
        getDrawableSource(): vf.ICanvasImageSource;
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} vf.BaseTexture#width
         */
        readonly width: number;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} vf.BaseTexture#height
         */
        readonly height: number;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number} vf.BaseTexture#resolution
         * @default vf.settings.RESOLUTION
         */
        resolution: number;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {vf.MIPMAP_MODES} vf.BaseTexture#mipmap
         * @default vf.settings.MIPMAP_TEXTURES
         */
        mipmap: vf.MIPMAP_MODES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number} vf.BaseTexture#anisotropicLevel
         * @default vf.settings.ANISOTROPIC_LEVEL
         */
        anisotropicLevel: number;
        /**
         * How the texture wraps
         * @member {number} vf.BaseTexture#wrapMode
         */
        wrapMode: number;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {vf.SCALE_MODES} vf.BaseTexture#scaleMode
         * @default vf.settings.SCALE_MODE
         */
        scaleMode: vf.SCALE_MODES;
        /**
         * The pixel format of the texture
         *
         * @member {vf.FORMATS} vf.BaseTexture#format
         * @default vf.FORMATS.RGBA
         */
        format: vf.FORMATS;
        /**
         * The type of resource data
         *
         * @member {vf.TYPES} vf.BaseTexture#type
         * @default vf.TYPES.UNSIGNED_BYTE
         */
        type: vf.TYPES;
        /**
         * The target type
         *
         * @member {vf.TARGETS} vf.BaseTexture#target
         * @default vf.TARGETS.TEXTURE_2D
         */
        target: vf.TARGETS;
        /**
         * How to treat premultiplied alpha, see {@link vf.ALPHA_MODES}.
         *
         * @member {vf.ALPHA_MODES} vf.BaseTexture#alphaMode
         * @default vf.ALPHA_MODES.UNPACK
         */
        alphaMode: vf.ALPHA_MODES;
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {number} vf.BaseTexture#uid
         * @protected
         */
        protected uid: number;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number} vf.BaseTexture#touched
         * @protected
         */
        protected touched: number;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean} vf.BaseTexture#isPowerOfTwo
         * @default false
         */
        readonly isPowerOfTwo: boolean;
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number} vf.BaseTexture#dirtyId
         */
        readonly dirtyId: number;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number} vf.BaseTexture#dirtyStyleId
         */
        protected dirtyStyleId: number;
        /**
         * Currently default cache ID.
         *
         * @member {string} vf.BaseTexture#cacheId
         */
        cacheId: string;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean} vf.BaseTexture#valid
         */
        readonly valid: boolean;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>} vf.BaseTexture#textureCacheIds
         * @readonly
         */
        readonly textureCacheIds: string[];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean} vf.BaseTexture#destroyed
         * @readonly
         */
        readonly destroyed: boolean;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {vf.resources.Resource} vf.BaseTexture#resource
         * @readonly
         */
        readonly resource: vf.resources.Resource;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number} vf.BaseTexture#_batchEnabled
         */
        _batchEnabled: number;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number} vf.BaseTexture#_batchLocation
         */
        _batchLocation: number;
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realWidth: number;
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realHeight: number;
        /**
         * Changes style options of BaseTexture
         *
         * @param {vf.SCALE_MODES} [scaleMode] - Pixi scalemode
         * @param {vf.MIPMAP_MODES} [mipmap] - enable mipmaps
         * @returns {vf.BaseTexture} this
         */
        setStyle(scaleMode?: vf.SCALE_MODES, mipmap?: vf.MIPMAP_MODES): vf.BaseTexture;
        /**
         * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
         *
         * @param {number} width Visual width
         * @param {number} height Visual height
         * @param {number} [resolution] Optionally set resolution
         * @returns {vf.BaseTexture} this
         */
        setSize(width: number, height: number, resolution?: number): vf.BaseTexture;
        /**
         * Sets real size of baseTexture, preserves current resolution.
         *
         * @param {number} realWidth Full rendered width
         * @param {number} realHeight Full rendered height
         * @param {number} [resolution] Optionally set resolution
         * @returns {vf.BaseTexture} this
         */
        setRealSize(realWidth: number, realHeight: number, resolution?: number): vf.BaseTexture;
        /**
         * Changes resolution
         *
         * @param {number} resolution res
         * @returns {vf.BaseTexture} this
         */
        setResolution(resolution: number): vf.BaseTexture;
        /**
         * Sets the resource if it wasn't set. Throws error if resource already present
         *
         * @param {vf.resources.Resource} resource - that is managing this BaseTexture
         * @returns {vf.BaseTexture} this
         */
        setResource(resource: vf.resources.Resource): vf.BaseTexture;
        /**
         * Invalidates the object. Texture becomes valid if width and height are greater than zero.
         */
        update(): void;
        /**
         * Utility function for BaseTexture|Texture cast
         */
        castToBaseTexture(): void;
    }
    /**
     * @param {vf.BaseRenderTexture} baseRenderTexture - The base texture object that this texture uses
     * @param {vf.Rectangle} [frame] - The rectangle frame of the texture to show
     */
    class RenderTexture extends vf.Texture {
        constructor(baseRenderTexture: vf.BaseRenderTexture, frame?: vf.Rectangle);
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean} vf.RenderTexture#valid
         */
        valid: boolean;
        /**
         * Stores `sourceFrame` when this texture is inside current filter stack.
         * You can read it inside filters.
         *
         * @readonly
         * @member {vf.Rectangle} vf.RenderTexture#filterFrame
         */
        readonly filterFrame: vf.Rectangle;
        /**
         * The key for pooled texture of FilterSystem
         * @protected
         * @member {string} vf.RenderTexture#filterPoolKey
         */
        protected filterPoolKey: string;
        /**
         * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
         * @member {vf.Framebuffer}
         * @readonly
         */
        readonly framebuffer: vf.Framebuffer;
        /**
         * Resizes the RenderTexture.
         *
         * @param {number} width - The width to resize to.
         * @param {number} height - The height to resize to.
         * @param {boolean} [resizeBaseTexture=true] - Should the baseTexture.width and height values be resized as well?
         */
        resize(width: number, height: number, resizeBaseTexture?: boolean): void;
        /**
         * Changes the resolution of baseTexture, but does not change framebuffer size.
         *
         * @param {number} resolution - The new resolution to apply to RenderTexture
         */
        setResolution(resolution: number): void;
        /**
         * A short hand way of creating a render texture.
         *
         * @param {object} [options] - Options
         * @param {number} [options.width=100] - The width of the render texture
         * @param {number} [options.height=100] - The height of the render texture
         * @param {number} [options.scaleMode=vf.settings.SCALE_MODE] - See {@link vf.SCALE_MODES} for possible values
         * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated
         * @return {vf.RenderTexture} The new render texture
         */
        static create(options?: {
            width?: number;
            height?: number;
            scaleMode?: number;
            resolution?: number;
        }): vf.RenderTexture;
        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean} vf.Texture#noFrame
         */
        noFrame: boolean;
        /**
         * The base texture that this texture uses.
         *
         * @member {vf.BaseTexture} vf.Texture#baseTexture
         */
        baseTexture: vf.BaseTexture;
        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {vf.Rectangle} vf.Texture#_frame
         */
        _frame: vf.Rectangle;
        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {vf.Rectangle} vf.Texture#trim
         */
        trim: vf.Rectangle;
        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {vf.TextureUvs} vf.Texture#_uvs
         * @protected
         */
        protected _uvs: vf.TextureUvs;
        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {vf.TextureMatrix} vf.Texture#uvMatrix
         */
        uvMatrix: vf.TextureMatrix;
        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {vf.Rectangle} vf.Texture#orig
         */
        orig: vf.Rectangle;
        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {vf.Point} vf.Texture#defaultAnchor
         * @default {0,0}
         */
        defaultAnchor: vf.Point;
        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number} vf.Texture#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]} vf.Texture#textureCacheIds
         */
        textureCacheIds: string[];
        /**
         * Updates this texture on the gpu.
         *
         * Calls the TextureResource update.
         *
         * If you adjusted `frame` manually, please call `updateUvs()` instead.
         *
         */
        update(): void;
        /**
         * Called when the base texture is updated
         *
         * @protected
         * @param {vf.BaseTexture} baseTexture - The base texture.
         */
        protected onBaseTextureUpdated(baseTexture: vf.BaseTexture): void;
        /**
         * Destroys this texture
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
        /**
         * Creates a new texture object that acts the same as this one.
         *
         * @return {vf.Texture} The new texture
         */
        clone(): vf.Texture;
        /**
         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
         * Call it after changing the frame
         */
        updateUvs(): void;
        /**
         * Returns resolution of baseTexture
         *
         * @member {number}
         * @readonly
         */
        readonly resolution: number;
        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {vf.Rectangle}
         */
        frame: vf.Rectangle;
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link vf.groupD8} for explanation
         *
         * @member {number}
         */
        rotate: number;
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
        height: number;
        /**
         * Utility function for BaseTexture|Texture cast
         */
        castToBaseTexture(): void;
    }
    /**
     * @param {object} [textureOptions] - options that will be passed to BaseRenderTexture constructor
     * @param {vf.SCALE_MODES} [textureOptions.scaleMode] - See {@link vf.SCALE_MODES} for possible values.
     */
    class RenderTexturePool {
        constructor(textureOptions?: {
            scaleMode?: vf.SCALE_MODES;
        });
        /**
         * Allow renderTextures of the same size as screen, not just pow2
         *
         * Automatically sets to true after `setScreenSize`
         *
         * @member {boolean} vf.RenderTexturePool#enableFullScreen
         * @default false
         */
        enableFullScreen: boolean;
        /**
         * creates of texture with params that were specified in pool constructor
         *
         * @param {number} realWidth width of texture in pixels
         * @param {number} realHeight height of texture in pixels
         * @returns {RenderTexture}
         */
        createTexture(realWidth: number, realHeight: number): RenderTexture;
        /**
         * Gets a Power-of-Two render texture or fullScreen texture
         *
         * @protected
         * @param {number} minWidth - The minimum width of the render texture in real pixels.
         * @param {number} minHeight - The minimum height of the render texture in real pixels.
         * @param {number} [resolution=1] - The resolution of the render texture.
         * @return {vf.RenderTexture} The new render texture.
         */
        protected getOptimalTexture(minWidth: number, minHeight: number, resolution?: number): vf.RenderTexture;
        /**
         * Gets extra texture of the same size as input renderTexture
         *
         * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
         *
         * @param {vf.RenderTexture} input renderTexture from which size and resolution will be copied
         * @param {number} [resolution] override resolution of the renderTexture
         *  It overrides, it does not multiply
         * @returns {vf.RenderTexture}
         */
        getFilterTexture(input: vf.RenderTexture, resolution?: number): vf.RenderTexture;
        /**
         * Place a render texture back into the pool.
         * @param {vf.RenderTexture} renderTexture - The renderTexture to free
         */
        returnTexture(renderTexture: vf.RenderTexture): void;
        /**
         * Alias for returnTexture, to be compliant with FilterSystem interface
         * @param {vf.RenderTexture} renderTexture - The renderTexture to free
         */
        returnFilterTexture(renderTexture: vf.RenderTexture): void;
        /**
         * Clears the pool
         *
         * @param {boolean} [destroyTextures=true] destroy all stored textures
         */
        clear(destroyTextures?: boolean): void;
        /**
         * If screen size was changed, drops all screen-sized textures,
         * sets new screen size, sets `enableFullScreen` to true
         *
         * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
         *
         * @param {vf.ISize} size - Initial size of screen
         */
        setScreenSize(size: vf.ISize): void;
        /**
         * Key that is used to store fullscreen renderTextures in a pool
         *
         * @static
         * @const {string}
         */
        static readonly SCREEN_KEY: string;
    }
    /**
     * Makes a new Pixi program
     *
     * @param program {WebGLProgram} webgl program
     * @param uniformData {Object} uniforms
     */
    class GLProgram {
        constructor(program: WebGLProgram, uniformData: any);
        /**
         * Destroys this program
         */
        destroy(): void;
    }
    /**
     * @param {string} [vertexSrc] - The source of the vertex shader.
     * @param {string} [fragmentSrc] - The source of the fragment shader.
     * @param {string} [name] - Name for shader
     */
    class Program {
        constructor(vertexSrc?: string, fragmentSrc?: string, name?: string);
        /**
         * The vertex shader.
         *
         * @member {string} vf.Program#vertexSrc
         */
        vertexSrc: string;
        /**
         * The fragment shader.
         *
         * @member {string} vf.Program#fragmentSrc
         */
        fragmentSrc: string;
        /**
         * Extracts the data for a buy creating a small test program
         * or reading the src directly.
         * @protected
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         */
        protected extractData(vertexSrc?: string, fragmentSrc?: string): void;
        /**
         * The default vertex shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        static defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        static defaultFragmentSrc: string;
        /**
         * A short hand function to create a program based of a vertex and fragment shader
         * this method will also check to see if there is a cached program.
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         * @param {string} [name=pixi-shader] - Name for shader
         *
         * @returns {vf.Program} an shiny new Pixi shader!
         */
        static from(vertexSrc?: string, fragmentSrc?: string, name?: string): vf.Program;
    }
    /**
     * @param {vf.Program} [program] - The program the shader will use.
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     */
    class Shader {
        constructor(program?: vf.Program, uniforms?: any);
        /**
         * Program that the shader uses
         *
         * @member {vf.Program} vf.Shader#program
         */
        program: vf.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
        /**
         * A short hand function to create a shader based of a vertex and fragment shader
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
         *
         * @returns {vf.Shader} an shiny new Pixi shader!
         */
        static from(vertexSrc?: string, fragmentSrc?: string, uniforms?: any): vf.Shader;
    }
    /**
     * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
     * @param {boolean} [_static] - Uniforms wont be changed after creation
     */
    class UniformGroup {
        constructor(uniforms?: any, _static?: boolean);
        /**
         * uniform values
         * @member {object} vf.UniformGroup#uniforms
         * @readonly
         */
        readonly uniforms: any;
        /**
         * Its a group and not a single uniforms
         * @member {boolean} vf.UniformGroup#group
         * @readonly
         * @default true
         */
        readonly group: boolean;
        /**
         * dirty version
         * @protected
         * @member {number} vf.UniformGroup#dirtyId
         */
        protected dirtyId: number;
        /**
         * unique id
         * @protected
         * @member {number} vf.UniformGroup#id
         */
        protected id: number;
        /**
         * Uniforms wont be changed after creation
         * @member {boolean} vf.UniformGroup#static
         */
        static: boolean;
    }
    class State {
        /**
         * Activates blending of the computed fragment color values
         *
         * @member {boolean}
         */
        blend: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         *
         * @member {boolean}
         * @default false
         */
        offsets: boolean;
        /**
         * Activates culling of polygons.
         *
         * @member {boolean}
         * @default false
         */
        culling: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         *
         * @member {boolean}
         * @default false
         */
        depthTest: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @member {boolean}
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         *
         * @member {number}
         * @default 0
         */
        polygonOffset: number;
    }
    /**
     * Systems are individual components to the Renderer pipeline.
     * @namespace vf.systems
     */
    namespace systems {
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class BatchSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * An empty renderer.
             *
             * @member {vf.ObjectRenderer} vf.systems.BatchSystem#emptyRenderer
             */
            emptyRenderer: vf.ObjectRenderer;
            /**
             * The currently active ObjectRenderer.
             *
             * @member {vf.ObjectRenderer} vf.systems.BatchSystem#currentRenderer
             */
            currentRenderer: vf.ObjectRenderer;
            /**
             * Changes the current renderer to the one given in parameter
             *
             * @param {vf.ObjectRenderer} objectRenderer - The object renderer to use.
             */
            setObjectRenderer(objectRenderer: vf.ObjectRenderer): void;
            /**
             * This should be called if you wish to do some custom rendering
             * It will basically render anything that may be batched up such as sprites
             */
            flush(): void;
            /**
             * Reset the system to an empty renderer
             */
            reset(): void;
            /**
             * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
             * sets actual _batchLocation for them
             *
             * @param {vf.BaseTexture[]} arr copy destination
             * @param {number} maxTextures number of copied elements
             */
            copyBoundTextures(arr: vf.BaseTexture[], maxTextures: number): void;
            /**
             * Assigns batch locations to textures in array based on boundTextures state.
             * All textures in texArray should have `_batchEnabled = _batchId`,
             * and their count should be less than `maxTextures`.
             *
             * @param {vf.BatchTextureArray} texArray textures to bound
             * @param {vf.BaseTexture[]} boundTextures current state of bound textures
             * @param {number} batchId marker for _batchEnabled param of textures in texArray
             * @param {number} maxTextures number of texture locations to manipulate
             */
            boundArray(texArray: vf.BatchTextureArray, boundTextures: vf.BaseTexture[], batchId: number, maxTextures: number): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class ContextSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Either 1 or 2 to reflect the WebGL version being used
             * @member {number} vf.systems.ContextSystem#webGLVersion
             * @readonly
             */
            readonly webGLVersion: number;
            /**
             * Extensions being used
             * @member {object} vf.systems.ContextSystem#extensions
             * @readonly
             * @property {WEBGL_draw_buffers} drawBuffers - WebGL v1 extension
             * @property {WEBGL_depth_texture} depthTexture - WebGL v1 extension
             * @property {OES_texture_float} floatTexture - WebGL v1 extension
             * @property {WEBGL_lose_context} loseContext - WebGL v1 extension
             * @property {OES_vertex_array_object} vertexArrayObject - WebGL v1 extension
             * @property {EXT_texture_filter_anisotropic} anisotropicFiltering - WebGL v1 and v2 extension
             */
            readonly extensions: {
                drawBuffers: WEBGL_draw_buffers;
                depthTexture: WEBGL_depth_texture;
                floatTexture: OES_texture_float;
                loseContext: WEBGL_lose_context;
                vertexArrayObject: OES_vertex_array_object;
                anisotropicFiltering: EXT_texture_filter_anisotropic;
            };
            /**
             * `true` if the context is lost
             * @member {boolean}
             * @readonly
             */
            readonly isLost: boolean;
            /**
             * Handle the context change event
             * @param {WebGLRenderingContext} gl new webgl context
             */
            contextChange(gl: WebGLRenderingContext): void;
            /**
             * Initialize the context
             *
             * @protected
             * @param {WebGLRenderingContext} gl - WebGL context
             */
            protected initFromContext(gl: WebGLRenderingContext): void;
            /**
             * Initialize from context options
             *
             * @protected
             * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
             * @param {object} options - context attributes
             */
            protected initFromOptions(options: any): void;
            /**
             * Helper class to create a WebGL Context
             *
             * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
             * @param options {object} An options object that gets passed in to the canvas element containing the context attributes
             * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
             * @return {WebGLRenderingContext} the WebGL context
             */
            createContext(canvas: HTMLCanvasElement, options: any): WebGLRenderingContext;
            /**
             * Auto-populate the extensions
             *
             * @protected
             */
            protected getExtensions(): void;
            /**
             * Handles a lost webgl context
             *
             * @protected
             * @param {WebGLContextEvent} event - The context lost event.
             */
            protected handleContextLost(event: WebGLContextEvent): void;
            /**
             * Handles a restored webgl context
             *
             * @protected
             */
            protected handleContextRestored(): void;
            /**
             * Handle the post-render runner event
             *
             * @protected
             */
            protected postrender(): void;
            /**
             * Validate context
             *
             * @protected
             * @param {WebGLRenderingContext} gl - Render context
             */
            protected validateContext(gl: WebGLRenderingContext): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class FilterSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * List of filters for the FilterSystem
             * @member {Object[]} vf.systems.FilterSystem#defaultFilterStack
             * @readonly
             */
            readonly defaultFilterStack: any[];
            /**
             * stores a bunch of PO2 textures used for filtering
             * @member {Object} vf.systems.FilterSystem#texturePool
             */
            texturePool: any;
            /**
             * a pool for storing filter states, save us creating new ones each tick
             * @member {Object[]} vf.systems.FilterSystem#statePool
             */
            statePool: any[];
            /**
             * A very simple geometry used when drawing a filter effect to the screen
             * @member {vf.Quad} vf.systems.FilterSystem#quad
             */
            quad: vf.Quad;
            /**
             * Quad UVs
             * @member {vf.QuadUv} vf.systems.FilterSystem#quadUv
             */
            quadUv: vf.QuadUv;
            /**
             * Temporary rect for maths
             * @type {vf.Rectangle}
             */
            tempRect: vf.Rectangle;
            /**
             * Active state
             * @member {object} vf.systems.FilterSystem#activeState
             */
            activeState: any;
            /**
             * This uniform group is attached to filter uniforms when used
             * @member {vf.UniformGroup} vf.systems.FilterSystem#globalUniforms
             * @property {vf.Rectangle} outputFrame
             * @property {Float32Array} inputSize
             * @property {Float32Array} inputPixel
             * @property {Float32Array} inputClamp
             * @property {Number} resolution
             * @property {Float32Array} filterArea
             * @property {Fload32Array} filterClamp
             */
            globalUniforms: vf.UniformGroup;
            /**
             * Whether to clear output renderTexture in AUTO/BLIT mode. See {@link vf.CLEAR_MODES}
             * @member {boolean} vf.systems.FilterSystem#forceClear
             */
            forceClear: boolean;
            /**
             * Adds a new filter to the System.
             *
             * @param {vf.DisplayObject} target - The target of the filter to render.
             * @param {vf.Filter[]} filters - The filters to apply.
             */
            push(target: vf.DisplayObject, filters: vf.Filter[]): void;
            /**
             * Pops off the filter and applies it.
             *
             */
            pop(): void;
            /**
             * Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.
             * @param {vf.RenderTexture} filterTexture renderTexture to bind, should belong to filter pool or filter stack
             * @param {vf.CLEAR_MODES} [clearMode] clearMode, by default its CLEAR/YES. See {@link vf.CLEAR_MODES}
             */
            bindAndClear(filterTexture: vf.RenderTexture, clearMode?: vf.CLEAR_MODES): void;
            /**
             * Draws a filter.
             *
             * @param {vf.Filter} filter - The filter to draw.
             * @param {vf.RenderTexture} input - The input render target.
             * @param {vf.RenderTexture} output - The target to output to.
             * @param {vf.CLEAR_MODES} [clearMode] - Should the output be cleared before rendering to it
             */
            applyFilter(filter: vf.Filter, input: vf.RenderTexture, output: vf.RenderTexture, clearMode?: vf.CLEAR_MODES): void;
            /**
             * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
             *
             * Use `outputMatrix * vTextureCoord` in the shader.
             *
             * @param {vf.Matrix} outputMatrix - The matrix to output to.
             * @param {vf.Sprite} sprite - The sprite to map to.
             * @return {vf.Matrix} The mapped matrix.
             */
            calculateSpriteMatrix(outputMatrix: vf.Matrix, sprite: vf.Sprite): vf.Matrix;
            /**
             * Destroys this Filter System.
             */
            destroy(): void;
            /**
             * Gets a Power-of-Two render texture or fullScreen texture
             *
             * @protected
             * @param {number} minWidth - The minimum width of the render texture in real pixels.
             * @param {number} minHeight - The minimum height of the render texture in real pixels.
             * @param {number} [resolution=1] - The resolution of the render texture.
             * @return {vf.RenderTexture} The new render texture.
             */
            protected getOptimalFilterTexture(minWidth: number, minHeight: number, resolution?: number): vf.RenderTexture;
            /**
             * Gets extra render texture to use inside current filter
             * To be compliant with older filters, you can use params in any order
             *
             * @param {vf.RenderTexture} [input] renderTexture from which size and resolution will be copied
             * @param {number} [resolution] override resolution of the renderTexture
             * @returns {vf.RenderTexture}
             */
            getFilterTexture(input?: vf.RenderTexture, resolution?: number): vf.RenderTexture;
            /**
             * Frees a render texture back into the pool.
             *
             * @param {vf.RenderTexture} renderTexture - The renderTarget to free
             */
            returnFilterTexture(renderTexture: vf.RenderTexture): void;
            /**
             * Empties the texture pool.
             */
            emptyPool(): void;
            /**
             * calls `texturePool.resize()`, affects fullScreen renderTextures
             */
            resize(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class FramebufferSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * A list of managed framebuffers
             * @member {vf.Framebuffer[]} vf.systems.FramebufferSystem#managedFramebuffers
             * @readonly
             */
            readonly managedFramebuffers: vf.Framebuffer[];
            /**
             * Framebuffer value that shows that we don't know what is bound
             * @member {Framebuffer} vf.systems.FramebufferSystem#unknownFramebuffer
             * @readonly
             */
            readonly unknownFramebuffer: Framebuffer;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Bind a framebuffer
             *
             * @param {vf.Framebuffer} framebuffer
             * @param {vf.Rectangle} [frame] frame, default is framebuffer size
             */
            bind(framebuffer: vf.Framebuffer, frame?: vf.Rectangle): void;
            /**
             * Set the WebGLRenderingContext's viewport.
             *
             * @param {Number} x - X position of viewport
             * @param {Number} y - Y position of viewport
             * @param {Number} width - Width of viewport
             * @param {Number} height - Height of viewport
             */
            setViewport(x: number, y: number, width: number, height: number): void;
            /**
             * Get the size of the current width and height. Returns object with `width` and `height` values.
             *
             * @member {object}
             * @readonly
             */
            readonly size: any;
            /**
             * Clear the color of the context
             *
             * @param {Number} r - Red value from 0 to 1
             * @param {Number} g - Green value from 0 to 1
             * @param {Number} b - Blue value from 0 to 1
             * @param {Number} a - Alpha value from 0 to 1
             * @param {vf.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
             *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
             */
            clear(r: number, g: number, b: number, a: number, mask?: vf.BUFFER_BITS): void;
            /**
             * Initialize framebuffer for this context
             *
             * @protected
             * @param {vf.Framebuffer} framebuffer
             * @returns {vf.GLFramebuffer} created GLFramebuffer
             */
            protected initFramebuffer(framebuffer: vf.Framebuffer): vf.GLFramebuffer;
            /**
             * Resize the framebuffer
             *
             * @protected
             * @param {vf.Framebuffer} framebuffer
             */
            protected resizeFramebuffer(framebuffer: vf.Framebuffer): void;
            /**
             * Update the framebuffer
             *
             * @protected
             * @param {vf.Framebuffer} framebuffer
             */
            protected updateFramebuffer(framebuffer: vf.Framebuffer): void;
            /**
             * Detects number of samples that is not more than a param but as close to it as possible
             *
             * @param {vf.MSAA_QUALITY} samples number of samples
             * @returns {vf.MSAA_QUALITY} recommended number of samples
             */
            detectSamples(samples: vf.MSAA_QUALITY): vf.MSAA_QUALITY;
            /**
             * Only works with WebGL2
             *
             * blits framebuffer to another of the same or bigger size
             * after that target framebuffer is bound
             *
             * Fails with WebGL warning if blits multisample framebuffer to different size
             *
             * @param {vf.Framebuffer} [framebuffer] by default it blits "into itself", from renderBuffer to texture.
             * @param {vf.Rectangle} [sourcePixels] source rectangle in pixels
             * @param {vf.Rectangle} [destPixels] dest rectangle in pixels, assumed to be the same as sourcePixels
             */
            blit(framebuffer?: vf.Framebuffer, sourcePixels?: vf.Rectangle, destPixels?: vf.Rectangle): void;
            /**
             * Disposes framebuffer
             * @param {vf.Framebuffer} framebuffer framebuffer that has to be disposed of
             * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
             */
            disposeFramebuffer(framebuffer: vf.Framebuffer, contextLost?: boolean): void;
            /**
             * Disposes all framebuffers, but not textures bound to them
             * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
             */
            disposeAll(contextLost?: boolean): void;
            /**
             * resets framebuffer stored state, binds screen framebuffer
             *
             * should be called before renderTexture reset()
             */
            reset(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class GeometrySystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * `true` if we has `*_vertex_array_object` extension
             * @member {boolean} vf.systems.GeometrySystem#hasVao
             * @readonly
             */
            readonly hasVao: boolean;
            /**
             * `true` if has `ANGLE_instanced_arrays` extension
             * @member {boolean} vf.systems.GeometrySystem#hasInstance
             * @readonly
             */
            readonly hasInstance: boolean;
            /**
             * `true` if support `gl.UNSIGNED_INT` in `gl.drawElements` or `gl.drawElementsInstanced`
             * @member {boolean} vf.systems.GeometrySystem#canUseUInt32ElementIndex
             * @readonly
             */
            readonly canUseUInt32ElementIndex: boolean;
            /**
             * Cache for all geometries by id, used in case renderer gets destroyed or for profiling
             * @member {object} vf.systems.GeometrySystem#managedGeometries
             * @readonly
             */
            readonly managedGeometries: any;
            /**
             * Cache for all buffers by id, used in case renderer gets destroyed or for profiling
             * @member {object} vf.systems.GeometrySystem#managedBuffers
             * @readonly
             */
            readonly managedBuffers: any;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Binds geometry so that is can be drawn. Creating a Vao if required
             *
             * @param {vf.Geometry} geometry instance of geometry to bind
             * @param {vf.Shader} [shader] instance of shader to use vao for
             */
            bind(geometry: vf.Geometry, shader?: vf.Shader): void;
            /**
             * Reset and unbind any active VAO and geometry
             */
            reset(): void;
            /**
             * Update buffers
             * @protected
             */
            protected updateBuffers(): void;
            /**
             * Check compability between a geometry and a program
             * @protected
             * @param {vf.Geometry} geometry - Geometry instance
             * @param {vf.Program} program - Program instance
             */
            protected checkCompatibility(geometry: vf.Geometry, program: vf.Program): void;
            /**
             * Takes a geometry and program and generates a unique signature for them.
             *
             * @param {vf.Geometry} geometry to get signature from
             * @param {vf.Program} program to test geometry against
             * @returns {String} Unique signature of the geometry and program
             * @protected
             */
            protected getSignature(geometry: vf.Geometry, program: vf.Program): string;
            /**
             * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
             * If vao is created, it is bound automatically.
             *
             * @protected
             * @param {vf.Geometry} geometry - Instance of geometry to to generate Vao for
             * @param {vf.Program} program - Instance of program
             */
            protected initGeometryVao(geometry: vf.Geometry, program: vf.Program): void;
            /**
             * Disposes buffer
             * @param {vf.Buffer} buffer buffer with data
             * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
             */
            disposeBuffer(buffer: vf.Buffer, contextLost?: boolean): void;
            /**
             * Disposes geometry
             * @param {vf.Geometry} geometry Geometry with buffers. Only VAO will be disposed
             * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
             */
            disposeGeometry(geometry: vf.Geometry, contextLost?: boolean): void;
            /**
             * dispose all WebGL resources of all managed geometries and buffers
             * @param {boolean} [contextLost=false] If context was lost, we suppress `gl.delete` calls
             */
            disposeAll(contextLost?: boolean): void;
            /**
             * Activate vertex array object
             *
             * @protected
             * @param {vf.Geometry} geometry - Geometry instance
             * @param {vf.Program} program - Shader program instance
             */
            protected activateVao(geometry: vf.Geometry, program: vf.Program): void;
            /**
             * Draw the geometry
             *
             * @param {Number} type - the type primitive to render
             * @param {Number} [size] - the number of elements to be rendered
             * @param {Number} [start] - Starting index
             * @param {Number} [instanceCount] - the number of instances of the set of elements to execute
             */
            draw(type: number, size?: number, start?: number, instanceCount?: number): void;
            /**
             * Unbind/reset everything
             * @protected
             */
            protected unbind(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class AbstractMaskSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * The mask stack
             * @member {vf.MaskData[]} vf.systems.AbstractMaskSystem#maskStack
             */
            maskStack: vf.MaskData[];
            /**
             * gets count of masks of certain type
             * @returns {number}
             */
            getStackLength(): number;
            /**
             * Changes the mask stack that is used by this System.
             *
             * @param {vf.MaskData[]} maskStack - The mask stack
             */
            setMaskStack(maskStack: vf.MaskData[]): void;
            /**
             * Destroys the mask stack.
             *
             */
            destroy(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class MaskSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Enable scissor
             * @member {boolean} vf.systems.MaskSystem#enableScissor
             * @readonly
             */
            readonly enableScissor: boolean;
            /**
             * Pool of used sprite mask filters
             * @member {vf.SpriteMaskFilter[]} vf.systems.MaskSystem#alphaMaskPool
             * @readonly
             */
            readonly alphaMaskPool: vf.SpriteMaskFilter[];
            /**
             * Pool of mask data
             * @member {vf.MaskData[]} vf.systems.MaskSystem#maskDataPool
             * @readonly
             */
            readonly maskDataPool: vf.MaskData[];
            /**
             * Current index of alpha mask pool
             * @member {number} vf.systems.MaskSystem#alphaMaskIndex
             * @default 0
             * @readonly
             */
            readonly alphaMaskIndex: number;
            /**
             * Changes the mask stack that is used by this System.
             *
             * @param {vf.MaskData[]} maskStack - The mask stack
             */
            setMaskStack(maskStack: vf.MaskData[]): void;
            /**
             * Applies the Mask and adds it to the current filter stack.
             * Renderer batch must be flushed beforehand.
             *
             * @param {vf.DisplayObject} target - Display Object to push the mask to
             * @param {vf.MaskData|vf.Sprite|vf.Graphics|vf.DisplayObject} maskData - The masking data.
             */
            push(target: vf.DisplayObject, maskData: vf.MaskData | vf.Sprite | vf.Graphics | vf.DisplayObject): void;
            /**
             * Removes the last mask from the mask stack and doesn't return it.
             * Renderer batch must be flushed beforehand.
             *
             * @param {vf.DisplayObject} target - Display Object to pop the mask from
             */
            pop(target: vf.DisplayObject): void;
            /**
             * Sets type of MaskData based on its maskObject
             * @param {vf.MaskData} maskData
             */
            detect(maskData: vf.MaskData): void;
            /**
             * Applies the Mask and adds it to the current filter stack.
             *
             * @param {vf.MaskData} maskData - Sprite to be used as the mask
             */
            pushSpriteMask(maskData: vf.MaskData): void;
            /**
             * Removes the last filter from the filter stack and doesn't return it.
             */
            popSpriteMask(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class ScissorSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Applies the Mask and adds it to the current stencil stack. @alvin
             *
             * @param {vf.MaskData} maskData - The mask data
             */
            push(maskData: vf.MaskData): void;
            /**
             * Pops scissor mask. MaskData is already removed from stack
             */
            pop(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class StencilSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Applies the Mask and adds it to the current stencil stack.
             *
             * @param {vf.MaskData} maskData - The mask data
             */
            push(maskData: vf.MaskData): void;
            /**
             * Pops stencil mask. MaskData is already removed from stack
             *
             * @param {vf.DisplayObject} maskObject - object of popped mask data
             */
            pop(maskObject: vf.DisplayObject): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class ProjectionSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Destination frame
             * @member {vf.Rectangle} vf.systems.ProjectionSystem#destinationFrame
             * @readonly
             */
            readonly destinationFrame: vf.Rectangle;
            /**
             * Source frame
             * @member {vf.Rectangle} vf.systems.ProjectionSystem#sourceFrame
             * @readonly
             */
            readonly sourceFrame: vf.Rectangle;
            /**
             * Default destination frame
             * @member {vf.Rectangle} vf.systems.ProjectionSystem#defaultFrame
             * @readonly
             */
            readonly defaultFrame: vf.Rectangle;
            /**
             * Project matrix
             * @member {vf.Matrix} vf.systems.ProjectionSystem#projectionMatrix
             * @readonly
             */
            readonly projectionMatrix: vf.Matrix;
            /**
             * A transform that will be appended to the projection matrix
             * if null, nothing will be applied
             * @member {vf.Matrix} vf.systems.ProjectionSystem#transform
             */
            transform: vf.Matrix;
            /**
             * Updates the projection matrix based on a projection frame (which is a rectangle)
             *
             * @param {vf.Rectangle} destinationFrame - The destination frame.
             * @param {vf.Rectangle} sourceFrame - The source frame.
             * @param {Number} resolution - Resolution
             * @param {boolean} root - If is root
             */
            update(destinationFrame: vf.Rectangle, sourceFrame: vf.Rectangle, resolution: number, root: boolean): void;
            /**
             * Updates the projection matrix based on a projection frame (which is a rectangle)
             *
             * @param {vf.Rectangle} destinationFrame - The destination frame.
             * @param {vf.Rectangle} sourceFrame - The source frame.
             * @param {Number} resolution - Resolution
             * @param {boolean} root - If is root
             */
            calculateProjection(destinationFrame: vf.Rectangle, sourceFrame: vf.Rectangle, resolution: number, root: boolean): void;
            /**
             * Sets the transform of the active render target to the given matrix
             *
             * @param {vf.Matrix} matrix - The transformation matrix
             */
            setTransform(matrix: vf.Matrix): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class RenderTextureSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * The clear background color as rgba
             * @member {number[]} vf.systems.RenderTextureSystem#clearColor
             */
            clearColor: number[];
            /**
             * List of masks for the StencilSystem
             * @member {vf.Graphics[]} vf.systems.RenderTextureSystem#defaultMaskStack
             * @readonly
             */
            readonly defaultMaskStack: vf.Graphics[];
            /**
             * Render texture
             * @member {vf.RenderTexture} vf.systems.RenderTextureSystem#current
             * @readonly
             */
            readonly current: vf.RenderTexture;
            /**
             * Source frame
             * @member {vf.Rectangle} vf.systems.RenderTextureSystem#sourceFrame
             * @readonly
             */
            readonly sourceFrame: vf.Rectangle;
            /**
             * Destination frame
             * @member {vf.Rectangle} vf.systems.RenderTextureSystem#destinationFrame
             * @readonly
             */
            readonly destinationFrame: vf.Rectangle;
            /**
             * Bind the current render texture
             * @param {vf.RenderTexture} [renderTexture] - RenderTexture to bind, by default its `null`, the screen
             * @param {vf.Rectangle} [sourceFrame] - part of screen that is mapped to the renderTexture
             * @param {vf.Rectangle} [destinationFrame] - part of renderTexture, by default it has the same size as sourceFrame
             */
            bind(renderTexture?: vf.RenderTexture, sourceFrame?: vf.Rectangle, destinationFrame?: vf.Rectangle): void;
            /**
             * Erases the render texture and fills the drawing area with a colour
             *
             * @param {number[]} [clearColor] - The color as rgba, default to use the renderer backgroundColor
             * @param {vf.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
             *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
             * @return {vf.Renderer} Returns itself.
             */
            clear(clearColor?: number[], mask?: vf.BUFFER_BITS): vf.Renderer;
            /**
             * Resets renderTexture state
             */
            reset(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class ShaderSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * The current WebGL rendering context
             *
             * @member {WebGLRenderingContext} vf.systems.ShaderSystem#gl
             */
            gl: WebGLRenderingContext;
            /**
             * Changes the current shader to the one given in parameter
             *
             * @param {vf.Shader} shader - the new shader
             * @param {boolean} [dontSync] - false if the shader should automatically sync its uniforms.
             * @returns {vf.GLProgram} the glProgram that belongs to the shader.
             */
            bind(shader: vf.Shader, dontSync?: boolean): vf.GLProgram;
            /**
             * Uploads the uniforms values to the currently bound shader.
             *
             * @param {object} uniforms - the uniforms values that be applied to the current shader
             */
            setUniforms(uniforms: any): void;
            /**
             *
             * syncs uniforms on the group
             * @param {*} group the uniform group to sync
             * @param {*} [syncData] this is data that is passed to the sync function and any nested sync functions
             */
            syncUniformGroup(group: any, syncData?: any): void;
            /**
             * Returns the underlying GLShade rof the currently bound shader.
             * This can be handy for when you to have a little more control over the setting of your uniforms.
             *
             * @return {vf.GLProgram} the glProgram for the currently bound Shader for this context
             */
            getglProgram(): vf.GLProgram;
            /**
             * Resets ShaderSystem state, does not affect WebGL state
             */
            reset(): void;
            /**
             * Destroys this System and removes all its textures
             */
            destroy(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class StateSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * GL context
             * @member {WebGLRenderingContext} vf.systems.StateSystem#gl
             * @readonly
             */
            readonly gl: WebGLRenderingContext;
            /**
             * State ID
             * @member {number} vf.systems.StateSystem#stateId
             * @readonly
             */
            readonly stateId: number;
            /**
             * Polygon offset
             * @member {number} vf.systems.StateSystem#polygonOffset
             * @readonly
             */
            readonly polygonOffset: number;
            /**
             * Blend mode
             * @member {number} vf.systems.StateSystem#blendMode
             * @default vf.BLEND_MODES.NONE
             * @readonly
             */
            readonly blendMode: number;
            /**
             * Whether current blend equation is different
             * @member {boolean} vf.systems.StateSystem#_blendEq
             * @protected
             */
            protected _blendEq: boolean;
            /**
             * Collection of calls
             * @member {function[]} vf.systems.StateSystem#map
             * @readonly
             */
            readonly map: ((...params: any[]) => any)[];
            /**
             * Collection of check calls
             * @member {function[]} vf.systems.StateSystem#checks
             * @readonly
             */
            readonly checks: ((...params: any[]) => any)[];
            /**
             * Default WebGL State
             * @member {vf.State} vf.systems.StateSystem#defaultState
             * @readonly
             */
            readonly defaultState: vf.State;
            /**
             * Sets the current state
             *
             * @param {*} state - The state to set.
             */
            set(state: any): void;
            /**
             * Sets the state, when previous state is unknown
             *
             * @param {*} state - The state to set
             */
            forceState(state: any): void;
            /**
             * Enables or disabled blending.
             *
             * @param {boolean} value - Turn on or off webgl blending.
             */
            setBlend(value: boolean): void;
            /**
             * Enables or disable polygon offset fill
             *
             * @param {boolean} value - Turn on or off webgl polygon offset testing.
             */
            setOffset(value: boolean): void;
            /**
             * Sets whether to enable or disable depth test.
             *
             * @param {boolean} value - Turn on or off webgl depth testing.
             */
            setDepthTest(value: boolean): void;
            /**
             * Sets whether to enable or disable cull face.
             *
             * @param {boolean} value - Turn on or off webgl cull face.
             */
            setCullFace(value: boolean): void;
            /**
             * Sets the gl front face.
             *
             * @param {boolean} value - true is clockwise and false is counter-clockwise
             */
            setFrontFace(value: boolean): void;
            /**
             * Sets the blend mode.
             *
             * @param {number} value - The blend mode to set to.
             */
            setBlendMode(value: number): void;
            /**
             * Sets the polygon offset.
             *
             * @param {number} value - the polygon offset
             * @param {number} scale - the polygon offset scale
             */
            setPolygonOffset(value: number, scale: number): void;
            /**
             * Resets all the logic and disables the vaos
             */
            reset(): void;
            /**
             * checks to see which updates should be checked based on which settings have been activated.
             * For example, if blend is enabled then we should check the blend modes each time the state is changed
             * or if polygon fill is activated then we need to check if the polygon offset changes.
             * The idea is that we only check what we have too.
             *
             * @param {Function} func  the checking function to add or remove
             * @param {boolean} value  should the check function be added or removed.
             */
            updateCheck(func: (...params: any[]) => any, value: boolean): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class TextureGCSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Count
             * @member {number} vf.systems.TextureGCSystem#count
             * @readonly
             */
            readonly count: number;
            /**
             * Check count
             * @member {number} vf.systems.TextureGCSystem#checkCount
             * @readonly
             */
            readonly checkCount: number;
            /**
             * Maximum idle time, in seconds
             * @member {number} vf.systems.TextureGCSystem#maxIdle
             * @see vf.settings.GC_MAX_IDLE
             */
            maxIdle: number;
            /**
             * Maximum number of item to check
             * @member {number} vf.systems.TextureGCSystem#checkCountMax
             * @see vf.settings.GC_MAX_CHECK_COUNT
             */
            checkCountMax: number;
            /**
             * Current garabage collection mode
             * @member {vf.GC_MODES} vf.systems.TextureGCSystem#mode
             * @see vf.settings.GC_MODE
             */
            mode: vf.GC_MODES;
            /**
             * Checks to see when the last time a texture was used
             * if the texture has not been used for a specified amount of time it will be removed from the GPU
             */
            postrender(): void;
            /**
             * Checks to see when the last time a texture was used
             * if the texture has not been used for a specified amount of time it will be removed from the GPU
             */
            run(): void;
            /**
             * Removes all the textures within the specified displayObject and its children from the GPU
             *
             * @param {vf.DisplayObject} displayObject - the displayObject to remove the textures from.
             */
            unload(displayObject: vf.DisplayObject): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * @param {vf.Renderer} renderer - The renderer this System works for.
         */
        class TextureSystem extends vf.System {
            constructor(renderer: vf.Renderer);
            /**
             * Bound textures
             * @member {vf.BaseTexture[]} vf.systems.TextureSystem#boundTextures
             * @readonly
             */
            readonly boundTextures: vf.BaseTexture[];
            /**
             * Current location
             * @member {number} vf.systems.TextureSystem#currentLocation
             * @readonly
             */
            readonly currentLocation: number;
            /**
             * List of managed textures
             * @member {vf.BaseTexture[]} vf.systems.TextureSystem#managedTextures
             * @readonly
             */
            readonly managedTextures: vf.BaseTexture[];
            /**
             * BaseTexture value that shows that we don't know what is bound
             * @member {vf.BaseTexture} vf.systems.TextureSystem#unknownTexture
             * @readonly
             */
            readonly unknownTexture: vf.BaseTexture;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Bind a texture to a specific location
             *
             * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
             *
             * @param {vf.Texture|vf.BaseTexture} texture_ - Texture to bind
             * @param {number} [location=0] - Location to bind at
             */
            bind(texture_: vf.Texture | vf.BaseTexture, location?: number): void;
            /**
             * Resets texture location and bound textures
             *
             * Actual `bind(null, i)` calls will be performed at next `unbind()` call
             */
            reset(): void;
            /**
             * Unbind a texture
             * @param {vf.BaseTexture} texture - Texture to bind
             */
            unbind(texture: vf.BaseTexture): void;
            /**
             * The renderer this manager works for.
             *
             * @member {vf.Renderer} vf.System#renderer
             */
            renderer: vf.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
    }
    class BaseTexture extends vf.utils.EventEmitter {
        constructor(resource?: vf.resources.Resource | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, options?: {
            mipmap?: vf.MIPMAP_MODES;
            anisotropicLevel?: number;
            wrapMode?: vf.WRAP_MODES;
            scaleMode?: vf.SCALE_MODES;
            format?: vf.FORMATS;
            type?: vf.TYPES;
            target?: vf.TARGETS;
            alphaMode?: vf.ALPHA_MODES;
            width?: number;
            height?: number;
            resolution?: number;
            resourceOptions?: any;
        });
        /**
         * Get the drawable source, such as HTMLCanvasElement or HTMLImageElement suitable
         * for rendering with CanvasRenderer. Provided by **@pixi/canvas-renderer** package.
         * @method getDrawableSource
         * @memberof vf.BaseTexture#
         * @return {vf.ICanvasImageSource} Source to render with CanvasRenderer
         */
        getDrawableSource(): vf.ICanvasImageSource;
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} vf.BaseTexture#width
         */
        readonly width: number;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} vf.BaseTexture#height
         */
        readonly height: number;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number} vf.BaseTexture#resolution
         * @default vf.settings.RESOLUTION
         */
        resolution: number;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {vf.MIPMAP_MODES} vf.BaseTexture#mipmap
         * @default vf.settings.MIPMAP_TEXTURES
         */
        mipmap: vf.MIPMAP_MODES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number} vf.BaseTexture#anisotropicLevel
         * @default vf.settings.ANISOTROPIC_LEVEL
         */
        anisotropicLevel: number;
        /**
         * How the texture wraps
         * @member {number} vf.BaseTexture#wrapMode
         */
        wrapMode: number;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {vf.SCALE_MODES} vf.BaseTexture#scaleMode
         * @default vf.settings.SCALE_MODE
         */
        scaleMode: vf.SCALE_MODES;
        /**
         * The pixel format of the texture
         *
         * @member {vf.FORMATS} vf.BaseTexture#format
         * @default vf.FORMATS.RGBA
         */
        format: vf.FORMATS;
        /**
         * The type of resource data
         *
         * @member {vf.TYPES} vf.BaseTexture#type
         * @default vf.TYPES.UNSIGNED_BYTE
         */
        type: vf.TYPES;
        /**
         * The target type
         *
         * @member {vf.TARGETS} vf.BaseTexture#target
         * @default vf.TARGETS.TEXTURE_2D
         */
        target: vf.TARGETS;
        /**
         * How to treat premultiplied alpha, see {@link vf.ALPHA_MODES}.
         *
         * @member {vf.ALPHA_MODES} vf.BaseTexture#alphaMode
         * @default vf.ALPHA_MODES.UNPACK
         */
        alphaMode: vf.ALPHA_MODES;
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {number} vf.BaseTexture#uid
         * @protected
         */
        protected uid: number;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number} vf.BaseTexture#touched
         * @protected
         */
        protected touched: number;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean} vf.BaseTexture#isPowerOfTwo
         * @default false
         */
        readonly isPowerOfTwo: boolean;
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number} vf.BaseTexture#dirtyId
         */
        readonly dirtyId: number;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number} vf.BaseTexture#dirtyStyleId
         */
        protected dirtyStyleId: number;
        /**
         * Currently default cache ID.
         *
         * @member {string} vf.BaseTexture#cacheId
         */
        cacheId: string;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean} vf.BaseTexture#valid
         */
        readonly valid: boolean;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>} vf.BaseTexture#textureCacheIds
         * @readonly
         */
        readonly textureCacheIds: string[];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean} vf.BaseTexture#destroyed
         * @readonly
         */
        readonly destroyed: boolean;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {vf.resources.Resource} vf.BaseTexture#resource
         * @readonly
         */
        readonly resource: vf.resources.Resource;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number} vf.BaseTexture#_batchEnabled
         */
        _batchEnabled: number;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number} vf.BaseTexture#_batchLocation
         */
        _batchLocation: number;
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realWidth: number;
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realHeight: number;
        /**
         * Changes style options of BaseTexture
         *
         * @param {vf.SCALE_MODES} [scaleMode] - Pixi scalemode
         * @param {vf.MIPMAP_MODES} [mipmap] - enable mipmaps
         * @returns {vf.BaseTexture} this
         */
        setStyle(scaleMode?: vf.SCALE_MODES, mipmap?: vf.MIPMAP_MODES): vf.BaseTexture;
        /**
         * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
         *
         * @param {number} width Visual width
         * @param {number} height Visual height
         * @param {number} [resolution] Optionally set resolution
         * @returns {vf.BaseTexture} this
         */
        setSize(width: number, height: number, resolution?: number): vf.BaseTexture;
        /**
         * Sets real size of baseTexture, preserves current resolution.
         *
         * @param {number} realWidth Full rendered width
         * @param {number} realHeight Full rendered height
         * @param {number} [resolution] Optionally set resolution
         * @returns {vf.BaseTexture} this
         */
        setRealSize(realWidth: number, realHeight: number, resolution?: number): vf.BaseTexture;
        /**
         * Changes resolution
         *
         * @param {number} resolution res
         * @returns {vf.BaseTexture} this
         */
        setResolution(resolution: number): vf.BaseTexture;
        /**
         * Sets the resource if it wasn't set. Throws error if resource already present
         *
         * @param {vf.resources.Resource} resource - that is managing this BaseTexture
         * @returns {vf.BaseTexture} this
         */
        setResource(resource: vf.resources.Resource): vf.BaseTexture;
        /**
         * Invalidates the object. Texture becomes valid if width and height are greater than zero.
         */
        update(): void;
        /**
         * Destroys this base texture.
         * The method stops if resource doesn't want this texture to be destroyed.
         * Removes texture from all caches.
         */
        destroy(): void;
        /**
         * Frees the texture from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires vf.BaseTexture#dispose
         */
        dispose(): void;
        /**
         * Utility function for BaseTexture|Texture cast
         */
        castToBaseTexture(): void;
        /**
         * Helper function that creates a base texture based on the source you provide.
         * The source can be - image url, image element, canvas element. If the
         * source is an image url or an image element and not in the base texture
         * cache, it will be created and loaded.
         *
         * @static
         * @param {string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement} source - The
         *        source to create base texture from.
         * @param {object} [options] See {@link vf.BaseTexture}'s constructor for options.
         * @param {boolean} [strict] Enforce strict-mode, see {@link vf.settings.STRICT_TEXTURE_CACHE}.
         * @returns {vf.BaseTexture} The new base texture.
         */
        static from(source: string | HTMLImageElement | HTMLCanvasElement | SVGElement | HTMLVideoElement, options?: any, strict?: boolean): vf.BaseTexture;
        /**
         * Create a new BaseTexture with a BufferResource from a Float32Array.
         * RGBA values are floats from 0 to 1.
         * @static
         * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
         *        is provided, a new Float32Array is created.
         * @param {number} width - Width of the resource
         * @param {number} height - Height of the resource
         * @param {object} [options] See {@link vf.BaseTexture}'s constructor for options.
         * @return {vf.BaseTexture} The resulting new BaseTexture
         */
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): vf.BaseTexture;
        /**
         * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole vf object.
         *
         * @static
         * @param {vf.BaseTexture} baseTexture - The BaseTexture to add to the cache.
         * @param {string} id - The id that the BaseTexture will be stored against.
         */
        static addToCache(baseTexture: vf.BaseTexture, id: string): void;
        /**
         * Remove a BaseTexture from the global BaseTextureCache.
         *
         * @static
         * @param {string|vf.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
         * @return {vf.BaseTexture|null} The BaseTexture that was removed.
         */
        static removeFromCache(baseTexture: string | vf.BaseTexture): vf.BaseTexture | null;
        /**
         * Global number of the texture batch, used by multi-texture renderers
         *
         * @static
         * @member {number}
         */
        static _globalBatch: number;
    }
    class GLTexture {
        /**
         * The WebGL texture
         * @member {WebGLTexture} vf.GLTexture#texture
         */
        texture: WebGLTexture;
        /**
         * Width of texture that was used in texImage2D
         * @member {number} vf.GLTexture#width
         */
        width: number;
        /**
         * Height of texture that was used in texImage2D
         * @member {number} vf.GLTexture#height
         */
        height: number;
        /**
         * Texture contents dirty flag
         * @member {number} vf.GLTexture#dirtyId
         */
        dirtyId: number;
        /**
         * Texture style dirty flag
         * @member {number} vf.GLTexture#dirtyStyleId
         */
        dirtyStyleId: number;
        /**
         * Whether mip levels has to be generated
         * @member {boolean} vf.GLTexture#mipmap
         */
        mipmap: boolean;
        /**
         * WrapMode copied from baseTexture
         * @member {number} vf.GLTexture#wrapMode
         */
        wrapMode: number;
        /**
         * Type copied from baseTexture
         * @member {number} vf.GLTexture#type
         */
        type: number;
        /**
         * Type copied from baseTexture
         * @member {number} vf.GLTexture#internalFormat
         */
        internalFormat: number;
    }
    /**
     * @param {vf.BaseTexture} baseTexture - The base texture source to create the texture from
     * @param {vf.Rectangle} [frame] - The rectangle frame of the texture to show
     * @param {vf.Rectangle} [orig] - The area of original texture
     * @param {vf.Rectangle} [trim] - Trimmed rectangle of original texture
     * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link vf.groupD8}
     * @param {vf.Point} [anchor] - Default anchor point used for sprite placement / rotation
     */
    class Texture extends vf.utils.EventEmitter {
        constructor(baseTexture: vf.BaseTexture, frame?: vf.Rectangle, orig?: vf.Rectangle, trim?: vf.Rectangle, rotate?: number, anchor?: vf.Point);
        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean} vf.Texture#noFrame
         */
        noFrame: boolean;
        /**
         * The base texture that this texture uses.
         *
         * @member {vf.BaseTexture} vf.Texture#baseTexture
         */
        baseTexture: vf.BaseTexture;
        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {vf.Rectangle} vf.Texture#_frame
         */
        _frame: vf.Rectangle;
        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {vf.Rectangle} vf.Texture#trim
         */
        trim: vf.Rectangle;
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean} vf.Texture#valid
         */
        valid: boolean;
        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {vf.TextureUvs} vf.Texture#_uvs
         * @protected
         */
        protected _uvs: vf.TextureUvs;
        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {vf.TextureMatrix} vf.Texture#uvMatrix
         */
        uvMatrix: vf.TextureMatrix;
        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {vf.Rectangle} vf.Texture#orig
         */
        orig: vf.Rectangle;
        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {vf.Point} vf.Texture#defaultAnchor
         * @default {0,0}
         */
        defaultAnchor: vf.Point;
        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number} vf.Texture#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]} vf.Texture#textureCacheIds
         */
        textureCacheIds: string[];
        /**
         * Updates this texture on the gpu.
         *
         * Calls the TextureResource update.
         *
         * If you adjusted `frame` manually, please call `updateUvs()` instead.
         *
         */
        update(): void;
        /**
         * Called when the base texture is updated
         *
         * @protected
         * @param {vf.BaseTexture} baseTexture - The base texture.
         */
        protected onBaseTextureUpdated(baseTexture: vf.BaseTexture): void;
        /**
         * Destroys this texture
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
        /**
         * Creates a new texture object that acts the same as this one.
         *
         * @return {vf.Texture} The new texture
         */
        clone(): vf.Texture;
        /**
         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
         * Call it after changing the frame
         */
        updateUvs(): void;
        /**
         * Helper function that creates a new Texture based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|vf.BaseTexture} source
         *        Source to create texture from
         * @param {object} [options] See {@link vf.BaseTexture}'s constructor for options.
         * @param {boolean} [strict] Enforce strict-mode, see {@link vf.settings.STRICT_TEXTURE_CACHE}.
         * @return {vf.Texture} The newly created texture
         */
        static from(source: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | vf.BaseTexture, options?: any, strict?: boolean): vf.Texture;
        /**
         * Create a new Texture with a BufferResource from a Float32Array.
         * RGBA values are floats from 0 to 1.
         * @static
         * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
         *        is provided, a new Float32Array is created.
         * @param {number} width - Width of the resource
         * @param {number} height - Height of the resource
         * @param {object} [options] See {@link vf.BaseTexture}'s constructor for options.
         * @return {vf.Texture} The resulting new BaseTexture
         */
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): vf.Texture;
        /**
         * Create a texture from a source and add to the cache.
         *
         * @static
         * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
         * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
         * @param {String} [name] - Human readable name for the texture cache. If no name is
         *        specified, only `imageUrl` will be used as the cache ID.
         * @return {vf.Texture} Output texture
         */
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): vf.Texture;
        /**
         * Adds a Texture to the global TextureCache. This cache is shared across the whole vf object.
         *
         * @static
         * @param {vf.Texture} texture - The Texture to add to the cache.
         * @param {string} id - The id that the Texture will be stored against.
         */
        static addToCache(texture: vf.Texture, id: string): void;
        /**
         * Remove a Texture from the global TextureCache.
         *
         * @static
         * @param {string|vf.Texture} texture - id of a Texture to be removed, or a Texture instance itself
         * @return {vf.Texture|null} The Texture that was removed
         */
        static removeFromCache(texture: string | vf.Texture): vf.Texture | null;
        /**
         * Returns resolution of baseTexture
         *
         * @member {number}
         * @readonly
         */
        readonly resolution: number;
        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {vf.Rectangle}
         */
        frame: vf.Rectangle;
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link vf.groupD8} for explanation
         *
         * @member {number}
         */
        rotate: number;
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
        height: number;
        /**
         * Utility function for BaseTexture|Texture cast
         */
        castToBaseTexture(): void;
        /**
         * An empty texture, used often to not have to create multiple empty textures.
         * Can not be destroyed.
         *
         * @static
         * @constant
         * @member {vf.Texture}
         */
        static EMPTY: vf.Texture;
        /**
         * A white texture of 16x16 size, used for graphics and other things
         * Can not be destroyed.
         *
         * @static
         * @constant
         * @member {vf.Texture}
         */
        static WHITE: vf.Texture;
    }
    /**
     *
     * @param {vf.Texture} texture observed texture
     * @param {number} [clampMargin] Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
     * @constructor
     */
    class TextureMatrix {
        constructor(texture: vf.Texture, clampMargin?: number);
        /**
         * Matrix operation that converts texture region coords to texture coords
         * @member {vf.Matrix} vf.TextureMatrix#mapCoord
         * @readonly
         */
        readonly mapCoord: vf.Matrix;
        /**
         * Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.
         * Calculated based on clampOffset.
         * @member {Float32Array} vf.TextureMatrix#uClampFrame
         * @readonly
         */
        readonly uClampFrame: Float32Array;
        /**
         * Normalized clamp offset.
         * Calculated based on clampOffset.
         * @member {Float32Array} vf.TextureMatrix#uClampOffset
         * @readonly
         */
        readonly uClampOffset: Float32Array;
        /**
         * Tracks Texture frame changes
         * @member {number} vf.TextureMatrix#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
         *
         * @default 0
         * @member {number} vf.TextureMatrix#clampOffset
         */
        clampOffset: number;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number} vf.TextureMatrix#clampMargin
         */
        clampMargin: number;
        /**
         * If texture size is the same as baseTexture
         * @member {boolean} vf.TextureMatrix#isSimple
         * @default false
         * @readonly
         */
        readonly isSimple: boolean;
        /**
         * texture property
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Multiplies uvs array to transform
         * @param {Float32Array} uvs mesh uvs
         * @param {Float32Array} [out=uvs] output
         * @returns {Float32Array} output
         */
        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
        /**
         * updates matrices if texture was changed
         * @param {boolean} [forceUpdate=false] if true, matrices will be updated any case
         * @returns {boolean} whether or not it was updated
         */
        update(forceUpdate?: boolean): boolean;
    }
    class TextureUvs {
        /**
         * X-component of top-left corner `(x0,y0)`.
         *
         * @member {number} vf.TextureUvs#x0
         */
        x0: number;
        /**
         * Y-component of top-left corner `(x0,y0)`.
         *
         * @member {number} vf.TextureUvs#y0
         */
        y0: number;
        /**
         * X-component of top-right corner `(x1,y1)`.
         *
         * @member {number} vf.TextureUvs#x1
         */
        x1: number;
        /**
         * Y-component of top-right corner `(x1,y1)`.
         *
         * @member {number} vf.TextureUvs#y1
         */
        y1: number;
        /**
         * X-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number} vf.TextureUvs#x2
         */
        x2: number;
        /**
         * Y-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number} vf.TextureUvs#y2
         */
        y2: number;
        /**
         * X-component of bottom-left corner `(x3,y3)`.
         *
         * @member {number} vf.TextureUvs#x3
         */
        x3: number;
        /**
         * Y-component of bottom-right corner `(x3,y3)`.
         *
         * @member {number} vf.TextureUvs#y3
         */
        y3: number;
        /**
         * Sets the texture Uvs based on the given frame information.
         *
         * @protected
         * @param {vf.Rectangle} frame - The frame of the texture
         * @param {vf.Rectangle} baseFrame - The base frame of the texture
         * @param {number} rotate - Rotation of frame, see {@link vf.groupD8}
         */
        protected set(frame: vf.Rectangle, baseFrame: vf.Rectangle, rotate: number): void;
    }
    /**
     * Collection of base resource types supported by PixiJS.
     *
     * Resources are used by {@link vf.BaseTexture} to handle different media types
     * such as images, video, SVG graphics, etc. In most use-cases, you should not
     * instantiate the resources directly. The easy thing is to use
     * {@link vf.BaseTexture.from}.
     * @example
     * const baseTexture = vf.BaseTexture.from('path/to/image.jpg');
     * @namespace vf.resources
     */
    namespace resources {
        class ArrayResource extends vf.resources.Resource {
            constructor(source: number | any[], options?: {
                width?: number;
                height?: number;
            });
            /**
             * Collection of resources.
             * @member {Array<vf.BaseTexture>} vf.resources.ArrayResource#items
             * @readonly
             */
            readonly items: vf.BaseTexture[];
            /**
             * Dirty IDs for each part
             * @member {Array<number>} vf.resources.ArrayResource#itemDirtyIds
             * @readonly
             */
            readonly itemDirtyIds: number[];
            /**
             * Number of elements in array
             *
             * @member {number} vf.resources.ArrayResource#length
             * @readonly
             */
            readonly length: number;
            /**
             * Set a resource by ID
             *
             * @param {vf.resources.Resource} resource
             * @param {number} index - Zero-based index of resource to set
             * @return {vf.resources.ArrayResource} Instance for chaining
             */
            addResourceAt(resource: vf.resources.Resource, index: number): vf.resources.ArrayResource;
            /**
             * Upload the resources to the GPU.
             * @param {vf.Renderer} renderer
             * @param {vf.BaseTexture} texture
             * @param {vf.GLTexture} glTexture
             * @returns {boolean} whether texture was uploaded
             */
            upload(renderer: vf.Renderer, texture: vf.BaseTexture, glTexture: vf.GLTexture): boolean;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
            /**
             * Set the parent base texture
             * @member {vf.BaseTexture}
             * @override
             */
            bind: vf.BaseTexture;
            /**
             * Unset the parent base texture
             * @member {vf.BaseTexture}
             * @override
             */
            unbind: vf.BaseTexture;
            /**
             * Load all the resources simultaneously
             * @override
             * @return {Promise<void>} When load is resolved
             */
            protected load(): Promise<void>;
            /**
             * Destroy this BaseImageResource
             * @override
             */
            protected dispose(): void;
        }
        /**
         * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} source
         */
        class BaseImageResource extends vf.resources.Resource {
            constructor(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement);
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Set cross origin based detecting the url and the crossorigin
             * @protected
             * @param {HTMLElement} element - Element to apply crossOrigin
             * @param {string} url - URL to check
             * @param {boolean|string} [crossorigin=true] - Cross origin value to use
             */
            protected static crossOrigin(element: HTMLElement, url: string, crossorigin?: boolean | string): void;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
            /**
             * Destroy this BaseImageResource
             * @override
             * @param {vf.BaseTexture} [fromTexture] Optional base texture
             */
            protected dispose(fromTexture?: vf.BaseTexture): void;
        }
        /**
         * @param {Float32Array|Uint8Array|Uint32Array} source - Source buffer
         * @param {object} options - Options
         * @param {number} options.width - Width of the texture
         * @param {number} options.height - Height of the texture
         */
        class BufferResource extends vf.resources.Resource {
            constructor(source: Float32Array | Uint8Array | Uint32Array, options: {
                width: number;
                height: number;
            });
            /**
             * Source array
             * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
             *
             * @member {Float32Array|Uint8Array|Uint32Array} vf.resources.BufferResource#data
             */
            data: Float32Array | Uint8Array | Uint32Array;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture glTexture
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture): boolean;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @return {boolean} `true` if <canvas>
             */
            static test(source: any): boolean;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
            /**
             * Destroy and don't use after this
             * @override
             */
            protected dispose(): void;
        }
        /**
         * Resource type for HTMLCanvasElement.
         * @class
         * @extends vf.resources.BaseImageResource
         * @memberof vf.resources
         * @param {HTMLCanvasElement} source - Canvas element to use
         */
        class CanvasResource extends vf.resources.BaseImageResource {
            constructor(source: HTMLCanvasElement);
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {HTMLCanvasElement|OffscreenCanvas} source - The source object
             * @return {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
             */
            static test(source: HTMLCanvasElement | OffscreenCanvas): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        class CubeResource extends vf.resources.ArrayResource {
            constructor(source?: (string | vf.resources.Resource)[], options?: {
                width?: number;
                height?: number;
            });
            /**
             * Upload the resource
             *
             * @returns {boolean} true is success
             */
            upload(): boolean;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {object} source - The source object
             * @return {boolean} `true` if source is an array of 6 elements
             */
            static test(source: any): boolean;
            /**
             * Number of texture sides to store for CubeResources
             *
             * @name vf.resources.CubeResource.SIDES
             * @static
             * @member {number}
             * @default 6
             */
            static SIDES: number;
            /**
             * Collection of resources.
             * @member {Array<vf.BaseTexture>} vf.resources.ArrayResource#items
             * @readonly
             */
            readonly items: vf.BaseTexture[];
            /**
             * Dirty IDs for each part
             * @member {Array<number>} vf.resources.ArrayResource#itemDirtyIds
             * @readonly
             */
            readonly itemDirtyIds: number[];
            /**
             * Number of elements in array
             *
             * @member {number} vf.resources.ArrayResource#length
             * @readonly
             */
            readonly length: number;
            /**
             * Set a resource by ID
             *
             * @param {vf.resources.Resource} resource
             * @param {number} index - Zero-based index of resource to set
             * @return {vf.resources.ArrayResource} Instance for chaining
             */
            addResourceAt(resource: vf.resources.Resource, index: number): vf.resources.ArrayResource;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for DepthTexture.
         * @class
         * @extends vf.resources.BufferResource
         * @memberof vf.resources
         */
        class DepthResource extends vf.resources.BufferResource {
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture glTexture
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture): boolean;
            /**
             * Source array
             * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
             *
             * @member {Float32Array|Uint8Array|Uint32Array} vf.resources.BufferResource#data
             */
            data: Float32Array | Uint8Array | Uint32Array;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for ImageBitmap.
         * @class
         * @extends vf.resources.BaseImageResource
         * @memberof vf.resources
         * @param {ImageBitmap} source - Image element to use
         */
        class ImageBitmapResource extends vf.resources.BaseImageResource {
            constructor(source: ImageBitmap);
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {ImageBitmap} source - The source object
             * @return {boolean} `true` if source is an ImageBitmap
             */
            static test(source: ImageBitmap): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * @param {HTMLImageElement|string} source - image source or URL
         * @param {boolean} [options.autoLoad=true] start loading process
         * @param {boolean} [options.createBitmap=vf.settings.CREATE_IMAGE_BITMAP] whether its required to create
         *        a bitmap before upload
         * @param {boolean} [options.crossorigin=true] - Load image using cross origin
         * @param {vf.ALPHA_MODES} [options.alphaMode=vf.ALPHA_MODES.UNPACK] - Premultiply image alpha in bitmap
         */
        class ImageResource extends vf.resources.BaseImageResource {
            constructor(source: HTMLImageElement | string);
            /**
             * URL of the image source
             * @member {string} vf.resources.ImageResource#url
             */
            url: string;
            /**
             * If the image should be disposed after upload
             * @member {boolean} vf.resources.ImageResource#preserveBitmap
             * @default false
             */
            preserveBitmap: boolean;
            /**
             * If capable, convert the image using createImageBitmap API
             * @member {boolean} vf.resources.ImageResource#createBitmap
             * @default vf.settings.CREATE_IMAGE_BITMAP
             */
            createBitmap: boolean;
            /**
             * Controls texture alphaMode field
             * Copies from options
             * Default is `null`, copies option from baseTexture
             *
             * @member {vf.ALPHA_MODES|null} vf.resources.ImageResource#alphaMode
             * @readonly
             */
            readonly alphaMode: vf.ALPHA_MODES | null;
            /**
             * The ImageBitmap element created for HTMLImageElement
             * @member {ImageBitmap} vf.resources.ImageResource#bitmap
             * @default null
             */
            bitmap: ImageBitmap;
            /**
             * returns a promise when image will be loaded and processed
             *
             * @param {boolean} [createBitmap] whether process image into bitmap
             * @returns {Promise<void>}
             */
            load(createBitmap?: boolean): Promise<void>;
            /**
             * Called when we need to convert image into BitmapImage.
             * Can be called multiple times, real promise is cached inside.
             *
             * @returns {Promise<void>} cached promise to fill that bitmap
             */
            process(): Promise<void>;
            /**
             * Upload the image resource to GPU.
             *
             * @param {vf.Renderer} renderer - Renderer to upload to
             * @param {vf.BaseTexture} baseTexture - BaseTexture for this resource
             * @param {vf.GLTexture} glTexture - GLTexture to use
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * @param {number} [width=0] Width of the resource
         * @param {number} [height=0] Height of the resource
         */
        class Resource {
            constructor(width?: number, height?: number);
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        class SVGResource extends vf.resources.BaseImageResource {
            constructor(source: string, options?: {
                scale?: number;
                width?: number;
                height?: number;
                autoLoad?: boolean;
            });
            /**
             * Base64 encoded SVG element or URL for SVG file
             * @readonly
             * @member {string} vf.resources.SVGResource#svg
             */
            readonly svg: string;
            /**
             * The source scale to apply when rasterizing on load
             * @readonly
             * @member {number} vf.resources.SVGResource#scale
             */
            readonly scale: number;
            /**
             * A width override for rasterization on load
             * @readonly
             * @member {number} vf.resources.SVGResource#_overrideWidth
             */
            readonly _overrideWidth: number;
            /**
             * A height override for rasterization on load
             * @readonly
             * @member {number} vf.resources.SVGResource#_overrideHeight
             */
            readonly _overrideHeight: number;
            /**
             * Get size from an svg string using regexp.
             *
             * @method
             * @param {string} svgString - a serialized svg element
             * @return {vf.ISize} image extension
             */
            static getSize(svgString: string): vf.ISize;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @param {string} extension - The extension of source, if set
             */
            static test(source: any, extension: string): void;
            /**
             * RegExp for SVG size.
             *
             * @static
             * @constant {RegExp|string} SVG_SIZE
             * @memberof vf.resources.SVGResource
             * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
             */
            static readonly SVG_SIZE: RegExp | string;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        class VideoResource extends vf.resources.BaseImageResource {
            constructor(source: HTMLVideoElement | any | string | (string | any)[], options?: {
                autoLoad?: boolean;
                autoPlay?: boolean;
                updateFPS?: number;
                crossorigin?: boolean;
            });
            /**
             * When set to true will automatically play videos used by this texture once
             * they are loaded. If false, it will not modify the playing state.
             *
             * @member {boolean} vf.resources.VideoResource#autoPlay
             * @default true
             */
            autoPlay: boolean;
            /**
             * Start preloading the video resource.
             *
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * Should the base texture automatically update itself, set to true by default
             *
             * @member {boolean}
             */
            autoUpdate: boolean;
            /**
             * How many times a second to update the texture from the video. Leave at 0 to update at every render.
             * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
             *
             * @member {number}
             */
            updateFPS: number;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @param {string} extension - The extension of source, if set
             * @return {boolean} `true` if video source
             */
            static test(source: any, extension: string): boolean;
            /**
             * List of common video file extensions supported by VideoResource.
             * @constant
             * @member {Array<string>}
             * @static
             * @readonly
             */
            static readonly TYPES: string[];
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} vf.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {vf.Renderer} renderer Upload to the renderer
             * @param {vf.BaseTexture} baseTexture Reference to parent texture
             * @param {vf.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: vf.Renderer, baseTexture: vf.BaseTexture, glTexture: vf.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} vf.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} vf.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} vf.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} vf.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: vf.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {vf.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: vf.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Collection of installed resource types, class must extend {@link vf.resources.Resource}.
         * @example
         * class CustomResource extends vf.resources.Resource {
         *   // MUST have source, options constructor signature
         *   // for auto-detected resources to be created.
         *   constructor(source, options) {
         *     super();
         *   }
         *   upload(renderer, baseTexture, glTexture) {
         *     // upload with GL
         *     return true;
         *   }
         *   // used to auto-detect resource
         *   static test(source, extension) {
         *     return extension === 'xyz'|| source instanceof SomeClass;
         *   }
         * }
         * // Install the new resource type
         * vf.resources.INSTALLED.push(CustomResource);
         *
         * @name vf.resources.INSTALLED
         * @type {Array<*>}
         * @static
         * @readonly
         */
        var INSTALLED: any[];
        /**
         * Create a resource element from a single source element. This
         * auto-detects which type of resource to create. All resources that
         * are auto-detectable must have a static `test` method and a constructor
         * with the arguments `(source, options?)`. Currently, the supported
         * resources for auto-detection include:
         *  - {@link vf.resources.ImageResource}
         *  - {@link vf.resources.CanvasResource}
         *  - {@link vf.resources.VideoResource}
         *  - {@link vf.resources.SVGResource}
         *  - {@link vf.resources.BufferResource}
         * @static
         * @function vf.resources.autoDetectResource
         * @param {string|*} source - Resource source, this can be the URL to the resource,
         *        a typed-array (for BufferResource), HTMLVideoElement, SVG data-uri
         *        or any other resource that can be auto-detected. If not resource is
         *        detected, it's assumed to be an ImageResource.
         * @param {object} [options] - Pass-through options to use for Resource
         * @param {number} [options.width] - Width of BufferResource or SVG rasterization
         * @param {number} [options.height] - Height of BufferResource or SVG rasterization
         * @param {boolean} [options.autoLoad=true] - Image, SVG and Video flag to start loading
         * @param {number} [options.scale=1] - SVG source scale. Overridden by width, height
         * @param {boolean} [options.createBitmap=vf.settings.CREATE_IMAGE_BITMAP] - Image option to create Bitmap object
         * @param {boolean} [options.crossorigin=true] - Image and Video option to set crossOrigin
         * @param {boolean} [options.autoPlay=true] - Video option to start playing video immediately
         * @param {number} [options.updateFPS=0] - Video option to update how many times a second the
         *        texture should be updated from the video. Leave at 0 to update at every render
         * @return {vf.resources.Resource} The created resource.
         */
        function autoDetectResource(source: string | any, options?: {
            width?: number;
            height?: number;
            autoLoad?: boolean;
            scale?: number;
            createBitmap?: boolean;
            crossorigin?: boolean;
            autoPlay?: boolean;
            updateFPS?: number;
        }): vf.resources.Resource;
    }
    class Quad {
    }
    class QuadUv extends vf.Geometry {
        /**
         * An array of vertices
         *
         * @member {Float32Array} vf.QuadUv#vertices
         */
        vertices: Float32Array;
        /**
         * The Uvs of the quad
         *
         * @member {Float32Array} vf.QuadUv#uvs
         */
        uvs: Float32Array;
        /**
         * Maps two Rectangle to the quad.
         *
         * @param {vf.Rectangle} targetTextureFrame - the first rectangle
         * @param {vf.Rectangle} destinationFrame - the second rectangle
         * @return {vf.Quad} Returns itself.
         */
        map(targetTextureFrame: vf.Rectangle, destinationFrame: vf.Rectangle): vf.Quad;
        /**
         * legacy upload method, just marks buffers dirty
         * @returns {vf.QuadUv} Returns itself.
         */
        invalidate(): vf.QuadUv;
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} vf.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} vf.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {vf.TYPES} to see the ones available
         * @param {Number} [stride] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start] How far into the array to start reading values (used for interleaving data)
         * @param {boolean} [instance=false] Instancing flag
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: vf.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean): vf.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {vf.Attribute} the attribute requested.
         */
        getAttribute(id: string): vf.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {vf.Buffer} the buffer requested.
         */
        getBuffer(id: string): vf.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: vf.Buffer | number[]): vf.Geometry;
        /**
         * returns the index buffer
         *
         * @return {vf.Buffer} the index buffer.
         */
        getIndex(): vf.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        interleave(): vf.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {vf.Geometry} a new clone of this geometry
         */
        clone(): vf.Geometry;
    }
    class Bounds {
        /**
         * @member {number} vf.Bounds#minX
         * @default 0
         */
        minX: number;
        /**
         * @member {number} vf.Bounds#minY
         * @default 0
         */
        minY: number;
        /**
         * @member {number} vf.Bounds#maxX
         * @default 0
         */
        maxX: number;
        /**
         * @member {number} vf.Bounds#maxY
         * @default 0
         */
        maxY: number;
        /**
         * It is updated to _boundsID of corresponding object to keep bounds in sync with content.
         * Updated from outside, thus public modifier.
         *
         * @member {number} vf.Bounds#updateID
         * @public
         */
        public updateID: number;
        /**
         * Checks if bounds are empty.
         *
         * @return {boolean} True if empty.
         */
        isEmpty(): boolean;
        /**
         * Clears the bounds and resets.
         *
         */
        clear(): void;
        /**
         * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
         * It is not guaranteed that it will return tempRect
         *
         * @param {vf.Rectangle} rect - temporary object will be used if AABB is not empty
         * @returns {vf.Rectangle} A rectangle of the bounds
         */
        getRectangle(rect: vf.Rectangle): vf.Rectangle;
        /**
         * This function should be inlined when its possible.
         *
         * @param {vf.IPoint} point - The point to add.
         */
        addPoint(point: vf.IPoint): void;
        /**
         * Adds a quad, not transformed
         *
         * @param {Float32Array} vertices - The verts to add.
         */
        addQuad(vertices: Float32Array): void;
        /**
         * Adds sprite frame, transformed.
         *
         * @param {vf.Transform} transform - transform to apply
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         */
        addFrame(transform: vf.Transform, x0: number, y0: number, x1: number, y1: number): void;
        /**
         * Adds sprite frame, multiplied by matrix
         *
         * @param {vf.Matrix} matrix - matrix to apply
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         */
        addFrameMatrix(matrix: vf.Matrix, x0: number, y0: number, x1: number, y1: number): void;
        /**
         * Adds screen vertices from array
         *
         * @param {Float32Array} vertexData - calculated vertices
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         */
        addVertexData(vertexData: Float32Array, beginOffset: number, endOffset: number): void;
        /**
         * Add an array of mesh vertices
         *
         * @param {vf.Transform} transform - mesh transform
         * @param {Float32Array} vertices - mesh coordinates in array
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         */
        addVertices(transform: vf.Transform, vertices: Float32Array, beginOffset: number, endOffset: number): void;
        /**
         * Add an array of mesh vertices.
         *
         * @param {vf.Matrix} matrix - mesh matrix
         * @param {Float32Array} vertices - mesh coordinates in array
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         * @param {number} [padX=0] - x padding
         * @param {number} [padY=0] - y padding
         */
        addVerticesMatrix(matrix: vf.Matrix, vertices: Float32Array, beginOffset: number, endOffset: number, padX?: number, padY?: number): void;
        /**
         * Adds other Bounds.
         *
         * @param {vf.Bounds} bounds - The Bounds to be added
         */
        addBounds(bounds: vf.Bounds): void;
        /**
         * Adds other Bounds, masked with Bounds.
         *
         * @param {vf.Bounds} bounds - The Bounds to be added.
         * @param {vf.Bounds} mask - TODO
         */
        addBoundsMask(bounds: vf.Bounds, mask: vf.Bounds): void;
        /**
         * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty.
         *
         * @param {vf.Bounds} bounds other bounds
         * @param {vf.Matrix} matrix multiplicator
         */
        addBoundsMatrix(bounds: vf.Bounds, matrix: vf.Matrix): void;
        /**
         * Adds other Bounds, masked with Rectangle.
         *
         * @param {vf.Bounds} bounds - TODO
         * @param {vf.Rectangle} area - TODO
         */
        addBoundsArea(bounds: vf.Bounds, area: vf.Rectangle): void;
        /**
         * Pads bounds object, making it grow in all directions.
         * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
         *
         * @param {number} [paddingX=0] - The horizontal padding amount.
         * @param {number} [paddingY=0] - The vertical padding amount.
         */
        pad(paddingX?: number, paddingY?: number): void;
        /**
         * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
         *
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         * @param {number} padX - padding X
         * @param {number} padY - padding Y
         */
        addFramePad(x0: number, y0: number, x1: number, y1: number, padX: number, padY: number): void;
    }
    class Container extends vf.DisplayObject {
        /**
         * To be overridden by the subclass
         * @method _renderCanvas
         * @memberof vf.Container#
         * @protected
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        protected _renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    class DisplayObject extends vf.utils.EventEmitter {
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Mixes all enumerable properties and methods from a source object to DisplayObject.
         *
         * @param {object} source The source of properties and methods to mix in.
         */
        static mixin(source: any): void;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Updates the object transform for rendering.
         *
         * TODO - Optimization pass!
         */
        updateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * Base destroy method for generic display objects. This will automatically
         * remove the display object from its parent Container as well as remove
         * all current event listeners and internal references. Do not use a DisplayObject
         * after calling `destroy()`.
         *
         */
        destroy(): void;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Renderer} renderer - A reference to the current renderer
     */
    class Extract {
        constructor(renderer: vf.Renderer);
        /**
         * Will return a HTML Image of the target
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
         * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
         * @return {HTMLImageElement} HTML Image of the target
         */
        image(target: vf.DisplayObject | vf.RenderTexture, format?: string, quality?: number): HTMLImageElement;
        /**
         * Will return a a base64 encoded string of this target. It works by calling
         *  `Extract.getCanvas` and then running toDataURL on that.
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
         * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
         * @return {string} A base64 encoded string of the texture.
         */
        base64(target: vf.DisplayObject | vf.RenderTexture, format?: string, quality?: number): string;
        /**
         * Creates a Canvas element, renders this target to it and then returns it.
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
         */
        canvas(target: vf.DisplayObject | vf.RenderTexture): HTMLCanvasElement;
        /**
         * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
         * order, with integer values between 0 and 255 (included).
         *
         * @param {vf.DisplayObject|vf.RenderTexture} target - A displayObject or renderTexture
         *  to convert. If left empty will use the main renderer
         * @return {Uint8Array} One-dimensional array containing the pixel data of the entire texture
         */
        pixels(target: vf.DisplayObject | vf.RenderTexture): Uint8Array;
        /**
         * Destroys the extract
         *
         */
        destroy(): void;
    }
    /**
     * @param {vf.GraphicsGeometry} [geometry=null] - Geometry to use, if omitted
     *        will create a new GraphicsGeometry instance.
     */
    class Graphics extends vf.Container {
        constructor(geometry?: vf.GraphicsGeometry);
        /**
         * Generates a canvas texture. Only available with **pixi.js-legacy** bundle
         * or the **@pixi/canvas-graphics** package.
         * @method generateCanvasTexture
         * @memberof vf.Graphics#
         * @param {vf.SCALE_MODES} scaleMode - The scale mode of the texture.
         * @param {number} resolution - The resolution of the texture.
         * @return {vf.Texture} The new texture.
         */
        generateCanvasTexture(scaleMode: vf.SCALE_MODES, resolution: number): vf.Texture;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Graphics objects.
         *
         * @member {vf.Shader} vf.Graphics#shader
         */
        shader: vf.Shader;
        /**
         * Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         *
         * @member {vf.State} vf.Graphics#state
         */
        state: vf.State;
        /**
         * Current fill style
         *
         * @member {vf.FillStyle} vf.Graphics#_fillStyle
         * @protected
         */
        protected _fillStyle: vf.FillStyle;
        /**
         * Current line style
         *
         * @member {vf.LineStyle} vf.Graphics#_lineStyle
         * @protected
         */
        protected _lineStyle: vf.LineStyle;
        /**
         * Current shape transform matrix.
         *
         * @member {vf.Matrix} vf.Graphics#_matrix
         * @protected
         */
        protected _matrix: vf.Matrix;
        /**
         * Current hole mode is enabled.
         *
         * @member {boolean} vf.Graphics#_holeMode
         * @default false
         * @protected
         */
        protected _holeMode: boolean;
        /**
         * Current path
         *
         * @member {vf.Polygon} vf.Graphics#currentPath
         * @protected
         */
        protected currentPath: vf.Polygon;
        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof vf.Graphics#
         * @default false
         */
        cacheAsBitmap: boolean;
        /**
         * A collections of batches! These can be drawn by the renderer batch system.
         *
         * @protected
         * @member {object[]} vf.Graphics#batches
         */
        protected batches: any[];
        /**
         * Update dirty for limiting calculating tints for batches.
         *
         * @protected
         * @member {number} vf.Graphics#batchTint
         * @default -1
         */
        protected batchTint: number;
        /**
         * Update dirty for limiting calculating batches.
         *
         * @protected
         * @member {number} vf.Graphics#batchDirty
         * @default -1
         */
        protected batchDirty: number;
        /**
         * Copy of the object vertex data.
         *
         * @protected
         * @member {Float32Array} vf.Graphics#vertexData
         */
        protected vertexData: Float32Array;
        /**
         * Renderer plugin for batching
         *
         * @member {string} vf.Graphics#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
         *
         * @member {vf.GraphicsGeometry}
         * @readonly
         */
        readonly geometry: vf.GraphicsGeometry;
        /**
         * Creates a new Graphics object with the same values as this one.
         * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
         *
         * @return {vf.Graphics} A clone of the graphics object
         */
        clone(): vf.Graphics;
        /**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * The tint applied to the graphic shape. This is a hex value. A value of
         * 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The current fill style.
         *
         * @member {vf.FillStyle}
         * @readonly
         */
        readonly fill: vf.FillStyle;
        /**
         * The current line style.
         *
         * @member {vf.LineStyle}
         * @readonly
         */
        readonly line: vf.LineStyle;
        /**
         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
         * method or the drawCircle() method.
         *
         * @method vf.Graphics#lineStyle
         * @param {number} [width=0] - width of the line to draw, will update the objects stored style
         * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        lineStyle(width?: number, color?: number, alpha?: number, alignment?: number, native?: boolean): vf.Graphics;
        /**
         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
         * method or the drawCircle() method.
         *
         * @method vf.Graphics#lineStyle
         * @param {number} [width=0] - width of the line to draw, will update the objects stored style
         * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        lineStyle(width?: number, color?: number, alpha?: number, alignment?: number, native?: boolean): vf.Graphics;
        /**
         * Like line style but support texture for line fill.
         *
         * @param {object} [options] - Collection of options for setting line style.
         * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
         * @param {vf.Texture} [options.texture=vf.Texture.WHITE] - Texture to use
         * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style.
         *  Default 0xFFFFFF if texture present.
         * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {vf.Matrix} [options.matrix=null] Texture matrix to transform texture
         * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        lineTextureStyle(options?: {
            width?: number;
            texture?: vf.Texture;
            color?: number;
            alpha?: number;
            matrix?: vf.Matrix;
            alignment?: number;
            native?: boolean;
        }): vf.Graphics;
        /**
         * Start a polygon object internally
         * @protected
         */
        protected startPoly(): void;
        /**
         * Finish the polygon object.
         * @protected
         */
        protected finishPoly(): void;
        /**
         * Moves the current drawing position to x, y.
         *
         * @param {number} x - the X coordinate to move to
         * @param {number} y - the Y coordinate to move to
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        moveTo(x: number, y: number): vf.Graphics;
        /**
         * Draws a line using the current line style from the current drawing position to (x, y);
         * The current drawing position is then set to (x, y).
         *
         * @param {number} x - the X coordinate to draw to
         * @param {number} y - the Y coordinate to draw to
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        lineTo(x: number, y: number): vf.Graphics;
        /**
         * Initialize the curve
         *
         * @protected
         * @param {number} [x=0]
         * @param {number} [y=0]
         */
        protected _initCurve(x?: number, y?: number): void;
        /**
         * Calculate the points for a quadratic bezier curve and then draws it.
         * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): vf.Graphics;
        /**
         * Calculate the points for a bezier curve and then draws it.
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} cpX2 - Second Control point x
         * @param {number} cpY2 - Second Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): vf.Graphics;
        /**
         * The arcTo() method creates an arc/curve between two tangents on the canvas.
         *
         * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
         *
         * @param {number} x1 - The x-coordinate of the first tangent point of the arc
         * @param {number} y1 - The y-coordinate of the first tangent point of the arc
         * @param {number} x2 - The x-coordinate of the end of the arc
         * @param {number} y2 - The y-coordinate of the end of the arc
         * @param {number} radius - The radius of the arc
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): vf.Graphics;
        /**
         * The arc method creates an arc/curve (used to create circles, or parts of circles).
         *
         * @param {number} cx - The x-coordinate of the center of the circle
         * @param {number} cy - The y-coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
         *  of the arc's circle)
         * @param {number} endAngle - The ending angle, in radians
         * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
         *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
         *  indicates counter-clockwise.
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): vf.Graphics;
        /**
         * Specifies a simple one-color fill that subsequent calls to other Graphics methods
         * (such as lineTo() or drawCircle()) use when drawing.
         *
         * @param {number} [color=0] - the color of the fill
         * @param {number} [alpha=1] - the alpha of the fill
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        beginFill(color?: number, alpha?: number): vf.Graphics;
        /**
         * Begin the texture fill
         *
         * @param {object} [options] - Object object.
         * @param {vf.Texture} [options.texture=vf.Texture.WHITE] - Texture to fill
         * @param {number} [options.color=0xffffff] - Background to fill behind texture
         * @param {number} [options.alpha=1] - Alpha of fill
         * @param {vf.Matrix} [options.matrix=null] - Transform matrix
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        beginTextureFill(options?: {
            texture?: vf.Texture;
            color?: number;
            alpha?: number;
            matrix?: vf.Matrix;
        }): vf.Graphics;
        /**
         * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
         *
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        endFill(): vf.Graphics;
        /**
         * Draws a rectangle shape.
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawRect(x: number, y: number, width: number, height: number): vf.Graphics;
        /**
         * Draw a rectangle shape with rounded/beveled corners.
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @param {number} radius - Radius of the rectangle corners
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): vf.Graphics;
        /**
         * Draws a circle.
         *
         * @param {number} x - The X coordinate of the center of the circle
         * @param {number} y - The Y coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawCircle(x: number, y: number, radius: number): vf.Graphics;
        /**
         * Draws an ellipse.
         *
         * @param {number} x - The X coordinate of the center of the ellipse
         * @param {number} y - The Y coordinate of the center of the ellipse
         * @param {number} width - The half width of the ellipse
         * @param {number} height - The half height of the ellipse
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawEllipse(x: number, y: number, width: number, height: number): vf.Graphics;
        /**
         * Draws a polygon using the given path.
         *
         * @param {number[]|vf.Point[]|vf.Polygon} path - The path data used to construct the polygon.
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawPolygon(...path: (number[] | vf.Point[] | vf.Polygon)[]): vf.Graphics;
        /**
         * Draw any shape.
         *
         * @param {vf.Circle|vf.Ellipse|vf.Polygon|vf.Rectangle|vf.RoundedRectangle} shape - Shape to draw
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawShape(shape: vf.Circle | vf.Ellipse | vf.Polygon | vf.Rectangle | vf.RoundedRectangle): vf.Graphics;
        /**
         * Draw a star shape with an arbitrary number of points.
         *
         * @param {number} x - Center X position of the star
         * @param {number} y - Center Y position of the star
         * @param {number} points - The number of points of the star, must be > 1
         * @param {number} radius - The outer radius of the star
         * @param {number} [innerRadius] - The inner radius between points, default half `radius`
         * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        drawStar(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number): vf.Graphics;
        /**
         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
         *
         * @return {vf.Graphics} This Graphics object. Good for chaining method calls
         */
        clear(): vf.Graphics;
        /**
         * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
         * masked with gl.scissor.
         *
         * @returns {boolean} True if only 1 rect.
         */
        isFastRect(): boolean;
        /**
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Populating batches for rendering
         *
         * @protected
         */
        protected _populateBatches(): void;
        /**
         * Renders the batches using the BathedRenderer plugin
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _renderBatched(renderer: vf.Renderer): void;
        /**
         * Renders the graphics direct
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _renderDirect(renderer: vf.Renderer): void;
        /**
         * Renders specific DrawCall
         *
         * @param {vf.Renderer} renderer
         * @param {vf.BatchDrawCall} drawCall
         */
        _renderDrawCallDirect(renderer: vf.Renderer, drawCall: vf.BatchDrawCall): void;
        /**
         * Resolves shader for direct rendering
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _resolveDirectShader(renderer: vf.Renderer): void;
        /**
         * Retrieves the bounds of the graphic shape as a rectangle object
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this graphics object
         *
         * @param {vf.Point} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.Point): boolean;
        /**
         * Recalcuate the tint by applying tin to batches using Graphics tint.
         * @protected
         */
        protected calculateTints(): void;
        /**
         * If there's a transform update or a change to the shape of the
         * geometry, recaculate the vertices.
         * @protected
         */
        protected calculateVertices(): void;
        /**
         * Closes the current path.
         *
         * @return {vf.Graphics} Returns itself.
         */
        closePath(): vf.Graphics;
        /**
         * Apply a matrix to the positional data.
         *
         * @param {vf.Matrix} matrix - Matrix to use for transform current shape.
         * @return {vf.Graphics} Returns itself.
         */
        setMatrix(matrix: vf.Matrix): vf.Graphics;
        /**
         * Begin adding holes to the last draw shape
         * IMPORTANT: holes must be fully inside a shape to work
         * Also weirdness ensues if holes overlap!
         * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
         * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
         * @return {vf.Graphics} Returns itself.
         */
        beginHole(): vf.Graphics;
        /**
         * End adding holes to the last draw shape
         * @return {vf.Graphics} Returns itself.
         */
        endHole(): vf.Graphics;
        /**
         * Destroys the Graphics object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     *
     * @param {vf.Circle|vf.Ellipse|vf.Polygon|vf.Rectangle|vf.RoundedRectangle} shape - The shape object to draw.
     * @param {vf.FillStyle} [fillStyle] - the width of the line to draw
     * @param {vf.LineStyle} [lineStyle] - the color of the line to draw
     * @param {vf.Matrix} [matrix] - Transform matrix
     */
    class GraphicsData {
        constructor(shape: vf.Circle | vf.Ellipse | vf.Polygon | vf.Rectangle | vf.RoundedRectangle, fillStyle?: vf.FillStyle, lineStyle?: vf.LineStyle, matrix?: vf.Matrix);
        /**
         * The shape object to draw.
         * @member {vf.Circle|vf.Ellipse|vf.Polygon|vf.Rectangle|vf.RoundedRectangle} vf.GraphicsData#shape
         */
        shape: vf.Circle | vf.Ellipse | vf.Polygon | vf.Rectangle | vf.RoundedRectangle;
        /**
         * The style of the line.
         * @member {vf.LineStyle} vf.GraphicsData#lineStyle
         */
        lineStyle: vf.LineStyle;
        /**
         * The style of the fill.
         * @member {vf.FillStyle} vf.GraphicsData#fillStyle
         */
        fillStyle: vf.FillStyle;
        /**
         * The transform matrix.
         * @member {vf.Matrix} vf.GraphicsData#matrix
         */
        matrix: vf.Matrix;
        /**
         * The type of the shape, see the Const.Shapes file for all the existing types,
         * @member {number} vf.GraphicsData#type
         */
        type: number;
        /**
         * The collection of points.
         * @member {number[]} vf.GraphicsData#points
         */
        points: number[];
        /**
         * The collection of holes.
         * @member {vf.GraphicsData[]} vf.GraphicsData#holes
         */
        holes: vf.GraphicsData[];
        /**
         * Creates a new GraphicsData object with the same values as this one.
         *
         * @return {vf.GraphicsData} Cloned GraphicsData object
         */
        clone(): vf.GraphicsData;
        /**
         * Destroys the Graphics data.
         *
         */
        destroy(): void;
    }
    class GraphicsGeometry extends vf.BatchGeometry {
        /**
         * An array of points to draw, 2 numbers per point
         *
         * @member {number[]} vf.GraphicsGeometry#points
         * @protected
         */
        protected points: number[];
        /**
         * The collection of colors
         *
         * @member {number[]} vf.GraphicsGeometry#colors
         * @protected
         */
        protected colors: number[];
        /**
         * The UVs collection
         *
         * @member {number[]} vf.GraphicsGeometry#uvs
         * @protected
         */
        protected uvs: number[];
        /**
         * The indices of the vertices
         *
         * @member {number[]} vf.GraphicsGeometry#indices
         * @protected
         */
        protected indices: number[];
        /**
         * Reference to the texture IDs.
         *
         * @member {number[]} vf.GraphicsGeometry#textureIds
         * @protected
         */
        protected textureIds: number[];
        /**
         * The collection of drawn shapes.
         *
         * @member {vf.GraphicsData[]} vf.GraphicsGeometry#graphicsData
         * @protected
         */
        protected graphicsData: vf.GraphicsData[];
        /**
         * Used to detect if the graphics object has changed.
         *
         * @member {number} vf.GraphicsGeometry#dirty
         * @protected
         */
        protected dirty: number;
        /**
         * Batches need to regenerated if the geometry is updated.
         *
         * @member {number} vf.GraphicsGeometry#batchDirty
         * @protected
         */
        protected batchDirty: number;
        /**
         * Used to check if the cache is dirty.
         *
         * @member {number} vf.GraphicsGeometry#cacheDirty
         * @protected
         */
        protected cacheDirty: number;
        /**
         * Used to detect if we cleared the graphicsData.
         *
         * @member {number} vf.GraphicsGeometry#clearDirty
         * @default 0
         * @protected
         */
        protected clearDirty: number;
        /**
         * List of current draw calls drived from the batches.
         *
         * @member {object[]} vf.GraphicsGeometry#drawCalls
         * @protected
         */
        protected drawCalls: any[];
        /**
         * Intermediate abstract format sent to batch system.
         * Can be converted to drawCalls or to batchable objects.
         *
         * @member {vf.graphicsUtils.BatchPart[]} vf.GraphicsGeometry#batches
         * @protected
         */
        protected batches: vf.graphicsUtils.BatchPart[];
        /**
         * Index of the last batched shape in the stack of calls.
         *
         * @member {number} vf.GraphicsGeometry#shapeIndex
         * @protected
         */
        protected shapeIndex: number;
        /**
         * Cached bounds.
         *
         * @member {vf.Bounds} vf.GraphicsGeometry#_bounds
         * @protected
         */
        protected _bounds: vf.Bounds;
        /**
         * The bounds dirty flag.
         *
         * @member {number} vf.GraphicsGeometry#boundsDirty
         * @protected
         */
        protected boundsDirty: number;
        /**
         * Padding to add to the bounds.
         *
         * @member {number} vf.GraphicsGeometry#boundsPadding
         * @default 0
         */
        boundsPadding: number;
        /**
         * Minimal distance between points that are considered different.
         * Affects line tesselation.
         *
         * @member {number} vf.GraphicsGeometry#closePointEps
         */
        closePointEps: number;
        /**
         * Get the current bounds of the graphic geometry.
         *
         * @member {vf.Bounds}
         * @readonly
         */
        readonly bounds: vf.Bounds;
        /**
         * Call if you changed graphicsData manually.
         * Empties all batch buffers.
         */
        invalidate(): void;
        /**
         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
         *
         * @return {vf.GraphicsGeometry} This GraphicsGeometry object. Good for chaining method calls
         */
        clear(): vf.GraphicsGeometry;
        /**
         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
         *
         * @param {vf.Circle|vf.Ellipse|vf.Polygon|vf.Rectangle|vf.RoundedRectangle} shape - The shape object to draw.
         * @param {vf.FillStyle} fillStyle - Defines style of the fill.
         * @param {vf.LineStyle} lineStyle - Defines style of the lines.
         * @param {vf.Matrix} matrix - Transform applied to the points of the shape.
         * @return {vf.GraphicsGeometry} Returns geometry for chaining.
         */
        drawShape(shape: vf.Circle | vf.Ellipse | vf.Polygon | vf.Rectangle | vf.RoundedRectangle, fillStyle: vf.FillStyle, lineStyle: vf.LineStyle, matrix: vf.Matrix): vf.GraphicsGeometry;
        /**
         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
         *
         * @param {vf.Circle|vf.Ellipse|vf.Polygon|vf.Rectangle|vf.RoundedRectangle} shape - The shape object to draw.
         * @param {vf.Matrix} matrix - Transform applied to the points of the shape.
         * @return {vf.GraphicsGeometry} Returns geometry for chaining.
         */
        drawHole(shape: vf.Circle | vf.Ellipse | vf.Polygon | vf.Rectangle | vf.RoundedRectangle, matrix: vf.Matrix): vf.GraphicsGeometry;
        /**
         * Destroys the GraphicsGeometry object.
         *
         */
        destroy(): void;
        /**
         * Check to see if a point is contained within this geometry.
         *
         * @param {vf.Point} point - Point to check if it's contained.
         * @return {Boolean} `true` if the point is contained within geometry.
         */
        containsPoint(point: vf.Point): boolean;
        /**
         * Generates intermediate batch data. Either gets converted to drawCalls
         * or used to convert to batch objects directly by the Graphics object.
         *
         * @param {boolean} [aloow32Indices] - Allow using 32-bit indices for preventings artefacts when more that 65535 vertices
         */
        updateBatches(aloow32Indices?: boolean): void;
        /**
         * Affinity check
         *
         * @param {vf.FillStyle | vf.LineStyle} styleA
         * @param {vf.FillStyle | vf.LineStyle} styleB
         */
        _compareStyles(styleA: vf.FillStyle | vf.LineStyle, styleB: vf.FillStyle | vf.LineStyle): void;
        /**
         * Test geometry for batching process.
         *
         * @protected
         */
        protected validateBatching(): void;
        /**
         * Offset the indices so that it works with the batcher.
         *
         * @protected
         */
        protected packBatches(): void;
        /**
         * Checks to see if this graphics geometry can be batched.
         * Currently it needs to be small enough and not contain any native lines.
         *
         * @protected
         */
        protected isBatchable(): void;
        /**
         * Converts intermediate batches data to drawCalls.
         *
         * @protected
         */
        protected buildDrawCalls(): void;
        /**
         * Packs attributes to single buffer.
         *
         * @protected
         */
        protected packAttributes(): void;
        /**
         * Process fill part of Graphics.
         *
         * @param {vf.GraphicsData} data
         * @protected
         */
        protected processFill(data: vf.GraphicsData): void;
        /**
         * Process line part of Graphics.
         *
         * @param {vf.GraphicsData} data
         * @protected
         */
        protected processLine(data: vf.GraphicsData): void;
        /**
         * Process the holes data.
         *
         * @param {vf.GraphicsData[]} holes - Holes to render
         * @protected
         */
        protected processHoles(holes: vf.GraphicsData[]): void;
        /**
         * Update the local bounds of the object. Expensive to use performance-wise.
         *
         * @protected
         */
        protected calculateBounds(): void;
        /**
         * Transform points using matrix.
         *
         * @protected
         * @param {number[]} points - Points to transform
         * @param {vf.Matrix} matrix - Transform matrix
         */
        protected transformPoints(points: number[], matrix: vf.Matrix): void;
        /**
         * Add colors.
         *
         * @protected
         * @param {number[]} colors - List of colors to add to
         * @param {number} color - Color to add
         * @param {number} alpha - Alpha to use
         * @param {number} size - Number of colors to add
         */
        protected addColors(colors: number[], color: number, alpha: number, size: number): void;
        /**
         * Add texture id that the shader/fragment wants to use.
         *
         * @protected
         * @param {number[]} textureIds
         * @param {number} id
         * @param {number} size
         */
        protected addTextureIds(textureIds: number[], id: number, size: number): void;
        /**
         * Generates the UVs for a shape.
         *
         * @protected
         * @param {number[]} verts - Vertices
         * @param {number[]} uvs - UVs
         * @param {vf.Texture} texture - Reference to Texture
         * @param {number} start - Index buffer start index.
         * @param {number} size - The size/length for index buffer.
         * @param {vf.Matrix} [matrix] - Optional transform for all points.
         */
        protected addUvs(verts: number[], uvs: number[], texture: vf.Texture, start: number, size: number, matrix?: vf.Matrix): void;
        /**
         * Modify uvs array according to position of texture region
         * Does not work with rotated or trimmed textures
         *
         * @param {number[]} uvs array
         * @param {vf.Texture} texture region
         * @param {number} start starting index for uvs
         * @param {number} size how many points to adjust
         */
        adjustUvs(uvs: number[], texture: vf.Texture, start: number, size: number): void;
        /**
         * The maximum number of points to consider an object "batchable",
         * able to be batched by the renderer's batch system.
         *
         * @memberof vf.GraphicsGeometry
         * @static
         * @member {number} BATCHABLE_SIZE
         * @default 100
         */
        static BATCHABLE_SIZE: number;
        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {vf.Buffer} vf.BatchGeometry#_buffer
         * @protected
         */
        protected _buffer: vf.Buffer;
        /**
         * Index buffer data
         *
         * @member {vf.Buffer} vf.BatchGeometry#_indexBuffer
         * @protected
         */
        protected _indexBuffer: vf.Buffer;
    }
    /**
     * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
     * the resolution is calculated based on the curve's length to ensure better visual quality.
     * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
     *
     * @static
     * @constant
     * @memberof vf
     * @name GRAPHICS_CURVES
     * @type {object}
     * @property {boolean} adaptive=false - flag indicating if the resolution should be adaptive
     * @property {number} maxLength=10 - maximal length of a single segment of the curve (if adaptive = false, ignored)
     * @property {number} minSegments=8 - minimal number of segments in the curve (if adaptive = false, ignored)
     * @property {number} maxSegments=2048 - maximal number of segments in the curve (if adaptive = false, ignored)
     */
    var GRAPHICS_CURVES: {
        adaptive: boolean;
        maxLength: number;
        minSegments: number;
        maxSegments: number;
    };
    class FillStyle {
        /**
         * The hex color value used when coloring the Graphics object.
         *
         * @member {number} vf.FillStyle#color
         * @default 0xFFFFFF
         */
        color: number;
        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number} vf.FillStyle#alpha
         * @default 1
         */
        alpha: number;
        /**
         * The texture to be used for the fill.
         *
         * @member {vf.Texture} vf.FillStyle#texture
         * @default 0
         */
        texture: vf.Texture;
        /**
         * The transform aplpied to the texture.
         *
         * @member {vf.Matrix} vf.FillStyle#matrix
         * @default null
         */
        matrix: vf.Matrix;
        /**
         * If the current fill is visible.
         *
         * @member {boolean} vf.FillStyle#visible
         * @default false
         */
        visible: boolean;
        /**
         * Clones the object
         *
         * @return {vf.FillStyle}
         */
        clone(): vf.FillStyle;
        /**
         * Reset
         */
        reset(): void;
        /**
         * Destroy and don't use after this
         */
        destroy(): void;
    }
    class LineStyle extends vf.FillStyle {
        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number} vf.LineStyle#width
         * @default 0
         */
        width: number;
        /**
         * The alignment of any lines drawn (0.5 = middle, 1 = outter, 0 = inner).
         *
         * @member {number} vf.LineStyle#alignment
         * @default 0
         */
        alignment: number;
        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean} vf.LineStyle#native
         * @default false
         */
        native: boolean;
        /**
         * Clones the object
         *
         * @return {vf.LineStyle}
         */
        clone(): vf.LineStyle;
        /**
         * Reset the line style to default.
         */
        reset(): void;
        /**
         * The hex color value used when coloring the Graphics object.
         *
         * @member {number} vf.FillStyle#color
         * @default 0xFFFFFF
         */
        color: number;
        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number} vf.FillStyle#alpha
         * @default 1
         */
        alpha: number;
        /**
         * The texture to be used for the fill.
         *
         * @member {vf.Texture} vf.FillStyle#texture
         * @default 0
         */
        texture: vf.Texture;
        /**
         * The transform aplpied to the texture.
         *
         * @member {vf.Matrix} vf.FillStyle#matrix
         * @default null
         */
        matrix: vf.Matrix;
        /**
         * If the current fill is visible.
         *
         * @member {boolean} vf.FillStyle#visible
         * @default false
         */
        visible: boolean;
        /**
         * Destroy and don't use after this
         */
        destroy(): void;
    }
    class Star extends vf.Polygon {
        constructor(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number);
        /**
         * An array of the points of this polygon
         *
         * @member {number[]} vf.Polygon#points
         */
        points: number[];
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.Polygon#type
         * @readOnly
         * @default vf.SHAPES.POLY
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean} vf.Polygon#closeStroke
         * @default true
         */
        closeStroke: boolean;
        /**
         * Creates a clone of this polygon
         *
         * @return {vf.Polygon} a copy of the polygon
         */
        clone(): vf.Polygon;
        /**
         * Checks whether the x and y coordinates passed to this function are contained within this polygon
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this polygon
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Generalized convenience utilities for Graphics.
     *
     * @namespace vf.graphicsUtils
     */
    namespace graphicsUtils {
        class BatchPart {
            /**
             * Begin batch part
             *
             * @param {vf.FillStyle | vf.LineStyle} style
             * @param {number} startIndex
             * @param {number} attribStart
             */
            begin(style: vf.FillStyle | vf.LineStyle, startIndex: number, attribStart: number): void;
            /**
             * End batch part
             *
             * @param {number} endIndex
             * @param {number} endAttrib
             */
            end(endIndex: number, endAttrib: number): void;
        }
        /**
         * Map of fill commands for each shape type.
         *
         * @memberof vf.graphicsUtils
         * @member {Object}
         */
        var FILL_COMMANDS: any;
        /**
         * Batch pool, stores unused batches for preventing allocations.
         *
         * @memberof vf.graphicsUtils
         * @type {Array<vf.graphicsUtils.BatchPart>}
         */
        var BATCH_POOL: vf.graphicsUtils.BatchPart[];
        /**
         * Draw call pool, stores unused draw calls for preventing allocations.
         *
         * @memberof vf.graphicsUtils
         * @type {Array<vf.BatchDrawCall>}
         */
        var DRAW_CALL_POOL: vf.BatchDrawCall[];
    }
    /**
     * This namespace contains a renderer plugin for handling mouse, pointer, and touch events.
     *
     * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
     * See {@link vf.CanvasRenderer#plugins} or {@link vf.Renderer#plugins}.
     * @namespace vf.interaction
     */
    namespace interaction {
        class InteractionData {
            /**
             * This point stores the global coords of where the touch/mouse event happened
             *
             * @member {vf.Point} vf.interaction.InteractionData#global
             */
            global: vf.Point;
            /**
             * The target Sprite that was interacted with
             *
             * @member {vf.Sprite} vf.interaction.InteractionData#target
             */
            target: vf.Sprite;
            /**
             * When passed to an event handler, this will be the original DOM Event that was captured
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
             * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
             * @member {MouseEvent|TouchEvent|PointerEvent} vf.interaction.InteractionData#originalEvent
             */
            originalEvent: MouseEvent | TouchEvent | PointerEvent;
            /**
             * Unique identifier for this interaction
             *
             * @member {number} vf.interaction.InteractionData#identifier
             */
            identifier: number;
            /**
             * Indicates whether or not the pointer device that created the event is the primary pointer.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
             * @type {Boolean}
             */
            isPrimary: boolean;
            /**
             * Indicates which button was pressed on the mouse or pointer device to trigger the event.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
             * @type {number}
             */
            button: number;
            /**
             * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
             * @type {number}
             */
            buttons: number;
            /**
             * The width of the pointer's contact along the x-axis, measured in CSS pixels.
             * radiusX of TouchEvents will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
             * @type {number}
             */
            width: number;
            /**
             * The height of the pointer's contact along the y-axis, measured in CSS pixels.
             * radiusY of TouchEvents will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
             * @type {number}
             */
            height: number;
            /**
             * The angle, in degrees, between the pointer device and the screen.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
             * @type {number}
             */
            tiltX: number;
            /**
             * The angle, in degrees, between the pointer device and the screen.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
             * @type {number}
             */
            tiltY: number;
            /**
             * The type of pointer that triggered the event.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
             * @type {string}
             */
            pointerType: string;
            /**
             * Pressure applied by the pointing device during the event. A Touch's force property
             * will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
             * @type {number}
             */
            pressure: number;
            /**
             * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
             * @type {number}
             */
            rotationAngle: number;
            /**
             * Twist of a stylus pointer.
             * @see https://w3c.github.io/pointerevents/#pointerevent-interface
             * @type {number}
             */
            twist: number;
            /**
             * Barrel pressure on a stylus pointer.
             * @see https://w3c.github.io/pointerevents/#pointerevent-interface
             * @type {number}
             */
            tangentialPressure: number;
            /**
             * The unique identifier of the pointer. It will be the same as `identifier`.
             * @readonly
             * @member {number}
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
             */
            readonly pointerId: number;
            /**
             * This will return the local coordinates of the specified displayObject for this InteractionData
             *
             * @param {vf.DisplayObject} displayObject - The DisplayObject that you would like the local
             *  coords off
             * @param {vf.Point} [point] - A Point object in which to store the value, optional (otherwise
             *  will create a new point)
             * @param {vf.Point} [globalPos] - A Point object containing your custom global coords, optional
             *  (otherwise will use the current global coords)
             * @return {vf.Point} A point containing the coordinates of the InteractionData position relative
             *  to the DisplayObject
             */
            getLocalPosition(displayObject: vf.DisplayObject, point?: vf.Point, globalPos?: vf.Point): vf.Point;
            /**
             * Copies properties from normalized event data.
             *
             * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
             */
            copyEvent(event: Touch | MouseEvent | PointerEvent): void;
            /**
             * Resets the data for pooling.
             */
            reset(): void;
        }
        class InteractionEvent {
            /**
             * Whether this event will continue propagating in the tree.
             *
             * Remaining events for the {@link stopsPropagatingAt} object
             * will still be dispatched.
             *
             * @member {boolean} vf.interaction.InteractionEvent#stopped
             */
            stopped: boolean;
            /**
             * The object which caused this event to be dispatched.
             * For listener callback see {@link vf.interaction.InteractionEvent.currentTarget}.
             *
             * @member {vf.DisplayObject} vf.interaction.InteractionEvent#target
             */
            target: vf.DisplayObject;
            /**
             * The object whose event listener’s callback is currently being invoked.
             *
             * @member {vf.DisplayObject} vf.interaction.InteractionEvent#currentTarget
             */
            currentTarget: vf.DisplayObject;
            /**
             * Type of the event
             *
             * @member {string} vf.interaction.InteractionEvent#type
             */
            type: string;
            /**
             * InteractionData related to this event
             *
             * @member {vf.interaction.InteractionData} vf.interaction.InteractionEvent#data
             */
            data: vf.interaction.InteractionData;
            /**
             * Prevents event from reaching any objects other than the current object.
             *
             */
            stopPropagation(): void;
            /**
             * Resets the event.
             */
            reset(): void;
        }
        /**
         * @param {vf.CanvasRenderer|vf.Renderer} renderer - A reference to the current renderer
         * @param {object} [options] - The options for the manager.
         * @param {boolean} [options.autoPreventDefault=true] - Should the manager automatically prevent default browser actions.
         * @param {number} [options.interactionFrequency=10] - Maximum requency (ms) at pointer over/out states will be checked.
         * @param {number} [options.useSystemTicker=true] - Whether to add {@link tickerUpdate} to {@link vf.Ticker.system}.
         */
        class InteractionManager extends vf.utils.EventEmitter {
            constructor(renderer: vf.CanvasRenderer | vf.Renderer, options?: {
                autoPreventDefault?: boolean;
                interactionFrequency?: number;
                useSystemTicker?: number;
            });
            /**
             * The renderer this interaction manager works for.
             *
             * @member {vf.AbstractRenderer} vf.interaction.InteractionManager#renderer
             */
            renderer: vf.AbstractRenderer;
            /**
             * Should default browser actions automatically be prevented.
             * Does not apply to pointer events for backwards compatibility
             * preventDefault on pointer events stops mouse events from firing
             * Thus, for every pointer event, there will always be either a mouse of touch event alongside it.
             *
             * @member {boolean} vf.interaction.InteractionManager#autoPreventDefault
             * @default true
             */
            autoPreventDefault: boolean;
            /**
             * Maximum requency in milliseconds at which pointer over/out states will be checked by {@link tickerUpdate}.
             *
             * @member {number} vf.interaction.InteractionManager#interactionFrequency
             * @default 10
             */
            interactionFrequency: number;
            /**
             * The mouse data
             *
             * @member {vf.interaction.InteractionData} vf.interaction.InteractionManager#mouse
             */
            mouse: vf.interaction.InteractionData;
            /**
             * An event data object to handle all the event tracking/dispatching
             *
             * @member {object} vf.interaction.InteractionManager#eventData
             */
            eventData: any;
            /**
             * The DOM element to bind to.
             *
             * @protected
             * @member {HTMLElement} vf.interaction.InteractionManager#interactionDOMElement
             */
            protected interactionDOMElement: HTMLElement;
            /**
             * This property determines if mousemove and touchmove events are fired only when the cursor
             * is over the object.
             * Setting to true will make things work more in line with how the DOM version works.
             * Setting to false can make things easier for things like dragging
             * It is currently set to false as this is how PixiJS used to work. This will be set to true in
             * future versions of pixi.
             *
             * @member {boolean} vf.interaction.InteractionManager#moveWhenInside
             * @default false
             */
            moveWhenInside: boolean;
            /**
             * Have events been attached to the dom element?
             *
             * @protected
             * @member {boolean} vf.interaction.InteractionManager#eventsAdded
             */
            protected eventsAdded: boolean;
            /**
             * Has the system ticker been added?
             *
             * @protected
             * @member {boolean} vf.interaction.InteractionManager#tickerAdded
             */
            protected tickerAdded: boolean;
            /**
             * Is the mouse hovering over the renderer?
             *
             * @protected
             * @member {boolean} vf.interaction.InteractionManager#mouseOverRenderer
             */
            protected mouseOverRenderer: boolean;
            /**
             * Does the device support touch events
             * https://www.w3.org/TR/touch-events/
             *
             * @readonly
             * @member {boolean} vf.interaction.InteractionManager#supportsTouchEvents
             */
            readonly supportsTouchEvents: boolean;
            /**
             * Does the device support pointer events
             * https://www.w3.org/Submission/pointer-events/
             *
             * @readonly
             * @member {boolean} vf.interaction.InteractionManager#supportsPointerEvents
             */
            readonly supportsPointerEvents: boolean;
            /**
             * Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor
             * values, objects are handled as dictionaries of CSS values for interactionDOMElement,
             * and functions are called instead of changing the CSS.
             * Default CSS cursor values are provided for 'default' and 'pointer' modes.
             * @member {Object.<string, Object>} vf.interaction.InteractionManager#cursorStyles
             */
            cursorStyles: {
                [key: string]: any;
            };
            /**
             * The mode of the cursor that is being used.
             * The value of this is a key from the cursorStyles dictionary.
             *
             * @member {string} vf.interaction.InteractionManager#currentCursorMode
             */
            currentCursorMode: string;
            /**
             * The current resolution / device pixel ratio.
             *
             * @member {number} vf.interaction.InteractionManager#resolution
             * @default 1
             */
            resolution: number;
            /**
             * Should the InteractionManager automatically add {@link tickerUpdate} to {@link vf.Ticker.system}.
             *
             * @member {boolean}
             * @default true
             */
            useSystemTicker: boolean;
            /**
             * Hit tests a point against the display tree, returning the first interactive object that is hit.
             *
             * @param {vf.Point} globalPoint - A point to hit test with, in global space.
             * @param {vf.Container} [root] - The root display object to start from. If omitted, defaults
             * to the last rendered root of the associated renderer.
             * @return {vf.DisplayObject} The hit display object, if any.
             */
            hitTest(globalPoint: vf.Point, root?: vf.Container): vf.DisplayObject;
            /**
             * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
             * other DOM elements on top of the renderers Canvas element. With this you'll be bale to delegate
             * another DOM element to receive those events.
             *
             * @param {HTMLElement} element - the DOM element which will receive mouse and touch events.
             * @param {number} [resolution=1] - The resolution / device pixel ratio of the new element (relative to the canvas).
             */
            setTargetElement(element: HTMLElement, resolution?: number): void;
            /**
             * Updates the state of interactive objects if at least {@link interactionFrequency}
             * milliseconds have passed since the last invocation.
             *
             * Invoked by a throttled ticker update from {@link vf.Ticker.system}.
             *
             * @param {number} deltaTime - time delta since the last call
             */
            tickerUpdate(deltaTime: number): void;
            /**
             * Updates the state of interactive objects.
             */
            update(): void;
            /**
             * Sets the current cursor mode, handling any callbacks or CSS style changes.
             *
             * @param {string} mode - cursor mode, a key from the cursorStyles dictionary
             */
            setCursorMode(mode: string): void;
            /**
             * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
             * resulting value is stored in the point. This takes into account the fact that the DOM
             * element could be scaled and positioned anywhere on the screen.
             *
             * @param  {vf.Point} point - the point that the result will be stored in
             * @param  {number} x - the x coord of the position to map
             * @param  {number} y - the y coord of the position to map
             */
            mapPositionToPoint(point: vf.Point, x: number, y: number): void;
            /**
             * This function is provides a neat way of crawling through the scene graph and running a
             * specified function on all interactive objects it finds. It will also take care of hit
             * testing the interactive objects and passes the hit across in the function.
             *
             * @protected
             * @param {vf.interaction.InteractionEvent} interactionEvent - event containing the point that
             *  is tested for collision
             * @param {vf.Container|vf.Sprite|vf.TilingSprite} displayObject - the displayObject
             *  that will be hit test (recursively crawls its children)
             * @param {Function} [func] - the function that will be called on each interactive object. The
             *  interactionEvent, displayObject and hit will be passed to the function
             * @param {boolean} [hitTest] - indicates whether we want to calculate hits
             *  or just iterate through all interactive objects
             */
            protected processInteractive(interactionEvent: vf.interaction.InteractionEvent, displayObject: vf.Container | vf.Sprite | vf.TilingSprite, func?: (...params: any[]) => any, hitTest?: boolean): void;
            /**
             * Destroys the interaction manager
             *
             */
            destroy(): void;
        }
    }
    /**
     * Interface for classes that represent a hit area.
     *
     * It is implemented by the following classes:
     * - {@link vf.Circle}
     * - {@link vf.Ellipse}
     * - {@link vf.Polygon}
     * - {@link vf.RoundedRectangle}
     *
     * @interface IHitArea
     * @memberof vf
     */
    interface IHitArea {
        /**
         * Checks whether the x and y coordinates given are contained within this area
         *
         * @method
         * @name contains
         * @memberof vf.IHitArea#
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this area
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Application plugin for supporting loader option. Installing the LoaderPlugin
     * is not necessary if using **pixi.js** or **pixi.js-legacy**.
     * @example
     * import {AppLoaderPlugin} from '@pixi/loaders';
     * import {Application} from '@pixi/app';
     * Application.registerPlugin(AppLoaderPlugin);
     * @class
     * @memberof vf
     */
    class AppLoaderPlugin {
    }
    /**
     * Plugin to be installed for handling specific Loader resources.
     *
     * @memberof vf
     * @typedef {object} ILoaderPlugin
     * @property {function} [add] - Function to call immediate after registering plugin.
     * @property {vf.Loader.loaderMiddleware} [pre] - Middleware function to run before load, the
     *           arguments for this are `(resource, next)`
     * @property {vf.Loader.loaderMiddleware} [use] - Middleware function to run after load, the
     *           arguments for this are `(resource, next)`
     */
    type ILoaderPlugin = {
        add?: (...params: any[]) => any;
        pre?: vf.Loader.loaderMiddleware;
        use?: vf.Loader.loaderMiddleware;
    };
    module Loader {
        /**
         * @memberof vf.Loader
         * @typedef {object} ICallbackID
         */
        type ICallbackID = any;
        /**
         * @memberof vf.Loader
         * @typedef {function} ISignalCallback
         * @param {function} callback - Callback function
         * @param {object} [context] - Context
         * @returns {ICallbackID} - CallbackID
         */
        type ISignalCallback = (callback: (...params: any[]) => any, context?: any) => ICallbackID;
        /**
         * @memberof vf.Loader
         * @typedef {function} ISignalDetach
         * @param {ICallbackID} id - CallbackID returned by `add`/`once` methods
         */
        type ISignalDetach = (id: ICallbackID) => void;
        /**
         * @memberof vf.Loader
         * @typedef ILoaderSignal
         * @property {ISignalCallback} add - Register callback
         * @property {ISignalCallback} once - Register oneshot callback
         * @property {ISignalDetach} detach - Detach specific callback by ID
         */
        type ILoaderSignal = {
            add: ISignalCallback;
            once: ISignalCallback;
            detach: ISignalDetach;
        };
        /**
         * @memberof vf.Loader
         * @callback loaderMiddleware
         * @param {vf.LoaderResource} resource
         * @param {function} next
         */
        type loaderMiddleware = (resource: vf.LoaderResource, next: (...params: any[]) => any) => void;
    }
    /**
     * The new loader, extends Resource Loader by Chad Engler: https://github.com/englercj/resource-loader
     *
     * ```js
     * const loader = vf.Loader.shared; // PixiJS exposes a premade instance for you to use.
     * //or
     * const loader = new vf.Loader(); // you can also create your own if you want
     *
     * const sprites = {};
     *
     * // Chainable `add` to enqueue a resource
     * loader.add('bunny', 'data/bunny.png')
     *       .add('spaceship', 'assets/spritesheet.json');
     * loader.add('scoreFont', 'assets/score.fnt');
     *
     * // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
     * // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
     * loader.pre(cachingMiddleware);
     *
     * // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
     * // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
     * loader.use(parsingMiddleware);
     *
     * // The `load` method loads the queue of resources, and calls the passed in callback called once all
     * // resources have loaded.
     * loader.load((loader, resources) => {
     *     // resources is an object where the key is the name of the resource loaded and the value is the resource object.
     *     // They have a couple default properties:
     *     // - `url`: The URL that the resource was loaded from
     *     // - `error`: The error that happened when trying to load (if any)
     *     // - `data`: The raw data that was loaded
     *     // also may contain other properties based on the middleware that runs.
     *     sprites.bunny = new vf.TilingSprite(resources.bunny.texture);
     *     sprites.spaceship = new vf.TilingSprite(resources.spaceship.texture);
     *     sprites.scoreFont = new vf.TilingSprite(resources.scoreFont.texture);
     * });
     *
     * // throughout the process multiple signals can be dispatched.
     * loader.onProgress.add(() => {}); // called once per loaded/errored file
     * loader.onError.add(() => {}); // called once per errored file
     * loader.onLoad.add(() => {}); // called once per loaded file
     * loader.onComplete.add(() => {}); // called once when the queued resources all load.
     * ```
     *
     * @see https://github.com/englercj/resource-loader
     *
     * @class Loader
     * @memberof vf
     * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
     * @param {number} [concurrency=10] - The number of resources to load concurrently.
     */
    class Loader {
        constructor(baseUrl?: string, concurrency?: number);
        /**
         * @memberof vf.Loader#
         * @description Dispatched when the loader begins to loading process.
         * @member {vf.Loader.ILoaderSignal} onStart
         */
        onStart: vf.Loader.ILoaderSignal;
        /**
         * @memberof vf.Loader#
         * @description Dispatched once per loaded or errored resource.
         * @member {vf.Loader.ILoaderSignal} onProgress
         */
        onProgress: vf.Loader.ILoaderSignal;
        /**
         * @memberof vf.Loader#
         * @description Dispatched once per errored resource.
         * @member {vf.Loader.ILoaderSignal} onError
         */
        onError: vf.Loader.ILoaderSignal;
        /**
         * @memberof vf.Loader#
         * @description Dispatched once per loaded resource.
         * @member {vf.Loader.ILoaderSignal} onLoad
         */
        onLoad: vf.Loader.ILoaderSignal;
        /**
         * @memberof vf.Loader#
         * @description Dispatched when completely loaded all resources.
         * @member {vf.Loader.ILoaderSignal} onComplete
         */
        onComplete: vf.Loader.ILoaderSignal;
        /**
         * Destroy the loader, removes references.
         * @memberof vf.Loader#
         * @method destroy
         * @public
         */
        public destroy(): void;
        /**
         * A premade instance of the loader that can be used to load resources.
         * @name shared
         * @type {vf.Loader}
         * @static
         * @memberof vf.Loader
         */
        static shared: vf.Loader;
        /**
         * Adds a Loader plugin for the global shared loader and all
         * new Loader instances created.
         *
         * @static
         * @method registerPlugin
         * @memberof vf.Loader
         * @param {vf.ILoaderPlugin} plugin - The plugin to add
         * @return {vf.Loader} Reference to vf.Loader for chaining
         */
        static registerPlugin(plugin: vf.ILoaderPlugin): vf.Loader;
    }
    /**
    * Reference to **{@link https://github.com/englercj/resource-loader
    * resource-loader}**'s Resource class.
    * @see http://englercj.github.io/resource-loader/Resource.html
    * @class LoaderResource
    * @memberof vf
     */
    class LoaderResource {
    }
    interface TextureLoader extends vf.ILoaderPlugin {
    }
    /**
     * Loader plugin for handling Texture resources.
     * @class
     * @memberof vf
     * @implements vf.ILoaderPlugin
     */
    class TextureLoader implements vf.ILoaderPlugin {
        /**
         * Called after a resource is loaded.
         * @see vf.Loader.loaderMiddleware
         * @param {vf.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: vf.LoaderResource, next: (...params: any[]) => any): void;
    }
    /**
     * Common interface for points. Both Point and ObservablePoint implement it
     * @memberof vf
     * @interface IPoint
     */
    interface IPoint {
        /**
         * X coord
         * @memberof vf.IPoint#
         * @member {number} x
         */
        x: number;
        /**
         * Y coord
         * @memberof vf.IPoint#
         * @member {number} y
         */
        y: number;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @method set
         * @memberof vf.IPoint#
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         */
        set(x?: number, y?: number): void;
        /**
         * Copies x and y from the given point
         * @method copyFrom
         * @memberof vf.IPoint#
         * @param {vf.IPoint} p - The point to copy from
         * @returns {this} Returns itself.
         */
        copyFrom(p: vf.IPoint): this;
        /**
         * Copies x and y into the given point
         * @method copyTo
         * @memberof vf.IPoint#
         * @param {vf.IPoint} p - The point to copy.
         * @returns {vf.IPoint} Given point with values updated
         */
        copyTo(p: vf.IPoint): vf.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @method equals
         * @memberof vf.IPoint#
         * @param {vf.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: vf.IPoint): boolean;
    }
    /**
     * @param {number} [a=1] - x scale
     * @param {number} [b=0] - x skew
     * @param {number} [c=0] - y skew
     * @param {number} [d=1] - y scale
     * @param {number} [tx=0] - x translation
     * @param {number} [ty=0] - y translation
     */
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        /**
         * @member {number} vf.Matrix#a
         * @default 1
         */
        a: number;
        /**
         * @member {number} vf.Matrix#b
         * @default 0
         */
        b: number;
        /**
         * @member {number} vf.Matrix#c
         * @default 0
         */
        c: number;
        /**
         * @member {number} vf.Matrix#d
         * @default 1
         */
        d: number;
        /**
         * @member {number} vf.Matrix#tx
         * @default 0
         */
        tx: number;
        /**
         * @member {number} vf.Matrix#ty
         * @default 0
         */
        ty: number;
        /**
         * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
         *
         * a = array[0]
         * b = array[1]
         * c = array[3]
         * d = array[4]
         * tx = array[2]
         * ty = array[5]
         *
         * @param {number[]} array - The array that the matrix will be populated from.
         */
        fromArray(array: number[]): void;
        /**
         * sets the matrix properties
         *
         * @param {number} a - Matrix component
         * @param {number} b - Matrix component
         * @param {number} c - Matrix component
         * @param {number} d - Matrix component
         * @param {number} tx - Matrix component
         * @param {number} ty - Matrix component
         *
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): vf.Matrix;
        /**
         * Creates an array from the current Matrix object.
         *
         * @param {boolean} transpose - Whether we need to transpose the matrix or not
         * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
         * @return {number[]} the newly created array which contains the matrix
         */
        toArray(transpose: boolean, out?: Float32Array): number[];
        /**
         * Get a new position with the current transformation applied.
         * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
         *
         * @param {vf.Point} pos - The origin
         * @param {vf.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {vf.Point} The new point, transformed through this matrix
         */
        apply(pos: vf.Point, newPos?: vf.Point): vf.Point;
        /**
         * Get a new position with the inverse of the current transformation applied.
         * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
         *
         * @param {vf.Point} pos - The origin
         * @param {vf.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {vf.Point} The new point, inverse-transformed through this matrix
         */
        applyInverse(pos: vf.Point, newPos?: vf.Point): vf.Point;
        /**
         * Translates the matrix on the x and y.
         *
         * @param {number} x How much to translate x by
         * @param {number} y How much to translate y by
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        translate(x: number, y: number): vf.Matrix;
        /**
         * Applies a scale transformation to the matrix.
         *
         * @param {number} x The amount to scale horizontally
         * @param {number} y The amount to scale vertically
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        scale(x: number, y: number): vf.Matrix;
        /**
         * Applies a rotation transformation to the matrix.
         *
         * @param {number} angle - The angle in radians.
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        rotate(angle: number): vf.Matrix;
        /**
         * Appends the given Matrix to this Matrix.
         *
         * @param {vf.Matrix} matrix - The matrix to append.
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        append(matrix: vf.Matrix): vf.Matrix;
        /**
         * Sets the matrix based on all the available properties
         *
         * @param {number} x - Position on the x axis
         * @param {number} y - Position on the y axis
         * @param {number} pivotX - Pivot on the x axis
         * @param {number} pivotY - Pivot on the y axis
         * @param {number} scaleX - Scale on the x axis
         * @param {number} scaleY - Scale on the y axis
         * @param {number} rotation - Rotation in radians
         * @param {number} skewX - Skew on the x axis
         * @param {number} skewY - Skew on the y axis
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): vf.Matrix;
        /**
         * Prepends the given Matrix to this Matrix.
         *
         * @param {vf.Matrix} matrix - The matrix to prepend
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        prepend(matrix: vf.Matrix): vf.Matrix;
        /**
         * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
         *
         * @param {vf.Transform} transform - The transform to apply the properties to.
         * @return {vf.Transform} The transform with the newly applied properties
         */
        decompose(transform: vf.Transform): vf.Transform;
        /**
         * Inverts this matrix
         *
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        invert(): vf.Matrix;
        /**
         * Resets this Matrix to an identity (default) matrix.
         *
         * @return {vf.Matrix} This matrix. Good for chaining method calls.
         */
        identity(): vf.Matrix;
        /**
         * Creates a new Matrix object with the same values as this one.
         *
         * @return {vf.Matrix} A copy of this matrix. Good for chaining method calls.
         */
        clone(): vf.Matrix;
        /**
         * Changes the values of the given matrix to be the same as the ones in this matrix
         *
         * @param {vf.Matrix} matrix - The matrix to copy to.
         * @return {vf.Matrix} The matrix given in parameter with its values updated.
         */
        copyTo(matrix: vf.Matrix): vf.Matrix;
        /**
         * Changes the values of the matrix to be the same as the ones in given matrix
         *
         * @param {vf.Matrix} matrix - The matrix to copy from.
         * @return {vf.Matrix} this
         */
        copyFrom(matrix: vf.Matrix): vf.Matrix;
        /**
         * A default (identity) matrix
         *
         * @static
         * @const
         * @member {vf.Matrix}
         */
        static IDENTITY: vf.Matrix;
        /**
         * A temp matrix
         *
         * @static
         * @const
         * @member {vf.Matrix}
         */
        static TEMP_MATRIX: vf.Matrix;
    }
    interface ObservablePoint extends IPoint {
    }
    /**
     * @param {Function} cb - callback when changed
     * @param {object} scope - owner of callback
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    class ObservablePoint implements IPoint {
        constructor(cb: (...params: any[]) => any, scope: any, x?: number, y?: number);
        /**
         * Creates a clone of this point.
         * The callback and scope params can be overidden otherwise they will default
         * to the clone object's values.
         *
         * @override
         * @param {Function} [cb=null] - callback when changed
         * @param {object} [scope=null] - owner of callback
         * @return {vf.ObservablePoint} a copy of the point
         */
        clone(cb?: (...params: any[]) => any, scope?: any): vf.ObservablePoint;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         * @returns {this} Returns itself.
         */
        set(x?: number, y?: number): this;
        /**
         * Copies x and y from the given point
         *
         * @param {vf.IPoint} p - The point to copy from.
         * @returns {this} Returns itself.
         */
        copyFrom(p: vf.IPoint): this;
        /**
         * Copies x and y into the given point
         *
         * @param {vf.IPoint} p - The point to copy.
         * @returns {vf.IPoint} Given point with values updated
         */
        copyTo(p: vf.IPoint): vf.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @param {vf.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: vf.IPoint): boolean;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        y: number;
    }
    interface Point extends IPoint {
    }
    /**
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */
    class Point implements IPoint {
        constructor(x?: number, y?: number);
        /**
         * @member {number} vf.Point#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} vf.Point#y
         * @default 0
         */
        y: number;
        /**
         * Creates a clone of this point
         *
         * @return {vf.Point} a copy of the point
         */
        clone(): vf.Point;
        /**
         * Copies x and y from the given point
         *
         * @param {vf.IPoint} p - The point to copy from
         * @returns {this} Returns itself.
         */
        copyFrom(p: vf.IPoint): this;
        /**
         * Copies x and y into the given point
         *
         * @param {vf.IPoint} p - The point to copy.
         * @returns {vf.IPoint} Given point with values updated
         */
        copyTo(p: vf.IPoint): vf.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @param {vf.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: vf.IPoint): boolean;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         * @returns {this} Returns itself.
         */
        set(x?: number, y?: number): this;
    }
    class Transform {
        /**
         * The world transformation matrix.
         *
         * @member {vf.Matrix} vf.Transform#worldTransform
         */
        worldTransform: vf.Matrix;
        /**
         * The local transformation matrix.
         *
         * @member {vf.Matrix} vf.Transform#localTransform
         */
        localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         *
         * @member {vf.ObservablePoint} vf.Transform#position
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         *
         * @member {vf.ObservablePoint} vf.Transform#scale
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         *
         * @member {vf.ObservablePoint} vf.Transform#pivot
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         *
         * @member {vf.ObservablePoint} vf.Transform#skew
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation amount.
         *
         * @protected
         * @member {number} vf.Transform#_rotation
         */
        protected _rotation: number;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} vf.Transform#_cx
         */
        protected _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} vf.Transform#_sx
         */
        protected _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} vf.Transform#_cy
         */
        protected _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} vf.Transform#_sy
         */
        protected _sy: number;
        /**
         * The locally unique ID of the local transform.
         *
         * @protected
         * @member {number} vf.Transform#_localID
         */
        protected _localID: number;
        /**
         * The locally unique ID of the local transform
         * used to calculate the current local transformation matrix.
         *
         * @protected
         * @member {number} vf.Transform#_currentLocalID
         */
        protected _currentLocalID: number;
        /**
         * The locally unique ID of the world transform.
         *
         * @protected
         * @member {number} vf.Transform#_worldID
         */
        protected _worldID: number;
        /**
         * The locally unique ID of the parent's world transform
         * used to calculate the current world transformation matrix.
         *
         * @protected
         * @member {number} vf.Transform#_parentID
         */
        protected _parentID: number;
        /**
         * Called when a value changes.
         *
         * @protected
         */
        protected onChange(): void;
        /**
         * Called when the skew or the rotation changes.
         *
         * @protected
         */
        protected updateSkew(): void;
        /**
         * Updates the local transformation matrix.
         */
        updateLocalTransform(): void;
        /**
         * Updates the local and the world transformation matrices.
         *
         * @param {vf.Transform} parentTransform - The parent transform
         */
        updateTransform(parentTransform: vf.Transform): void;
        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param {vf.Matrix} matrix - The matrix to decompose
         */
        setFromMatrix(matrix: vf.Matrix): void;
        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * A default (identity) transform
         *
         * @static
         * @constant
         * @member {vf.Transform}
         */
        static IDENTITY: vf.Transform;
    }
    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     *
     * @static
     * @constant
     * @name SHAPES
     * @memberof vf
     * @type {enum}
     * @property {number} POLY Polygon
     * @property {number} RECT Rectangle
     * @property {number} CIRC Circle
     * @property {number} ELIP Ellipse
     * @property {number} RREC Rounded Rectangle
     * @enum {number}
     */
    const enum SHAPES {
        POLY,
        RECT,
        CIRC,
        ELIP,
        RREC
    }
    /**
     * Two Pi.
     *
     * @static
     * @constant {number} PI_2
     * @memberof vf
     */
    var PI_2: number;
    /**
     * Conversion factor for converting radians to degrees.
     *
     * @static
     * @constant {number} RAD_TO_DEG
     * @memberof vf
     */
    var RAD_TO_DEG: number;
    /**
     * Conversion factor for converting degrees to radians.
     *
     * @static
     * @constant {number} DEG_TO_RAD
     * @memberof vf
     */
    var DEG_TO_RAD: number;
    /**
     * @memberof vf
     * @typedef {number} GD8Symmetry
     * @see vf.groupD8
     */
    type GD8Symmetry = number;
    /**
     * Implements the dihedral group D8, which is similar to
     * [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html};
     * D8 is the same but with diagonals, and it is used for texture
     * rotations.
     *
     * The directions the U- and V- axes after rotation
     * of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
     * and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
     *
     * **Origin:**<br>
     *  This is the small part of gameofbombs.com portal system. It works.
     *
     * @see vf.groupD8.E
     * @see vf.groupD8.SE
     * @see vf.groupD8.S
     * @see vf.groupD8.SW
     * @see vf.groupD8.W
     * @see vf.groupD8.NW
     * @see vf.groupD8.N
     * @see vf.groupD8.NE
     * @author Ivan @ivanpopelyshev
     * @namespace vf.groupD8
     * @memberof vf
     */
    namespace groupD8 {
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 0°       | East      |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var E: vf.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 45°↻     | Southeast |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var SE: vf.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 90°↻     | South     |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var S: vf.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 135°↻    | Southwest |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var SW: vf.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 180°     | West      |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var W: vf.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -135°/225°↻ | Northwest    |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var NW: vf.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -90°/270°↻  | North        |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var N: vf.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -45°/315°↻  | Northeast    |
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var NE: vf.GD8Symmetry;
        /**
         * Reflection about Y-axis.
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var MIRROR_VERTICAL: vf.GD8Symmetry;
        /**
         * Reflection about the main diagonal.
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var MAIN_DIAGONAL: vf.GD8Symmetry;
        /**
         * Reflection about X-axis.
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var MIRROR_HORIZONTAL: vf.GD8Symmetry;
        /**
         * Reflection about reverse diagonal.
         *
         * @memberof vf.groupD8
         * @constant {vf.GD8Symmetry}
         */
        var REVERSE_DIAGONAL: vf.GD8Symmetry;
        /**
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} ind - sprite rotation angle.
         * @return {vf.GD8Symmetry} The X-component of the U-axis
         *    after rotating the axes.
         */
        function uX(ind: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} ind - sprite rotation angle.
         * @return {vf.GD8Symmetry} The Y-component of the U-axis
         *    after rotating the axes.
         */
        function uY(ind: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} ind - sprite rotation angle.
         * @return {vf.GD8Symmetry} The X-component of the V-axis
         *    after rotating the axes.
         */
        function vX(ind: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} ind - sprite rotation angle.
         * @return {vf.GD8Symmetry} The Y-component of the V-axis
         *    after rotating the axes.
         */
        function vY(ind: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} rotation - symmetry whose opposite
         *   is needed. Only rotations have opposite symmetries while
         *   reflections don't.
         * @return {vf.GD8Symmetry} The opposite symmetry of `rotation`
         */
        function inv(rotation: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * Composes the two D8 operations.
         *
         * Taking `^` as reflection:
         *
         * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
         * |-------|-----|-----|-----|-----|------|-------|-------|-------|
         * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
         * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
         * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
         * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
         * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
         * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
         * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
         * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
         *
         * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} rotationSecond - Second operation, which
         *   is the row in the above cayley table.
         * @param {vf.GD8Symmetry} rotationFirst - First operation, which
         *   is the column in the above cayley table.
         * @return {vf.GD8Symmetry} Composed operation
         */
        function add(rotationSecond: vf.GD8Symmetry, rotationFirst: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * Reverse of `add`.
         *
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} rotationSecond - Second operation
         * @param {vf.GD8Symmetry} rotationFirst - First operation
         * @return {vf.GD8Symmetry} Result
         */
        function sub(rotationSecond: vf.GD8Symmetry, rotationFirst: vf.GD8Symmetry): vf.GD8Symmetry;
        /**
         * Adds 180 degrees to rotation, which is a commutative
         * operation.
         *
         * @memberof vf.groupD8
         * @param {number} rotation - The number to rotate.
         * @returns {number} Rotated number
         */
        function rotate180(rotation: number): number;
        /**
         * Checks if the rotation angle is vertical, i.e. south
         * or north. It doesn't work for reflections.
         *
         * @memberof vf.groupD8
         * @param {vf.GD8Symmetry} rotation - The number to check.
         * @returns {boolean} Whether or not the direction is vertical
         */
        function isVertical(rotation: vf.GD8Symmetry): boolean;
        /**
         * Approximates the vector `V(dx,dy)` into one of the
         * eight directions provided by `groupD8`.
         *
         * @memberof vf.groupD8
         * @param {number} dx - X-component of the vector
         * @param {number} dy - Y-component of the vector
         * @return {vf.GD8Symmetry} Approximation of the vector into
         *  one of the eight symmetries.
         */
        function byDirection(dx: number, dy: number): vf.GD8Symmetry;
        /**
         * Helps sprite to compensate texture packer rotation.
         *
         * @memberof vf.groupD8
         * @param {vf.Matrix} matrix - sprite world matrix
         * @param {vf.GD8Symmetry} rotation - The rotation factor to use.
         * @param {number} tx - sprite anchoring
         * @param {number} ty - sprite anchoring
         */
        function matrixAppendRotationInv(matrix: vf.Matrix, rotation: vf.GD8Symmetry, tx: number, ty: number): void;
    }
    /**
     * @param {number} [x=0] - The X coordinate of the center of this circle
     * @param {number} [y=0] - The Y coordinate of the center of this circle
     * @param {number} [radius=0] - The radius of the circle
     */
    class Circle {
        constructor(x?: number, y?: number, radius?: number);
        /**
         * @member {number} vf.Circle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} vf.Circle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} vf.Circle#radius
         * @default 0
         */
        radius: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.Circle#type
         * @readOnly
         * @default vf.SHAPES.CIRC
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Circle instance
         *
         * @return {vf.Circle} a copy of the Circle
         */
        clone(): vf.Circle;
        /**
         * Checks whether the x and y coordinates given are contained within this circle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Circle
         */
        contains(x: number, y: number): boolean;
        /**
         * Returns the framing rectangle of the circle as a Rectangle object
         *
         * @return {vf.Rectangle} the framing rectangle
         */
        getBounds(): vf.Rectangle;
    }
    /**
     * @param {number} [x=0] - The X coordinate of the center of this ellipse
     * @param {number} [y=0] - The Y coordinate of the center of this ellipse
     * @param {number} [halfWidth=0] - The half width of this ellipse
     * @param {number} [halfHeight=0] - The half height of this ellipse
     */
    class Ellipse {
        constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);
        /**
         * @member {number} vf.Ellipse#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} vf.Ellipse#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} vf.Ellipse#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} vf.Ellipse#height
         * @default 0
         */
        height: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.Ellipse#type
         * @readOnly
         * @default vf.SHAPES.ELIP
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Ellipse instance
         *
         * @return {vf.Ellipse} a copy of the ellipse
         */
        clone(): vf.Ellipse;
        /**
         * Checks whether the x and y coordinates given are contained within this ellipse
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coords are within this ellipse
         */
        contains(x: number, y: number): boolean;
        /**
         * Returns the framing rectangle of the ellipse as a Rectangle object
         *
         * @return {vf.Rectangle} the framing rectangle
         */
        getBounds(): vf.Rectangle;
    }
    /**
     * @param {vf.IPoint[]|number[]} points - This can be an array of Points
     *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
     *  the arguments passed can be all the points of the polygon e.g.
     *  `new vf.Polygon(new vf.Point(), new vf.Point(), ...)`, or the arguments passed can be flat
     *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
     */
    class Polygon {
        constructor(...points: (vf.IPoint[] | number[])[]);
        /**
         * An array of the points of this polygon
         *
         * @member {number[]} vf.Polygon#points
         */
        points: number[];
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.Polygon#type
         * @readOnly
         * @default vf.SHAPES.POLY
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean} vf.Polygon#closeStroke
         * @default true
         */
        closeStroke: boolean;
        /**
         * Creates a clone of this polygon
         *
         * @return {vf.Polygon} a copy of the polygon
         */
        clone(): vf.Polygon;
        /**
         * Checks whether the x and y coordinates passed to this function are contained within this polygon
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this polygon
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Size object, contains width and height
     *
     * @memberof vf
     * @typedef {object} ISize
     * @property {number} width - Width component
     * @property {number} height - Height component
     */
    type ISize = {
        width: number;
        height: number;
    };
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
     * @param {number} [width=0] - The overall width of this rectangle
     * @param {number} [height=0] - The overall height of this rectangle
     */
    class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
         * @member {number} vf.Rectangle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} vf.Rectangle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} vf.Rectangle#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} vf.Rectangle#height
         * @default 0
         */
        height: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.Rectangle#type
         * @readOnly
         * @default vf.SHAPES.RECT
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * returns the left edge of the rectangle
         *
         * @member {number}
         */
        left: number;
        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */
        right: number;
        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */
        top: number;
        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */
        bottom: number;
        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         * @member {vf.Rectangle}
         * @return {vf.Rectangle} An empty rectangle
         */
        static EMPTY: vf.Rectangle;
        /**
         * Creates a clone of this Rectangle
         *
         * @return {vf.Rectangle} a copy of the rectangle
         */
        clone(): vf.Rectangle;
        /**
         * Copies another rectangle to this one.
         *
         * @param {vf.Rectangle} rectangle - The rectangle to copy from.
         * @return {vf.Rectangle} Returns itself.
         */
        copyFrom(rectangle: vf.Rectangle): vf.Rectangle;
        /**
         * Copies this rectangle to another one.
         *
         * @param {vf.Rectangle} rectangle - The rectangle to copy to.
         * @return {vf.Rectangle} Returns given parameter.
         */
        copyTo(rectangle: vf.Rectangle): vf.Rectangle;
        /**
         * Checks whether the x and y coordinates given are contained within this Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rectangle
         */
        contains(x: number, y: number): boolean;
        /**
         * Pads the rectangle making it grow in all directions.
         * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
         *
         * @param {number} [paddingX=0] - The horizontal padding amount.
         * @param {number} [paddingY=0] - The vertical padding amount.
         * @return {vf.Rectangle} Returns itself.
         */
        pad(paddingX?: number, paddingY?: number): vf.Rectangle;
        /**
         * Fits this rectangle around the passed one.
         *
         * @param {vf.Rectangle} rectangle - The rectangle to fit.
         * @return {vf.Rectangle} Returns itself.
         */
        fit(rectangle: vf.Rectangle): vf.Rectangle;
        /**
         * Enlarges rectangle that way its corners lie on grid
         *
         * @param {number} [resolution=1] resolution
         * @param {number} [eps=0.001] precision
         * @return {vf.Rectangle} Returns itself.
         */
        ceil(resolution?: number, eps?: number): vf.Rectangle;
        /**
         * Enlarges this rectangle to include the passed rectangle.
         *
         * @param {vf.Rectangle} rectangle - The rectangle to include.
         * @return {vf.Rectangle} Returns itself.
         */
        enlarge(rectangle: vf.Rectangle): vf.Rectangle;
    }
    /**
     * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
     * @param {number} [width=0] - The overall width of this rounded rectangle
     * @param {number} [height=0] - The overall height of this rounded rectangle
     * @param {number} [radius=20] - Controls the radius of the rounded corners
     */
    class RoundedRectangle {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
        /**
         * @member {number} vf.RoundedRectangle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} vf.RoundedRectangle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} vf.RoundedRectangle#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} vf.RoundedRectangle#height
         * @default 0
         */
        height: number;
        /**
         * @member {number} vf.RoundedRectangle#radius
         * @default 20
         */
        radius: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} vf.RoundedRectangle#type
         * @readonly
         * @default vf.SHAPES.RREC
         * @see vf.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Rounded Rectangle
         *
         * @return {vf.RoundedRectangle} a copy of the rounded rectangle
         */
        clone(): vf.RoundedRectangle;
        /**
         * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * @param {vf.Geometry} geometry  the geometry the mesh will use
     * @param {vf.MeshMaterial} shader  the shader the mesh will use
     * @param {vf.State} [state] the state that the WebGL context is required to be in to render the mesh
     *        if no state is provided, uses {@link vf.State.for2d} to create a 2D state for PixiJS.
     * @param {number} [drawMode=vf.DRAW_MODES.TRIANGLES] the drawMode, can be any of the vf.DRAW_MODES consts
     */
    class Mesh extends vf.Container {
        constructor(geometry: vf.Geometry, shader: vf.MeshMaterial, state?: vf.State, drawMode?: number);
        /**
         * Renders the object using the Canvas renderer
         *
         * @protected
         * @method _renderCanvas
         * @memberof vf.Mesh#
         * @param {vf.CanvasRenderer} renderer - The canvas renderer.
         */
        protected _renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {vf.Geometry} vf.Mesh#geometry
         * @readonly
         */
        readonly geometry: vf.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {vf.Shader|vf.MeshMaterial} vf.Mesh#shader
         */
        shader: vf.Shader | vf.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {vf.State} vf.Mesh#state
         */
        state: vf.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link vf.DRAW_MODES} constants.
         *
         * @member {number} vf.Mesh#drawMode
         * @see vf.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} vf.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} vf.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly uvBuffer: vf.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly verticesBuffer: vf.Buffer;
        /**
         * Alias for {@link vf.Mesh#shader}.
         * @member {vf.MeshMaterial}
         */
        material: vf.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: vf.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: vf.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for vf.DRAW_MODES.TRIANGLES.
         *
         * @param {vf.IPoint} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The maximum number of vertices to consider batchable. Generally, the complexity
         * of the geometry.
         * @memberof vf.Mesh
         * @static
         * @member {number} BATCHABLE_SIZE
         */
        static BATCHABLE_SIZE: number;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Buffer} uvBuffer - Buffer with normalized uv's
     * @param {vf.TextureMatrix} uvMatrix - Material UV matrix
     */
    class MeshBatchUvs {
        constructor(uvBuffer: vf.Buffer, uvMatrix: vf.TextureMatrix);
        /**
         * Buffer with normalized UV's
         * @member {vf.Buffer} vf.MeshBatchUvs#uvBuffer
         */
        uvBuffer: vf.Buffer;
        /**
         * Material UV matrix
         * @member {vf.TextureMatrix} vf.MeshBatchUvs#uvMatrix
         */
        uvMatrix: vf.TextureMatrix;
        /**
         * UV Buffer data
         * @member {Float32Array} vf.MeshBatchUvs#data
         * @readonly
         */
        readonly data: Float32Array;
        /**
         * updates
         *
         * @param {boolean} [forceUpdate] - force the update
         */
        update(forceUpdate?: boolean): void;
    }
    /**
     * @param {Float32Array|number[]} [vertices] - Positional data on geometry.
     * @param {Float32Array|number[]} [uvs] - Texture UVs.
     * @param {Uint16Array|number[]} [index] - IndexBuffer
     */
    class MeshGeometry extends vf.Geometry {
        constructor(vertices?: Float32Array | number[], uvs?: Float32Array | number[], index?: Uint16Array | number[]);
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} vf.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} vf.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {vf.TYPES} to see the ones available
         * @param {Number} [stride] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start] How far into the array to start reading values (used for interleaving data)
         * @param {boolean} [instance=false] Instancing flag
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: vf.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean): vf.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {vf.Attribute} the attribute requested.
         */
        getAttribute(id: string): vf.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {vf.Buffer} the buffer requested.
         */
        getBuffer(id: string): vf.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: vf.Buffer | number[]): vf.Geometry;
        /**
         * returns the index buffer
         *
         * @return {vf.Buffer} the index buffer.
         */
        getIndex(): vf.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        interleave(): vf.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {vf.Geometry} a new clone of this geometry
         */
        clone(): vf.Geometry;
    }
    /**
     * @param {vf.Texture} uSampler - Texture that material uses to render.
     * @param {object} [options] - Additional options
     * @param {number} [options.alpha=1] - Default alpha.
     * @param {number} [options.tint=0xFFFFFF] - Default tint.
     * @param {string} [options.pluginName='batch'] - Renderer plugin for batching.
     * @param {vf.Program} [options.program=0xFFFFFF] - Custom program.
     * @param {object} [options.uniforms] - Custom uniforms.
     */
    class MeshMaterial extends vf.Shader {
        constructor(uSampler: vf.Texture, options?: {
            alpha?: number;
            tint?: number;
            pluginName?: string;
            program?: vf.Program;
            uniforms?: any;
        });
        /**
         * Renders the mesh using the Canvas renderer
         *
         * @protected
         * @method render
         * @memberof vf.MeshMaterial#
         * @param {vf.CanvasRenderer} renderer - The canvas renderer.
         * @param {vf.Mesh} mesh - Mesh to render.
         */
        protected render(renderer: vf.CanvasRenderer, mesh: vf.Mesh): void;
        /**
         * TextureMatrix instance for this Mesh, used to track Texture changes
         *
         * @member {vf.TextureMatrix} vf.MeshMaterial#uvMatrix
         * @readonly
         */
        readonly uvMatrix: vf.TextureMatrix;
        /**
         * `true` if shader can be batch with the renderer's batch system.
         * @member {boolean} vf.MeshMaterial#batchable
         * @default true
         */
        batchable: boolean;
        /**
         * Renderer plugin for batching
         *
         * @member {string} vf.MeshMaterial#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * Reference to the texture being rendered.
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * This gets automatically set by the object using this.
         *
         * @default 1
         * @member {number}
         */
        alpha: number;
        /**
         * Multiply tint for the material.
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * Gets called automatically by the Mesh. Intended to be overridden for custom
         * MeshMaterial objects.
         */
        update(): void;
        /**
         * Program that the shader uses
         *
         * @member {vf.Program} vf.Shader#program
         */
        program: vf.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * @param {vf.Texture} texture - The texture to use on the NineSlicePlane.
     * @param {number} [leftWidth=10] size of the left vertical bar (A)
     * @param {number} [topHeight=10] size of the top horizontal bar (C)
     * @param {number} [rightWidth=10] size of the right vertical bar (B)
     * @param {number} [bottomHeight=10] size of the bottom horizontal bar (D)
     */
    class NineSlicePlane extends vf.SimplePlane {
        constructor(texture: vf.Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);
        /**
         * Cached tint value so we can tell when the tint is changed.
         * @memberof vf.NineSlicePlane#
         * @member {number} _cachedTint
         * @protected
         */
        protected _cachedTint: number;
        /**
         * Cached tinted texture.
         * @memberof vf.NineSlicePlane#
         * @member {HTMLCanvasElement} _tintedCanvas
         * @protected
         */
        protected _tintedCanvas: HTMLCanvasElement;
        /**
         * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number} vf.NineSlicePlane#_width
         * @override
         */
        _width: number;
        /**
         * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number} vf.NineSlicePlane#_height
         * @override
         */
        _height: number;
        /**
         * Updates the horizontal vertices.
         *
         */
        updateHorizontalVertices(): void;
        /**
         * Updates the vertical vertices.
         *
         */
        updateVerticalVertices(): void;
        /**
         * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number}
         */
        height: number;
        /**
         * The width of the left column
         *
         * @member {number}
         */
        leftWidth: number;
        /**
         * The width of the right column
         *
         * @member {number}
         */
        rightWidth: number;
        /**
         * The height of the top row
         *
         * @member {number}
         */
        topHeight: number;
        /**
         * The height of the bottom row
         *
         * @member {number}
         */
        bottomHeight: number;
        /**
         * Refreshes NineSlicePlane coords. All of them.
         */
        _refresh(): void;
        /**
         * Method used for overrides, to do something in case texture frame was changed.
         * Meshes based on plane can override it and change more details based on texture.
         */
        textureUpdated(): void;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {vf.Geometry} vf.Mesh#geometry
         * @readonly
         */
        readonly geometry: vf.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {vf.Shader|vf.MeshMaterial} vf.Mesh#shader
         */
        shader: vf.Shader | vf.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {vf.State} vf.Mesh#state
         */
        state: vf.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link vf.DRAW_MODES} constants.
         *
         * @member {number} vf.Mesh#drawMode
         * @see vf.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} vf.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} vf.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly uvBuffer: vf.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly verticesBuffer: vf.Buffer;
        /**
         * Alias for {@link vf.Mesh#shader}.
         * @member {vf.MeshMaterial}
         */
        material: vf.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: vf.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: vf.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for vf.DRAW_MODES.TRIANGLES.
         *
         * @param {vf.IPoint} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Texture} [texture=Texture.EMPTY] - The texture to use
     * @param {Float32Array} [vertices] - if you want to specify the vertices
     * @param {Float32Array} [uvs] - if you want to specify the uvs
     * @param {Uint16Array} [indices] - if you want to specify the indices
     * @param {number} [drawMode] - the drawMode, can be any of the Mesh.DRAW_MODES consts
     */
    class SimpleMesh extends vf.Mesh {
        constructor(texture?: vf.Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);
        /**
         * Triangles in canvas mode are automatically antialiased, use this value to force triangles
         * to overlap a bit with each other. To set the global default, set {@link vf.settings.MESH_CANVAS_PADDING}
         *
         * @see vf.settings.MESH_CANVAS_PADDING
         * @member {number} canvasPadding
         * @memberof vf.SimpleMesh#
         * @default 0
         */
        canvasPadding: number;
        /**
         * upload vertices buffer each frame
         * @member {boolean} vf.SimpleMesh#autoUpdate
         */
        autoUpdate: boolean;
        /**
         * Collection of vertices data.
         * @member {Float32Array}
         */
        vertices: Float32Array;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {vf.Geometry} vf.Mesh#geometry
         * @readonly
         */
        readonly geometry: vf.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {vf.Shader|vf.MeshMaterial} vf.Mesh#shader
         */
        shader: vf.Shader | vf.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {vf.State} vf.Mesh#state
         */
        state: vf.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link vf.DRAW_MODES} constants.
         *
         * @member {number} vf.Mesh#drawMode
         * @see vf.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} vf.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} vf.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly uvBuffer: vf.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly verticesBuffer: vf.Buffer;
        /**
         * Alias for {@link vf.Mesh#shader}.
         * @member {vf.MeshMaterial}
         */
        material: vf.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: vf.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: vf.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for vf.DRAW_MODES.TRIANGLES.
         *
         * @param {vf.IPoint} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Texture} texture - The texture to use on the SimplePlane.
     * @param {number} verticesX - The number of vertices in the x-axis
     * @param {number} verticesY - The number of vertices in the y-axis
     */
    class SimplePlane extends vf.Mesh {
        constructor(texture: vf.Texture, verticesX: number, verticesY: number);
        /**
         * Method used for overrides, to do something in case texture frame was changed.
         * Meshes based on plane can override it and change more details based on texture.
         */
        textureUpdated(): void;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {vf.Geometry} vf.Mesh#geometry
         * @readonly
         */
        readonly geometry: vf.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {vf.Shader|vf.MeshMaterial} vf.Mesh#shader
         */
        shader: vf.Shader | vf.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {vf.State} vf.Mesh#state
         */
        state: vf.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link vf.DRAW_MODES} constants.
         *
         * @member {number} vf.Mesh#drawMode
         * @see vf.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} vf.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} vf.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly uvBuffer: vf.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly verticesBuffer: vf.Buffer;
        /**
         * Alias for {@link vf.Mesh#shader}.
         * @member {vf.MeshMaterial}
         */
        material: vf.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: vf.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: vf.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for vf.DRAW_MODES.TRIANGLES.
         *
         * @param {vf.IPoint} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Texture} texture - The texture to use on the rope.
     * @param {vf.Point[]} points - An array of {@link vf.Point} objects to construct this rope.
     * @param {number} [textureScale=0] - Optional. Positive values scale rope texture
     * keeping its aspect ratio. You can reduce alpha channel artifacts by providing a larger texture
     * and downsampling here. If set to zero, texture will be streched instead.
     */
    class SimpleRope extends vf.Mesh {
        constructor(texture: vf.Texture, points: vf.Point[], textureScale?: number);
        /**
         * re-calculate vertices by rope points each frame
         *
         * @member {boolean} vf.SimpleRope#autoUpdate
         */
        autoUpdate: boolean;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {vf.Geometry} vf.Mesh#geometry
         * @readonly
         */
        readonly geometry: vf.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {vf.Shader|vf.MeshMaterial} vf.Mesh#shader
         */
        shader: vf.Shader | vf.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {vf.State} vf.Mesh#state
         */
        state: vf.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link vf.DRAW_MODES} constants.
         *
         * @member {number} vf.Mesh#drawMode
         * @see vf.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} vf.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} vf.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly uvBuffer: vf.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {vf.Buffer}
         * @readonly
         */
        readonly verticesBuffer: vf.Buffer;
        /**
         * Alias for {@link vf.Mesh#shader}.
         * @member {vf.MeshMaterial}
         */
        material: vf.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default vf.BLEND_MODES.NORMAL;
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: vf.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {vf.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: vf.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for vf.DRAW_MODES.TRIANGLES.
         *
         * @param {vf.IPoint} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {number} [width=200] - The width (i.e., thickness) of the rope.
     * @param {vf.Point[]} [points] - An array of {@link vf.Point} objects to construct this rope.
     * @param {number} [textureScale=0] - By default the rope texture will be stretched to match
     *     rope length. If textureScale is positive this value will be treated as a scaling
     *     factor and the texture will preserve its aspect ratio instead. To create a tiling rope
     *     set baseTexture.wrapMode to {@link vf.WRAP_MODES.REPEAT} and use a power of two texture,
     *     then set textureScale=1 to keep the original texture pixel size.
     *     In order to reduce alpha channel artifacts provide a larger texture and downsample -
     *     i.e. set textureScale=0.5 to scale it down twice.
     */
    class RopeGeometry extends vf.MeshGeometry {
        constructor(width?: number, points?: vf.Point[], textureScale?: number);
        /**
         * An array of points that determine the rope
         * @member {vf.Point[]} vf.RopeGeometry#points
         */
        points: vf.Point[];
        /**
         * The width (i.e., thickness) of the rope.
         * @member {number} vf.RopeGeometry#_width
         * @readOnly
         */
        readonly _width: number;
        /**
         * Rope texture scale, if zero then the rope texture is stretched.
         * @member {number} vf.RopeGeometry#textureScale
         * @readOnly
         */
        readonly textureScale: number;
        /**
         * The width (i.e., thickness) of the rope.
         * @member {number}
         * @readOnly
         */
        readonly width: number;
        /**
         * refreshes vertices of Rope mesh
         */
        updateVertices(): void;
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} vf.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} vf.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=vf.TYPES.FLOAT] what type of number is the attribute. Check {vf.TYPES} to see the ones available
         * @param {Number} [stride] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start] How far into the array to start reading values (used for interleaving data)
         * @param {boolean} [instance=false] Instancing flag
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: vf.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number, instance?: boolean): vf.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {vf.Attribute} the attribute requested.
         */
        getAttribute(id: string): vf.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {vf.Buffer} the buffer requested.
         */
        getBuffer(id: string): vf.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {vf.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: vf.Buffer | number[]): vf.Geometry;
        /**
         * returns the index buffer
         *
         * @return {vf.Buffer} the index buffer.
         */
        getIndex(): vf.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {vf.Geometry} returns self, useful for chaining.
         */
        interleave(): vf.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {vf.Geometry} a new clone of this geometry
         */
        clone(): vf.Geometry;
    }
    /**
     * @param {number} [maxSize=1500] - The maximum number of particles that can be rendered by the container.
     *  Affects size of allocated buffers.
     * @param {object} [properties] - The properties of children that should be uploaded to the gpu and applied.
     * @param {boolean} [properties.vertices=false] - When true, vertices be uploaded and applied.
     *                  if sprite's ` scale/anchor/trim/frame/orig` is dynamic, please set `true`.
     * @param {boolean} [properties.position=true] - When true, position be uploaded and applied.
     * @param {boolean} [properties.rotation=false] - When true, rotation be uploaded and applied.
     * @param {boolean} [properties.uvs=false] - When true, uvs be uploaded and applied.
     * @param {boolean} [properties.tint=false] - When true, alpha and tint be uploaded and applied.
     * @param {number} [batchSize=16384] - Number of particles per batch. If less than maxSize, it uses maxSize instead.
     * @param {boolean} [autoResize=false] If true, container allocates more batches in case
     *  there are more than `maxSize` particles.
     */
    class ParticleContainer extends vf.Container {
        constructor(maxSize?: number, properties?: {
            vertices?: boolean;
            position?: boolean;
            rotation?: boolean;
            uvs?: boolean;
            tint?: boolean;
        }, batchSize?: number, autoResize?: boolean);
        /**
         * @member {boolean} vf.ParticleContainer#interactiveChildren
         *
         */
        interactiveChildren: boolean;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `vf.BLEND_MODES.NORMAL`
         * to reset the blend mode.
         *
         * @member {number} vf.ParticleContainer#blendMode
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true, container allocates more batches in case there are more than `maxSize` particles.
         * @member {boolean} vf.ParticleContainer#autoResize
         * @default false
         */
        autoResize: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * Default to true here as performance is usually the priority for particles.
         *
         * @member {boolean} vf.ParticleContainer#roundPixels
         * @default true
         */
        roundPixels: boolean;
        /**
         * The texture used to render the children.
         *
         * @readonly
         * @member {vf.BaseTexture} vf.ParticleContainer#baseTexture
         */
        readonly baseTexture: vf.BaseTexture;
        /**
         * Sets the private properties array to dynamic / static based on the passed properties object
         *
         * @param {object} properties - The properties to be uploaded
         */
        setProperties(properties: any): void;
        /**
         * The tint applied to the container. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         ** IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * Destroys the container
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their
         *  destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * To be overridden by the subclass
         * @method _renderCanvas
         * @memberof vf.Container#
         * @protected
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        protected _renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @param {boolean} [skipChildrenUpdate=false] Setting to `true` will stop re-calculation of children transforms,
         *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: vf.Rectangle, skipChildrenUpdate?: boolean): vf.Rectangle;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Renderer} renderer - The renderer this sprite batch works for.
     */
    class ParticleRenderer {
        constructor(renderer: vf.Renderer);
        /**
         * The default shader that is used if a sprite doesn't have a more specific one.
         *
         * @member {vf.Shader} vf.ParticleRenderer#shader
         */
        shader: vf.Shader;
        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {vf.State} vf.ParticleRenderer#state
         * @readonly
         */
        readonly state: vf.State;
        /**
         * Renders the particle container object.
         *
         * @param {vf.ParticleContainer} container - The container to render using this ParticleRenderer
         */
        render(container: vf.ParticleContainer): void;
        /**
         * Uploads the vertices.
         *
         * @param {vf.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their vertices uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadVertices(children: vf.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the position.
         *
         * @param {vf.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their positions uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadPosition(children: vf.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the rotation.
         *
         * @param {vf.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadRotation(children: vf.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the Uvs
         *
         * @param {vf.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadUvs(children: vf.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the tint.
         *
         * @param {vf.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadTint(children: vf.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Destroys the ParticleRenderer.
         */
        destroy(): void;
    }
    /**
     * @param {vf.AbstractRenderer} renderer - A reference to the current renderer
     */
    class BasePrepare {
        constructor(renderer: vf.AbstractRenderer);
        /**
         * The limiter to be used to control how quickly items are prepared.
         * @type {vf.CountLimiter|vf.TimeLimiter}
         */
        limiter: vf.CountLimiter | vf.TimeLimiter;
        /**
         * Reference to the renderer.
         * @type {vf.AbstractRenderer}
         * @protected
         */
        protected renderer: vf.AbstractRenderer;
        /**
         * The only real difference between CanvasPrepare and Prepare is what they pass
         * to upload hooks. That different parameter is stored here.
         * @type {object}
         * @protected
         */
        protected uploadHookHelper: any;
        /**
         * Upload all the textures and graphics to the GPU.
         *
         * @param {Function|vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text} item -
         *        Either the container or display object to search for items to upload, the items to upload themselves,
         *        or the callback function, if items have been added using `prepare.add`.
         * @param {Function} [done] - Optional callback when all queued uploads have completed
         */
        upload(item: ((...params: any[]) => any) | vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text, done?: (...params: any[]) => any): void;
        /**
         * Adds hooks for finding items.
         *
         * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
         *          function must return `true` if it was able to add item to the queue.
         * @return {this} Instance of plugin for chaining.
         */
        registerFindHook(addHook: (...params: any[]) => any): this;
        /**
         * Adds hooks for uploading items.
         *
         * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
         *          function must return `true` if it was able to handle upload of item.
         * @return {this} Instance of plugin for chaining.
         */
        registerUploadHook(uploadHook: (...params: any[]) => any): this;
        /**
         * Manually add an item to the uploading queue.
         *
         * @param {vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text|*} item - Object to
         *        add to the queue
         * @return {this} Instance of plugin for chaining.
         */
        add(item: vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text | any): this;
        /**
         * Destroys the plugin, don't use after this.
         *
         */
        destroy(): void;
    }
    /**
     * @param {number} maxItemsPerFrame - The maximum number of items that can be prepared each frame.
     */
    class CountLimiter {
        constructor(maxItemsPerFrame: number);
        /**
         * Resets any counting properties to start fresh on a new frame.
         */
        beginFrame(): void;
        /**
         * Checks to see if another item can be uploaded. This should only be called once per item.
         * @return {boolean} If the item is allowed to be uploaded.
         */
        allowedToUpload(): boolean;
    }
    /**
     * @param {vf.Renderer} renderer - A reference to the current renderer
     */
    class Prepare extends vf.BasePrepare {
        constructor(renderer: vf.Renderer);
        /**
         * The limiter to be used to control how quickly items are prepared.
         * @type {vf.CountLimiter|vf.TimeLimiter}
         */
        limiter: vf.CountLimiter | vf.TimeLimiter;
        /**
         * Reference to the renderer.
         * @type {vf.AbstractRenderer}
         * @protected
         */
        protected renderer: vf.AbstractRenderer;
        /**
         * The only real difference between CanvasPrepare and Prepare is what they pass
         * to upload hooks. That different parameter is stored here.
         * @type {object}
         * @protected
         */
        protected uploadHookHelper: any;
        /**
         * Upload all the textures and graphics to the GPU.
         *
         * @param {Function|vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text} item -
         *        Either the container or display object to search for items to upload, the items to upload themselves,
         *        or the callback function, if items have been added using `prepare.add`.
         * @param {Function} [done] - Optional callback when all queued uploads have completed
         */
        upload(item: ((...params: any[]) => any) | vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text, done?: (...params: any[]) => any): void;
        /**
         * Adds hooks for finding items.
         *
         * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
         *          function must return `true` if it was able to add item to the queue.
         * @return {this} Instance of plugin for chaining.
         */
        registerFindHook(addHook: (...params: any[]) => any): this;
        /**
         * Adds hooks for uploading items.
         *
         * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
         *          function must return `true` if it was able to handle upload of item.
         * @return {this} Instance of plugin for chaining.
         */
        registerUploadHook(uploadHook: (...params: any[]) => any): this;
        /**
         * Manually add an item to the uploading queue.
         *
         * @param {vf.DisplayObject|vf.Container|vf.BaseTexture|vf.Texture|vf.Graphics|vf.Text|*} item - Object to
         *        add to the queue
         * @return {this} Instance of plugin for chaining.
         */
        add(item: vf.DisplayObject | vf.Container | vf.BaseTexture | vf.Texture | vf.Graphics | vf.Text | any): this;
        /**
         * Destroys the plugin, don't use after this.
         *
         */
        destroy(): void;
    }
    /**
     * @param {number} maxMilliseconds - The maximum milliseconds that can be spent preparing items each frame.
     */
    class TimeLimiter {
        constructor(maxMilliseconds: number);
        /**
         * Resets any counting properties to start fresh on a new frame.
         */
        beginFrame(): void;
        /**
         * Checks to see if another item can be uploaded. This should only be called once per item.
         * @return {boolean} If the item is allowed to be uploaded.
         */
        allowedToUpload(): boolean;
    }
    /**
     *  @param {string} name the function name that will be executed on the listeners added to this Runner.
     */
    class Runner {
        constructor(name: string);
        /**
         * Dispatch/Broadcast Runner to all listeners added to the queue.
         * @param {...any} params - optional parameters to pass to each listener
         * @return {vf.Runner}
         */
        emit(...params: any[]): vf.Runner;
        /**
         * Add a listener to the Runner
         *
         * Runners do not need to have scope or functions passed to them.
         * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
         * as the name provided to the Runner when it was created.
         *
         * Eg A listener passed to this Runner will require a 'complete' function.
         *
         * ```
         * import { Runner } from '@pixi/runner';
         *
         * const complete = new Runner('complete');
         * ```
         *
         * The scope used will be the object itself.
         *
         * @param {any} item - The object that will be listening.
         * @return {vf.Runner}
         */
        add(item: any): vf.Runner;
        /**
         * Remove a single listener from the dispatch queue.
         * @param {any} item - The listenr that you would like to remove.
         * @return {vf.Runner}
         */
        remove(item: any): vf.Runner;
        /**
         * Check to see if the listener is already in the Runner
         * @param {any} item - The listener that you would like to check.
         */
        contains(item: any): void;
        /**
         * Remove all listeners from the Runner
         * @return {vf.Runner}
         */
        removeAll(): vf.Runner;
        /**
         * Remove all references, don't use after this.
         */
        destroy(): void;
        /**
         * `true` if there are no this Runner contains no listeners
         *
         * @member {boolean}
         * @readonly
         */
        readonly empty: boolean;
        /**
         * The name of the runner.
         *
         * @member {string}
         * @readonly
         */
        readonly name: string;
        /**
         * Alias for `emit`
         * @memberof vf.Runner#
         * @method dispatch
         * @see vf.Runner#emit
         */
        dispatch(): void;
        /**
         * Alias for `emit`
         * @memberof vf.Runner#
         * @method run
         * @see vf.Runner#emit
         */
        run(): void;
    }
    /**
     * User's customizable globals for overriding the default vf settings, such
     * as a renderer's default resolution, framerate, float precision, etc.
     * @example
     * // Use the native window resolution as the default resolution
     * // will support high-density displays when rendering
     * vf.settings.RESOLUTION = window.devicePixelRatio;
     *
     * // Disable interpolation when scaling, will make texture be pixelated
     * vf.settings.SCALE_MODE = vf.SCALE_MODES.NEAREST;
     * @namespace vf.settings
     */
    namespace settings {
        /**
         * Default `canvasPadding` for canvas-based Mesh rendering.
         *
         * @see vf.Mesh2d#canvasPadding
         * @static
         * @name MESH_CANVAS_PADDING
         * @memberof vf.settings
         * @type {number}
         * @default 0
         */
        var MESH_CANVAS_PADDING: number;
        /**
         * The maximum support for using WebGL. If a device does not
         * support WebGL version, for instance WebGL 2, it will still
         * attempt to fallback support to WebGL 1. If you want to
         * explicitly remove feature support to target a more stable
         * baseline, prefer a lower environment.
         *
         * Due to {@link https://bugs.chromium.org/p/chromium/issues/detail?id=934823|bug in chromium}
         * we disable webgl2 by default for all non-apple mobile devices.
         *
         * @static
         * @name PREFER_ENV
         * @memberof vf.settings
         * @type {number}
         * @default vf.ENV.WEBGL2
         */
        var PREFER_ENV: number;
        /**
         * If set to `true`, Textures and BaseTexture objects stored
         * in the caches ({@link vf.utils.TextureCache TextureCache} and
         * {@link vf.utils.BaseTextureCache BaseTextureCache}) can *only* be
         * used when calling {@link vf.Texture.from Texture.from} or
         * {@link vf.BaseTexture.from BaseTexture.from}.
         * Otherwise, these `from` calls throw an exception. Using this property
         * can be useful if you want to enforce preloading all assets with
         * {@link vf.Loader Loader}.
         *
         * @static
         * @name STRICT_TEXTURE_CACHE
         * @memberof vf.settings
         * @type {boolean}
         * @default false
         */
        var STRICT_TEXTURE_CACHE: boolean;
        /**
         * Sets the default value for the container property 'sortableChildren'.
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @static
         * @constant
         * @name SORTABLE_CHILDREN
         * @memberof vf.settings
         * @type {boolean}
         * @default false
         */
        var SORTABLE_CHILDREN: boolean;
        /**
         * Default number of uploads per frame using prepare plugin.
         *
         * @static
         * @memberof vf.settings
         * @name UPLOADS_PER_FRAME
         * @type {number}
         * @default 4
         */
        var UPLOADS_PER_FRAME: number;
        /**
         * If set to true WebGL will attempt make textures mimpaped by default.
         * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
         *
         * @static
         * @name MIPMAP_TEXTURES
         * @memberof vf.settings
         * @type {vf.MIPMAP_MODES}
         * @default vf.MIPMAP_MODES.POW2
         */
        var MIPMAP_TEXTURES: vf.MIPMAP_MODES;
        /**
         * Default anisotropic filtering level of textures.
         * Usually from 0 to 16
         *
         * @static
         * @name ANISOTROPIC_LEVEL
         * @memberof vf.settings
         * @type {number}
         * @default 0
         */
        var ANISOTROPIC_LEVEL: number;
        /**
         * Default resolution / device pixel ratio of the renderer.
         *
         * @static
         * @name RESOLUTION
         * @memberof vf.settings
         * @type {number}
         * @default 1
         */
        var RESOLUTION: number;
        /**
         * Default filter resolution.
         *
         * @static
         * @name FILTER_RESOLUTION
         * @memberof vf.settings
         * @type {number}
         * @default 1
         */
        var FILTER_RESOLUTION: number;
        /**
         * The maximum textures that this device supports.
         *
         * @static
         * @name SPRITE_MAX_TEXTURES
         * @memberof vf.settings
         * @type {number}
         * @default 32
         */
        var SPRITE_MAX_TEXTURES: number;
        /**
         * The default sprite batch size.
         *
         * The default aims to balance desktop and mobile devices.
         *
         * @static
         * @name SPRITE_BATCH_SIZE
         * @memberof vf.settings
         * @type {number}
         * @default 4096
         */
        var SPRITE_BATCH_SIZE: number;
        /**
         * The default render options if none are supplied to {@link vf.Renderer}
         * or {@link vf.CanvasRenderer}.
         *
         * @static
         * @name RENDER_OPTIONS
         * @memberof vf.settings
         * @type {object}
         * @property {HTMLCanvasElement} view=null
         * @property {number} resolution=1
         * @property {boolean} antialias=false
         * @property {boolean} autoDensity=false
         * @property {boolean} transparent=false
         * @property {number} backgroundColor=0x000000
         * @property {boolean} clearBeforeRender=true
         * @property {boolean} preserveDrawingBuffer=false
         * @property {number} width=800
         * @property {number} height=600
         * @property {boolean} legacy=false
         */
        var RENDER_OPTIONS: {
            view: HTMLCanvasElement;
            resolution: number;
            antialias: boolean;
            autoDensity: boolean;
            transparent: boolean;
            backgroundColor: number;
            clearBeforeRender: boolean;
            preserveDrawingBuffer: boolean;
            width: number;
            height: number;
            legacy: boolean;
        };
        /**
         * Default Garbage Collection mode.
         *
         * @static
         * @name GC_MODE
         * @memberof vf.settings
         * @type {vf.GC_MODES}
         * @default vf.GC_MODES.AUTO
         */
        var GC_MODE: vf.GC_MODES;
        /**
         * Default Garbage Collection max idle.
         *
         * @static
         * @name GC_MAX_IDLE
         * @memberof vf.settings
         * @type {number}
         * @default 3600
         */
        var GC_MAX_IDLE: number;
        /**
         * Default Garbage Collection maximum check count.
         *
         * @static
         * @name GC_MAX_CHECK_COUNT
         * @memberof vf.settings
         * @type {number}
         * @default 600
         */
        var GC_MAX_CHECK_COUNT: number;
        /**
         * Default wrap modes that are supported by pixi.
         *
         * @static
         * @name WRAP_MODE
         * @memberof vf.settings
         * @type {vf.WRAP_MODES}
         * @default vf.WRAP_MODES.CLAMP
         */
        var WRAP_MODE: vf.WRAP_MODES;
        /**
         * Default scale mode for textures.
         *
         * @static
         * @name SCALE_MODE
         * @memberof vf.settings
         * @type {vf.SCALE_MODES}
         * @default vf.SCALE_MODES.LINEAR
         */
        var SCALE_MODE: vf.SCALE_MODES;
        /**
         * Default specify float precision in vertex shader.
         *
         * @static
         * @name PRECISION_VERTEX
         * @memberof vf.settings
         * @type {vf.PRECISION}
         * @default vf.PRECISION.HIGH
         */
        var PRECISION_VERTEX: vf.PRECISION;
        /**
         * Default specify float precision in fragment shader.
         * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
         *
         * @static
         * @name PRECISION_FRAGMENT
         * @memberof vf.settings
         * @type {vf.PRECISION}
         * @default vf.PRECISION.MEDIUM
         */
        var PRECISION_FRAGMENT: vf.PRECISION;
        /**
         * Can we upload the same buffer in a single frame?
         *
         * @static
         * @name CAN_UPLOAD_SAME_BUFFER
         * @memberof vf.settings
         * @type {boolean}
         */
        var CAN_UPLOAD_SAME_BUFFER: boolean;
        /**
         * Enables bitmap creation before image load. This feature is experimental.
         *
         * @static
         * @name CREATE_IMAGE_BITMAP
         * @memberof vf.settings
         * @type {boolean}
         * @default false
         */
        var CREATE_IMAGE_BITMAP: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         *
         * @static
         * @constant
         * @memberof vf.settings
         * @type {boolean}
         * @default false
         */
        var ROUND_PIXELS: boolean;
        /**
         * Target frames per millisecond.
         *
         * @static
         * @name TARGET_FPMS
         * @memberof vf.settings
         * @type {number}
         * @default 0.06
         */
        var TARGET_FPMS: number;
        /**
         * The prefix that denotes a URL is for a retina asset.
         *
         * @static
         * @name RETINA_PREFIX
         * @memberof vf.settings
         * @type {RegExp}
         * @default /@([0-9\.]+)x/
         * @example `@2x`
         */
        var RETINA_PREFIX: RegExp;
        /**
         * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported` function.
         * For most scenarios this should be left as true, as otherwise the user may have a poor experience.
         * However, it can be useful to disable under certain scenarios, such as headless unit tests.
         *
         * @static
         * @name FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
         * @memberof vf.settings
         * @type {boolean}
         * @default true
         */
        var FAIL_IF_MAJOR_PERFORMANCE_CAVEAT: boolean;
    }
    /**
     * Constants that define the type of gradient on text.
     *
     * @static
     * @constant
     * @name TEXT_GRADIENT
     * @memberof vf
     * @type {object}
     * @property {number} LINEAR_VERTICAL Vertical gradient
     * @property {number} LINEAR_HORIZONTAL Linear gradient
     */
    var TEXT_GRADIENT: {
        LINEAR_VERTICAL: number;
        LINEAR_HORIZONTAL: number;
    };
    /**
     * @param {vf.Texture} [texture] - The texture for this sprite.
     */
    class Sprite extends vf.Container {
        constructor(texture?: vf.Texture);
        /**
         * Cached tinted texture.
         * @memberof vf.Sprite#
         * @member {HTMLCanvasElement} _tintedCanvas
         * @protected
         */
        protected _tintedCanvas: HTMLCanvasElement;
        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_width
         */
        protected _width: number;
        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_height
         */
        protected _height: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} vf.Sprite#blendMode
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} vf.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} vf.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * When the texture is updated, this event will fire to update the scale and frame
         *
         * @protected
         */
        protected _onTextureUpdate(): void;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         *
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {vf.Renderer} renderer - The webgl renderer to use.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Updates the bounds of the sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {vf.Rectangle} [rect] - The output rectangle.
         * @return {vf.Rectangle} The bounds.
         */
        getLocalBounds(rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {vf.IPoint} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Helper function that creates a new sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {string|vf.Texture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
         * @param {object} [options] See {@link vf.BaseTexture}'s constructor for options.
         * @return {vf.Sprite} The newly created sprite
         */
        static from(source: string | vf.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): vf.Sprite;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link vf.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {vf.ObservablePoint}
         */
        anchor: vf.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    module AnimatedSprite {
        /**
         * @memberof vf.AnimatedSprite
         * @typedef {object} FrameObject
         * @type {object}
         * @property {vf.Texture} texture - The {@link vf.Texture} of the frame
         * @property {number} time - the duration of the frame in ms
         */
        type FrameObject = {
            texture: vf.Texture;
            time: number;
        };
    }
    /**
     * @param {vf.Texture[]|vf.AnimatedSprite.FrameObject[]} textures - An array of {@link vf.Texture} or frame
     *  objects that make up the animation.
     * @param {boolean} [autoUpdate=true] - Whether to use vf.Ticker.shared to auto update animation time.
     */
    class AnimatedSprite extends vf.Sprite {
        constructor(textures: vf.Texture[] | vf.AnimatedSprite.FrameObject[], autoUpdate?: boolean);
        /**
         * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
         *
         * @member {number} vf.AnimatedSprite#animationSpeed
         * @default 1
         */
        animationSpeed: number;
        /**
         * Whether or not the animate sprite repeats after playing.
         *
         * @member {boolean} vf.AnimatedSprite#loop
         * @default true
         */
        loop: boolean;
        /**
         * Update anchor to [Texture's defaultAnchor]{@link vf.Texture#defaultAnchor} when frame changes.
         *
         * Useful with [sprite sheet animations]{@link vf.Spritesheet#animations} created with tools.
         * Changing anchor for each frame allows to pin sprite origin to certain moving feature
         * of the frame (e.g. left foot).
         *
         * Note: Enabling this will override any previously set `anchor` on each frame change.
         *
         * @member {boolean} vf.AnimatedSprite#updateAnchor
         * @default false
         */
        updateAnchor: boolean;
        /**
         * Function to call when an AnimatedSprite finishes playing.
         *
         * @member {Function} vf.AnimatedSprite#onComplete
         */
        onComplete: (...params: any[]) => any;
        /**
         * Function to call when an AnimatedSprite changes which texture is being rendered.
         *
         * @member {Function} vf.AnimatedSprite#onFrameChange
         */
        onFrameChange: (...params: any[]) => any;
        /**
         * Function to call when `loop` is true, and an AnimatedSprite is played and loops around to start again.
         *
         * @member {Function} vf.AnimatedSprite#onLoop
         */
        onLoop: (...params: any[]) => any;
        /**
         * Stops the AnimatedSprite.
         *
         */
        stop(): void;
        /**
         * Plays the AnimatedSprite.
         *
         */
        play(): void;
        /**
         * Stops the AnimatedSprite and goes to a specific frame.
         *
         * @param {number} frameNumber - Frame index to stop at.
         */
        gotoAndStop(frameNumber: number): void;
        /**
         * Goes to a specific frame and begins playing the AnimatedSprite.
         *
         * @param {number} frameNumber - Frame index to start at.
         */
        gotoAndPlay(frameNumber: number): void;
        /**
         * Updates the object transform for rendering.
         *
         * @param {number} deltaTime - Time since last tick.
         */
        update(deltaTime: number): void;
        /**
         * Stops the AnimatedSprite and destroys it.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value.
         * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * A short hand way of creating an AnimatedSprite from an array of frame ids.
         *
         * @static
         * @param {string[]} frames - The array of frames ids the AnimatedSprite will use as its texture frames.
         * @return {vf.AnimatedSprite} The new animated sprite with the specified frames.
         */
        static fromFrames(frames: string[]): vf.AnimatedSprite;
        /**
         * A short hand way of creating an AnimatedSprite from an array of image ids.
         *
         * @static
         * @param {string[]} images - The array of image urls the AnimatedSprite will use as its texture frames.
         * @return {vf.AnimatedSprite} The new animate sprite with the specified images as frames.
         */
        static fromImages(images: string[]): vf.AnimatedSprite;
        /**
         * The total number of frames in the AnimatedSprite. This is the same as number of textures
         * assigned to the AnimatedSprite.
         *
         * @readonly
         * @member {number}
         * @default 0
         */
        readonly totalFrames: number;
        /**
         * The array of textures used for this AnimatedSprite.
         *
         * @member {vf.Texture[]}
         */
        textures: vf.Texture[];
        /**
         * The AnimatedSprites current frame index.
         *
         * @member {number}
         * @readonly
         */
        readonly currentFrame: number;
        /**
         * Indicates if the AnimatedSprite is currently playing.
         *
         * @member {boolean}
         * @readonly
         */
        readonly playing: boolean;
        /**
         * Whether to use vf.Ticker.shared to auto update animation time
         *
         * @member {boolean}
         */
        autoUpdate: boolean;
        /**
         * Cached tinted texture.
         * @memberof vf.Sprite#
         * @member {HTMLCanvasElement} _tintedCanvas
         * @protected
         */
        protected _tintedCanvas: HTMLCanvasElement;
        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_width
         */
        protected _width: number;
        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_height
         */
        protected _height: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} vf.Sprite#blendMode
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} vf.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} vf.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * When the texture is updated, this event will fire to update the scale and frame
         *
         * @protected
         */
        protected _onTextureUpdate(): void;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         *
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {vf.Renderer} renderer - The webgl renderer to use.
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Updates the bounds of the sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {vf.Rectangle} [rect] - The output rectangle.
         * @return {vf.Rectangle} The bounds.
         */
        getLocalBounds(rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {vf.IPoint} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link vf.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {vf.ObservablePoint}
         */
        anchor: vf.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * @param {vf.Texture} texture - the texture of the tiling sprite
     * @param {number} [width=100] - the width of the tiling sprite
     * @param {number} [height=100] - the height of the tiling sprite
     */
    class TilingSprite extends vf.Sprite {
        static from(source: number | string | vf.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): vf.Sprite;
        static fromFrame(): vf.Sprite;
        static fromImage(): vf.Sprite;
        constructor(texture: vf.Texture, width?: number, height?: number);
        /**
         * Renders the object using the Canvas renderer
         *
         * @protected
         * @function _renderCanvas
         * @memberof vf.TilingSprite#
         * @param {vf.CanvasRenderer} renderer - a reference to the canvas renderer
         */
        protected _renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * Tile transform
         *
         * @member {vf.Transform} vf.TilingSprite#tileTransform
         */
        tileTransform: vf.Transform;
        /**
         * matrix that is applied to UV to get the coords in Texture normalized space to coords in BaseTexture space
         *
         * @member {vf.TextureMatrix} vf.TilingSprite#uvMatrix
         */
        uvMatrix: vf.TextureMatrix;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' method.
         *
         * @member {string} vf.TilingSprite#pluginName
         * @default 'tilingSprite'
         */
        pluginName: string;
        /**
         * Whether or not anchor affects uvs
         *
         * @member {boolean} vf.TilingSprite#uvRespectAnchor
         * @default false
         */
        uvRespectAnchor: boolean;
        /**
         * Changes frame clamping in corresponding textureTransform, shortcut
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number}
         */
        clampMargin: number;
        /**
         * The scaling of the image that is being tiled
         *
         * @member {vf.ObservablePoint}
         */
        tileScale: vf.ObservablePoint;
        /**
         * The offset of the image that is being tiled
         *
         * @member {vf.ObservablePoint}
         */
        tilePosition: vf.ObservablePoint;
        /**
         * @protected
         */
        protected _onTextureUpdate(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Updates the bounds of the tiling sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {vf.Rectangle} rect - The output rectangle.
         * @return {vf.Rectangle} The bounds.
         */
        getLocalBounds(rect: vf.Rectangle): vf.Rectangle;
        /**
         * Checks if a point is inside this tiling sprite.
         *
         * @param {vf.IPoint} point - the point to check
         * @return {boolean} Whether or not the sprite contains the point.
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Helper function that creates a new tiling sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {string|vf.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
         * @param {Object} options - See {@link vf.BaseTexture}'s constructor for options.
         * @param {number} options.width - required width of the tiling sprite
         * @param {number} options.height - required height of the tiling sprite
         * @return {vf.TilingSprite} The newly created texture
         */
        static from(source: string | vf.Texture | HTMLCanvasElement | HTMLVideoElement, options: {
            width: number;
            height: number;
        }): vf.TilingSprite;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Cached tinted texture.
         * @memberof vf.Sprite#
         * @member {HTMLCanvasElement} _tintedCanvas
         * @protected
         */
        protected _tintedCanvas: HTMLCanvasElement;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} vf.Sprite#blendMode
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} vf.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link vf.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {vf.ObservablePoint}
         */
        anchor: vf.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * constructor for renderer
     *
     * @param {vf.Renderer} renderer The renderer this tiling awesomeness works for.
     */
    class TilingSpriteRenderer extends vf.ObjectRenderer {
        constructor(renderer: vf.Renderer);
        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {vf.State} vf.TilingSpriteRenderer#state
         * @readonly
         */
        readonly state: vf.State;
        /**
         *
         * @param {vf.TilingSprite} ts tilingSprite to be rendered
         */
        render(ts: vf.TilingSprite): void;
        /**
         * The renderer this manager works for.
         *
         * @member {vf.Renderer} vf.ObjectRenderer#renderer
         */
        renderer: vf.Renderer;
        /**
         * Stub method that should be used to empty the current
         * batch by rendering objects now.
         */
        flush(): void;
        /**
         * Generic destruction method that frees all resources. This
         * should be called by subclasses.
         */
        destroy(): void;
        /**
         * Stub method that initializes any state required before
         * rendering starts. It is different from the `prerender`
         * signal, which occurs every frame, in that it is called
         * whenever an object requests _this_ renderer specifically.
         */
        start(): void;
        /**
         * Stops the renderer. It should free up any state and
         * become dormant.
         */
        stop(): void;
    }
    /**
     * @param {vf.BaseTexture} baseTexture Reference to the source BaseTexture object.
     * @param {Object} data - Spritesheet image data.
     * @param {string} [resolutionFilename] - The filename to consider when determining
     *        the resolution of the spritesheet. If not provided, the imageUrl will
     *        be used on the BaseTexture.
     */
    class Spritesheet {
        constructor(baseTexture: vf.BaseTexture, data: any, resolutionFilename?: string);
        /**
         * Reference to ths source texture
         * @type {vf.BaseTexture}
         */
        baseTexture: vf.BaseTexture;
        /**
         * A map containing all textures of the sprite sheet.
         * Can be used to create a {@link vf.Sprite|Sprite}:
         * ```js
         * new vf.Sprite(sheet.textures["image.png"]);
         * ```
         * @member {Object} vf.Spritesheet#textures
         */
        textures: any;
        /**
         * A map containing the textures for each animation.
         * Can be used to create an {@link vf.AnimatedSprite|AnimatedSprite}:
         * ```js
         * new vf.AnimatedSprite(sheet.animations["anim_name"])
         * ```
         * @member {Object} vf.Spritesheet#animations
         */
        animations: any;
        /**
         * Reference to the original JSON data.
         * @type {Object}
         */
        data: any;
        /**
         * The resolution of the spritesheet.
         * @type {number}
         */
        resolution: number;
        /**
         * Parser spritesheet from loaded data. This is done asynchronously
         * to prevent creating too many Texture within a single process.
         *
         * @param {Function} callback - Callback when complete returns
         *        a map of the Textures for this spritesheet.
         */
        parse(callback: (...params: any[]) => any): void;
        /**
         * Destroy Spritesheet and don't use after this.
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
        /**
         * The maximum number of Textures to build per process.
         *
         * @type {number}
         * @default 1000
         */
        static BATCH_SIZE: number;
    }
    interface SpritesheetLoader extends vf.ILoaderPlugin {
    }
    /**
     * {@link vf.Loader Loader} middleware for loading texture atlases that have been created with
     * TexturePacker or similar JSON-based spritesheet.
     *
     * This middleware automatically generates Texture resources.
     *
     * @class
     * @memberof vf
     * @implements vf.ILoaderPlugin
     */
    class SpritesheetLoader implements vf.ILoaderPlugin {
        /**
         * Called after a resource is loaded.
         * @see vf.Loader.loaderMiddleware
         * @param {vf.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: vf.LoaderResource, next: (...params: any[]) => any): void;
        /**
         * Get the spritesheets root path
         * @param {vf.LoaderResource} resource - Resource to check path
         * @param {string} baseUrl - Base root url
         */
        static getResourcePath(resource: vf.LoaderResource, baseUrl: string): void;
    }
    /**
     * @param {string} text - The string that you would like the text to display
     * @param {object|vf.TextStyle} [style] - The style parameters
     * @param {HTMLCanvasElement} [canvas] - The canvas element for drawing text
     */
    class Text extends vf.Sprite {
        constructor(text: string, style?: any | vf.TextStyle, canvas?: HTMLCanvasElement);
        /**
         * The canvas element that everything is drawn to
         *
         * @member {HTMLCanvasElement} vf.Text#canvas
         */
        canvas: HTMLCanvasElement;
        /**
         * The canvas 2d context that everything is drawn with
         * @member {CanvasRenderingContext2D} vf.Text#context
         */
        context: CanvasRenderingContext2D;
        /**
         * The resolution / device pixel ratio of the canvas.
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @member {number} vf.Text#_resolution
         * @default 1
         */
        _resolution: number;
        /**
         * Renders text to its canvas, and updates its texture.
         * By default this is used internally to ensure the texture is correct before rendering,
         * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
         * and then shared across multiple Sprites.
         *
         * @param {boolean} respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
         */
        updateText(respectDirty: boolean): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Gets the local bounds of the text object.
         *
         * @param {vf.Rectangle} rect - The output rectangle.
         * @return {vf.Rectangle} The bounds.
         */
        getLocalBounds(rect: vf.Rectangle): vf.Rectangle;
        /**
         * calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Destroys this text object.
         * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
         * the majority of the time the texture will not be shared with any other Sprites.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their
         *  destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Set the style of the text. Set up an event listener to listen for changes on the style
         * object and mark the text as dirty.
         *
         * @member {object|vf.TextStyle}
         */
        style: any | vf.TextStyle;
        /**
         * Set the copy for the text object. To split a line you can use '\n'.
         *
         * @member {string}
         */
        text: string;
        /**
         * The resolution / device pixel ratio of the canvas.
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @member {number}
         * @default 1
         */
        resolution: number;
        /**
         * Cached tinted texture.
         * @memberof vf.Sprite#
         * @member {HTMLCanvasElement} _tintedCanvas
         * @protected
         */
        protected _tintedCanvas: HTMLCanvasElement;
        /**
         * The width of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_width
         */
        protected _width: number;
        /**
         * The height of the sprite (this is initially set by the texture)
         *
         * @protected
         * @member {number} vf.Sprite#_height
         */
        protected _height: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `vf.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} vf.Sprite#blendMode
         * @default vf.BLEND_MODES.NORMAL
         * @see vf.BLEND_MODES
         */
        blendMode: number;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} vf.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} vf.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * When the texture is updated, this event will fire to update the scale and frame
         *
         * @protected
         */
        protected _onTextureUpdate(): void;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {vf.IPoint} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: vf.IPoint): boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link vf.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {vf.ObservablePoint}
         */
        anchor: vf.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {vf.Texture}
         */
        texture: vf.Texture;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    /**
     * A number, or a string containing a number.
     *
     * @memberof vf
     * @typedef IFontMetrics
     * @property {number} ascent - Font ascent
     * @property {number} descent - Font descent
     * @property {number} fontSize - Font size
     */
    type IFontMetrics = {
        ascent: number;
        descent: number;
        fontSize: number;
    };
    /**
     * @param {string} text - the text that was measured
     * @param {vf.TextStyle} style - the style that was measured
     * @param {number} width - the measured width of the text
     * @param {number} height - the measured height of the text
     * @param {string[]} lines - an array of the lines of text broken by new lines and wrapping if specified in style
     * @param {number[]} lineWidths - an array of the line widths for each line matched to `lines`
     * @param {number} lineHeight - the measured line height for this style
     * @param {number} maxLineWidth - the maximum line width for all measured lines
     * @param {Object} fontProperties - the font properties object from TextMetrics.measureFont
     */
    class TextMetrics {
        constructor(text: string, style: vf.TextStyle, width: number, height: number, lines: string[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: any);
        /**
         * The text that was measured
         *
         * @member {string} vf.TextMetrics#text
         */
        text: string;
        /**
         * The style that was measured
         *
         * @member {vf.TextStyle} vf.TextMetrics#style
         */
        style: vf.TextStyle;
        /**
         * The measured width of the text
         *
         * @member {number} vf.TextMetrics#width
         */
        width: number;
        /**
         * The measured height of the text
         *
         * @member {number} vf.TextMetrics#height
         */
        height: number;
        /**
         * An array of lines of the text broken by new lines and wrapping is specified in style
         *
         * @member {string[]} vf.TextMetrics#lines
         */
        lines: string[];
        /**
         * An array of the line widths for each line matched to `lines`
         *
         * @member {number[]} vf.TextMetrics#lineWidths
         */
        lineWidths: number[];
        /**
         * The measured line height for this style
         *
         * @member {number} vf.TextMetrics#lineHeight
         */
        lineHeight: number;
        /**
         * The maximum line width for all measured lines
         *
         * @member {number} vf.TextMetrics#maxLineWidth
         */
        maxLineWidth: number;
        /**
         * The font properties object from TextMetrics.measureFont
         *
         * @member {vf.IFontMetrics} vf.TextMetrics#fontProperties
         */
        fontProperties: vf.IFontMetrics;
        /**
         * Measures the supplied string of text and returns a Rectangle.
         *
         * @param {string} text - the text to measure.
         * @param {vf.TextStyle} style - the text style to use for measuring
         * @param {boolean} [wordWrap] - optional override for if word-wrap should be applied to the text.
         * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
         * @return {vf.TextMetrics} measured width and height of the text.
         */
        static measureText(text: string, style: vf.TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): vf.TextMetrics;
        /**
         * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
         *
         * It allows one to customise which words should break
         * Examples are if the token is CJK or numbers.
         * It must return a boolean.
         *
         * @param  {string}  token       The token
         * @param  {boolean}  breakWords  The style attr break words
         * @return {boolean} whether to break word or not
         */
        static canBreakWords(token: string, breakWords: boolean): boolean;
        /**
         * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
         *
         * It is called when a token (usually a word) has to be split into separate pieces
         * in order to determine the point to break a word.
         * It must return an array of characters.
         *
         * @example
         * // Correctly splits emojis, eg "🤪🤪" will result in two element array, each with one emoji.
         * TextMetrics.wordWrapSplit = (token) => [...token];
         *
         * @param  {string}  token The token to split
         * @return {string[]} The characters of the token
         */
        static wordWrapSplit(token: string): string[];
        /**
         * Calculates the ascent, descent and fontSize of a given font-style
         *
         * @static
         * @param {string} font - String representing the style of the font
         * @return {vf.IFontMetrics} Font properties object
         */
        static measureFont(font: string): vf.IFontMetrics;
        /**
         * Clear font metrics in metrics cache.
         *
         * @static
         * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
         */
        static clearMetrics(font?: string): void;
        /**
         * String used for calculate font metrics.
         * These characters are all tall to help calculate the height required for text.
         *
         * @static
         * @memberof vf.TextMetrics
         * @name METRICS_STRING
         * @type {string}
         * @default |ÉqÅ
         */
        static METRICS_STRING: string;
        /**
         * Baseline symbol for calculate font metrics.
         *
         * @static
         * @memberof vf.TextMetrics
         * @name BASELINE_SYMBOL
         * @type {string}
         * @default M
         */
        static BASELINE_SYMBOL: string;
        /**
         * Baseline multiplier for calculate font metrics.
         *
         * @static
         * @memberof vf.TextMetrics
         * @name BASELINE_MULTIPLIER
         * @type {number}
         * @default 1.4
         */
        static BASELINE_MULTIPLIER: number;
    }
    /**
     * @param {object} [style] - The style parameters
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'),
     *  does not affect single line text
     * @param {boolean} [style.breakWords=false] - Indicates if lines can be wrapped within words, it
     *  needs wordWrap to be set to true
     * @param {boolean} [style.dropShadow=false] - Set a drop shadow for the text
     * @param {number} [style.dropShadowAlpha=1] - Set alpha for the drop shadow
     * @param {number} [style.dropShadowAngle=Math.PI/6] - Set a angle of the drop shadow
     * @param {number} [style.dropShadowBlur=0] - Set a shadow blur radius
     * @param {string|number} [style.dropShadowColor='black'] - A fill style to be used on the dropshadow e.g 'red', '#00FF00'
     * @param {number} [style.dropShadowDistance=5] - Set a distance of the drop shadow
     * @param {string|string[]|number|number[]|CanvasGradient|CanvasPattern} [style.fill='black'] - A canvas
     *  fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array to create a gradient
     *  eg ['#000000','#FFFFFF']
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
     * @param {number} [style.fillGradientType=vf.TEXT_GRADIENT.LINEAR_VERTICAL] - If fill is an array of colours
     *  to create a gradient, this can change the type/direction of the gradient. See {@link vf.TEXT_GRADIENT}
     * @param {number[]} [style.fillGradientStops] - If fill is an array of colours to create a gradient, this array can set
     * the stop points (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
     * @param {string|string[]} [style.fontFamily='Arial'] - The font family
     * @param {number|string} [style.fontSize=26] - The font size (as a number it converts to px, but as a string,
     *  equivalents are '26px','20pt','160%' or '1.6em')
     * @param {string} [style.fontStyle='normal'] - The font style ('normal', 'italic' or 'oblique')
     * @param {string} [style.fontVariant='normal'] - The font variant ('normal' or 'small-caps')
     * @param {string} [style.fontWeight='normal'] - The font weight ('normal', 'bold', 'bolder', 'lighter' and '100',
     *  '200', '300', '400', '500', '600', '700', '800' or '900')
     * @param {number} [style.leading=0] - The space between lines
     * @param {number} [style.letterSpacing=0] - The amount of spacing between letters, default is 0
     * @param {number} [style.lineHeight] - The line height, a number that represents the vertical space that a letter uses
     * @param {string} [style.lineJoin='miter'] - The lineJoin property sets the type of corner created, it can resolve
     *      spiked text issues. Possible values "miter" (creates a sharp corner), "round" (creates a round corner) or "bevel"
     *      (creates a squared corner).
     * @param {number} [style.miterLimit=10] - The miter limit to use when using the 'miter' lineJoin mode. This can reduce
     *      or increase the spikiness of rendered text.
     * @param {number} [style.padding=0] - Occasionally some fonts are cropped. Adding some padding will prevent this from
     *     happening by adding padding to all sides of the text.
     * @param {string|number} [style.stroke='black'] - A canvas fillstyle that will be used on the text stroke
     *  e.g 'blue', '#FCFF00'
     * @param {number} [style.strokeThickness=0] - A number that represents the thickness of the stroke.
     *  Default is 0 (no stroke)
     * @param {boolean} [style.trim=false] - Trim transparent borders
     * @param {string} [style.textBaseline='alphabetic'] - The baseline of the text that is rendered.
     * @param {string} [style.whiteSpace='pre'] - Determines whether newlines & spaces are collapsed or preserved "normal"
     *      (collapse, collapse), "pre" (preserve, preserve) | "pre-line" (preserve, collapse). It needs wordWrap to be set to true
     * @param {boolean} [style.wordWrap=false] - Indicates if word wrap should be used
     * @param {number} [style.wordWrapWidth=100] - The width at which text will wrap, it needs wordWrap to be set to true
     */
    class TextStyle {
        constructor(style?: {
            align?: string;
            breakWords?: boolean;
            dropShadow?: boolean;
            dropShadowAlpha?: number;
            dropShadowAngle?: number;
            dropShadowBlur?: number;
            dropShadowColor?: string | number;
            dropShadowDistance?: number;
            fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
            fillGradientType?: number;
            fillGradientStops?: number[];
            fontFamily?: string | string[];
            fontSize?: number | string;
            fontStyle?: string;
            fontVariant?: string;
            fontWeight?: string;
            leading?: number;
            letterSpacing?: number;
            lineHeight?: number;
            lineJoin?: string;
            miterLimit?: number;
            padding?: number;
            stroke?: string | number;
            strokeThickness?: number;
            trim?: boolean;
            textBaseline?: string;
            whiteSpace?: string;
            wordWrap?: boolean;
            wordWrapWidth?: number;
        });
        /**
         * Creates a new TextStyle object with the same values as this one.
         * Note that the only the properties of the object are cloned.
         *
         * @return {vf.TextStyle} New cloned TextStyle object
         */
        clone(): vf.TextStyle;
        /**
         * Resets all properties to the defaults specified in TextStyle.prototype._default
         */
        reset(): void;
        /**
         * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
         *
         * @member {string}
         */
        align: string;
        /**
         * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
         *
         * @member {boolean}
         */
        breakWords: boolean;
        /**
         * Set a drop shadow for the text
         *
         * @member {boolean}
         */
        dropShadow: boolean;
        /**
         * Set alpha for the drop shadow
         *
         * @member {number}
         */
        dropShadowAlpha: number;
        /**
         * Set a angle of the drop shadow
         *
         * @member {number}
         */
        dropShadowAngle: number;
        /**
         * Set a shadow blur radius
         *
         * @member {number}
         */
        dropShadowBlur: number;
        /**
         * A fill style to be used on the dropshadow e.g 'red', '#00FF00'
         *
         * @member {string|number}
         */
        dropShadowColor: string | number;
        /**
         * Set a distance of the drop shadow
         *
         * @member {number}
         */
        dropShadowDistance: number;
        /**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
         * Can be an array to create a gradient eg ['#000000','#FFFFFF']
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
         *
         * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        /**
         * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
         * See {@link vf.TEXT_GRADIENT}
         *
         * @member {number}
         */
        fillGradientType: number;
        /**
         * If fill is an array of colours to create a gradient, this array can set the stop points
         * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
         *
         * @member {number[]}
         */
        fillGradientStops: number[];
        /**
         * The font family
         *
         * @member {string|string[]}
         */
        fontFamily: string | string[];
        /**
         * The font size
         * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
         *
         * @member {number|string}
         */
        fontSize: number | string;
        /**
         * The font style
         * ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         */
        fontStyle: string;
        /**
         * The font variant
         * ('normal' or 'small-caps')
         *
         * @member {string}
         */
        fontVariant: string;
        /**
         * The font weight
         * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         */
        fontWeight: string;
        /**
         * The amount of spacing between letters, default is 0
         *
         * @member {number}
         */
        letterSpacing: number;
        /**
         * The line height, a number that represents the vertical space that a letter uses
         *
         * @member {number}
         */
        lineHeight: number;
        /**
         * The space between lines
         *
         * @member {number}
         */
        leading: number;
        /**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Default is 'miter' (creates a sharp corner).
         *
         * @member {string}
         */
        lineJoin: string;
        /**
         * The miter limit to use when using the 'miter' lineJoin mode
         * This can reduce or increase the spikiness of rendered text.
         *
         * @member {number}
         */
        miterLimit: number;
        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         *
         * @member {number}
         */
        padding: number;
        /**
         * A canvas fillstyle that will be used on the text stroke
         * e.g 'blue', '#FCFF00'
         *
         * @member {string|number}
         */
        stroke: string | number;
        /**
         * A number that represents the thickness of the stroke.
         * Default is 0 (no stroke)
         *
         * @member {number}
         */
        strokeThickness: number;
        /**
         * The baseline of the text that is rendered.
         *
         * @member {string}
         */
        textBaseline: string;
        /**
         * Trim transparent borders
         *
         * @member {boolean}
         */
        trim: boolean;
        /**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         *
         * @member {string}
         */
        whiteSpace: string;
        /**
         * Indicates if word wrap should be used
         *
         * @member {boolean}
         */
        wordWrap: boolean;
        /**
         * The width at which text will wrap, it needs wordWrap to be set to true
         *
         * @member {number}
         */
        wordWrapWidth: number;
        /**
         * Generates a font style string to use for `TextMetrics.measureFont()`.
         *
         * @return {string} Font style string, for passing to `TextMetrics.measureFont()`
         */
        toFontString(): string;
    }
    /**
     * Constants that define the type of gradient on text.
     *
     * @static
     * @constant
     * @name TEXT_GRADIENT
     * @memberof vf
     * @type {object}
     * @property {number} LINEAR_VERTICAL Vertical gradient
     * @property {number} LINEAR_HORIZONTAL Linear gradient
     */
    var TEXT_GRADIENT: {
        LINEAR_VERTICAL: number;
        LINEAR_HORIZONTAL: number;
    };
    class BitmapFont {
        constructor(data: vf.BitmapFontData, textures: vf.Texture[] | {
            [key: string]: vf.Texture;
        });
        /**
         * The name of the font face.
         *
         * @member {string} vf.BitmapFont#font
         * @readOnly
         */
        readonly font: string;
        /**
         * The size of the font face in pixels.
         *
         * @member {number} vf.BitmapFont#size
         * @readOnly
         */
        readonly size: number;
        /**
         * The line-height of the font face in pixels.
         *
         * @member {number} vf.BitmapFont#lineHeight
         * @readOnly
         */
        readonly lineHeight: number;
        /**
         * The map of characters by character code.
         *
         * @member {object} vf.BitmapFont#chars
         * @readOnly
         */
        readonly chars: any;
        /**
         * Remove references to created glyph textures.
         */
        destroy(): void;
        /**
         * Register a new bitmap font.
         *
         * @static
         * @param {XMLDocument|string|vf.BitmapFontData} data - The
         *        characters map that could be provided as xml or raw string.
         * @param {Object.<string, vf.Texture>|vf.Texture|vf.Texture[]}
         *        textures - List of textures for each page.
         * @return {vf.BitmapFont} Result font object with font, size, lineHeight
         *         and char fields.
         */
        static install(data: XMLDocument | string | vf.BitmapFontData, textures: {
            [key: string]: vf.Texture;
        } | vf.Texture | vf.Texture[]): vf.BitmapFont;
        /**
         * Remove bitmap font by name.
         *
         * @static
         * @param {string} name
         */
        static uninstall(name: string): void;
        /**
         * Collection of available fonts.
         *
         * @readOnly
         * @static
         * @member {Object.<string, vf.BitmapFont>}
         */
        static readonly available: {
            [key: string]: vf.BitmapFont;
        };
    }
    /**
     * @memberof vf
     * @typedef {object} IBitmapFontDataInfo
     * @property {string} face
     * @property {number} size
     */
    type IBitmapFontDataInfo = {
        face: string;
        size: number;
    };
    /**
     * @memberof vf
     * @typedef {object} IBitmapFontDataCommon
     * @property {number} lineHeight
     */
    type IBitmapFontDataCommon = {
        lineHeight: number;
    };
    /**
     * @memberof vf
     * @typedef {object} IBitmapFontDataPage
     * @property {number} id
     * @property {string} file
     */
    type IBitmapFontDataPage = {
        id: number;
        file: string;
    };
    /**
     * @memberof vf
     * @typedef {object} IBitmapFontDataChar
     * @property {string} id
     * @property {number} page
     * @property {number} x
     * @property {number} y
     * @property {number} width
     * @property {number} height
     * @property {number} xoffset
     * @property {number} yoffset
     * @property {number} xadvance
     */
    type IBitmapFontDataChar = {
        id: string;
        page: number;
        x: number;
        y: number;
        width: number;
        height: number;
        xoffset: number;
        yoffset: number;
        xadvance: number;
    };
    /**
     * @memberof vf
     * @typedef {object} IBitmapFontDataKerning
     * @property {number} first
     * @property {number} second
     * @property {number} amount
     */
    type IBitmapFontDataKerning = {
        first: number;
        second: number;
        amount: number;
    };
    class BitmapFontData {
        /**
         * @member {vf.IBitmapFontDataInfo[]} vf.BitmapFontData#info
         * @readOnly
         */
        readonly info: vf.IBitmapFontDataInfo[];
        /**
         * @member {vf.IBitmapFontDataCommon[]} vf.BitmapFontData#common
         * @readOnly
         */
        readonly common: vf.IBitmapFontDataCommon[];
        /**
         * @member {vf.IBitmapFontDataPage[]} vf.BitmapFontData#page
         * @readOnly
         */
        readonly page: vf.IBitmapFontDataPage[];
        /**
         * @member {vf.IBitmapFontDataChar[]} vf.BitmapFontData#char
         * @readOnly
         */
        readonly char: vf.IBitmapFontDataChar[];
        /**
         * @member {vf.IBitmapFontDataKerning[]} vf.BitmapFontData#kerning
         * @readOnly
         */
        readonly kerning: vf.IBitmapFontDataKerning[];
    }
    interface BitmapFontLoader extends vf.ILoaderPlugin {
    }
    /**
     * {@link vf.Loader Loader} middleware for loading
     * bitmap-based fonts suitable for using with {@link vf.BitmapText}.
     * @class
     * @memberof vf
     * @implements vf.ILoaderPlugin
     */
    class BitmapFontLoader implements vf.ILoaderPlugin {
        /**
         * Called when the plugin is installed.
         *
         * @see vf.Loader.registerPlugin
         */
        static add(): void;
        /**
         * Called after a resource is loaded.
         * @see vf.Loader.loaderMiddleware
         * @param {vf.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: vf.LoaderResource, next: (...params: any[]) => any): void;
    }
    /**
     * @param {string} text - A string that you would like the text to display.
     * @param {object} style - The style parameters.
     * @param {string|object} style.font - The font descriptor for the object, can be passed as a string of form
     *      "24px FontName" or "FontName" or as an object with explicit name/size properties.
     * @param {string} [style.font.name] - The bitmap font id.
     * @param {number} [style.font.size] - The size of the font in pixels, e.g. 24
     * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'), does not affect
     *      single line text.
     * @param {number} [style.tint=0xFFFFFF] - The tint color.
     */
    class BitmapText extends vf.Container {
        constructor(text: string, style: {
            font: {
                name?: string;
                size?: number;
            };
            align?: string;
            tint?: number;
        });
        /**
         * The dirty state of this object.
         *
         * @member {boolean} vf.BitmapText#dirty
         */
        dirty: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link vf.settings.ROUND_PIXELS}
         *
         * @member {boolean} vf.BitmapText#roundPixels
         * @default false
         */
        roundPixels: boolean;
        /**
         * Validates text before calling parent's getLocalBounds
         *
         * @return {vf.Rectangle} The rectangular bounding area
         */
        getLocalBounds(): vf.Rectangle;
        /**
         * The tint of the BitmapText object.
         *
         * @member {number}
         */
        tint: number;
        /**
         * The alignment of the BitmapText object.
         *
         * @member {string}
         * @default 'left'
         */
        align: string;
        /**
         * The anchor sets the origin point of the text.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * @member {vf.Point | number}
         */
        anchor: vf.Point | number;
        /**
         * The font descriptor of the BitmapText object.
         *
         * @member {object}
         */
        font: any;
        /**
         * The text of the BitmapText object.
         *
         * @member {string}
         */
        text: string;
        /**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting the value to 0.
         *
         * @member {number}
         */
        maxWidth: number;
        /**
         * The max line height. This is useful when trying to use the total height of the Text,
         * i.e. when trying to vertically align.
         *
         * @member {number}
         * @readonly
         */
        readonly maxLineHeight: number;
        /**
         * The width of the overall text, different from fontSize,
         * which is defined in the style object.
         *
         * @member {number}
         * @readonly
         */
        readonly textWidth: number;
        /**
         * Additional space between characters.
         *
         * @member {number}
         */
        letterSpacing: number;
        /**
         * The height of the overall text, different from fontSize,
         * which is defined in the style object.
         *
         * @member {number}
         * @readonly
         */
        readonly textHeight: number;
        /**
         * Register a bitmap font with data and a texture.
         *
         * @deprecated since 5.3.0
         * @see vf.BitmapFont.install
         * @static
         */
        static registerFont(): void;
        /**
         * Get the list of installed fonts.
         *
         * @see vf.BitmapFont.available
         * @deprecated since 5.3.0
         * @static
         * @readonly
         * @member {Object.<string, vf.BitmapFont>}
         */
        static readonly fonts: {
            [key: string]: vf.BitmapFont;
        };
        /**
         * To be overridden by the subclass
         * @method _renderCanvas
         * @memberof vf.Container#
         * @protected
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        protected _renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * Renders the object using the Canvas renderer
         * @method renderCanvas
         * @memberof vf.Container#
         * @param {vf.CanvasRenderer} renderer - The renderer
         */
        renderCanvas(renderer: vf.CanvasRenderer): void;
        /**
         * The array of children of this container.
         *
         * @member {vf.DisplayObject[]} vf.Container#children
         * @readonly
         */
        readonly children: vf.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see vf.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} vf.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} vf.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to add to the container
         * @return {vf.DisplayObject} The first child that was added.
         */
        addChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {vf.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {vf.DisplayObject} The child that was added.
         */
        addChildAt<T extends vf.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {vf.DisplayObject} child - First display object to swap
         * @param {vf.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: vf.DisplayObject, child2: vf.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {vf.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: vf.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {vf.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: vf.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {vf.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): vf.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...vf.DisplayObject} children - The DisplayObject(s) to remove
         * @return {vf.DisplayObject} The first child that was removed.
         */
        removeChild(...children: vf.DisplayObject[]): vf.DisplayObject;
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {vf.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): vf.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {vf.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): vf.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {vf.Renderer} renderer - The renderer
         */
        render(renderer: vf.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: vf.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {vf.Renderer} renderer - The renderer
         */
        protected _render(renderer: vf.Renderer): void;
        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Container default updateTransform, does update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.Container#
         * @function containerUpdateTransform
         */
        containerUpdateTransform(): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof vf.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof vf.Container#
         * @param {string} name - Instance name.
         * @return {vf.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): vf.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof vf.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {vf.Transform} vf.DisplayObject#transform
         */
        transform: vf.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} vf.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} vf.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} vf.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {vf.Container} vf.DisplayObject#parent
         */
        parent: vf.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} vf.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} vf.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} vf.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?vf.Rectangle} vf.DisplayObject#filterArea
         */
        filterArea: vf.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?vf.Filter[]} vf.DisplayObject#filters
         */
        filters: vf.Filter[];
        /**
         * Currently enabled filters
         * @member {vf.Filter[]} vf.DisplayObject#_enabledFilters
         * @protected
         */
        protected _enabledFilters: vf.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {vf.Bounds} vf.DisplayObject#_bounds
         */
        _bounds: vf.Bounds;
        /**
         * Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBounds
         */
        _localBounds: vf.Bounds;
        /**
         * Flags the cached bounds as dirty.
         *
         * @member {number} vf.DisplayObject#_boundsID
         * @protected
         */
        protected _boundsID: number;
        /**
         * Cache of this display-object's bounds-rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_boundsRect
         * @protected
         */
        protected _boundsRect: vf.Bounds;
        /**
         * Cache of this display-object's local-bounds rectangle.
         *
         * @member {vf.Bounds} vf.DisplayObject#_localBoundsRect
         * @protected
         */
        protected _localBoundsRect: vf.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {vf.Graphics|vf.Sprite|null} vf.DisplayObject#_mask
         * @protected
         */
        protected _mask: vf.Graphics | vf.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} vf.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} vf.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} vf.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {vf.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {vf.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: vf.Rectangle): vf.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {vf.Point} A point object representing the position of this object.
         */
        toGlobal(position: vf.IPoint, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {vf.IPoint} position - The world origin to calculate from.
         * @param {vf.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {vf.Point} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {vf.Point} A point object representing the position of this object
         */
        toLocal(position: vf.IPoint, from?: vf.DisplayObject, point?: vf.Point, skipUpdate?: boolean): vf.Point;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {vf.Container} container - The Container to add this DisplayObject to.
         * @return {vf.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: vf.Container): vf.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {vf.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): vf.DisplayObject;
        /**
         * @protected
         * @member {vf.Container}
         */
        protected _tempDisplayObjectParent: vf.Container;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly worldTransform: vf.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {vf.Matrix}
         * @readonly
         */
        readonly localTransform: vf.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        position: vf.ObservablePoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        scale: vf.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        pivot: vf.ObservablePoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {vf.ObservablePoint}
         */
        skew: vf.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link vf.Graphics} or a {@link vf.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new vf.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new vf.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, vf.CanvasRenderer doesn't support vf.Sprite as mask.
         *
         * @member {vf.Container|vf.MaskData}
         */
        mask: vf.Container | vf.MaskData;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof vf.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new vf.Rectangle(0, 0, 100, 100);
         * @member {vf.IHitArea}
         * @memberof vf.DisplayObject#
         */
        hitArea: vf.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new vf.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof vf.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof vf.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof vf.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof vf.DisplayObject#
         * @param {vf.Point} [point=new vf.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {vf.Point} The updated point.
         */
        getGlobalPosition(point?: vf.Point, skipUpdate?: boolean): vf.Point;
    }
    class Ticker {
        /**
         * Whether or not this ticker should invoke the method
         * {@link vf.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean} vf.Ticker#autoStart
         * @default false
         */
        autoStart: boolean;
        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link vf.Ticker#minFPS}
         * and is scaled with {@link vf.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number} vf.Ticker#deltaTime
         * @default 1
         */
        deltaTime: number;
        /**
         * Scaler time elapsed in milliseconds from last frame to this frame.
         * This value is capped by setting {@link vf.Ticker#minFPS}
         * and is scaled with {@link vf.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number} vf.Ticker#deltaMS
         * @default 16.66
         */
        deltaMS: number;
        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link vf.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number} vf.Ticker#elapsedMS
         * @default 16.66
         */
        elapsedMS: number;
        /**
         * The last time {@link vf.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number} vf.Ticker#lastTime
         * @default -1
         */
        lastTime: number;
        /**
         * Factor of current {@link vf.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number} vf.Ticker#speed
         * @default 1
         */
        speed: number;
        /**
         * Whether or not this ticker has been started.
         * `true` if {@link vf.Ticker#start} has been called.
         * `false` if {@link vf.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link vf.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean} vf.Ticker#started
         * @default false
         */
        started: boolean;
        /**
         * Register a handler for tick events. Calls continuously unless
         * it is removed or the ticker is stopped.
         *
         * @param {Function} fn - The listener function to be added for updates
         * @param {*} [context] - The listener context
         * @param {number} [priority=vf.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {vf.Ticker} This instance of a ticker
         */
        add(fn: (...params: any[]) => any, context?: any, priority?: number): vf.Ticker;
        /**
         * Add a handler for the tick event which is only execute once.
         *
         * @param {Function} fn - The listener function to be added for one update
         * @param {*} [context] - The listener context
         * @param {number} [priority=vf.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {vf.Ticker} This instance of a ticker
         */
        addOnce(fn: (...params: any[]) => any, context?: any, priority?: number): vf.Ticker;
        /**
         * Removes any handlers matching the function and context parameters.
         * If no handlers are left after removing, then it cancels the animation frame.
         *
         * @param {Function} fn - The listener function to be removed
         * @param {*} [context] - The listener context to be removed
         * @returns {vf.Ticker} This instance of a ticker
         */
        remove(fn: (...params: any[]) => any, context?: any): vf.Ticker;
        /**
         * The number of listeners on this ticker, calculated by walking through linked list
         *
         * @readonly
         * @member {number}
         */
        readonly count: number;
        /**
         * Starts the ticker. If the ticker has listeners
         * a new animation frame is requested at this point.
         */
        start(): void;
        /**
         * Stops the ticker. If the ticker has requested
         * an animation frame it is canceled at this point.
         */
        stop(): void;
        /**
         * Destroy the ticker and don't use after this. Calling
         * this method removes all references to internal events.
         */
        destroy(): void;
        /**
         * Triggers an update. An update entails setting the
         * current {@link vf.Ticker#elapsedMS},
         * the current {@link vf.Ticker#deltaTime},
         * invoking all listeners with current deltaTime,
         * and then finally setting {@link vf.Ticker#lastTime}
         * with the value of currentTime that was provided.
         * This method will be called automatically by animation
         * frame callbacks if the ticker instance has been started
         * and listeners are added.
         *
         * @param {number} [currentTime=performance.now()] - the current time of execution
         */
        update(currentTime?: number): void;
        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link vf.Ticker#speed}, which is specific
         * to scaling {@link vf.Ticker#deltaTime}.
         *
         * @member {number}
         * @readonly
         */
        readonly FPS: number;
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link vf.Ticker#update}.
         * This value is used to cap {@link vf.Ticker#deltaTime},
         * but does not effect the measured value of {@link vf.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `vf.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */
        minFPS: number;
        /**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link vf.Ticker#update}.
         * This will effect the measured value of {@link vf.Ticker#FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         *
         * @member {number}
         * @default 0
         */
        maxFPS: number;
        /**
         * The shared ticker instance used by {@link vf.AnimatedSprite} and by
         * {@link vf.VideoResource} to update animation frames / video textures.
         *
         * It may also be used by {@link vf.Application} if created with the `sharedTicker` option property set to true.
         *
         * The property {@link vf.Ticker#autoStart} is set to `true` for this instance.
         * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
         *
         * @example
         * let ticker = vf.Ticker.shared;
         * // Set this to prevent starting this ticker when listeners are added.
         * // By default this is true only for the vf.Ticker.shared instance.
         * ticker.autoStart = false;
         * // FYI, call this to ensure the ticker is stopped. It should be stopped
         * // if you have not attempted to render anything yet.
         * ticker.stop();
         * // Call this when you are ready for a running shared ticker.
         * ticker.start();
         *
         * @example
         * // You may use the shared ticker to render...
         * let renderer = vf.autoDetectRenderer();
         * let stage = new vf.Container();
         * document.body.appendChild(renderer.view);
         * ticker.add(function (time) {
         *     renderer.render(stage);
         * });
         *
         * @example
         * // Or you can just update it manually.
         * ticker.autoStart = false;
         * ticker.stop();
         * function animate(time) {
         *     ticker.update(time);
         *     renderer.render(stage);
         *     requestAnimationFrame(animate);
         * }
         * animate(performance.now());
         *
         * @member {vf.Ticker}
         * @static
         */
        static shared: vf.Ticker;
        /**
         * The system ticker instance used by {@link vf.interaction.InteractionManager} and by
         * {@link vf.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
         * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
         *
         * The property {@link vf.Ticker#autoStart} is set to `true` for this instance.
         *
         * @member {vf.Ticker}
         * @static
         */
        static system: vf.Ticker;
    }
    /**
     * Middleware for for Application Ticker.
     *
     * @example
     * import {TickerPlugin} from '@pixi/ticker';
     * import {Application} from '@pixi/app';
     * Application.registerPlugin(TickerPlugin);
     *
     * @class
     * @memberof vf
     */
    class TickerPlugin {
    }
    /**
     * Represents the update priorities used by internal vf classes when registered with
     * the {@link vf.Ticker} object. Higher priority items are updated first and lower
     * priority items, such as render, should go later.
     *
     * @static
     * @constant
     * @name UPDATE_PRIORITY
     * @memberof vf
     * @enum {number}
     * @property {number} INTERACTION=50 Highest priority, used for {@link vf.interaction.InteractionManager}
     * @property {number} HIGH=25 High priority updating, {@link vf.VideoBaseTexture} and {@link vf.AnimatedSprite}
     * @property {number} NORMAL=0 Default priority for ticker events, see {@link vf.Ticker#add}.
     * @property {number} LOW=-25 Low priority used for {@link vf.Application} rendering.
     * @property {number} UTILITY=-50 Lowest priority used for {@link vf.BasePrepare} utility.
     */
    const enum UPDATE_PRIORITY {
        INTERACTION,
        HIGH,
        NORMAL,
        LOW,
        UTILITY
    }
    /**
     * Regexp for data URI.
     * Based on: {@link https://github.com/ragingwind/data-uri-regex}
     *
     * @static
     * @constant {RegExp|string} DATA_URI
     * @memberof vf
     * @example data:image/png;base64
     */
    var DATA_URI: RegExp | string;
    /**
     * Generalized convenience utilities for vf.
     * @example
     * // Extend vf's internal Event Emitter.
     * class MyEmitter extends vf.utils.EventEmitter {
     *   constructor() {
     *      super();
     *      console.log("Emitter created!");
     *   }
     * }
     *
     * // Get info on current device
     * console.log(vf.utils.isMobile);
     *
     * // Convert hex color to string
     * console.log(vf.utils.hex2string(0xff00ff)); // returns: "#ff00ff"
     * @namespace vf.utils
     */
    namespace utils {
        /**
         * 跳过版本说明
         *
         * @function skipHello
         * @memberof vf.utils
         */
        function skipHello(): void;
        /**
         * 输出引擎版本信息
         *
         * @static
         * @function versionPrint
         * @memberof vf.utils
         * @param {string} version - 版本号 (gui 1.1.1).
         * @param {string} [docsSite=‘’] - 可访问文档地址.
         */
        function versionPrint(version: string, docsSite?: string): void;
        /**
         * 欢迎日志输出，输出版本信息与配置信息
         *
         * @static
         * @function sayHello
         * @memberof vf.utils
         * @param {string} type - The string renderer type to log.
         */
        function sayHello(type: string): void;
        /**
         * Helper for checking for WebGL support.
         *
         * @memberof vf.utils
         * @function isWebGLSupported
         * @return {boolean} Is WebGL supported.
         */
        function isWebGLSupported(): boolean;
        /**
         * Converts a hexadecimal color number to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).
         *
         * @example
         * vf.utils.hex2rgb(0xffffff); // returns [1, 1, 1]
         * @memberof vf.utils
         * @function hex2rgb
         * @param {number} hex - The hexadecimal number to convert
         * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
         * @return {number[]} An array representing the [R, G, B] of the color where all values are floats.
         */
        function hex2rgb(hex: number, out?: number[]): number[];
        /**
         * Converts a hexadecimal color number to a string.
         *
         * @example
         * vf.utils.hex2string(0xffffff); // returns "#ffffff"
         * @memberof vf.utils
         * @function hex2string
         * @param {number} hex - Number in hex (e.g., `0xffffff`)
         * @return {string} The string color (e.g., `"#ffffff"`).
         */
        function hex2string(hex: number): string;
        /**
         * Converts a hexadecimal string to a hexadecimal color number.
         *
         * @example
         * vf.utils.string2hex("#ffffff"); // returns 0xffffff
         * @memberof vf.utils
         * @function string2hex
         * @param {string} The string color (e.g., `"#ffffff"`)
         * @return {number} Number in hexadecimal.
         */
        function string2hex(The: string): number;
        /**
         * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
         *
         * @example
         * vf.utils.rgb2hex([1, 1, 1]); // returns 0xffffff
         * @memberof vf.utils
         * @function rgb2hex
         * @param {number[]} rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
         * @return {number} Number in hexadecimal.
         */
        function rgb2hex(rgb: number[]): number;
        /**
         * maps premultiply flag and blendMode to adjusted blendMode
         * @memberof vf.utils
         * @const premultiplyBlendMode
         * @type {Array<number[]>}
         */
        var premultiplyBlendMode: number[][];
        /**
         * changes blendMode according to texture format
         *
         * @memberof vf.utils
         * @function correctBlendMode
         * @param {number} blendMode supposed blend mode
         * @param {boolean} premultiplied  whether source is premultiplied
         * @returns {number} true blend mode for this texture
         */
        function correctBlendMode(blendMode: number, premultiplied: boolean): number;
        /**
         * combines rgb and alpha to out array
         *
         * @memberof vf.utils
         * @function premultiplyRgba
         * @param {Float32Array|number[]} rgb input rgb
         * @param {number} alpha alpha param
         * @param {Float32Array} [out] output
         * @param {boolean} [premultiply=true] do premultiply it
         * @returns {Float32Array} vec4 rgba
         */
        function premultiplyRgba(rgb: Float32Array | number[], alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        /**
         * premultiplies tint
         *
         * @memberof vf.utils
         * @function premultiplyTint
         * @param {number} tint integer RGB
         * @param {number} alpha floating point alpha (0.0-1.0)
         * @returns {number} tint multiplied by alpha
         */
        function premultiplyTint(tint: number, alpha: number): number;
        /**
         * converts integer tint and float alpha to vec4 form, premultiplies by default
         *
         * @memberof vf.utils
         * @function premultiplyTintToRgba
         * @param {number} tint input tint
         * @param {number} alpha alpha param
         * @param {Float32Array} [out] output
         * @param {boolean} [premultiply=true] do premultiply it
         * @returns {Float32Array} vec4 rgba
         */
        function premultiplyTintToRgba(tint: number, alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        /**
         * Generic Mask Stack data structure
         *
         * @memberof vf.utils
         * @function createIndicesForQuads
         * @param {number} size - Number of quads
         * @param {Uint16Array|Uint32Array} [outBuffer] - Buffer for output, length has to be `6 * size`
         * @return {Uint16Array|Uint32Array} - Resulting index buffer
         */
        function createIndicesForQuads(size: number, outBuffer?: Uint16Array | Uint32Array): Uint16Array | Uint32Array;
        /**
         * Rounds to next power of two.
         *
         * @function nextPow2
         * @memberof vf.utils
         * @param {number} v input value
         * @return {number}
         */
        function nextPow2(v: number): number;
        /**
         * Checks if a number is a power of two.
         *
         * @function isPow2
         * @memberof vf.utils
         * @param {number} v input value
         * @return {boolean} `true` if value is power of two
         */
        function isPow2(v: number): boolean;
        /**
         * Computes ceil of log base 2
         *
         * @function log2
         * @memberof vf.utils
         * @param {number} v input value
         * @return {number} logarithm base 2
         */
        function log2(v: number): number;
        /**
         * Remove items from a javascript array without generating garbage
         *
         * @function removeItems
         * @memberof vf.utils
         * @param {Array<any>} arr Array to remove elements from
         * @param {number} startIdx starting index
         * @param {number} removeCount how many to remove
         */
        function removeItems(arr: any[], startIdx: number, removeCount: number): void;
        /**
         * Returns sign of number
         *
         * @memberof vf.utils
         * @function sign
         * @param {number} n - the number to check the sign of
         * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
         */
        function sign(n: number): number;
        /**
         * Gets the next unique identifier
         *
         * @memberof vf.utils
         * @function uid
         * @return {number} The next unique identifier to use.
         */
        function uid(): number;
        /**
         * A simple JS library that detects mobile devices.
         *
         * @see {@link https://github.com/kaimallea/isMobile}
         *
         * @memberof vf.utils
         * @name isMobile
         * @type {Object}
         * @property {boolean} any - `true` if current platform is tablet or phone device
         * @property {boolean} tablet - `true` if current platform large-screen tablet device
         * @property {boolean} phone - `true` if current platform small-screen phone device
         * @property {object} apple
         * @property {boolean} apple.device - `true` if any Apple device
         * @property {boolean} apple.tablet - `true` if any Apple iPad
         * @property {boolean} apple.phone - `true` if any Apple iPhone
         * @property {boolean} apple.ipod - `true` if any iPod
         * @property {object} android
         * @property {boolean} android.device - `true` if any Android device
         * @property {boolean} android.tablet - `true` if any Android tablet
         * @property {boolean} android.phone - `true` if any Android phone
         * @property {object} amazon
         * @property {boolean} amazon.device - `true` if any Silk device
         * @property {boolean} amazon.tablet - `true` if any Silk tablet
         * @property {boolean} amazon.phone - `true` if any Silk phone
         * @property {object} windows
         * @property {boolean} windows.device - `true` if any Windows device
         * @property {boolean} windows.tablet - `true` if any Windows tablet
         * @property {boolean} windows.phone - `true` if any Windows phone
         */
        var isMobile: {
            any: boolean;
            tablet: boolean;
            phone: boolean;
            apple: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
                ipod: boolean;
            };
            android: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
            amazon: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
            windows: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
        };
        /**
         * 获取设备信息123
         *
         * @memberof vf.utils
         * @function getSystemInfo
         * @return {vf.ISystemInfo};
         */
        function getSystemInfo(): vf.ISystemInfo;
        /**
         * A high performance event emitter
         *
         * @see {@link https://github.com/primus/eventemitter3}
         *
         * @memberof vf.utils
         * @class EventEmitter
         * @type {EventEmitter}
         */
        class EventEmitter {
        }
        /**
         * A polygon triangulation library
         *
         * @see {@link https://github.com/mapbox/earcut}
         *
         * @memberof vf.utils
         * @function earcut
         * @param {number[]} vertices - A flat array of vertex coordinates
         * @param {number[]} [holes] - An array of hole indices
         * @param {number} [dimensions=2] The number of coordinates per vertex in the input array
         * @return {number[]} Triangulated polygon
         */
        function earcut(vertices: number[], holes?: number[], dimensions?: number): number[];
        /**
         * Node.js compatible URL utilities.
         *
         * @see https://www.npmjs.com/package/url
         *
         * @memberof vf.utils
         * @name url
         * @type {object}
         */
        var url: any;
        /**
         * 输出日志，格式化提示
         * 提示已经不推荐的类，属性等.
         * 提供简单的堆栈查看.
         *
         * @memberof vf.utils
         * @function deprecation
         * @param {string} version - 不推荐使用改功能的版本
         * @param {string} message - 输出消息
         * @param {number} [ignoreDepth=3] - 堆栈的调用步骤数.
         */
        function deprecation(version: string, message: string, ignoreDepth?: number): void;
        /**
         * @param {number} width - the width for the newly created canvas
         * @param {number} height - the height for the newly created canvas
         * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
         */
        class CanvasRenderTarget {
            constructor(width: number, height: number, resolution?: number);
            /**
             * The Canvas object that belongs to this CanvasRenderTarget.
             *
             * @member {HTMLCanvasElement} vf.utils.CanvasRenderTarget#canvas
             */
            canvas: HTMLCanvasElement;
            /**
             * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
             *
             * @member {CanvasRenderingContext2D} vf.utils.CanvasRenderTarget#context
             */
            context: CanvasRenderingContext2D;
            /**
             * Resizes the canvas to the specified width and height.
             *
             * @param {number} width - the new width of the canvas
             * @param {number} height - the new height of the canvas
             */
            resize(width: number, height: number): void;
            /**
             * Destroys this canvas.
             *
             */
            destroy(): void;
            /**
             * The width of the canvas buffer in pixels.
             *
             * @member {number}
             */
            width: number;
            /**
             * The height of the canvas buffer in pixels.
             *
             * @member {number}
             */
            height: number;
        }
        /**
         * @todo Describe property usage
         *
         * @static
         * @name ProgramCache
         * @memberof vf.utils
         * @type {Object}
         */
        var ProgramCache: any;
        /**
         * @todo Describe property usage
         *
         * @static
         * @name TextureCache
         * @memberof vf.utils
         * @type {Object}
         */
        var TextureCache: any;
        /**
         * @todo Describe property usage
         *
         * @static
         * @name BaseTextureCache
         * @memberof vf.utils
         * @type {Object}
         */
        var BaseTextureCache: any;
        /**
         * Destroys all texture in the cache
         *
         * @memberof vf.utils
         * @function destroyTextureCache
         */
        function destroyTextureCache(): void;
        /**
         * Removes all textures from cache, but does not destroy them
         *
         * @memberof vf.utils
         * @function clearTextureCache
         */
        function clearTextureCache(): void;
        /**
         * Trim transparent borders from a canvas
         *
         * @memberof vf.utils
         * @function trimCanvas
         * @param {HTMLCanvasElement} canvas - the canvas to trim
         * @returns {object} Trim data
         */
        function trimCanvas(canvas: HTMLCanvasElement): any;
        /**
         * @memberof vf.utils
         * @interface DecomposedDataUri
         */
        interface DecomposedDataUri {
            /**
             * type, eg. `image`
             * @memberof vf.utils.DecomposedDataUri#
             * @member {string} mediaType
             */
            mediaType: string;
            /**
             * Sub type, eg. `png`
             * @memberof vf.utils.DecomposedDataUri#
             * @member {string} subType
             */
            subType: string;
            /**
             * @memberof vf.utils.DecomposedDataUri#
             * @member {string} charset
             */
            charset: string;
            /**
             * Data encoding, eg. `base64`
             * @memberof vf.utils.DecomposedDataUri#
             * @member {string} encoding
             */
            encoding: string;
            /**
             * The actual data
             * @memberof vf.utils.DecomposedDataUri#
             * @member {string} data
             */
            data: string;
        }
        /**
         * Split a data URI into components. Returns undefined if
         * parameter `dataUri` is not a valid data URI.
         *
         * @memberof vf.utils
         * @function decomposeDataUri
         * @param {string} dataUri - the data URI to check
         * @return {vf.utils.DecomposedDataUri|undefined} The decomposed data uri or undefined
         */
        function decomposeDataUri(dataUri: string): vf.utils.DecomposedDataUri | undefined;
        /**
         * get the resolution / device pixel ratio of an asset by looking for the prefix
         * used by spritesheets and image urls
         *
         * @memberof vf.utils
         * @function getResolutionOfUrl
         * @param {string} url - the image path
         * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
         * @return {number} resolution / device pixel ratio of an asset
         */
        function getResolutionOfUrl(url: string, defaultValue?: number): number;
    }
}

/**
 * @interface SharedArrayBuffer
 */
declare interface SharedArrayBuffer {
}

/**
 * @interface OffscreenCanvas
 */
declare interface OffscreenCanvas {
}


declare namespace vf {
    namespace utils {
// https://github.com/primus/eventemitter3
        export interface EventEmitter {
            /**
             * Return an array listing the events for which the emitter has registered listeners.
             *
             * @returns {(string | symbol)[]}
             */
            eventNames(): Array<(string | symbol)>;

            /**
             * Return the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {Function[]}
             */
            //tslint:disable-next-line:ban-types forbidden-types
            listeners(event: string | symbol): Array<Function>;

            /**
             * Return the number of listeners listening to a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {number}
             */
            listenerCount(event: string | symbol): number;

            /**
             * Calls each of the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {...*} args Arguments that are passed to registered listeners
             * @returns {boolean} `true` if the event had listeners, else `false`.
             */
            emit(event: string | symbol, ...args: any[]): boolean;

            /**
             * Add a listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            on(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Add a one-time listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            once(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Remove the listeners of a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn Only remove the listeners that match this function.
             * @param {*} context Only remove the listeners that have this context.
             * @param {boolean} once Only remove one-time listeners.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Remove all listeners, or those of the specified event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {EventEmitter} `this`.
             */
            removeAllListeners(event?: string | symbol): this;

            /**
             * Alias method for `removeListener`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Alias method for `on`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            addListener(event: string | symbol, fn: Function, context?: any): this;
        }
    }

    namespace interaction {
        type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
        type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap";
        type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout";
        type InteractionPixiEvents = "added" | "removed";
        type InteractionEventTypes = InteractionPointerEvents | InteractionTouchEvents | InteractionMouseEvents | InteractionPixiEvents;
    }

    export interface DisplayObject {
        on(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string | symbol, fn: Function, context?: any): this;
        once(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string | symbol, fn: Function, context?: any): this;
        removeListener(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        removeListener(event: string | symbol, fn?: Function, context?: any): this;
        removeAllListeners(event?: interaction.InteractionEventTypes): this;
        removeAllListeners(event?: string | symbol): this;
        off(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: string | symbol, fn?: Function, context?: any): this;
        addListener(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        addListener(event: string | symbol, fn: Function, context?: any): this;
    }

    export interface Container {
        once(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string, fn: Function, context?: any): this;
        on(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string, fn: Function, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: "added" | "removed" | string, fn?: Function, context?: any): this;
    }
}

declare namespace vf {
    export interface Loader {
        baseUrl: string;
        progress: number;
        loading: boolean;
        defaultQueryString: string;
        resources: IResourceDictionary;
        concurrency: number;

        add(...params: any[]): this;
        //tslint:disable-next-line:ban-types forbidden-types
        add(name: string, url: string, options?: ILoaderOptions, cb?: Function): this;
        //tslint:disable-next-line:ban-types forbidden-types
        add(obj: string | any | any[], options?: ILoaderOptions, cb?: Function): this;

        //tslint:disable-next-line:ban-types forbidden-types
        pre(fn: Function): this;
        //tslint:disable-next-line:ban-types forbidden-types
        use(fn: Function): this;
        reset(): this;
        //tslint:disable-next-line:ban-types forbidden-types
        load(cb?: (loader: Loader, resources: Partial<Record<string, LoaderResource>>) => void): this;

        destroy(): void;
    }

    export interface IResourceDictionary {
        [index: string]: LoaderResource;
    }

    export interface ITextureDictionary {
        [index: string]: Texture;
    }

    export interface ILoaderOptions {
        crossOrigin?: boolean | string;
        loadType?: number;
        xhrType?: string;
        metadata?: {
            loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
            skipSource?: boolean;
            mimeType?: string | string[];
        };
    }

    export interface LoaderResource {
        name: string;
        url: string;
        extension: string;
        data: any;
        crossOrigin: boolean | string;
        loadType: number;
        xhrType: string;
        metadata: any;
        error: Error;
        xhr: XMLHttpRequest | null;
        children: LoaderResource[];
        type: number;
        progressChunk: number;
        isDataUrl: boolean;
        isComplete: boolean;
        isLoading: boolean;
        complete(): void;
        abort(message?: string): void;
        //tslint:disable-next-line:ban-types forbidden-types
        load(cb?: Function): void;
        texture: Texture;
        spineAtlas: any;
        spineData: any;
        spritesheet?: Spritesheet;
        textures?: ITextureDictionary;
    }

    namespace LoaderResource {
        function setExtensionLoadType(extname: string, loadType: number): void;
        function setExtensionXhrType(extname: string, xhrType: string): void;

        export enum STATUS_FLAGS {
            NONE = 0,
            DATA_URL = (1 << 0),
            COMPLETE = (1 << 1),
            LOADING = (1 << 2),
        }

        export enum TYPE {
            UNKNOWN = 0,
            JSON = 1,
            XML = 2,
            IMAGE = 3,
            AUDIO = 4,
            VIDEO = 5,
            TEXT = 6,
        }

        export enum LOAD_TYPE {

            /** Uses XMLHttpRequest to load the resource. */
            XHR = 1,
            /** Uses an `Image` object to load the resource. */
            IMAGE = 2,
            /** Uses an `Audio` object to load the resource. */
            AUDIO = 3,
            /** Uses a `Video` object to load the resource. */
            VIDEO = 4,
        }

        export enum XHR_RESPONSE_TYPE {
            /** string */
            DEFAULT = 'text',
            /** ArrayBuffer */
            BUFFER = 'arraybuffer',
            /** Blob */
            BLOB = 'blob',
            /** Document */
            DOCUMENT = 'document',
            /** Object */
            JSON = 'json',
            /** String */
            TEXT = 'text',
        }

        let EMPTY_GIF: string;
    }
}

declare module "vf.js" {
    export = vf;
}
declare namespace vf {
        /**
 * 具体类注释时，请使用vf.ISystemInfo,vf.XXXXX
 */

/**
 * 系统信息
 */
export interface ISystemInfo {

    ua: string;
    /**
     * 当前主机地址
     */
    pageUrl: string;
    /**
     * 当前主机地址
     */
    pageReferrer: string;
    /**
     * 系统语言
     */
    language: string;
    /**
     * 真实分辨率
     */
    resolution: string;
    /**
     * 设备信息
     */
    device: { name: string; type: string };
    /**
     * 系统版本
     */
    os: { name: string; version: string };
    /**
     * 浏览器版本
     */
    browser: { name: string; version: string };
}


    }

declare namespace vf{
    module sound{
        let useLegacy = true;
        class IMediaInstance{

        }
        class Sound{
            pause():void;
            paused = false;
            isPlaying = false; 
            autoPlay = true;
            resume();
            stop();
            play();
        }
    }
}