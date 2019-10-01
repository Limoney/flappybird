class Pipe
{
  constructor(x)
  {
    this.x = x;

    this.pipeWidth = pipeWidth;

    this.topPipeHeight = random(minPipeSize,maxPipeSize);
    this.bottomPipeHeight = height-spaceBetween-this.topPipeHeight;

  }
  update()
  {
    this.x-=1;
    if(this.x+pipeWidth/2<0)
    {
      this.reset();
    }
    if(this.checkCollision(bird)) gameFinished = true;
  }

  show()
  {
    image(pipeImage,this.x,this.topPipeHeight/2,this.pipeWidth,this.topPipeHeight);
    image(pipeImage,this.x,(this.topPipeHeight +spaceBetween+this.bottomPipeHeight/2),this.pipeWidth,this.bottomPipeHeight)
  }

  checkCollision(player)
  {
    let bottomPipeCenter = (this.topPipeHeight +spaceBetween+this.bottomPipeHeight/2);
    return (
            this.x+this.pipeWidth/2 > player.x-player.width/2 &&
            this.x-this.pipeWidth/2 < player.x+player.width/2 &&
            (
              (this.topPipeHeight/2 + this.topPipeHeight/2 > player.y - player.height/2 &&
               this.topPipeHeight/2 - this.topPipeHeight/2< player.y+player.height/2)
               ||
               (bottomPipeCenter + this.bottomPipeHeight/2 > player.y - player.height/2 &&
                bottomPipeCenter - this.bottomPipeHeight/2< player.y+player.height/2)
            )
           );
  }

  reset()
  {
    this.x = distanceBetweenPipes*(pipeCount+1);

    this.pipeWidth = pipeWidth;

    this.topPipeHeight = random(minPipeSize,maxPipeSize);
    this.bottomPipeHeight = height-spaceBetween-this.topPipeHeight;
  }
}
