const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(600, 600);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(0, 0, 0);
  drawSprites();
}