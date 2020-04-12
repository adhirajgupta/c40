var player;
var canvas;
var backgroundimg;
var form;
function preload(){
  backgroundimg = loadImage("images/track.jpg")

}
function setup(){
  canvas = createCanvas(displayWidth-15,displayHeight-150);
  form = new Form();

}
function draw(){

 form.display();
drawSprites();
}