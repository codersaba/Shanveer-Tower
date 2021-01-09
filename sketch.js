const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box,box2,box3, box4,box5;
var ground;
var polygon;
var chain;

function setup(){

   
    engine = Engine.create();
    world = engine.world;
     canvas = createCanvas(1200,600);
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,400,240,20);

    box1 = new Box(620,310,40,40);
    box2 = new Box(610,320,40,40);
    box3 = new Box(600,320,40,40);
    box4 = new Box(610,310,40,40);
    box5 = new Box(610,310,40,40);
    polygon=new Box(200,400,40,40);
    chain = new Rope(polygon.body,{x:100,y:200})
   Engine.run(engine);
}
function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ground1.display();
    polygon.display();
   chain.display();
}
function mouseDragged(){  
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
     }
   
   
   function mouseReleased(){
     chain.fly();
   }