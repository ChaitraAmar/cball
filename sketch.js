
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;


function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
paperObject=new Paper(200,450,40);
	//Create the Bodies Here.
dustbinObject=new Dustbin(1200,650);
groundObject=new Ground(width/2,670,width,20);
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1600,
	height:700,
	wireframes:false	
	}
})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  paperObject.display();
 dustbinObject.display();
  groundObject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
	}
}

