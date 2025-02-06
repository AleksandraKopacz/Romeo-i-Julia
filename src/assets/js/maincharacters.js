// ROMEO

const FRAME2 = new Image();
FRAME2.src = "./assets/images/frame.png";

const ROMEO = new Image();
ROMEO.src = "./assets/images/romeo.png";

const romeo = document.getElementById("romeo");
const rmCtx = romeo.getContext("2d");

loadRomeo();

function loadRomeo() {
  FRAME2.onload = () => {
    ROMEO.onload = () => {
      romeo.width = FRAME2.width / 2;
      romeo.height = FRAME2.height / 2;
      rmCtx.drawImage(ROMEO, 0, 0, FRAME2.width / 2, FRAME2.height / 2);
      rmCtx.drawImage(FRAME2, 0, 0, FRAME2.width / 2, FRAME2.height / 2);
    };
  };
}

// JULIET

const FRAME = new Image();
FRAME.src = "./assets/images/frame.png";

const JULIET = new Image();
JULIET.src = "./assets/images/juliet.png";

const juliet = document.getElementById("juliet");
const jlCtx = juliet.getContext("2d");

loadJuliet();

function loadJuliet() {
  FRAME.onload = () => {
    juliet.width = FRAME.width / 2;
    juliet.height = FRAME.height / 2;
    jlCtx.drawImage(JULIET, 0, 0, FRAME.width / 2, FRAME.height / 2);
    jlCtx.drawImage(FRAME, 0, 0, FRAME.width / 2, FRAME.height / 2);
  };
}
