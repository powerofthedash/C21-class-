var movingRect, fixedRect;
var gameObject1, gameObject2;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  gameObject1 = createSprite(300,200,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(700,200,50,50);
  gameObject2.shapeColor="green";
  gameObject1.velocityX=5;
  gameObject2.velocityX=-7;
}

function draw() {
  background(255,255,255);  
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 if(isTouching(movingRect, gameObject1)){
  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
 }else{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green"; 

 }
  bounceOff(gameObject1, gameObject2);
  drawSprites();
}

