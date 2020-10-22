var monkey , monkey_running;
var ground;
//var banana,bananai,bananagrp;
var obstacle,obstaclei,obstaclegrp;
var score=0;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
 bananai=loadImage("banana.png");
   obstaclei=loadImage("obstacle.png");
 
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  bananagrp=new Group();
  obstaclegrp=new Group();
  
}
  


function draw() {
  background("black");
if (keyDown("space")&&monkey.y>314){
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  drawSprites();
  if (ground.x<0){
  ground.x=ground.width/2;
  }
  food();
//  console.log(monkey.y);
obstacles();
  if (obstaclegrp.isTouching(monkey)){
    monkey.velocityX=0;
    obstaclegrp.setVelocityXEach(0);
     bananagrp.setVelocityXEach(0);
    bananagrp.destroyEach();
    
}
  score=score+Math.round(frameCount/60);
  stroke("white");
  textSize(20);
  fill("white");
  text ("SURVIVAL TIME:"+score,100,100);
}

function food(){
  if (frameCount%80===0){
  banana=createSprite(400,100,20,20);
    banana.y=Math.round(random(120,200));
  banana.addImage(bananai);
  banana.velocityX=-4;
  banana.scale=0.1;
    banana.lifetime=-1;
  bananagrp.add(banana);
  }
}
function obstacles(){
  if (frameCount%100===0){
  obstacle=createSprite(400,330,20,20);
   obstacle.velocityX=-3;
  obstacle.addImage(obstaclei);
  obstacle.scale=0.1;
     obstacle.lifetime=-1;
  obstaclegrp.add(obstacle);
  }
}
