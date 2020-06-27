var movingrect;
var fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  
}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 +fixedrect.width/2 
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 && fixedrect.y - movingrect.y < movingrect.height/2 +fixedrect.height/2){
fixedrect.shapeColor = "red"
movingrect.shapeColor = "red"
}
else {
  fixedrect.shapeColor = "green"
  movingrect.shapeColor = "green"
}

  drawSprites();
}