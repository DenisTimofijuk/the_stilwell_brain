import type Neuron from "./neuron";

type LayerName = "RETNA" | "V1" | "V2" | "V4" | "IT"

export default class Layer {
    name: LayerName;
    neurons: Neuron[];
    constructor(name:LayerName) {
        this.name = name;
        this.neurons = [];
    }

    checkIfAll(){
        this.neurons.forEach(neuron => {
            neuron.checkStateByReferencesAll();
        })
    }

    checkIfANy(){
        this.neurons.forEach(neuron => {
            neuron.checkStateByReferencesAny();
        })
    }

    distinguish(){
        let active = this.neurons.filter(neuron => neuron.state);
        let highestPriority = findHighestValue(active);

        active.forEach(neuron => neuron.priority && neuron.priority < highestPriority ? neuron.state = false : "");
    }

    debug(){
        let combination:number[] = []
        this.neurons.forEach( (neuron, index) => neuron.state && combination.push(index));
        console.log(combination)
    }

    // showIndications(){
    //     let activeNeurons = this.neurons.filter(neuron => neuron.state);
    //     activeNeurons.forEach(neuron => neuron.showIndication());
    // }
}

function findHighestValue(neurons:Neuron[]) {
    let highestVal = 1;

    neurons.forEach(neuron => {
        if(neuron.priority && neuron.priority > highestVal){
            highestVal = neuron.priority;
        }
    })
    
    return highestVal;
}