Status = "";
function preload(){

}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(400, 300);

    webcam = createCapture(VIDEO);
    webcam.hide();
}
function draw(){
    image(webcam, 0, 0, 500, 400);
}
function start(){
    ml5.objectDetector('cocossd', modelloaded);
}
function modelloaded(){
    console.log("Coco is loaded✔✔✔");
    document.getElementById("status").innerHTML = "Status : Started to Detect";
    Status = true;
}

function List() {
    window.location = "List.html";
}
function Home() {
    window.location = "index.html";
}
function In(){
    window.location = "Inter.html";
}