import { PIXEL_STEP } from "./index";
import type Layer from "./layer";
import Neuron from "./neuron";
import { referenceCount, V1neuronsInLine, verticalNeuronsFirstIndex } from "./V1";

export function initV2Layer(V1: Layer, V2: Layer) {
    let verticalNeuronIndex = verticalNeuronsFirstIndex;
    left_up();
    left_down();
    right_up();
    right_down();

    function left_down() {
        let reference_index_1 = 0;
        let reference_index_2 = verticalNeuronIndex;
        let lastAvailableIndex = (PIXEL_STEP - 2) * V1neuronsInLine;
        while (reference_index_1 < lastAvailableIndex) {
            for (let i = 0; i < V1neuronsInLine; i++) {
                let neuron = new Neuron();
                neuron.name = "angle-left-down";
                neuron.references.push(
                    V1.neurons[reference_index_1],
                    V1.neurons[reference_index_2]
                );
                V2.neurons.push(neuron);

                reference_index_1++;
                reference_index_2 += V1neuronsInLine;
            }
            reference_index_2 = ++verticalNeuronIndex;
        }
    }

    function right_up() {
        let firstHorizontalCompatibleIndex = (referenceCount - 1) * V1neuronsInLine;
        let firstVerticalCompatibleIndex = (referenceCount - 1) * V1neuronsInLine + verticalNeuronsFirstIndex;
        let counter = V1neuronsInLine;
        let reference_index_2 = firstVerticalCompatibleIndex;
        for (let reference_index_1 = firstHorizontalCompatibleIndex; reference_index_1 < verticalNeuronsFirstIndex; reference_index_1++) {
            let neuron = new Neuron();
            neuron.name = "angle-right-up";
            neuron.references.push(
                V1.neurons[reference_index_1],
                V1.neurons[reference_index_2]
            );
            V2.neurons.push(neuron);

            --counter;
            if(counter <= 0){
                counter = V1neuronsInLine;
                firstVerticalCompatibleIndex++;
                reference_index_2 = firstVerticalCompatibleIndex;
            }else{
                reference_index_2 += V1neuronsInLine;
            }
        }
    }

    function right_down() {
        let firstVerticalCompatibleIndex = verticalNeuronsFirstIndex + (referenceCount - 1) * V1neuronsInLine;
        let lastHorizontalCompatibleIndex = verticalNeuronsFirstIndex - (referenceCount - 1) * V1neuronsInLine - 1;
        let counter = V1neuronsInLine;
        let reference_index_2 = firstVerticalCompatibleIndex;
        for(let reference_index_1 = 0; reference_index_1 <= lastHorizontalCompatibleIndex; reference_index_1++){
            let neuron = new Neuron();
            neuron.name = "angle-right-down";
            neuron.references.push(
                V1.neurons[reference_index_1],
                V1.neurons[reference_index_2]
            );
            V2.neurons.push(neuron);
            
            --counter;
            if(counter <= 0){
                counter = V1neuronsInLine;
                firstVerticalCompatibleIndex++;
                reference_index_2 = firstVerticalCompatibleIndex;
            }else{
                reference_index_2 += V1neuronsInLine;
            }

        }
    }

    function left_up() {
        let firstHorizontalCompatibleIndex = (referenceCount - 1) * V1neuronsInLine;
        let firstVerticalCompatibleIndex = verticalNeuronsFirstIndex;
        let counter = V1neuronsInLine;
        let reference_index_2 = verticalNeuronsFirstIndex;
        for(let reference_index_1 = firstHorizontalCompatibleIndex; reference_index_1 < verticalNeuronsFirstIndex; reference_index_1++){
            let neuron = new Neuron();
            neuron.name = "angle-left-up";
            neuron.references.push(
                V1.neurons[reference_index_1],
                V1.neurons[reference_index_2]
            );
            V2.neurons.push(neuron);
            
            --counter;
            if(counter <= 0){
                counter = V1neuronsInLine;
                firstVerticalCompatibleIndex++;
                reference_index_2 = firstVerticalCompatibleIndex;
            }else{
                reference_index_2 += V1neuronsInLine;
            }
        }
    }

}