var purple,purpleImage;
var wall,wallImage;
var pika,pikaImage;
var ball,ballImage;
var ballsGroups;
var score;
var invis;
var villainsGroup,vi1,vi2,vi3,vi4,vi5,vi6,vi7,vi8,vi9,vi10,vi11;
var sound;
var play = 1;
var end = 0;
var gameState = 1;
var black,blackImage;

function preload(){

wallImage = loadImage("gr.jpg");

purpleImage = loadImage("1.jpg");   
  
pikaImage = loadImage("pika.gif");
  
ballImage = loadImage("Poke Ball.png");
  
vi1 = loadImage("vi1.png");
  
vi2 = loadImage("vi2.png");
  
vi3 = loadImage("vi3.png");
  
vi4 = loadImage("vi4.png");
  
vi5 = loadImage("vi5.png");
  
vi6 = loadImage("vi6.png");
  
vi7 = loadImage("vi7.png");
  
vi8 = loadImage("vi8.png");
  
vi9 = loadImage("vi9.png");
  
vi10 = loadImage("vi10.png");
  
vi11 = loadImage("vi11.png");
  
sound = loadSound("pokemon.mp3");
  
blackImage = loadImage("black.jpg")
  
}

function setup() {
  
createCanvas(windowWidth,windowHeight);
  
sound.loop();

purple = createSprite(400,225);
purple.addImage(purpleImage);
purple.scale =6;
purple.velocityX = -3;
  
wall = createSprite(225,850);
wall.addImage(wallImage);  
wall.velocityX = -3;
wall.scale = 1.3;
  
pika = createSprite(50,height-400);
pika.addImage(pikaImage);
pika.scale = 0.2;
  
invis = createSprite(100,425,200,10);
invis.visible = false;
  
black = createSprite(225,225);
black.addImage(blackImage);
black.scale =10;
  
ballsGroup = new Group();
villainsGroup = new Group();
  
score = 0;

}

function draw() {

if(gameState === play){  
  
balls();
villains();
  
background("white");
  
black.visible = false;


  
if(pika.isTouching(ballsGroup)){
  
ballsGroup.destroyEach();
score = score + 1;
  
}
  
if(pika.isTouching(villainsGroup)){
  
gameState = end;
  
}
}

  
if((touches.length > 0 || keyDown("space"))&& pika.y >= 225){
  
pika.velocityY = -12;
  
touches = [];
    
}
  
pika.velocityY = pika.velocityY + 0.8;
  
  
pika.collide(invis);

if(purple.x<0){
  
purple.x =225;  
  
}
  
if(wall.x<0){
  
wall.x =225;  
  
}
  
drawSprites();
  
stroke("cyan");
fill("red");
textSize(15);
text("POKE BALL : "+score,180,50);
  
if (gameState === end){

black.visible = true;
villainsGroup.visible = false;
ballsGroup.visible = false;
ballsGroup.destroyEach();
villainsGroup.destroyEach();

stroke("blue");
fill("red");
textSize(15);
text("GAMEOVER !!!",200,225);
  
}
  
}

function balls(){
if(frameCount%150===0){
  
ball = createSprite(425,225);
ball.addImage(ballImage);
ball.scale = 0.1;  
ball.velocityX = -6;
ball.lifetime = 75;  
ballsGroup.add(ball);  
  
}    
}

function  villains(){

if(frameCount%160==0){
var villain = createSprite(400,375,10,40);
villain.velocityX = -3;
  
var rand = Math.round(random(1,11));
switch(rand) {
case 1: villain.addImage(vi1);
villain.scale = 0.4;
break;
case 2: villain.addImage(vi2);
villain.scale = 0.05;
break;
case 3: villain.addImage(vi3);
villain.scale = 0.2;
break;
case 4: villain.addImage(vi4);
villain.scale = 0.4;
break;
case 5: villain.addImage(vi5);
villain.scale = 0.4;
break;
case 6: villain.addImage(vi6);
villain.scale = 0.5;
break;
case 7: villain.addImage(vi7);
villain.scale = 0.07;
break;
case 8: villain.addImage(vi8);
villain.scale = 0.4;
break;
case 9: villain.addImage(vi9);
villain.scale = 0.4;
break;
case 10: villain.addImage(vi10);
villain.scale = 0.1;
break;
case 11: villain.addImage(vi11);
villain.scale = 0.4;
break;
default: break;

}
villain.lifetime = 150;
villainsGroup.add(villain);
}
}