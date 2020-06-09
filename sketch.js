var car,wall;
var speed,weight;
var deformation;
function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed;
  ball.collide(wall);
  if(car.collide(wall)){
deformation=(0.5*weight*speed*speed)/22500;
if(deformation<100){
  car.color("green");
}
if(deformation>100&&deformation<180){
  car.color("yellow");
}
if(deformation>180){
  car.color("red");
}
  } 
  
  
  drawSprites();
}