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