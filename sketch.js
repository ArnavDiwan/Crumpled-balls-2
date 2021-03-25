const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dust, dustImg

function preload(){
	dustImg = loadImage("Picture3.png");
}
function setup(){
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper = new Paper(100, 600, 70);

	dust = createSprite(1480, 470, 20, 20);
	dust.addImage(dustImg);
	dust.scale = 0.8;

	ground = new Ground(width/2, 680, 1600, 20);

	leftSide = new Dustbin(1370, 495, 20, 350);
	bottom = new Dustbin(1480, 660, 200, 20);
	rightSide = new Dustbin(1590, 495, 20, 350);

	Engine.run(engine);

}


function draw(){
	rectMode(CENTER);

	background(0, 0, 0);

	Engine.update(engine);
	
	paper.display();

	ground.display();

	leftSide.display();
	bottom.display();
	rightSide.display();

	drawSprites();

	fill(0);
  	stroke("orange");
  	textSize(25);
  	text("Hello it is very important to throw garbage in dustbin to maintain",40,40);

	fill(0);
	stroke("orange")
	textSize(25);
	text("cleanliness now there is a garbage paper ball can you put it in", 40, 70);

	fill(0);
  	stroke("white");
  	textSize(25);
  	text("the dust bin (press the up arrow key) if you had fun throwing the",40,100);

	fill(0);
  	stroke("green");
  	textSize(25);
  	text("garbage and want to do it again press the buttons ctrl and r togehter",40,130);

	fill(0);
  	stroke("green");
  	textSize(25);
  	text("and you can throw another garbage",40,160);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1500, y:-1300})
	}
}
