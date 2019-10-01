let pipes=[];
let bird;
let spaceBetween = 125;
let distanceBetweenPipes = 200;
const minPipeSize = 20;
const maxPipeSize = 200;
const pipeCount = 4;
const gravity = 0.1;
const pipeWidth = 40;
let pipeImage;
let backgroundImage;
let birdImage;
let gameFinished = false;
let imagemoveX=0;
function preload()
{
  pipeImage = loadImage('http://localhost:8080/flappybird/graphics/pipe.png');
  birdImage = loadImage('http://localhost:8080/flappybird/graphics/bird.png');
  backgroundImage = loadImage('http://localhost:8080/flappybird/graphics/background.jpg');
}

function setup()
{
  createCanvas(400,400);
  imageMode(CENTER);
  rectMode(CENTER)
  textAlign(CENTER);
  textSize(25);
  imagemoveX=width*2;
  startGame();
}

function draw()
{
  imagemoveX+=1;
  image(backgroundImage, 0, 0, width*2, height*2, imagemoveX%(backgroundImage.width-width), 0, width, height);

  if(!gameFinished)bird.update();
  bird.show();
  for(let i=pipes.length-1;i>=0;i--)
  {
    if(!gameFinished)pipes[i].update();
    pipes[i].show();
  }
  fill(255);
  if(gameFinished) text("you lost!\n press enter to play again",width/2,height/2);
}

function keyPressed()
{
  if(keyCode == 32 && !gameFinished)
  {
    bird.applyForce(-100);
  }
  else if(keyCode == 13 && gameFinished)
  {
    gameFinished=false;
    startGame();
  }
}

function startGame()
{
  pipes = [];
  bird = new Bird();
  for (let i=0;i<=pipeCount;i++)
  {
    let pipe = new Pipe(width+i*distanceBetweenPipes);
    pipes.push(pipe);
  }
}
