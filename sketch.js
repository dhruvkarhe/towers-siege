const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block8,
  block9,
  block10,
  block11,
  block12,
  block13,
  block14,
  block15,
  block16;
var ball, ground;
var rope1;
//var a;
//var circles = [];
function setup() {
  createCanvas(1000, 600);
  stroke(255);
  engine = Engine.create();
  world = engine.world;

  //creating boxes

  //ground level
  ground = new Ground(600, height, 1200, 20);

  //level two
  block8 = new Block(330, 400, 30, 40);
  block9 = new Block(360, 400, 30, 40);
  block10 = new Block(390, 400, 30, 40);
  block11 = new Block(420, 400, 30, 40);
  block12 = new Block(450, 400, 30, 40);

  //level three
  block13 = new Block(360, 300, 30, 40);
  block14 = new Block(390, 300, 30, 40);
  block15 = new Block(420, 300, 30, 40);

  //top
  block16 = new Block(390, 200, 30, 40);

  ball = new Ball(100, 100, 50);
  rope1=new Rope(ball.body,{x:50,y:50})
}

function draw() {
  background(0);
  Engine.update(engine);
  ball.display();
  ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  rope1.display();

  //drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  rope1.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    rope1.attach(ball.body);
  }
}
