var track,trackImg;
var runner,runner_img;
var invisibleBoundary1,invisibleBoundary2;
function preload(){
  //pre-load image
  trackImg=loadImage("path.png");
  runner_img=loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
   track=createSprite(200,200);
  track.addImage("track",trackImg);
  track.scale=1.2;
  track.velocityY=4;

  runner=createSprite(250,335,20,20);
  runner.addAnimation("running",runner_img);
  runner.scale=0.08;
  
  invisibleBoundary1=createSprite(5,350,5,350);
  invisibleBoundary2=createSprite(395,350,5,350);

}

function draw() {
  background(0);

if(track.y>400){
  track.y=height/2;
}

  runner.x=mouseX;

   runner.collide(invisibleBoundary1);
   runner.collide(invisibleBoundary2);

   invisibleBoundary1.visible=false;
   invisibleBoundary2.visible=false;
 
  
  drawSprites();
}
