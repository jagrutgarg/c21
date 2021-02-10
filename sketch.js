var fixedRect, movingRect, rectangle;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rectangle = createSprite(500, 350, 50 , 70);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else if(isTouching(movingRect, rectangle)){
    movingRect.shapeColor="blue";
    rectangle.shapeColor="blue";
  }
  else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  rectangle.shapeColor="green";
  }

  drawSprites();
}




