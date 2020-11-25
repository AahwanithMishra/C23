//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2;
var ground

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(190,100,50,50);
  box2 = new Box(200,50,50,100);
  var ground_options = {
    isStatic : true
  }
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld, ground);
  
 
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,10);
  box1.display();
  box2.display();
 
}