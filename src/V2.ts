import { PIXEL_STEP } from "./index";
import type Layer from "./layer";
import Neuron from "./neuron";
import { neuronsInLine, verticalNeuronsFirstIndex } from "./V1";

export function initV2Layer(V1:Layer, V2:Layer) {
    let verticalNeuronIndex = verticalNeuronsFirstIndex;
    right_down();

    function right_down() {
        let reference_index_1 = 0;
        let reference_index_2 = verticalNeuronIndex;
        let lastAvailableIndex = (PIXEL_STEP - 2) * neuronsInLine;
        while (reference_index_1 < lastAvailableIndex) {            
            for(let i = 0; i< neuronsInLine; i++){
                let neuron = new Neuron();
                neuron.name = "angle-right-down";
                neuron.references.push(
                    V1.neurons[reference_index_1],
                    V1.neurons[reference_index_2]
                );
                V2.neurons.push(neuron);
                
                reference_index_1++;
                reference_index_2 += neuronsInLine;
            }
            reference_index_2 = ++verticalNeuronIndex;
        }
    }

}