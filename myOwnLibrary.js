function isTouching(object1, object2) {
  if(object1.x - object2.x <= object1.width/2 + object2.width/2
    &&object2.x - object1.x <= object1.width/2 + object2.width/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2
    && object2.y - object1.y <= object1.height/2 + object2.height/2)
    {
      return true;
         }
    else{
      return false;
    }


}
function bounceOff(Rect1, Rect2 ) {
  if(Rect2.x - Rect1.x <= Rect2.width/2 + Rect1.width/2
    &&Rect1.x - Rect2.x <= Rect2.width/2 + Rect1.width/2)
       {
      Rect1.velocityX = Rect1.velocityX*(-1);
      Rect2.velocityX = Rect2.velocityX*(-1);
    }
  if( Rect2.y - Rect1.y <= Rect2.height/2 + Rect1.height/2
      && Rect1.y - Rect2.y <= Rect2.height/2 + Rect1.height/2)
    {
      Rect1.velocityY = Rect1.velocityY*(-1);
      Rect2.velocityY = Rect2.velocityY*(-1);

    }

}