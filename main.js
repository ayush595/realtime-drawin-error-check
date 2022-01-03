noseY=0;
noseX=0;
difference=0;
leftwrist=0;
rightwrist=0;


function setup() {
    canvas = createCanvas(400,400);
    canvas.position(700,250);

    video = createCapture(VIDEO);
    video.size(400 ,400);

    modelattacher= ml5.poseNet(video , modelLoaded);
modelattacher.on("poses", gotposes)
}
function modelLoaded() {
    console.log("model(posenet) is loaded mam/sir!");
    
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = Math.floor(leftwrist-rightwrist);

    }
}
function draw() {
    // background("white") given in css
    document.getElementById("square_size").innerHTML = "width = " +  difference + "<br> height = " + difference;
    fill("darkred");
    stroke("black");
    square(noseX,noseY,difference);
    

}
