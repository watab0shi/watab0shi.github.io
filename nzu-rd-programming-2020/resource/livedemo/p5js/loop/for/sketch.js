function setup() {
  createCanvas(400, 400);
  background(220);

  for (let x = 50; x < 400; x += 50) {
    line(x, 180, x, 220);
  }
}