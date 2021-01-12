
import { PIXEL_STEP } from "./index";
import type Layer from "./layer";
import Neuron from "./neuron";

const referenceCount = 3;
export let verticalNeuronsFirstIndex = 0;
export let neuronsInLine = -1;

export function initV1Layer(RETINA:Layer, V1:Layer) {
    
    _horizontal();
    verticalNeuronsFirstIndex = V1.neurons.length;
    _vertical();

    function _horizontal() {
      for (let counter = 1; counter <= PIXEL_STEP; counter++) {
        let index = counter * PIXEL_STEP - PIXEL_STEP + referenceCount - 1;
        let total = 0;
        while (index % PIXEL_STEP !== 0) {
          total++;
          let reference_index_1 = index - 2;
          let reference_index_2 = index - 1;
          let reference_index_3 = index;
          let neuron = new Neuron();
          neuron.references.push(
            RETINA.neurons[reference_index_1],
            RETINA.neurons[reference_index_2],
            RETINA.neurons[reference_index_3]
          )
          V1.neurons.push(neuron);
          index++;
        }
        if(neuronsInLine < 0){
          neuronsInLine = total;
        }
      }
    }

    function _vertical() {
      for(let counter = 0; counter < PIXEL_STEP; counter++){
        let index = counter;
        let reference_index_1 = 0;
        let reference_index_2 = 0;
        let reference_index_3 = 0;
        let lastAvailableIndex = PIXEL_STEP * PIXEL_STEP - PIXEL_STEP + counter;
        
        while (reference_index_3 < lastAvailableIndex) {
          reference_index_1 = index;
          reference_index_2 = index + PIXEL_STEP;
          reference_index_3 = index + PIXEL_STEP * 2;
          let neuron = new Neuron();
          neuron.references.push(
            RETINA.neurons[reference_index_1],
            RETINA.neurons[reference_index_2],
            RETINA.neurons[reference_index_3]
          )
          V1.neurons.push(neuron);
          index += PIXEL_STEP;
        }
      }
    }
  }