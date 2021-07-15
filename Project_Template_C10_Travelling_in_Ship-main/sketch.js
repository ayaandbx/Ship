let ship, shipImage;
let sea, seaImage;
function preload(){
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-2.png",  "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,20,20);
  sea.addImage(seaImage);
  sea.scale = 0.3;
  ship = createSprite(180,200,20,20);
  ship.scale = 0.4;
  ship.addAnimation("shipAnimation", shipImage);
}

function draw() {
   background("black");
  if (sea.x < 0){
    sea.x = sea.width/8;
  }
  sea.velocityX = -3;
  drawSprites();
}