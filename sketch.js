
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground;
var Paper;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground = new ground(400,height,1500,20)
Paper = new paper(300,300)
     box1=new dustbin(850,370,200,20)
	 box2=new dustbin(750,330,20,100)
	 box3=new dustbin(950,330,20,100)  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display()
  box2.display()
  box3.display()
  Ground.display()
  Paper.display()
}

function keyPressed(){
  if(keyCode===UP_ARROW){
  
  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  }
  }

