function preload(){
  Maze1_img=loadImage("Images/Maze photo.png")
}

function setup() {
  createCanvas(1450,750);

  wall1= createSprite(75,385, 30, 550)
  wall2= createSprite(790, 105, 1200, 30)
  wall3= createSprite(1380, 380, 30, 550)
  wall4= createSprite(675, 645, 1170, 30)

  wall5= createSprite(145, 445, 120, 20)
  wall6= createSprite(210, 270, 20, 135)
  wall7= createSprite(270, 210, 135, 20)
  wall8= createSprite(410, 325, 400, 20)
  wall9= createSprite(340, 535, 270, 20)
  wall10= createSprite(330, 380, 20, 125)
  wall11= createSprite(470, 220, 20, 230)
  wall6= createSprite(465, 475, 20, 125)
  wall6= createSprite(530, 420, 150, 20)
  wall6= createSprite(595, 375, 20, 110)
  wall6= createSprite(595, 585, 20, 110)
  wall6= createSprite(665, 215, 145, 20)
  wall6= createSprite(725, 280, 20, 125)
  wall6= createSprite(730, 490, 20, 115)
  wall6= createSprite(795, 330, 145, 20)
  wall6= createSprite(860, 160, 20, 110)
  wall6= createSprite(855, 385, 20, 125)
  wall6= createSprite(860, 535, 280, 20)


  wall6= createSprite(985, 440, 280, 20)
  wall6= createSprite(860, 585, 20, 120)


  wall6= createSprite(1120, 220, 280, 20)
  wall6= createSprite(1115,330, 20, 240)
  wall6= createSprite(990, 485, 20, 120)
  wall6= createSprite(990, 270, 20, 120)


  wall6= createSprite(1250, 545, 280, 20)
  wall6= createSprite(1250, 375, 20, 120)
  wall6= createSprite(1300, 325, 130, 20)

  
}

function draw() {
  background(0);
  text(mouseX+","+mouseY, 100, 100)  
  drawSprites();
}