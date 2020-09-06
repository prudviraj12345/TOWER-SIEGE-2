
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var mango1,mango2,mango3,mango4;
var boy;
var stone1;
var chain;
var boy;
var treeimage;
var ground1;
var ground2,ground3,ground4;


function preload()
{
	treeimage = loadImage("tree.png")


}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 =  createSprite(900,300,20,20);
	mango1 = new Mango(750,280,40,40);
	mango2 = new Mango(830,260,40,40);
	mango3 = new Mango(990,200,40,40);
	mango4 = new Mango(1080,200,40,40);

	boy = new Boy(300,400,300,300);

	ground = new Ground(600,height,1200,20);

	stone1 = new Stone(600,400,60,60);
	

    chain = new Chain(stone1.body,{x:300,y:500});


	ground1 = new Groundmango(750,310,30,5);
	ground2 = new Groundmango(830,340,30,5);
	ground3 = new Groundmango(1080,280,30,5);
	ground4 = new Groundmango(990,320,30,5);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  
 //tree1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();

  
 ground.display();
 
 stone1.display();

 chain.display();
  
 boy.display();

 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();




 tree1.addImage(treeimage)

 tree1.scale = 0.3;
   

  
 detectCollision(stone1,mango1); 
 detectCollision(stone1,mango2); 
 detectCollision(stone1,mango3); 
 detectCollision(stone1,mango4); 




 drawSprites();

 }






 function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
   
   
   
	 }
   
	 function mouseReleased(){
	
		chain.fly()
	 
   
   
   
	 }
   
	   
   
     function detectCollision(stone1,mango){
	  
		mangoBodyPosition = mango.body.position
		stone1BodyPosition = stone1.body.position

          var distance = dist(stone1BodyPosition.x,stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		 
		  if(distance<-mango.r+stone1.r)
		  {

          Matter.Body.setStatic(mango.body,false);


		  }
        


	 }


