function preload(){
}

noseX ="";
noseY ="";

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNET = ml5.poseNet(video, modelLoaded);
    poseNET.on('pose' , gotPoses)
}

function draw(){
    image(video ,0 ,0 ,300 ,300);
    image( noseX , noseY , 30 , 30);
   }

   function take_snapshot(){
    save('myfilterimage.png');
}

function modelLoaded(){
    console.log("poseNET is initialized");
}

function gotPoses(results){
    if( results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}