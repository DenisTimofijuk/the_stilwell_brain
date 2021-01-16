import type Layer from "./layer";
import Neuron, { V4neurons } from "./neuron";

export function initITlayer(V4:Layer, IT:Layer) {
    let names:V4neurons[] = ["possible-1", "possible-2", "possible-3", "possible-4", "possible-5", "possible-6", "possible-7", "possible-8", "possible-9", "possible-0"];

    names.forEach(name => init(name));

    function init(name:V4neurons) {
        let neuron = new Neuron();
        neuron.name = name;
        neuron.references.push(...V4.neurons.filter(neuron => neuron.name === name));
        IT.neurons.push(neuron);
    }
}