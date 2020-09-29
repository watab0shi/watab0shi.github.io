function setup() {
  createCanvas(400, 400);
  background(220);

  for (let i = 0; i < 7; i++) {
    let x = (i * 50) + 50;
    line(x, 180, x, 220);
  }
}