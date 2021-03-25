// Variable Definitions //
const assets = '/assets';
const media = assets + '/media';
const mplr = (media + '/Player');
const menemy = (media + '/Enemies');
const menv = (media + '/Environment');
var points = {
    pt1: 0,
    pt2: 0,
    pt3: 0,
    pt4: 0,
    pt5: 0,
    pt6: 0,
    pt7: 0,
    pt8: 0,
}
var levelcounter = 1;
var max = 10;
var min = 0;
var type = 1;
function random(min, max, pt) {
	pt = (Math.random() * (max - min) + min);
}

// Build Background //
var c = document.getElementById("mainGame");
var d = document.getElementById("canvas-wrapper");
var cv = c.getContext("2d");
function resizeCanvas() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}
function draw() {
  if (c.getContext) {
    ctx = c.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);
    resizeCanvas();
  }
}
draw();
c.style.background = "black";
// you try the rest XD

// Build Level //
function randomizelevel() {
    var max = 360;
    var min = 0;
    if(levelcounter < 2) {
        points.pt1 = random(min, max, points.pt1);
        points.pt2 = random(min, max, points.pt2);
        points.pt3 = random(min, max, points.pt3);
        points.pt4 = random(min, max, points.pt4);
    } if(levelcounter > 4) {
        var max = 40;
        var min = 0;
        points.pt1 = random(min, max, points.pt1);
        points.pt2 = random(min, max, points.pt2);
        points.pt3 = random(min, max, points.pt3);
        points.pt4 = random(min, max, points.pt4);
        points.pt5 = random(min, max, points.pt5);
        points.pt6 = random(min, max, points.pt6);
    }  if(levelcounter > 10) {
        var max = 90;
        var min = 0;
        points.pt1 = random(min, max, points.pt1);
        points.pt2 = random(min, max, points.pt2);
        points.pt3 = random(min, max, points.pt3);
        points.pt4 = random(min, max, points.pt4);
        points.pt5 = random(min, max, points.pt5);
        points.pt6 = random(min, max, points.pt6);
        points.pt7 = random(min, max, points.pt7);
        points.pt8 = random(min, max, points.pt8);
    }
}

function clearlevel() {
    points.pt1 = 0;
    points.pt2 = 0;
    points.pt3 = 0;
    points.pt4 = 0;
    points.pt5 = 0;
    points.pt6 = 0;
    points.pt7 = 0;
    points.pt8 = 0;
}

function buildlevel() {
    var min = 1;
    var max = 4;
    var img1 = new Image;
    img1.src = (menv + "/plume" + random(type, min, max));
    cv.drawImage(img1, 10, 10);
}
buildlevel();
// Game Loop //

// somehow randomly spawn enemies with velocities going up between each point and also allow player to move from point to point using the pt variables for angle of rotation and just using offset off from the walls to determine position. Also shooting and death if lives reach 0 and lives are lowered by hitting enemies and perhaps raised by collecting some sort of powerup.