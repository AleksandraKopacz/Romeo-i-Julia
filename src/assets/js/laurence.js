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