let table;
let words = [];
let currentWord;

function preload() {
    table=loadTable("data/classList.csv", "csv", "header")
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(200)

   for (let i = 0; i < table.getRowCount(); i++) { 
    words.push(table.getString(i, 0));
}
currentWord = words[0];
}
function draw () {
    background(0);
    fill(255);

    text(currentWord, width/2, height/2);
}

function keyPressed() {
  
    currentWord = words[floor(random(words.length))];

    // example: random = 3.14 floor rounds to 3
    // random = 5.89 floor rounds to 6
    }



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}