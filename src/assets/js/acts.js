const act = document.getElementById("act");
const actCtx = act.getContext("2d");
let radius = act.height / 2;
actCtx.translate(radius, radius);
radius = radius * 0.9;

const COURT = new Image();
COURT.src = "./assets/images/courtyard.png"

const BALCONY = new Image();
BALCONY.src = "./assets/images/balcony.png"

act.width = window.innerWidth;
act.height = window.innerHeight;


function switchAct(index) {
  switch (index) {
    case 0:
      actOne();
      break;
    case 1:
      actTwo();
      break;
    case 2:
      actThree();
      break;
    case 3:
      actFour();
      break;
    case 4:
      actFive();
  }
}

function actOne() {
    actCtx.drawImage(BALCONY, 0, 0, act.width, act.height);
    /*actCtx.fillStyle = "#dbab85";
    actCtx.fillRect(-80, -75, act.width / 12, act.height);
    actCtx.fillRect(-10, -75, act.width / 12, act.height);
    actCtx.fillRect(60, -75, act.width / 12, act.height);
    actCtx.fillRect(130, -75, act.width / 12, act.height);
    actCtx.fillRect(200, -75, act.width / 12, act.height);

    actCtx.fillRect(-80, -90, act.height * 2, act.width / 12);*/
}

function actTwo() {
  actCtx.beginPath();
  actCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  actCtx.fillStyle = "black";
  actCtx.fill();
}

function actThree() {
  actCtx.beginPath();
  actCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  actCtx.fillStyle = "red";
  actCtx.fill();
}

function actFour() {
  actCtx.beginPath();
  actCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  actCtx.fillStyle = "blue";
  actCtx.fill();
}

function actFive() {
  actCtx.beginPath();
  actCtx.arc(0, 0, radius, 0, 2 * Math.PI);
  actCtx.fillStyle = "green";
  actCtx.fill();
}
