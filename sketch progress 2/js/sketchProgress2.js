let circleSize = 200;
let showMessage = false;
let messageStartTime = 0;
let messages = [
    "Who are you?",
    "Where are you?",
    "What took you so long?",
    "Are you ignoring me?",
    "Is anyone there?",
    "I need to talk to you."
];

let currentMessage = "";

function setup () {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(32);
}

function draw () {
    background(0);


    // if in message state
  if (!showMessage && circleSize >= max(width, height)) {
    showMessage = true;
    messageStartTime = millis();
    currentMessage = random(messages);
}

if (showMessage) {
    background(255, 0, 0);

    fill(255);
    text(currentMessage, width/2, height/2 - 20);

    let timeLeft = 10 - floor((millis() - messageStartTime) / 1000);
    text(timeLeft, width/2, height/2 + 20);

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
        // 10% chance to reset everything
        if (random() < 0.025) {
            circleSize = 200;
            showMessage = false;
        } else {
            circleSize += 80; // normal behavior
        }
    }

    if (key === "[") {
        circleSize = 200; // reset to initial size
    }
}