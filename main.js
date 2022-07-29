var song1="";
var song2="";
var leftwristX="";
var leftwristY="";
var rightwristX="";
var rightwristY=""



function preload(){
song1=loadSound("ATTENTION.mp3");
song2=loadSound("L2R.mp3");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(530,200);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
    }
    function draw(){
    image(video,0,0,500,500);
    }
    function play(){
        song1.play();
        song.setVolume(1);
        song.rate(1);
    
    }
    function stop(){
        song1.stop();
    }
    function modelloaded(){
        console.log("poseNet is initialized" );
    
    }
    function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("leftwrist x = "+ leftwristX);
        console.log("leftwrist y = "+ leftwristY);
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("rightwrist x = "+ rightwristX);
        console.log("rightwrist y = "+ rightwristY);
    }
    }