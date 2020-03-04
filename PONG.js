let backgroundColor=0;
let canvasWidth=600;
let canvasHeight=400;
let paddleWidth=5;
let paddleHeight=60;
let paddleY = canvasHeight/2 - paddleHeight/2;
let ballY = 195;
let ballX = 295;
let velocity= 2;
let leftPaddleX= 10;
let rightPaddleX= 585; 

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  
  background(backgroundColor);
  rect(leftPaddleX,paddleY,paddleWidth,paddleHeight);
  rect(rightPaddleX,paddleY,paddleWidth,paddleHeight);
  ellipse(ballX,ballY,10);
  
  ballX= ballX+velocity;
  
  if(ballX > rightPaddleX || ballX < leftPaddleX) {
    velocity = -velocity
  }
}
