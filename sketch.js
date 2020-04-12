//12.04.2020

var d = 10;
var n = 7;
var sliderD;
var sliderN;

function setup() {
  createCanvas(400, 400);
  sliderD = createSlider(1, 20, 10, 1); 
  sliderN = createSlider(1, 20, 10, 1); 
  sliderD.input(draw);
  sliderN.input(draw);
}


function draw() {
  background(50);
  d = sliderD.value();
  n = sliderN.value();
  var k = n/d;
  push();
  translate(width/2, height/2);
  beginShape();
  stroke(252);
  noFill();
  strokeWeight(1);
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  noLoop();
}
function reduceDenominator(numenator, denominator) {
  function rec(a, b) {
    return b ? rec(b, a%b) : a;
  }
  return denominator / rec(numenator, denominator);
}