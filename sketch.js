function setup () {
  createCanvas (400, 400)

}

function draw () {
  background (255);
  frameRate (4);
  let x = random (width);
  let y = random (height);
  textSize (random(30, 70));
  fill(random (0, 255), random (0, 255),random (0, 255));
  strokeWeight (8);
  text ('wow!', x, y);
  
let n = 0
while (n < 25) {
  n = n + 2;
  bigSurprise (150, 150, 100, color(569,679,54));
}

}






function bigSurprise (xPos, yPos, size, colour) {
  fill (colour);
  text ('surprise!', xPos, yPos, textSize);
  
}
