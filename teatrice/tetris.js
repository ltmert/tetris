var canvas;
var context;
var score;
var horizontal_max; //height of the game area
var vertical_max; //width of thee game area
var tile; //size of each tile within the game area
var level; //msy be game can progress based on game level, speed shape etc
var shapes = new Array(); //put shapes in
var currentShape; //to put shapes in a context
var nextShape; //to define upcoming shspe
var colors = ['black', 'yellow', 'red', 'cyan']; //4 colors, can pick by random function
var L=[0,0,1,  //started with 2 shapes to see how it will look, 3x3, could be small, can try 4x4
       0,0,1,
       0,1,1];

var Z=[0,0,0,
       0,1,1,
       1,1,0];

var shapes =[L,Z];  //put two shoes in an an array to call them in random

//var tile_size; tried to work on tile size, if needed to adapt game area
const tile_size = 20; //680 height, 400 width, each tile 20 px, we will have 20 boxes per row, and will have 34 rows 
const rows = 34;

function init() {
    score=0;
    //currentShape= new initiate_Shape(30, 30, "red", 225, 225); // could not decide to put first shape here or add it to initiate_shape()
    canvas = document.getElementById('Canvas');
    context = canvas.getContext('2d');
    console.log("Im initiliazied");
    initiate_Shape(); // send the first shape
    console.log("shape is here");
    game(); //main game file, this function should have another initiate_shape function
    
}

function whereamI() { // where is the first shape, did it touch the floor, or in mid way, if level is 10 or higher 
    //generate 2nd shape, if level is 20 or higher generate 3rd shape
}

function game() {
    console.log("current piece")
    currentShape= [0,0,0, 0,0,0, 0,0,0];
    nextShape= [0,0,0, 0,0,0, 0,0,0];
    //randomly select first shape but we already have a shape from initiate_shape
   // drop the shape, speed
   //apply controls to the shape
   //check for collission and if hit to the bottom. mke speed 0

}

//function buildshapes() { // design shapes here, 4,5, random? NOT SURE If I NEED This One.
    
  // index=Math.floor((Math.random()*shapes.length));
    //return [...shapes[ index]];

  //  console.log("you see, a shape")
//}

function initiate_Shape() { //first shape
   
    context.fillStyle = "red";
    context.fillRect(0, 0, tile_size, tile_size); 
    //ontext.strokeStyle = "black";
    //context.strokeRect(0, 0, tile_size, tile_size);

    drop();
    console.log("here comes #1") // how to initiate the shape, random or by order. or sets of order
}

function drop() {
    
   console.log("turmunail speed")
  


}

function checkrow() {
    console.log("rows are clean as a whistle") // is the tile has a piece. is tile 0 or 1?
}

function score() {
    console.log("deauo points")
    if (score >= 100) {
        Level++;
    }
    console.log(level);
}

function gameover() {
    console.log("finito")
}

function clearrow() {
    console.log("blast'em")
}

onkeydown=function control(e) { //player controls one shape, closest to the floor
    if(e.keyCode == 37){
        p.moveLeft();
        dropStart = Date.now();
    }else if(e.keyCode == 38){
        p.rotate();
        dropStart = Date.now();
    }else if(e.keyCode == 39){
        p.moveRight();
        dropStart = Date.now();
    }else if(e.keyCode == 40){
        p.moveDown();
    }
}

function rotate() {
    console.log("you rotated me") //but how, define a center point, x axis, y axis
}