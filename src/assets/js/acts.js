const act = document.getElementById("act");
const actCtx = act.getContext("2d");

const ACTONE = new Image();
ACTONE.src = "./assets/images/actone.jpg";

const ACTTWO = new Image();
ACTTWO.src = "./assets/images/acttwo.jpg";

const ACTTHREE = new Image();
ACTTHREE.src = "./assets/images/actthree.jpg";

const ACTFIVE = new Image();
ACTFIVE.src = "./assets/images/actfive.jpg";

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
      break;
  }
}

function actOne() {
  actCtx.drawImage(ACTONE, 0, -act.height * 0.25, act.width, ACTONE.height);
}

function actTwo() {
  actCtx.drawImage(ACTTWO, 0, 0, act.width, act.height);
}

function actThree() {
  actCtx.drawImage(
    ACTTHREE,
    -act.width * 0.1,
    -act.height * 0.25,
    ACTTHREE.width,
    ACTTHREE.height
  );
}

function actFour() {
  actCtx.drawImage(ACTFOUR, 0, 0, act.width, act.height);
}

function actFive() {
  actCtx.drawImage(ACTFIVE, 0, 0, act.width, act.height);
}
