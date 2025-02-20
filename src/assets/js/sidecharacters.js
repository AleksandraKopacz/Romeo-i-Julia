//LAURENCE

const LAURENCE = new Image();
LAURENCE.src = "./assets/images/laurence.png";

const laurence = document.getElementById("laurence");
const lrCtx = laurence.getContext("2d");

loadLaurence();

function loadLaurence() {
  LAURENCE.onload = () => {
    laurence.width = LAURENCE.width / 3;
    laurence.height = LAURENCE.height / 2;
    lrCtx.drawImage(LAURENCE, 0, 75, LAURENCE.width / 3, LAURENCE.height / 3);
  };
}

// MERCUTIO

const MERCUTIO = new Image();
MERCUTIO.src = "./assets/images/mercutio.png";

const mercutio = document.getElementById("mercutio");
const mrCtx = mercutio.getContext("2d");

loadMercutio();

function loadMercutio() {
  MERCUTIO.onload = () => {
    mercutio.width = MERCUTIO.width / 3;
    mercutio.height = MERCUTIO.height / 2;
    mrCtx.drawImage(MERCUTIO, 0, 75, MERCUTIO.width / 3, MERCUTIO.height / 3);
  };
}

// NURSE

const NURSE = new Image();
NURSE.src = "./assets/images/nurse.png";

const nurse = document.getElementById("nurse");
const nuCtx = nurse.getContext("2d");

loadNurse();

function loadNurse() {
  NURSE.onload = () => {
    nurse.width = NURSE.width / 3;
    nurse.height = NURSE.height / 2;
    nuCtx.drawImage(NURSE, 0, 75, NURSE.width / 3, NURSE.height / 3);
  };
}

// TYBALT

const TYBALT = new Image();
TYBALT.src = "./assets/images/tybalt.png";

const tybalt = document.getElementById("tybalt");
const tbCtx = tybalt.getContext("2d");

loadTybalt();

function loadTybalt() {
  TYBALT.onload = () => {
    tybalt.width = TYBALT.width / 3;
    tybalt.height = TYBALT.height / 2;
    tbCtx.drawImage(TYBALT, 0, 75, TYBALT.width / 3, TYBALT.height / 3);
  };
}
