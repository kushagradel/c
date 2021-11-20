var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom1,obsBottom2,obsBottom3
var obsTop1,obsTop2

function preload(){
bgImg = loadImage("assets/bg.jpg")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

  //create canvas 
  createCanvas(displayWidth,displayHeight)

//background image
bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
//bg.addImage(bgImg);
//bg.scale = 3.5
bg.shapeColor = "blue"

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

           if(keyDown("left")){
             balloon.x = balloon.x - 2;
           }

           if(keyDown("right")){
            balloon.x = balloon.x + 2;
          }
   
        drawSprites();

        function spawnbuildings() 
        {
              if(World.frameCount % 60 === 0) {
                obstacleTop = createSprite(400,50,40,50);
        
            //obstacleTop.addImage(obsTop1);
        
            obstacleTop.scale = 0.1;
            obstacleTop.velocityX = -4;
        
            //random y positions for top obstacles
            obstacleTop.y = Math.round(random(10,100));
        
            //generate random top obstacles
            var rand = Math.round(random(1,2));
            switch(rand) {
              case 1: obstacleTop.addImage(obsTop1);
                      break;
              case 2: obstacleTop.addImage(obsTop2);
                      break;
              default: break;
            }
        
             //assign lifetime to the variable
           obstacleTop.lifetime = 100;
        
           balloon.depth = balloon.depth + 1;
        
              }
        }

        function spawnbirds() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop = createSprite(400,50,40,50);

    //obstacleTop.addImage(obsTop1);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop.addImage(obsTop1);
              break;
      case 2: obstacleTop.addImage(obsTop2);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop.lifetime = 100;

   balloon.depth = balloon.depth + 1;

      }
}
        
}