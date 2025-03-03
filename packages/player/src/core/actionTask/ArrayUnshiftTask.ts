import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction } from '../model/IVFData';

export class ArrayUnshiftTask extends BaseTask {
        
        public component: VFComponent;
        public data: IAction;

        constructor(compontent: VFComponent, data: IAction) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            if (this.component.vfStage && this.data.target) {
                const variableManager = this.component.vfStage.variableManager;
                const arrItem = variableManager.getVariableByData(this.component, this.data.target);
                if (arrItem) {
                    const arr = arrItem.value;
                    arr.unshift(this.data.value);
                }
            }
            this.complete();
        }
    }

