let backgroundColor=0;
let canvasWidth=600;
let canvasHeight=400;
let paddleWidth=5;
let paddleHeight=60;
let leftPaddleY = canvasHeight/2 - paddleHeight/2;
let rightPaddleY = canvasHeight/2 - paddleHeight/2;
let ballY = 200;
let ballX = 300;
let velocity= 2;
let yVelocity= 0;
let leftPaddleX= 10;
let rightPaddleX= 585;
let stip = [];
let dSize = 10;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
  
  for(let y = dSize/2; y<canvasHeight; y+=dSize*2) {
    stip.push(createVector(width/2-dSize/2, y));
  }
}

function draw() {
    background(backgroundColor);
    rect(leftPaddleX,leftPaddleY,paddleWidth,paddleHeight);
    rect(rightPaddleX,rightPaddleY,paddleWidth,paddleHeight);
    ellipse(ballX,ballY,10);
  
    ballX= ballX-velocity;
    ballY= ballY-yVelocity;
  
   if (ballHitPaddle()) {
   velocity = -velocity
     
    let leftPaddleMiddle = leftPaddleY + paddleHeight / 2;
    let rightPaddleMiddle = rightPaddleY + paddleHeight / 2;
     
    if (ballX < leftPaddleX) {
      yVelocity = (leftPaddleMiddle - ballY) / 6;
    }
     else {
       yVelocity = (rightPaddleMiddle - ballY) / 6;
     }
   }
  
   if (ballY < 0 || ballY > canvasHeight) {
     yVelocity = -yVelocity;
   }
  
   if (ballX < 0){
     console.log("Rechts Wint!!!");
     noLoop();
   }
  
   if (ballX > canvasWidth){
     console.log("Links Wint!!!");
     noLoop();
   }
  
  
   if(keyIsDown(UP_ARROW)){
   rightPaddleY = rightPaddleY - 3;
   }
  
   if(keyIsDown(DOWN_ARROW)){
   rightPaddleY = rightPaddleY + 3;
   }
  
   if(keyIsDown(81)){
   leftPaddleY = leftPaddleY - 3;
   }
  
   if(keyIsDown(65)){
   leftPaddleY = leftPaddleY + 3;
   }
  
   noStroke();
   fill(225);
   drawStip();
}

function ballHitPaddle(){
  
// linker Paddle
  if (ballY > leftPaddleY &&
      ballY < leftPaddleY + paddleHeight &&
    ballX < leftPaddleX){
  return true;
  }
  
  // Rechter paddle
  if (ballY > rightPaddleY &&
      ballY < rightPaddleY + paddleHeight &&
    ballX > rightPaddleX){
  return true;
  }
  
// geen paddle
  return false;
}

function drawStip() {
  for(let i=0; i<stip.length; i++) {
    let x = stip[i].x;
    let y = stip[i].y;
    
    rect(x,y,dSize,dSize)
  }
    
}
