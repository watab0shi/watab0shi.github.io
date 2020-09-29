function setup() {
  createCanvas(400, 400);
  background(220);

  let x = 50;
  while (x < 400) {
    line(x, 180, x, 220);
    x += 50;
  }
}