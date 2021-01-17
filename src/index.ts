import { initPixels } from "./EYE";
import { initITlayer } from "./IT";
import Layer from "./layer";
import type Pixel from "./pixel";
import { initRetinaLayer } from "./RETINA";
import { initV1Layer } from "./V1";
import { initV2Layer } from "./V2";
import { initV4layer } from "./V4";

export const TOTAL_PIXELS = 25;
export const PIXEL_STEP = Math.sqrt(TOTAL_PIXELS);


const pixels: Pixel[] = [];
const draw = initPixels(pixels);
initScreenEvents();
const RETINA = new Layer("RETNA");
const V1 = new Layer("V1");
const V2 = new Layer("V2");
const V4 = new Layer("V4");
const IT = new Layer("IT");
initRetinaLayer(pixels, RETINA);
initV1Layer(RETINA, V1);
initV2Layer(V1, V2);
initV4layer(V2, V4);
initITlayer(V4, IT);
document.getElementById("go")?.addEventListener("click", compute);


function initScreenEvents() {
  const screenCanvas = document.getElementById("eye") as HTMLCanvasElement;
  screenCanvas.addEventListener("mousemove", draw);
  screenCanvas.addEventListener("contextmenu", (e) => { e.preventDefault(); return false; });
}

function displayOutput() {
  let outputNode = document.getElementById("output")!;
  outputNode.innerText = "";
  let IT_result = IT.neurons.filter(neuron => neuron.state);
  IT_result.forEach(result => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(result.name));
    outputNode.appendChild(p);
  })
}


function compute() {
  RETINA.checkIfAll();
  V1.checkIfAll();
  V2.checkIfAll();
  V4.checkIfAll();
  IT.checkIfANy();
  IT.distinguish();

  displayOutput();
}
