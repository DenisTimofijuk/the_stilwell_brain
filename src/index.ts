import Layer from "./layer";
import Neuron from "./neuron";
import Pixel from "./pixel";

const pixels:Pixel[] = [];

function initPixels() {
  const screenCanvas = document.getElementById("eye") as HTMLCanvasElement;
  const TOTAL_PIXELS = 25;
  const devider = Math.sqrt(TOTAL_PIXELS);
  const pixelWidth = screenCanvas.width / devider;
  const pixelHeight = screenCanvas.height / devider;
  let x = 0;
  let y = 0;
  for (let index = 0; index < TOTAL_PIXELS; index++) {  
    pixels.push(new Pixel(pixelWidth, pixelHeight, x, y, screenCanvas, index));
    x += pixelWidth;
    if(x >= screenCanvas.width){
      y += pixelHeight;
      x = 0;
    }    
  }

  return function draw(event:MouseEvent){
    if(event.buttons !== 1 && event.buttons !== 2 ){
      return;
    }
  
    const x = Math.ceil(event.offsetX / pixelWidth);
    const y = Math.ceil(event.offsetY / pixelHeight);
    const index = y * devider - devider + x - 1;

    if(event.buttons === 1){
      pixels[index] && pixels[index].draw();
    }
    if(event.buttons === 2){
      pixels[index] && pixels[index].clear();
    }
  }
}

function indicatePixels() {
  for(let pixel of pixels){
    pixel.debug();
  }
}

function initScreenEvents() {
  const screenCanvas = document.getElementById("eye") as HTMLCanvasElement;
  screenCanvas.addEventListener("mousemove", draw);
  screenCanvas.addEventListener("contextmenu",  ( e )=> { e.preventDefault(); return false; } );
}

function initRetinaLayer() {
  pixels.forEach(pixel => {
    let neuron = new Neuron();
    neuron.referencePixel = pixel;
    RETINA.neurons.push( neuron )
  })
}

function compute() {
  RETINA.compute();
  console.log(RETINA);
}

const draw = initPixels();
indicatePixels();
initScreenEvents();
const RETINA = new Layer("RETNA");
initRetinaLayer();
document.getElementById("go")?.addEventListener("click", compute);