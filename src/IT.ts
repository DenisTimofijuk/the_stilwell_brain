import type Layer from "./layer";
import Neuron, { V4neurons } from "./neuron";

type NeuronRule = { name: V4neurons, priority: number }

export function initITlayer(V4: Layer, IT: Layer) {
    
    let rules: Array<NeuronRule> = [
        {
            name: "possible-1",
            priority: 1
        },
        {
            name: "possible-2",
            priority: 2
        },
        {
            name: "possible-3",
            priority: 3
        },
        {
            name: "possible-4",
            priority: 2
        },
        {
            name: "possible-5",
            priority: 5
        },
        {
            name: "possible-6",
            priority: 6
        },
        {
            name: "possible-7",
            priority: 2
        },
        {
            name: "possible-8",
            priority: 10
        },
        {
            name: "possible-9",
            priority: 8
        },
        {
            name: "possible-0",
            priority: 9
        }
    ];

    rules.forEach(rule => init(rule));

    function init(rule: NeuronRule) {
        let neuron = new Neuron();
        neuron.name = rule.name;
        neuron.references.push(...V4.neurons.filter(neuron => neuron.name === rule.name));
        neuron.priority = rule.priority;
        IT.neurons.push(neuron);
    }
}