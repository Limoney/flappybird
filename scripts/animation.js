class Animation
{
  constructor(numberOfFrames,texture=null)
  {
    this.frameSize = createVector(texture.width/numberOfFrames,texture.height);
    this.texture = texture;
    this.position = createVector();
    this.numberOfFrames = numberOfFrames;
    this.nextFrame =
    {
        begin: createVector(),
        end: this.frameSize
    }
    this.scale = 1;
  }
  update(position)
  {
    this.position=position;
    this.nextFrame.begin.x=((this.nextFrame.begin.x+this.frameSize.x)%(this.frameSize.x*this.numberOfFrames));
  }
  show()
  {
    image(this.texture, this.position.x, this.position.y,
          this.frameSize.x*this.scale, this.frameSize.y*this.scale,
          this.nextFrame.begin.x,this.nextFrame.begin.y,
          this.nextFrame.end.x,this.nextFrame.end.y);
    //rect(this.position.x,this.position.y,100,100);
  }
}
