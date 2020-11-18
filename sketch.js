
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	roof = new Roof(400,100,500,40);

	pendulum1 = new Pendulum(275,450);
	pendulum2 = new Pendulum(335,450);
	pendulum3 = new Pendulum(395,450);
	pendulum4 = new Pendulum(455,450);
	pendulum5 = new Pendulum(515,450);

	rope1 = new Rope (pendulum1.body,{x:275,y:100});
	rope2 = new Rope (pendulum2.body,{x:335,y:100});
	rope3 = new Rope (pendulum3.body,{x:395,y:100});
	rope4 = new Rope (pendulum4.body,{x:455,y:100});
	rope5 = new Rope (pendulum5.body,{x:515,y:100});

}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  pendulum1.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY});
}