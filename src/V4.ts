import type Layer from "./layer";
import Neuron from "./neuron";

export function initV4layer(V2: Layer, V4: Layer) {
    init_1();
    init_2();
    init_3();
    init_4();
    init_5();
    init_6();
    init_7();
    init_8();
    init_9();
    init_0();

    function init_1(){
        let lernedCombinations = [
            [41],
            [42],
            [43],
            [44],
            [45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-1";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_2(){
        let lernedCombinations = [
            [6, 15, 18, 27],
            [7, 16, 19, 28],
            [8, 17, 20, 29]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-2";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_3(){
        let lernedCombinations = [
            [18, 24, 27, 33, 43],
            [24, 27, 43],
            [19, 25, 28, 34, 44],
            [25, 28, 44],
            [20, 26, 29, 35, 45],
            [26, 29, 45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-3";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_4(){
        let lernedCombinations = [
            [0, 18, 33, 43],
            [0, 33],
            [1, 19, 34, 44],
            [1, 34],
            [2, 20, 35, 45],
            [2, 35]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-4";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_5(){
        let lernedCombinations = [
            [0, 9, 24, 33],
            [1, 10, 25, 34],
            [2, 11, 26, 35]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-5";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_6(){
        let lernedCombinations = [
            [0, 6, 9, 15, 24, 33, 41],
            [1, 7, 10, 16, 25, 34, 42],
            [2, 8, 11, 17, 26, 35, 43]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-6";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_7(){
        let lernedCombinations = [
            [27, 43],
            [28, 44],
            [29, 45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-7";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_8(){
        let lernedCombinations = [
            [0, 6, 9, 15, 18, 24, 27, 33, 41, 43],
            [1, 7, 10, 16, 19, 25, 28, 34, 42, 44],
            [2, 8, 11, 17, 20, 26, 29, 35, 43, 45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-8";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_9(){
        let lernedCombinations = [
            [0, 9, 18, 24, 27, 33, 43],
            [1, 10, 19, 25, 28, 34, 44],
            [2, 11, 20, 26, 29, 35, 45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-9";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }

    function init_0(){
        let lernedCombinations = [
            [6, 9, 24, 27, 41, 43],
            [7, 10, 25, 28, 42, 44],
            [8, 11, 26, 29, 43, 45]
        ]
        lernedCombinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = "possible-0";
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    }
}