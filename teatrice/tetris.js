var canvas;
var context;
var score;
var harizontal_max;
var vertical_max;
var level;
//var tile_size;

const tile_size = 20; //680 height, 400 width, each tile 20 px, we will have 20 boxes per row, and will have 34 rows 
const rows = 34;



function init() {
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
    Console.log("current piece")

}

function buildshapes() { // design shapes here, 4,5, random?
    console.log("you see, a shape")
}

function initiate_Shape() {
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

function control(e) { //player controls one shape, closest to the floor
    var key = e.keyCode;

    if ((key == LEFT_KEY) && (!rightDirection)) {

        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {

        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {

        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {

        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }
}

function rotate() {
    console.log("you rotated me") //but how, define a center point, x axis, y axis
}