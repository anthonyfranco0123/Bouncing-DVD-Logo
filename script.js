// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, createCanvas, height, image, loadImage, width
 */

let dvdImage;
let xPosition;
let xVelocity;
let yPosition;
let yVelocity;


function setup(){
  createCanvas(800, 600);
  
  xPosition=50;
  xVelocity=1;
  yPosition=50;
  yVelocity=1;
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
}

function draw(){
  background(220);
  
  if(xPosition>600)
    {
      xVelocity=-1;
    }
  else if(xPosition<0)
    {
      xVelocity=1;
    }
  
  if(yPosition>450)
    {
      yVelocity=-1;
    }
  else if(yPosition<0)
    {
      yVelocity=1;
    }
  
  xPosition+=xVelocity;
  yPosition+=yVelocity;
  
  // Draw the logo at the new position.
  image(dvdImage, xPosition,  yPosition, 200, 150);
}