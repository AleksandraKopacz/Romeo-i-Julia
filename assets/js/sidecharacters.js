//LAURENCE

const FRAME3 = new Image();
FRAME3.src = "./assets/images/frame.png";

const LAURENCE = new Image();
LAURENCE.src = "./assets/images/laurence.png";

const laurence = document.getElementById("laurence");
const lrCtx = laurence.getContext("2d");

loadLaurence();

function loadLaurence() {
  FRAME3.onload = () => {
    laurence.width = FRAME3.width / 3;
    laurence.height = FRAME3.height / 2;
    lrCtx.drawImage(LAURENCE, 0, 75, FRAME3.width / 3, FRAME3.height / 3);
    lrCtx.drawImage(FRAME3, 0, 75, FRAME3.width / 3, FRAME3.height / 3);
  };
}

// MERCUTIO

const FRAME6 = new Image();
FRAME6.src = "./assets/images/frame.png";

const MERCUTIO = new Image();
MERCUTIO.src = "./assets/images/mercutio.png";

const mercutio = document.getElementById("mercutio");
const mrCtx = mercutio.getContext("2d");

loadMercutio();

function loadMercutio() {
  FRAME6.onload = () => {
    mercutio.width = FRAME6.width / 3;
    mercutio.height = FRAME6.height / 2;
    mrCtx.drawImage(MERCUTIO, 0, 75, FRAME6.width / 3, FRAME6.height / 3);
    mrCtx.drawImage(FRAME6, 0, 75, FRAME6.width / 3, FRAME6.height / 3);
  };
}

// NURSE

const FRAME4 = new Image();
FRAME4.src = "./assets/images/frame.png";

const NURSE = new Image();
NURSE.src = "./assets/images/nurse.png";

const nurse = document.getElementById("nurse");
const nuCtx = nurse.getContext("2d");

loadNurse();

function loadNurse() {
  FRAME4.onload = () => {
    nurse.width = FRAME4.width / 3;
    nurse.height = FRAME4.height / 2;
    nuCtx.drawImage(NURSE, 0, 75, FRAME4.width / 3, FRAME4.height / 3);
    nuCtx.drawImage(FRAME4, 0, 75, FRAME4.width / 3, FRAME4.height / 3);
  };
}

// TYBALT

const FRAME5 = new Image();
FRAME5.src = "./assets/images/frame.png";

const TYBALT = new Image();
TYBALT.src = "./assets/images/tybalt.png";

const tybalt = document.getElementById("tybalt");
const tbCtx = tybalt.getContext("2d");

loadTybalt();

function loadTybalt() {
  FRAME5.onload = () => {
    tybalt.width = FRAME5.width / 3;
    tybalt.height = FRAME5.height / 2;
    tbCtx.drawImage(TYBALT, 0, 75, FRAME5.width / 3, FRAME5.height / 3);
    tbCtx.drawImage(FRAME5, 0, 75, FRAME5.width / 3, FRAME5.height / 3);
  };
}
