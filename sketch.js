//Namespace
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;// own PE
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ground_options={
  isStatic:true
}

//once
ground=Bodies.rectangle(200,390,40,10,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution:1
  }
ball=Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  console.log(ground);
  
  ;

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
//in each framecount
 // drawSprites();


}