import type Layer from "./layer";
import Neuron from "./neuron";
import type Pixel from "./pixel";

export function initRetinaLayer(pixels:Pixel[], RETINA:Layer) {
    pixels.forEach(pixel => {
      let neuron = new Neuron();
      neuron.name = "pixel";
      neuron.referencePixel = pixel;
      RETINA.neurons.push(neuron)
    })
  }