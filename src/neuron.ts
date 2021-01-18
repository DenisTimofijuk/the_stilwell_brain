import type Pixel from "./pixel";

type V1neurons = "vertical" | "horizontal";
type V2neurons = "angle-left-up" | "angle-left-down" | "angle-right-up" | "angle-right-down" | "full-line-h" | "full-line-v";
export type V4neurons = "possible-1" | "possible-2" | "possible-3" | "possible-4" | "possible-5" | "possible-6" | "possible-7" | "possible-8" | "possible-9" | "possible-0";
export default class Neuron {
    state: boolean;
    references: Neuron[];
    referencePixel?: Pixel;
    name: V1neurons | V2neurons | V4neurons | "pixel" | "";
    priority?: number;
    constructor(references: Neuron[] = []) {
        this.state = false;
        this.priority;
        this.referencePixel;
        this.references = references;
        this.name = "";
    }

    checkStateByReferencesAll() {
        if (this.references.length > 0) {
            this.state = this.references.filter(neuron => neuron.state).length === this.references.length;
        } else {
            this.state = this.referencePixel?.state || false;
        }
    }

    checkStateByReferencesAny() {
        this.state = this.references.filter(neuron => neuron.state).length > 0;
    }

    showIndication() {
        _findPixel(this.references);

        function _findPixel(neurons: Neuron[]) {
            neurons.forEach(neuron => {
                if (neuron.referencePixel) {
                    neuron.referencePixel.drawNeuronIndication();
                    return;
                } else {
                    return _findPixel(neuron.references);
                }
            })
        }
    }

    clearIndication(){
        _findPixel(this.references);

        function _findPixel(neurons: Neuron[]) {
            neurons.forEach(neuron => {
                if (neuron.referencePixel) {
                    neuron.referencePixel.clear();
                    neuron.referencePixel.draw();
                    return;
                } else {
                    return _findPixel(neuron.references);
                }
            })
        }
    }
}

