var backgroundImg;
var snowflake1,snowflake2;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  flakeImg = loadImage("snow4.webp");
  flakeIMg = loadImage("snow5.webp");
}

function setup() {
  var canvas = createCanvas(800,400);

 snowflake1=createSprite((random(10,790)),100,50,50);
  snowflake1.addImage(flakeImg);
  snowflake1.scale = 0.08;
  snowflake1.velocityY = (6);

  snowflake2=createSprite((random(05,790)),100,50,50);
  snowflake2.addImage(flakeIMg);
  snowflake2.scale = 0.08;
  snowflake2.velocityY = (6);

}

function draw() {
  background(backgroundImg);
     
  snowflake1.display();
  snowflake2.display
  drawSprites();
}
