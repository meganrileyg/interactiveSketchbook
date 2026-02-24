let steps = 0;
let maxSteps = 6;
function setup() {
    createCanvas(600, 400);
    }

    function draw() {
    background("#BFDBF7");

    let sectionwidth = width / maxSteps;

    //hills
    noStroke();
    fill("#8b9556");
    let hillSize = width / 2.5;
    ellipse(0, height, hillSize, hillSize);
    ellipse(width, height, hillSize, hillSize);

    // bridge
    stroke("#2b1701");
    fill("#664e4c");
    for (let i = 0; i < steps; i++) {
        rect(i * sectionwidth, height / 2-1, sectionwidth, 50);
    }

    // text
    fill("#414628");
    noStroke();
    textSize(32);
    textAlign(CENTER, TOP);
    textFont("Germania One");

    if (steps < maxSteps) {
        text("click to build the bridge!", width / 2, height / 8);
    } else {
    text("you made it across safely!" , width / 2, height / 8);
    }
}

    function mousePressed() {
    if (steps < maxSteps) {
        steps+= 1;
    
}
}