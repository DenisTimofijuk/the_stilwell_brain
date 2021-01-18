import type Layer from "./layer";
import Neuron, { V4neurons } from "./neuron";

type LearnedRules = {
    name:V4neurons,
    combinations: Array<Array<number>>
}

export function initV4layer(V2: Layer, V4: Layer) {

    const learned:LearnedRules[] = [
        {
            name: "possible-1",
            combinations: [
                [41],
                [42],
                [43],
                [44],
                [45]
            ]
        },
        {
            name: "possible-2",
            combinations: [
                [6, 15, 18, 27],
                [7, 16, 19, 28],
                [8, 17, 20, 29]
            ]
        },
        {
            name: "possible-3",
            combinations: [
                [18, 24, 27, 33, 43],
                [24, 27, 43],
                [19, 25, 28, 34, 44],
                [25, 28, 44],
                [20, 26, 29, 35, 45],
                [26, 29, 45]
            ]
        },
        {
            name: "possible-4",
            combinations: [
                [0, 18, 33, 43],
                [0, 33],
                [1, 19, 34, 44],
                [1, 34],
                [2, 20, 35, 45],
                [2, 35]
            ]
        },
        {
            name: "possible-5",
            combinations: [
                [0, 9, 24, 33],
                [1, 10, 25, 34],
                [2, 11, 26, 35]
            ]
        },
        {
            name: "possible-6",
            combinations: [
                [0, 6, 9, 15, 24, 33, 41],
                [1, 7, 10, 16, 25, 34, 42],
                [2, 8, 11, 17, 26, 35, 43]
            ]
        },
        {
            name: "possible-7",
            combinations: [
                [27, 43],
                [28, 44],
                [29, 45]
            ]
        },
        {
            name: "possible-8",
            combinations: [
                [0, 6, 9, 15, 18, 24, 27, 33, 41, 43],
                [1, 7, 10, 16, 19, 25, 28, 34, 42, 44],
                [2, 8, 11, 17, 20, 26, 29, 35, 43, 45]
            ]
        },
        {
            name: "possible-9",
            combinations: [
                [0, 9, 18, 24, 27, 33, 43],
                [1, 10, 19, 25, 28, 34, 44],
                [2, 11, 20, 26, 29, 35, 45]
            ]
        },
        {
            name: "possible-0",
            combinations: [
                [6, 9, 24, 27, 41, 43],
                [7, 10, 25, 28, 42, 44],
                [8, 11, 26, 29, 43, 45]
            ]
        }
    ]

    learned.forEach(lesson => {
        lesson.combinations.forEach(comb => {
            let neuron = new Neuron()
            neuron.name = lesson.name;
            comb.forEach(index => neuron.references.push(V2.neurons[index]));
            V4.neurons.push(neuron);
        })
    })
}