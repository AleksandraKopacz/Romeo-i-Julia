// ROMEO

const ROMEO = new Image();
ROMEO.src = "./assets/images/romeo.png";

const romeo = document.getElementById("romeo");
const rmCtx = romeo.getContext("2d");

loadRomeo();

function loadRomeo() {
    ROMEO.onload = () => {
      romeo.width = ROMEO.width / 2;
      romeo.height = ROMEO.height / 2;
      rmCtx.drawImage(ROMEO, 0, 0, ROMEO.width / 2, ROMEO.height / 2);
    };
}

// JULIET

const JULIET = new Image();
JULIET.src = "./assets/images/juliet.png";

const juliet = document.getElementById("juliet");
const jlCtx = juliet.getContext("2d");

loadJuliet();

function loadJuliet() {
  JULIET.onload = () => {
    juliet.width = JULIET.width / 2;
    juliet.height = JULIET.height / 2;
    jlCtx.drawImage(JULIET, 0, 0, JULIET.width / 2, JULIET.height / 2);
  };
}
