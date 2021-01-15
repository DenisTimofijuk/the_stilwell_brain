import { PIXEL_STEP } from "./index";
import type Layer from "./layer";
import Neuron from "./neuron";
import { referenceCount, V1neuronsInLine, verticalNeuronsFirstIndex } from "./V1";

export let angleleftup_lastIndex = 0;
export let angleleftdown_lastIndex = 0;
export let anglerightup_lastIndex = 0;
export let anglerightdown_lastIndex = 0;
export let fulllineh_lastIndex = 0;
export let fulllinev_lastIndex = 0;

export function initV2Layer(V1: Layer, V2: Layer) {
    left_up();
    angleleftup_lastIndex = V2.neurons.length-1;
    left_down();
    angleleftdown_lastIndex = V2.neurons.length-1;
    right_up();
    anglerightup_lastIndex = V2.neurons.length-1;
    right_down();
    anglerightdown_lastIndex = V2.neurons.length-1;
    full_horizontal_lines();
    fulllineh_lastIndex = V2.neurons.length-1;
    full_vertical_lines();
    fulllinev_lastIndex = V2.neurons.length-1;

    function left_down() {
        let verticalNeuronIndex = verticalNeuronsFirstIndex;
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

    function full_horizontal_lines() {          
        for(let row = 1; row <= PIXEL_STEP; row++){
            let pixelsInLine = referenceCount;
            let index = row * V1neuronsInLine - V1neuronsInLine;
            let neuron = new Neuron();
            neuron.name = "full-line-h";
            neuron.references.push(V1.neurons[index]);
            let counter = 1;
            index++;
            while(counter < V1neuronsInLine){
                if(counter > pixelsInLine || counter === (V1neuronsInLine-1) ){
                    pixelsInLine+=pixelsInLine;
                    neuron.references.push(V1.neurons[index]);
                }                
                counter++;
                index++;
            }
            V2.neurons.push(neuron);
        }
    }

    function full_vertical_lines() {
        for (let col = 1; col <= PIXEL_STEP; col++) {
            let pixelsInLine = referenceCount;
            let index = col * V1neuronsInLine - V1neuronsInLine + verticalNeuronsFirstIndex;
            let neuron = new Neuron();
            neuron.name = "full-line-v";
            neuron.references.push(V1.neurons[index]);
            let counter = 1;
            index++;
            while(counter < V1neuronsInLine){
                if(counter > pixelsInLine || counter === (V1neuronsInLine-1) ){
                    pixelsInLine+=pixelsInLine;
                    neuron.references.push(V1.neurons[index]);
                }                
                counter++;
                index++;
            }
            V2.neurons.push(neuron);
        }
    }

}