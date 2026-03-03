let circleSize = 200;
let showMessage = false;
let messageStartTime = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(32);
}

function draw () {
    background(0);

    // if circle fills canvas, trigger message once
    if (!showMessage && circleSize >= max(width, height)) {
        showMessage = true;
        messageStartTime = millis();
    }

    // if in message state
    if (showMessage) {
    background(255, 0, 0); // full red screen

    fill(255);
    text("Hello?", width/2, height/2 - 20);

    // countdown
    let timeLeft = 10 - floor((millis() - messageStartTime) / 1000);
    text(timeLeft, width/2, height/2 + 20);

    // after 10 seconds reset
    if (millis() - messageStartTime > 10000) {
        circleSize = 200;
        showMessage = false;
    }
    return;
}

    // normal state
    fill(255, 0, 0);
    noStroke();
    ellipse(width/2, height/2, circleSize, circleSize);

    fill(255);
    text("ring.", width/2, height/2);
}


// action
function keyPressed() {
    if (key === "]") {
        circleSize += 60; // size increases
    }

    if (key === "[") {
    circleSize = 200; // reset to initial size
}
}