let circleSize = 200;

function setup () {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(32);
}

function draw () {
    background(0);

    // red circle
    fill(255, 0, 0);
    noStroke();
    ellipse(width/2, height/2, circleSize, circleSize);

    // text in center
    fill(255);
    text("ring.", width/2, height/2);
}

// action
function keyPressed() {
    if (key === "]") {
        circleSize += 60; // size increases
    }
}