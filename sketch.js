var garden, gardenImage;
var pea, pea2, pea3, pea4, pea5, peaImage;
var coconut, coconut1, coconut2, coconut3, coconut4, coconut5, coconutImage;
var threePea,threePea2,threePea3,threePea4,threePea5, threePeaImage;

var cone, coneImage;
var bucket, bucketImage;
var giant, giantImage;
var boss, bossImage;

var coco, cocoImage;
var peaShot, peaShotImage;

var PLAY = 1;
var END = 2;
var gameState = 1;

var coneGroup,bucketGroup,giantGroup,bossGroup,cocoGroup,peaShotGroup;

function preload(){
  gardenImage = loadImage("images for game/garden.jpg");
  peaImage = loadImage("images for game/pea.png");
  coconutImage = loadImage("images for game/coconut.png");
  threePeaImage = loadImage("images for game/threepea.png");
  coneImage = loadImage("images for game/cone.png");
  bucketImage = loadImage("images for game/bucket.png");
  giantImage = loadImage("images for game/giant.png");
  bossImage = loadImage("images for game/boss.png");
  cocoImage = loadImage("images for game/coco.png");
  peaShotImage = loadImage("images for game/peaShot.png");
}

function setup() {
  createCanvas(1000,600);
  
  pea = createSprite(220, 130, 20, 20);
  pea.addImage(peaImage);
  pea.scale = 0.50;

  pea2 = createSprite(220, 230, 20, 20);
  pea2.addImage(peaImage);
  pea2.scale = 0.50;

  pea3 = createSprite(220, 330, 20, 20);
  pea3.addImage(peaImage);
  pea3.scale = 0.50;

  pea4 = createSprite(220, 430, 20, 20);
  pea4.addImage(peaImage);
  pea4.scale = 0.50;
  
  pea5 = createSprite(220, 530, 20, 20);
  pea5.addImage(peaImage);
  pea5.scale = 0.50;
  
  coconut = createSprite(300,130, 20, 20);
  coconut.addImage(coconutImage);
  coconut.scale = 0.80;

  coconut2 = createSprite(300,230, 20, 20);
  coconut2.addImage(coconutImage);
  coconut2.scale = 0.80;

  coconut3 = createSprite(300,330, 20, 20);
  coconut3.addImage(coconutImage);
  coconut3.scale = 0.80;

  coconut4 = createSprite(300,430, 20, 20);
  coconut4.addImage(coconutImage);
  coconut4.scale = 0.80;

  coconut5 = createSprite(300,530, 20, 20);
  coconut5.addImage(coconutImage);
  coconut5.scale = 0.80;

  threePea = createSprite(380,130,20,20);
  threePea.addImage(threePeaImage);
  threePea.scale = 0.30;

  threePea2 = createSprite(380,230,20,20);
  threePea2.addImage(threePeaImage);
  threePea2.scale = 0.30;

  threePea3 = createSprite(380,330,20,20);
  threePea3.addImage(threePeaImage);
  threePea3.scale = 0.30;

  threePea4 = createSprite(380,430,20,20);
  threePea4.addImage(threePeaImage);
  threePea4.scale = 0.30;

  threePea5 = createSprite(380,530,20,20);
  threePea5.addImage(threePeaImage);
  threePea5.scale = 0.30;
  
  coneGroup = new Group();
  bucketGroup = new Group();
  giantGroup = new Group();
  bossGroup = new Group();
  cocoGroup = new Group();
  peaShotGroup = new Group();
}

function draw() {
  background(gardenImage);  
  if (gameState === PLAY){
    z1();
    z2();
    z3();
    z4();

    if(mousePressedOver(pea)){
      shot();
    }
    if(mousePressedOver(pea2)){
      shot2();
    }
    if(mousePressedOver(pea3)){
      shot3();
    }
    if(mousePressedOver(pea4)){
      shot4();
    }
    if(mousePressedOver(pea5)){
      shot5();
    }
  }



  
  drawSprites();
}

function z1 (){
  if(frameCount % 120 === 0){
   cone = createSprite(1000,Math.round(random(50,550)),10,10);
   cone.addImage(coneImage);
   cone.scale =0.4;
   cone.velocityX = -4;
   cone.lifetime = 300;
   coneGroup.add(cone);
  }
}

function z2 (){
  if(frameCount % 180 === 0){
   bucket = createSprite(1000,Math.round(random(50,550)),10,10);
   bucket.addImage(bucketImage);
   bucket.scale =0.4;
   bucket.velocityX = -3.5;
   bucket.lifetime = 300;
   bucketGroup.add(bucket);
  }
}

function z3 (){
  if(frameCount % 240 === 0){
   giant = createSprite(1000,Math.round(random(50,550)),10,10);
   giant.addImage(giantImage);
   giant.scale =0.9;
   giant.velocityX = -3;
   giant.lifetime = 400;
   giantGroup.add(giant);
  }
}

function z4 (){
  if(frameCount % 300 === 0){
   boss = createSprite(1000,Math.round(random(50,550)),10,10);
   boss.addImage(bossImage);
   boss.scale =0.8;
   boss.velocityX = -2.5;
   boss.lifetime = 400;
   bossGroup.add(boss);
  }
}

function shot(){
  peaShot = createSprite(pea.x,pea.y,10,10);
  peaShot.addImage(peaShotImage);
  peaShot.scale = 0.1;
  peaShot.velocityX = 15;
  peaShot.lifetime = 120;
  peaShotGroup.add(peaShot);
}

function shot2(){
  peaShot = createSprite(pea2.x,pea2.y,10,10);
  peaShot.addImage(peaShotImage);
  peaShot.scale = 0.1;
  peaShot.velocityX = 15;
  peaShot.lifetime = 120;
  peaShotGroup.add(peaShot);
}

function shot3(){
  peaShot = createSprite(pea3.x,pea3.y,10,10);
  peaShot.addImage(peaShotImage);
  peaShot.scale = 0.1;
  peaShot.velocityX = 15;
  peaShot.lifetime = 120;
  peaShotGroup.add(peaShot);
}

function shot4(){
  peaShot = createSprite(pea4.x,pea4.y,10,10);
  peaShot.addImage(peaShotImage);
  peaShot.scale = 0.1;
  peaShot.velocityX = 15;
  peaShot.lifetime = 120;
  peaShotGroup.add(peaShot);
}

function shot5(){
  peaShot = createSprite(pea5.x,pea5.y,10,10);
  peaShot.addImage(peaShotImage);
  peaShot.scale = 0.1;
  peaShot.velocityX = 15;
  peaShot.lifetime = 120;
  peaShotGroup.add(peaShot);
}

function boom(){
  coco = createSprite(pea5.x,pea5.y,10,10);
  coco.addImage(cocoImage);
  coco.scale = 0.1;
  coco.velocityX = 15;
  coco.lifetime = 120;
  cocoGroup.add(coco);
}