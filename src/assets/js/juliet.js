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