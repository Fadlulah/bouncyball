//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating world and engine from matter library for our use
var engine, world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world ;
  var ground_options = {
    isStatic : true
  }
  ground=Bodies.rectangle(200,390,50,50,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution :1.0
  }
  ball=Bodies.circle(200, 200, 20, ball_options)
  World.add(world, ball);  
}

function draw() {
  background(255,25,70); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}

