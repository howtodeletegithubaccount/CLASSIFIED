function setup() {
  
  createCanvas(1600, 400);

  speed = random(55, 90);

  weight = random(400, 1500);

  thickness = random(22,83)

  pigBullet = createSprite(50, 200, 50, 2);

  pigBullet.velocityX = speed;

  pigBullet.shapeColor = "pink";

  wall = createSprite(1200, 200, thickness, height/2);

  wall.shapeColor = "white";

}

function draw() {

  background("black");
  
  if(wall.x - pigBullet.x < (pigBullet.width + wall.width)/2)
  {

    pigBullet.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22509;

  if (deformation < 10) {

    wall.shapeColor = "red";
    
  }

  if (deformation > 10) {

    wall.shapeColor = color(0, 255, 0);
    
  }
    
  } 
  
  drawSprites();

}