import type Neuron from "./neuron";

type LayerName = "RETNA" | "V1" | "V2" | "V4" | "IT"

export default class Layer {
    name: LayerName;
    neurons: Neuron[];
    constructor(name:LayerName) {
        this.name = name;
        this.neurons = [];
    }

    computeAll(){
        this.neurons.forEach(neuron => {
            neuron.checkStateByReferencesAll();
        })
    }

    computeAny(){
        this.neurons.forEach(neuron => {
            neuron.checkStateByReferencesAny();
        })
    }

    debug(){
        let combination:number[] = []
        this.neurons.forEach( (neuron, index) => neuron.state && combination.push(index));
        console.log(combination)
    }
}