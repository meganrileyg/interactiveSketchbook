let circleSize = 200;
let showMessage = false;
let messageStartTime = 0;
let waves = [];

let showIntroText = true;
let topMessage = "";
let topMessageTimer = 0;

let shakeTimer = 0;
let shakeDuration = 150;

let messages = [
  "Who are you?",
  "Where are you?",
  "What took you so long?",
  "Are you ignoring me?",
  "Is anyone there?",
  "I need to talk to you.",
  "Where are you going?",
  "Come back.",
  "It's been too long.",
  "Don't ignore me."
];

let currentMessage = "";
let isMobile;

function setup() {
  isMobile = windowWidth <= 768;

  let canvasWidth;
  let canvasHeight;

  if (isMobile) {
    canvasWidth = min(windowWidth * 0.92, 430);
    canvasHeight = windowHeight * 0.72;
  } else {
    canvasWidth = 990;
    canvasHeight = 500;
  }

  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas-container");

  textAlign(CENTER, CENTER);
  textFont("Monda");
}

function draw() {
  background(0);
  textFont("Monda");

  if (topMessage !== "" && millis() < topMessageTimer) {
    fill(255);
    noStroke();
    textSize(18);
    text(topMessage, width / 2, 35);
  } else if (showIntroText) {
    fill(255);
    noStroke();

    if (isMobile) {
      textSize(15);
      text(
        "Someone is trying to call you.\nTap the screen to reach for the phone.",
        width / 2,
        48
      );
    } else {
      textSize(18);
      text(
        "Someone is trying to call you. Press ] to reach for the phone.",
        width / 2,
        height / 15
      );
    }
  }

  if (!showMessage && circleSize >= max(width, height)) {
    showMessage = true;
    messageStartTime = millis();
    currentMessage = random(messages);
  }

  if (showMessage) {
    background(255, 0, 0);

    fill(255);
    noStroke();
    textSize(32);
    text(currentMessage, width / 2, height / 2 - 20);

    let timeLeft = 10 - floor((millis() - messageStartTime) / 1000);
    text(timeLeft, width / 2, height / 2 + 25);

    if (millis() - messageStartTime > 10000) {
      circleSize = 200;
      showMessage = false;
      waves = [];
      showIntroText = true;
    }

    return;
  }

  let allCircles = [...waves, circleSize];
  allCircles.sort((a, b) => b - a);

  for (let w of allCircles) {
    stroke(120, 0, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    ellipse(width / 2, height / 2, w, w);
  }

  let shakeX = 0;
  let shakeY = 0;

  if (millis() < shakeTimer) {
    let dynamicShake = map(circleSize, 200, max(width, height), 2, 12);
    shakeX = random(-dynamicShake, dynamicShake);
    shakeY = random(-dynamicShake, dynamicShake);
  }

  noStroke();
  fill(255);
  textSize(32);
  text("ring.", width / 2 + shakeX, height / 2 + shakeY);
}

function reachForPhone() {
  showIntroText = false;

  shakeTimer = millis() + shakeDuration;

  topMessage = "";
  topMessageTimer = 0;

  if (random() < 0.025) {
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

function keyPressed() {
  if (key === "]") {
    reachForPhone();
  }

  if (key === "[") {
    circleSize = 200;
    waves = [];
    showIntroText = true;
  }
}

function touchStarted() {
  if (isMobile) {
    reachForPhone();
    return false;
  }
}

function windowResized() {
  isMobile = windowWidth <= 768;

  if (isMobile) {
    resizeCanvas(min(windowWidth * 0.92, 430), windowHeight * 0.72);
  } else {
    resizeCanvas(990, 500);
  }
}