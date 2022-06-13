noseX =0;
noseY =0;
difference = 0;
leftWristX = 0;
rightWristX =0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(500,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is on");
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("x = " + noseX + " , y = "+ noseY )
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left wrist X = " + leftWristX + " , right wrist X = " + rightWristX);
        difference = floor (leftWristX - rightWristX);
    }
}
function draw()
{
    background("yellow");
    fill("red");
    document.getElementById("font").innerHTML = "Font-size of the text will be: "+ difference + "px";
    text('Aditya',50,400);
    textSize(difference);
}