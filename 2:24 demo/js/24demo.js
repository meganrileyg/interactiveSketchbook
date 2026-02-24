
let offset = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    }   
    //rect mode center measures placement from the center of the shape

function draw() {
    background(0);


    push();
    translate(offset, offset);
    fill(255, 0, 0);
    rect(width/3, height/2, 100, 100);
    pop();


    rect(width *2/3, height/2, 100, 100);

}

function keyPressed() {
offset += random(-100, 100);

offset= constrain(offset, -200, 200);

// take current value of offset, and every time a key is pressed, add 20 to the value
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}   