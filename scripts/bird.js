class Bird
{
  constructor()
  {
    this.x = 50;
    this.y = height/2;
    this.width = 40;
    this.height = 40;
    this.velocity=0;
    this.acceleration=0;
    this.animation = new Animation(10,birdImage);
    this.animation.scale=0.1;
  }

  applyForce(force)
  {
    this.acceleration = this.acceleration + force;
  }

  update()
  {
    this.applyForce(gravity);
    this.velocity = this.velocity + this.acceleration;

    if(this.velocity>12) this.velocity = 12;
    else if(this.velocity<-3) this.velocity = -3;

    this.y = this.y + this.velocity;
    this.acceleration = this.acceleration*0;
    this.checkBoundries();
    this.animation.update(createVector(this.x,this.y));
  }

  show()
  {
    this.animation.show();
    //rect(this.x,this.y,this.width,this.height);
  }

  checkBoundries()
  {
    if(this.y-this.height/2<0) this.y = this.height/2;
    if(this.y+this.height/2>height) this.y = height - this.height/2;
  }
}
