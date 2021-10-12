var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var obstacles;
var cars = [];
var Steve;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  Steve = createSprite(800,600);
  Steve.addImage("demo",car1_img);
  Steve.scale = 0.1;
}

function draw() {
  background(backgroundImage);

  if(keyDown(UP_ARROW)){
    Steve.position.x += 5;
  }
  spawnClouds()

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(car2_img);
    cloud.scale = 0.1;
  }
}
