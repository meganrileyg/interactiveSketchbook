function setup() {
    createCanvas(600, 400);
    }

    function draw() {
    background(1);
    
    fill(255, 0, 0);
    let y = constrain(mouseY, 50, 500);
rect(y, 200, 50, 50);
    }