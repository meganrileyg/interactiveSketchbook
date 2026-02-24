let stepCount=0;
let maxSteps=8;
let zigzags = [];

var x = 25;
var h = 20;
var y = 25;


function setup() {
    createCanvas(600, 400);
    }

    function draw() {
    background("#E3F2FD");

    for (let z of zigzags) {
        zigzag(z.x, z.y, z.w, z.h, z.nSteps);
    }   
x = 20;
  rect(x, y, 300, h);        // Top
  x = x + 100;
  rect(x, y + h, 300, h);    // Middle
  x = x - 250;
  rect(x, y + h*2, 300, h);  // Bottom

//message when canvas is full
    if (zigzags.length >= maxSteps) {
        fill("#DB5461");
        textSize(24);
        textFont("Racing Sans One");
        textStyle(BOLD, ITALIC);
        textAlign(CENTER, TOP);
        text("JUST IN TIME!", width / 2, height / 2);
    }
    }
//add zigzag on mouse press
    function mousePressed() {
    if (zigzags.length >= maxSteps) return;

    let sectionWidth = width / maxSteps;
    let slot = zigzags.length;

    let x = slot * sectionWidth + sectionWidth * 0.1;
    let w = sectionWidth * 1.0;

    let h = 120;
    let y = height - h;

    zigzags.push({ x: x, y: y, w: w, h: h, nSteps: 10 });
    }

    function zigzag(x, y, width, height, nSteps) {
    let stepSize = width / nSteps;

    //zigzag shape and color
    noFill();
    stroke("#DB5461");

    beginShape();
    for (let i = 0; i < nSteps; i++) {
        let xPos = x + i * stepSize;
        let yPos = (i % 2 === 0) ? y : y + height;
        vertex(xPos, yPos);
    }
endShape();
    }
