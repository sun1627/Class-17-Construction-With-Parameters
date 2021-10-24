var box1;
var box2;

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(10,40,40,60,2,5);
  box2 = new Box(20,10,40,50,1,2)
}

function draw() 
{
  background(220);
box1.show();
box2.show();
box1.move();
box2.move();
box1.bounce();
box2.bounce();
}

