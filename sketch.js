var thikness, wall
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
  thikness = random(22, 83);
  speed = random(55, 99);
  weight = random(30, 52);
  wall = createSprite(1200, 200, thikness, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet = createSprite(10, 200, 20, 20);
  bullet.shapeColor = color(250, 250, 250);
}

function draw() {
  background(0); 

  bullet.velocityX = speed;

  if (hascolided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thikness * thikness * thikness);

    if(damage>10){
      wall = color(255, 0, 0);
    }

    if(damage<10){
      wall = color(255, 0, 0);
    }
  }

  drawSprites();
}

function hascolided(bullet1, wall1) {
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false
}