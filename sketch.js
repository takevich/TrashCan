
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Paper;

function preload(){

PaperObj.loadImage = ("paper.png");
DustbinObj.loadImage = ("trashcan.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	paper = new Paper(100,50,20,20);
	paper = addImage(PaperObj);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    dustbinObj= addImage (DustbinObj);

	if(keyDown(up_Arrow)){

paper.Body.applyForce(paper.body, paper.body-position, x= 130,y= -145)

	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
Paper.display(); 

function keyDown(){
	if(keyCode == UP_ARROW){

matter.body.applyForce(paper.body, paper.body-position, x= 130, y= -145);

	}
}

}

