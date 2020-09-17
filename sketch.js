var monkey,monkey_running;
var banana, bananaImage, bananaGroup, obstacle, obstacleImage;
var score, survivalTime;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png", "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
 bananaImage=loadImage("banana.png");
 obstacleImage=loadImage("obstacle.png");
}

function setup() {
createCanvas(400,400);
monkey=createSprite(80,340,20,50);
monkey.addAnimation("running",monkey_running);
monkey.scale= 0.2
  

bananaGroup= new Group();
  
score= 0;
}

function draw(){
background("magenta");
  
  
if(keyDown("space")){
  monkey.velocityY= -8;
  console.log("hi")
}
  
  
monkey.velocityY= monkey.velocityY+ 0.8;
  
score= score+Math.round(getFrameRate()/60);
  
food();
obstacles();
  
edges=createEdgeSprites();
monkey.collide(edges[3]);
  
text("Score: "+score,320,40);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time: "+survivalTime,100,50);
  
drawSprites();

}

function food(){
 if(frameCount%80 === 0){
  banana= createSprite(365,345 ,10,10);
  banana.y=Math.round(random(120,200));
  banana.scale=0.1;
  banana.addImage(bananaImage);
  banana.velocityX= -3;
  banana.lifetime= 165;
  banana.depth= monkey.depth
  monkey.depth= monkey.depth+1;
  bananaGroup.add(banana);
 }
}

function obstacles(){
 if(frameCount%300 === 0){
 obstacle= createSprite(400,330,25,40);
 obstacle.velocityX= -4;
 obstacle.scale= 0.2;
 obstacle.addImage(obstacleImage);
 obstacle.lifetime= 165;
 }
}