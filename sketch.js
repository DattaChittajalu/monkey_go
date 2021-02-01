
var monkey , monkey_running
var ground, isnvGround
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, survivalTime=0
var backImage, BackG

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backImage= loadImage("jungle.jpg")
  
 
}

function setup() { 
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
   
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  ground.visible=false
  console.log(ground.x)
  
  isnvGround= createSprite(400, 360, 900, 10)
  isnvGround.visible=false
  
  obstacleGroup= new Group()
  foodGroup= new Group()
  
  backG=createSprite(200,200,20,20)
  backG.addImage(backImage)
  backG.scale=0.99
  backG.depth=monkey.depth++
  backG.velocityX=-4
}


function draw() {
  background(200)
    
  if((keyDown("space") || keyDown("UP_ARROW")))   {
      monkey.velocityY=-10
    }
    monkey.velocityY= monkey.velocityY + 0.5
    
  if(ground.x<0){
     ground.x=ground.width/2}
  
  if(backG.x<0){
     backG.x=backG.width/2
    }
  
  monkey.collide(ground)
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+  survivalTime,100,50)
  
  if(foodGroup.isTouching(monkey)){
    monkey.scale=0.2
  
    
   foodGroup.destroyEach()
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.12
  }
  
  Obstacle()
  Banana()
  drawSprites()  
}
function Obstacle(){
  if(frameCount%300===0){
    var obstacle=createSprite(600, 310, 20, 20) 
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.2
    obstacle.velocityX=-4
    obstacle.lifetime=160
    obstacleGroup.add(obstacle)
  }
}
function Banana(){
  if(frameCount%80===0){
    var banana=createSprite(600, 100, 20, 20) 
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    var r=random(120,200)
    banana.y=r
    banana.lifetime=160
    foodGroup.add(banana)
  }
}

