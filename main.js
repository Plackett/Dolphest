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

// Build Background //
draw();
function draw() {
  var c = getElementById("mainGame");
  c.style.width='100%';
  c.style.height='100%';
  c.width  = c.offsetWidth;
  c.height = c.offsetHeight;
  // you try the rest XD
}

// Build Level //
function randomizelevel() {
    var max = 360;
    var min = 0;
    if(levelcounter < 2) {
        var max = 10
        var min = 0
        points.pt1 = (Math.random() * (max - min) + min);
        points.pt2 = (Math.random() * (max - min) + min);
        points.pt3 = (Math.random() * (max - min) + min);
        points.pt4 = (Math.random() * (max - min) + min);
    } if(levelcounter > 4) {
        var max = 40
        var min = 0
        points.pt1 = (Math.random() * (max - min) + min);
        points.pt2 = (Math.random() * (max - min) + min);
        points.pt3 = (Math.random() * (max - min) + min);
        points.pt4 = (Math.random() * (max - min) + min);
        points.pt5 = (Math.random() * (max - min) + min);
        points.pt6 = (Math.random() * (max - min) + min);
    }  if(levelcounter > 10) {
        var max = 90
        var min = 0
        points.pt1 = (Math.random() * (max - min) + min);
        points.pt2 = (Math.random() * (max - min) + min);
        points.pt3 = (Math.random() * (max - min) + min);
        points.pt4 = (Math.random() * (max - min) + min);
        points.pt5 = (Math.random() * (max - min) + min);
        points.pt6 = (Math.random() * (max - min) + min);
        points.pt7 = (Math.random() * (max - min) + min);
        points.pt8 = (Math.random() * (max - min) + min);
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

// Game Loop //

// somehow randomly spawn enemies with velocities going up between each point and also allow player to move from point to point using the pt variables for angle of rotation and just using offset off from the walls to determine position. Also shooting and death if lives reach 0 and lives are lowered by hitting enemies and perhaps raised by collecting some sort of powerup.