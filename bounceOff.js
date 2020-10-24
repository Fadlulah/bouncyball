var Rect1;
var Rect2;

function setup() {
  createCanvas(800,400);
  Rect1 = createSprite(400, 200, 100, 100);
  Rect2 = createSprite(300, 300, 100, 40);
}


function draw() {
    background(255, 255, 255);
    Rect1.velocityX = 3;
    Rect1.velocityY = 3;
    Rect2.velocityY = 3;
    Rect2.veloctiyX = 3;

 if(Rect2.x - Rect1.x <= Rect2.width/2 + Rect1.width/2
    &&Rect1.x - Rect2.x <= Rect2.width/2 + Rect1.width/2)
       {
      Rect1.velocityX = Rect1.velocityX*(-1);
      Rect2.velocityX = Rect2.velocityX*(-1);
    }
    else if( Rect2.y - Rect1.y <= Rect2.height/2 + Rect1.height/2
      && Rect1.y - Rect2.y <= Rect2.height/2 + Rect1.height/2)
    {
      Rect1.velocityX = Rect1.velocityY*(-1);
      Rect2.velocityX = Rect2.velocityY*(-1);

    }

    drawSprites();
}
