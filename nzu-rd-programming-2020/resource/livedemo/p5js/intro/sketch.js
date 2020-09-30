function setup() {
  createCanvas(400, 400);
}

function draw() {
  let brightness = frameCount % 255;
  background(brightness);
}