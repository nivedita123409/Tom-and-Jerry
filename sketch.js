var cat,
    cat1,cat2,cat3,
    cat1Img,cat2Img,cat3Img;
var mouse,
    mouse1,mouse2,mouse3,
    mouse1Img,mouse2Img,mouse3Img;

var garden,gardenImg;

function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png"); 
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  garden=createSprite(500,300);
  garden.addImage("gardenlast",gardenImg);

  cat=createSprite(900,600);
  cat.addAnimation("catsleeping",cat1Img);
  cat.scale=0.1;

  mouse=createSprite(200,600);
  mouse.addAnimation("mousesleeping",mouse1Img);
  mouse.scale=0.1;
}

function draw() {

    background(255);
    if (cat.x - mouse.x < (cat.width- mouse.width)/2) {
      cat.velocityX=0
      cat.addAnimation("catLastImage",cat3Img);
      cat.x=300;
      cat.changeAnimation("mouseLastImage");
      mouse.addAnimation("mouseLastImage",mouse3Img);
      mouse.changeAnimation("mouseLastImage");
      
      
    }   //Write condition here to evalute if tom and jerry collide

    text(mouseX + ',' + mouseY, 10, 45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");
      
      mouse.addAnimation("mouseRunning",mouse2Img);
      mouse.changeAnimation("mouseRunning");
  }


}
