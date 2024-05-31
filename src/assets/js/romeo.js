const FRAME2 = new Image();
FRAME2.src = "./assets/images/frame.png";

const ROMEO = new Image();
ROMEO.src = "./assets/images/romeo.png";

const romeo = document.getElementById("romeo");
const rmCtx = romeo.getContext("2d");

loadRomeo();

function loadRomeo() {
  FRAME2.onload = () => {
    romeo.width = FRAME2.width / 2;
    romeo.height = FRAME2.height / 2;
    rmCtx.drawImage(ROMEO, 0, 0, FRAME2.width / 2, FRAME2.height / 2);
    rmCtx.drawImage(FRAME2, 0, 0, FRAME2.width / 2, FRAME2.height / 2);
  };
}