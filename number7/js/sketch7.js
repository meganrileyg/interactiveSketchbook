let effort = [0, 0];
let priviledged = [true, false];
let maxEffort = 12;

// above setup are universal variables
function setup() {
    createCanvas(600, 200);
    textSize(16);
    }

function draw() {
    background("#9fb3e8");

    let barWidth = width / 2;
    for (let i = 0; i <2; i++) {


if (priviledged[i]) {
    fill("#21623d");}
        else {
            fill("#cbd49a");
        }

// h will be variable specific to draw!
let h = map(effort[i], 0, maxEffort, 0, height - 60);

rect(i * barWidth + 40, height - h - 30, barWidth - 80, h);

fill(0);


if (effort[i] >= maxEffort) {
    text("grown!", i * barWidth + 40, 25);
}else{
    text("growing...", i * barWidth + 40, 25);
}
text("Some plants get watered, others wait for the rain.", 10, height - 10);
}
}

function mousePressed() {
    for (let i = 0; i < 2; i++) {
        if (effort[i] < maxEffort) {
            if (priviledged[i]) {
                effort[i] = effort[i] + 1;
            } else {
                if (random () < 0.4) {
                effort[i] = effort[i] + 1;    
                }
                      }
            }
        }
    }
