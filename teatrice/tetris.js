var canvas;
var context;
var score;
var harizontal_max;
var vertical_max;
var level;
var shapes = new Array();
var currentShape;
var colors = ['black', 'yellow', 'red', 'cyan'];
//var tile_size;

const tile_size = 20; //680 height, 400 width, each tile 20 px, we will have 20 boxes per row, and will have 34 rows 
const rows = 34;



function init() {
    score=0;
    canvas = document.getElementById('Canvas');
    context = canvas.getContext('2d');
       console.log("Im initiliazied");
    initiate_Shape(); // send the first shape
    game();
}

function whereamI() { // where is the first shape, did it touch the floor, or in mid way, if level is 10 or higher 
    //generate 2nd shape, if level is 20 or higher generate 3rd shape

}

function game() {
    console.log("current piece")

}

function buildshapes() { // design shapes here, 4,5, random?
    
    var other = [[1, 0], [0,1], [1,1],[2,1]]; // 
    var line = [[0, 0], [0, 1], [0, 2], [0, 3]]; // line
    var square = [[0, 0], [0, 1], [1, 0], [1, 1]];
    var l = [[2,0], [0, 1], [1, 1], [2,1]];

    console.log("you see, a shape")
}

function initiate_Shape() {
    context.fillStyle = "red";
    context.fillRect(0, 0, tile_size, tile_size); 
    context.strokeStyle = "black";
    context.strokeRect(0, 0, tile_size, tile_size);

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