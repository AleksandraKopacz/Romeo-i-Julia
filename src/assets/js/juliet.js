const FRAME = new Image();
FRAME.src = "./assets/images/frame.png";

const JULIET = new Image();
JULIET.src = "./assets/images/juliet.png";

const ROMEO = new Image();
ROMEO.src = "./assets/images/romeo.png";

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

document.getElementById("juliet").addEventListener(
  "click",
  function () {
    console.log("clicked");
  },
  false
);
