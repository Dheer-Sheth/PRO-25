
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100,600,70);
	dustbin= new Dustbin(550,620,20,100)
	dustbin1= new Dustbin(610,660,100,20);
	dustbin2= new Dustbin(670,620,20,100);
	ground = new Ground(400, 680, 800, 20);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  ground.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:600, y: -1000})
	}
}



