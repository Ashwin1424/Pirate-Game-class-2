const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower, towerImg;
var cannon, cannonball;
var angle;


function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;
  cannon = new Cannon(160, 110, 130, 100, angle);
  cannonball = new CannonBall(cannon.x, cannon.y);
  
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(0, height-1, width*2, 1, option);
  World.add(world, ground);

  tower = Bodies.rectangle(150, 350, 50, 250, option);
  World.add(world, tower);
}

function draw() {
  background(189);
 
  Engine.update(engine);
  
  image(backgroundImg, 0, 0, width, height);
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop();
  cannon.display();

  cannonball.display();
}

function keyReleased(){

  if (keyCode == 32){
    cannonball.shoot();
  }
}