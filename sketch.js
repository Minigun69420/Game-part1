var canvas;
var backgroundImage, plr1_img, plr2_img, maze;
var powerUpsImage, lifeImage, equipmentImage;
var obstacle1Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, plr1, plr2, powerUps, equipment, obstacles;
var players = []; 


function preload() {
  backgroundImage = loadImage("./assets/maze_bg.avif");
  plr1_img = loadImage("../assets/plr1(blue).png");
  plr2_img = loadImage("../assets/plr1(blue).png");
  equipmentImage = loadImage("./assets/equipment.png");
  powerUpsImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImg = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  /*if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
