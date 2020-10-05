const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ball;
var myengine,myworld;
var ground;


function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;

  var option ={

    isStatic: true
  }

  ground= Bodies.rectangle(200,390,400,2,option);
  World.add(myworld,ground);

var ball_option={
restitution:0.8

}
  ball=Bodies.circle(200,100,15,ball_option);
  World.add(myworld,ball);

  console.log(ground.position.y);
}

function draw() {
  background(0);  

  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 2);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50,50);

  drawSprites();
}