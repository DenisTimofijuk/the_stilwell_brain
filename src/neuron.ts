import type Pixel from "./pixel";

export default class Neuron {
    state: boolean;
    references: Neuron[];
    referencePixel?: Pixel;
    name: "angle-left-up" | "angle-left-down" | "angle-right-up" | "angle-right-down" | "";
    constructor(references: Neuron[] = []) {
        this.state = false;
        this.referencePixel;
        this.references = references;
        this.name = "";
    }

    checkStateByReferences() {
        if (this.references.length > 0) {
            let state = true;
            for (let neuron of this.references) {
                if (!neuron.state) {
                    state = false;
                }
            }
            this.state = state;
        }else{
            this.state = this.referencePixel?.state || false;
        }
    }
}