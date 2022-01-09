var person, dog
var personImg, dogImg
var ground
var cloudOne, cloudTwo, cloudThree
var hydrant, trashCan, boulder, box
var cloudGroup, obsGroup
var dollars = 0

function preload() {
personImg = loadImage("humanWalk.png");
dogImg = loadImage("dogWalk.png");

}

function setup() {
  createCanvas(800,400);
  person = createSprite(100, 300, 50, 50);
  person.addImage(personImg)
  person.scale = 0.3
  dog = createSprite(320, 350, 50, 50);
  dog.addImage(dogImg)
  dog.scale = 0.1
  ground = createSprite(400,400,800,30)
  
  cloudGroup = new Group()
  obsGroup = new Group()
  
}
function spawnClouds(){
  if(World.frameCount%60 === 0){
    var cloud = createSprite(800,100,80,20)
    cloud.y = Math.round(random(0,150))
    cloud.velocityX = -6
    cloud.lifeTime = 200
    cloudGroup.add(cloud)
  
  if(dollars % 100 === 0){
    cloud.velocityX = cloud.velocityX + -3

  }
}
}
function obstacle(){
  if(World.frameCount%120 === 0){
    
   
    
    var obs = createSprite(850,350,20,20)
    
    obs.velocityX = -6
    obs.lifeTime = 200
    var rOBS = Math.round(random(1,4))
    switch(rOBS){
      case 1 : obs.shapeColor = "red";
      break;
      case 2 : obs.shapeColor = "grey";
      break;
      case 3 : obs.shapeColor = "black";
      break;
      case 4 : obs.shapeColor = "brown";
      break;
      default : break;
    }
    obsGroup.add(obs)
    if(dollars % 100 === 0){
      obs.velocityX = obs.velocityX + -3
  }
  }
}

function draw() {
  background("skyblue"); 
  textSize(20)
  strokeWeight(4)
  fill("black")
  text("Money: "+dollars,630,50)
  dollars = dollars + Math.round(getFrameRate()/60)
  if(dog.y > 250 && keyDown(UP_ARROW)){
    dog.velocityY = -10
  }
  if(person.y > 200 && keyDown("space")){
    person.velocityY = -10
  }
  
  

  
dog.velocityY = dog.velocityY + 0.8
person.velocityY = person.velocityY + 0.8


dog.collide(ground)
person.collide(ground)
  spawnClouds();
  obstacle();
  drawSprites();
}