const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(580,500,250,10);
  stand2 = new Stand(1000,300,250,10);
 
  //level one
  block1 = new Block(490,275,30,40);
  console.log(block1);
  block2 = new Block(520,275,30,40);
  block3 = new Block(550,275,30,40);
  block4 = new Block(580,275,30,40);
  block5 = new Block(610,275,30,40);
  block6 = new Block(640,275,30,40);
  block7 = new Block(670,275,30,40);
  //level two
  block8 = new Block(520,235,30,40);
  block9 = new Block(550,235,30,40);
  block10 = new Block(580,235,30,40);
  block11 = new Block(610,235,30,40);
  block12 = new Block(640,235,30,40);
  //level thre
  block13 = new Block(550,195,30,40);
  block14 = new Block(580,195,30,40);
  block15 = new Block(610,195,30,40);
  //top
  block16 = new Block(580,155,30,40);


  block17 = new Block(900,275,30,40);
  console.log(block17);
  block18 = new Block(920,275,30,40);
  block19 = new Block(960,275,30,40);
  block20 = new Block(990,275,30,40);
  block21 = new Block(1020,275,30,40);
  block22 = new Block(1050,275,30,40);
  block23 = new Block(1080,275,30,40);
  //level two
  block24 = new Block(920,235,30,40);
  block25 = new Block(960,235,30,40);
  block26 = new Block(1000,235,30,40);
  block27 = new Block(1020,235,30,40);
  block28 = new Block(1050,235,30,40);
  //level thre
  block29 = new Block(960,195,30,40);
  block30 = new Block(990,195,30,40);
  block31 = new Block(1020,195,30,40);
  //top
  block32 = new Block(990,155,30,40);

  ball = new stone(50, 200, 25);

  sling = new launch(ball.body, {x: 200, y:300});
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  sling.display();
  ball.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}