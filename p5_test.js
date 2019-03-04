function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 中心線
  strokeWeight(1);
  stroke(200);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  // ハート
  noFill();
  strokeWeight(2);
  stroke(200, 0, 0);
  strokeJoin(ROUND); //線のつなぎ目について設定
  drawHeart(width/2, height/2, 8);  // 横の位置、縦の位置、大きさ調整用変数
}

function drawHeart(ox, oy, size) {
  push();
  translate(ox, oy);
  beginShape();
  for (theta = 0; theta < 360; theta++) {
    x = size * (16 * sin(radians(theta)) * sin(radians(theta)) * sin(radians(theta)));
    y = (-1) * size * (13 * cos(radians(theta)) - 5 * cos(radians(2 * theta))
      - 2 * cos(radians(3 * theta)) - cos(radians(4 * theta)));

    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}
