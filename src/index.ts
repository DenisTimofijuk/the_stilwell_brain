import { initPixels } from "./EYE";
import { initITlayer } from "./IT";
import Layer from "./layer";
import type Neuron from "./neuron";
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
  let outputNode_it = document.getElementById("output-it")!;
  let outputNode_v2 = document.getElementById("output-v2")!;
  outputNode_it.innerText = "";
  outputNode_v2.innerText = "";
  let IT_result = IT.neurons.filter(neuron => neuron.state);
  IT_result.forEach(result => {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(result.name));
    outputNode_it.appendChild(span);
    createIcons(result.references.filter(neuron => neuron.state), outputNode_v2);
  })
}

function createIcons(neurons: Neuron[], parent: HTMLElement) {
  let wrapper = document.createElement('div');
  parent.appendChild(wrapper);
  neurons.forEach(neuron => {
    neuron.references.forEach(refneuron => {
      let icon = document.createElement("div");
      icon.classList.add("neuron-icon", refneuron.name);
      wrapper.appendChild(icon);
      icon.addEventListener('mouseover', () => refneuron.showIndication() );
      icon.addEventListener('mouseout', () => refneuron.clearIndication() )
    })
  })
}

function showLogs() {
  let logNode = document.getElementById("logs")!;
  logNode.innerText = "";

  [RETINA, V1, V2, V4, IT].forEach(layer => {
    let name = document.createTextNode( layer.name );
    let ol = document.createElement("ol");
    ol.start = 0;
    logNode?.appendChild(name);
    logNode?.appendChild(ol);
    layer.neurons.forEach(neuron => {
      let state = document.createTextNode( "State: " + JSON.stringify(neuron.state) );
      let name = document.createTextNode( "; Name: " + neuron.name );
      let li = document.createElement('li');
      ol.appendChild(li);
      li.appendChild(state);
      li.appendChild(name);
      li.className = neuron.state ? "state-true" : "state-false";
    })
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
  showLogs();
  // console.log(RETINA.neurons, V1.neurons, V2.neurons, V4.neurons, IT.neurons)
}