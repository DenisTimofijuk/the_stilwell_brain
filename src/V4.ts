import { PIXEL_STEP } from "./index";
import type Layer from "./layer";
import Neuron from "./neuron";
import { angleleftdown_lastIndex, angleleftup_lastIndex, anglerightdown_lastIndex, anglerightup_lastIndex, fulllineh_lastIndex, fulllinev_lastIndex } from "./V2";

export function initV4layer(V2: Layer, V4: Layer) {
    let firstIndex_angleleftup = 0;
    let lastIndex_angleleftup = angleleftup_lastIndex;

    let firstIndex_angleleftdown = angleleftdown_lastIndex - (angleleftdown_lastIndex - lastIndex_angleleftup) + 1;
    let lastIndex_angleleftdown = angleleftdown_lastIndex;

    let firstIndex_anglerightup = anglerightup_lastIndex - (anglerightup_lastIndex - lastIndex_angleleftdown) + 1;
    let lastIndex_anglerightup = anglerightup_lastIndex;

    let firstIndex_anglerightdown = anglerightdown_lastIndex - (anglerightdown_lastIndex - lastIndex_anglerightup) + 1;
    let lastIndex_anglerightdown = anglerightdown_lastIndex;

    let firstIndex_fulllineh = fulllineh_lastIndex - (fulllineh_lastIndex - lastIndex_anglerightdown) + 1;
    let lastIndex_fulllineh = fulllineh_lastIndex;

    let firstIndex_fulllinev = fulllinev_lastIndex - (fulllinev_lastIndex - lastIndex_fulllineh) + 1;
    let lastIndex_fulllinev = fulllinev_lastIndex;

    init_1();
    init_2();

    function init_1() {
        for (let index = firstIndex_fulllinev; index <= lastIndex_fulllinev; index++) {
            let neuron = new Neuron();
            neuron.name = "possible-1";
            neuron.references.push(V2.neurons[index]);
            V4.neurons.push(neuron);
        }
    }

    function init_2(){

    }
}