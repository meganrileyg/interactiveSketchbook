let circleSize = 200;
let showMessage = false;
let messageStartTime = 0;
let waves = [];

let showIntroText = true;
let topMessage = "";
let topMessageTimer = 0;

let messages = [
    "Who are you?",
    "Where are you?",
    "What took you so long?",
    "Are you ignoring me?",
    "Is anyone there?",
    "I need to talk to you."
];

let currentMessage = "";

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas-container");

    textAlign(CENTER, CENTER);
    textSize(32);
    textFont("Monda");
}

function draw() {
    background(0);
    textFont("Monda"); // reinforce every frame

    // top instruction / status text
    if (topMessage !== "" && millis() < topMessageTimer) {
        fill(255);
        noStroke();
        textSize(18);
        text(topMessage, width / 2, 30);
    } else if (showIntroText) {
        fill(255);
        noStroke();
        textSize(18);
        text("Someone is trying to call you. Press ] to reach for the phone.", width / 2, 30);
    }

    textSize(32);

    // trigger message state
    if (!showMessage && circleSize >= max(width, height)) {
        showMessage = true;
        messageStartTime = millis();
        currentMessage = random(messages);
    }

    if (showMessage) {
        background(255, 0, 0);

        fill(255);
        noStroke();
        text(currentMessage, width / 2, height / 2 - 20);

        let timeLeft = 10 - floor((millis() - messageStartTime) / 1000);
        text(timeLeft, width / 2, height / 2 + 20);

        if (millis() - messageStartTime > 10000) {
            circleSize = 200;
            showMessage = false;
            waves = [];
        }

        return;
    }

    // draw circles (largest → smallest)
    let allCircles = [...waves, circleSize];
    allCircles.sort((a, b) => b - a);

    for (let w of allCircles) {
        stroke(120, 0, 0);
        strokeWeight(3);
        fill(255, 0, 0);
        ellipse(width / 2, height / 2, w, w);
    }

    // center text
    noStroke();
    fill(255);
    text("ring.", width / 2, height / 2);
}

function keyPressed() {
    if (key === "]") {
        showIntroText = false;

        // clear top message on press
        topMessage = "";
        topMessageTimer = 0;

        if (random() < 0.05) {
            circleSize = 200;
            showMessage = false;
            waves = [];

            topMessage = "Call dropped. Try again.";
            topMessageTimer = millis() + 3000;
        } else {
            waves.push(circleSize);
            circleSize += 100;
        }
    }

    if (key === "[") {
        circleSize = 200;
        waves = [];
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}