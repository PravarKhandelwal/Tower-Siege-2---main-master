const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(430,235,40,50);
    box2 = new Box(460,235,40,50);
   
    

    box3 = new Box(490,235,40,50);
    box4 = new Box(520,235,40,50);
   

    box5 = new Box(460,195,40,50);

    box6 = new Box(490,195,40,50)
    box7 = new Box(520,195,40,50)
box8 = new Box(490,155,40,50)  
box9 = new Box(550,235,40,50)  



    bird = new Bird(200,50);

  
    slingshot = new SlingShot(bird.body,{x:100, y:230});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    
    box3.display();
    box4.display();
   

    box5.display();
    
    box6.display()
    box7.display()
    box8.display()
    box9.display()

    bird.display();
    
 
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if (keyCode===32) {
    slingshot.attach(bird.body)
} 


}