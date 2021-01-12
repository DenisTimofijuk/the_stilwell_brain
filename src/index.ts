import { initPixels } from "./EYE";
import Layer from "./layer";
import type Pixel from "./pixel";
import { initRetinaLayer } from "./RETINA";
import { initV1Layer } from "./V1";
import { initV2Layer } from "./V2";

export const TOTAL_PIXELS = 25;
export const PIXEL_STEP = Math.sqrt(TOTAL_PIXELS);


const pixels: Pixel[] = [];
const draw = initPixels(pixels);
initScreenEvents();
const RETINA = new Layer("RETNA");
const V1 = new Layer("V1");
const V2 = new Layer("V2");
initRetinaLayer(pixels, RETINA);
initV1Layer(RETINA, V1);
initV2Layer(V1, V2);
document.getElementById("go")?.addEventListener("click", compute);


function initScreenEvents() {
  const screenCanvas = document.getElementById("eye") as HTMLCanvasElement;
  screenCanvas.addEventListener("mousemove", draw);
  screenCanvas.addEventListener("contextmenu", (e) => { e.preventDefault(); return false; });
}

function compute() {
  RETINA.compute();
  V1.compute();
  V2.compute();

  console.log(RETINA);
  console.log(V1);
  console.log(V2);
}
