const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var bg;
var snow;
var snowflakes=[];

var engine,world;


function preload(){
bg=loadImage("snow3.jpg");
}


function setup() {

  engine=Engine.create();
  world=engine.world;


  createCanvas(1200,600);
  
}

function draw() {
  
  background(bg); 

  Engine.update(engine);

  if(frameCount % 60 === 0){ 
   snowflakes.push(new Snow(random(width/2-100,width/2+300),20));
  }
   
  for(var i=0 ;i<snowflakes.length;i++){
  snowflakes[i].display();
}

  drawSprites();
}