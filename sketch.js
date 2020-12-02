var car,wall,speed,weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  speed = random(40,70);
  weight = random(1200,3000);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background(0); 
  if(wall.x - car.x <wall.width/2 + car.width/2){
  car.velocityX = 0;
  deformation = 0.5*weight*speed*speed/22500;
  if(deformation>180){
   car.shapeColor = "red";
  }
  if(deformation<180 && deformation>100){
   car.shapeColor = "yellow";

  }
 if(deformation<100){
 car.shapeColor = "green";

 }

  }
  
  drawSprites();
}