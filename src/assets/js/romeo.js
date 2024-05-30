const FRAME = new Image();
FRAME.src = "./assets/images/frame.png";

const ROMEO = new Image();
ROMEO.src = "./assets/images/romeo.png";

const romeo = document.getElementById("romeo");
const rmCtx = romeo.getContext("2d");

loadRomeo();

function loadRomeo() {
  FRAME.onload = () => {
    romeo.width = FRAME.width / 2;
    romeo.height = FRAME.height / 2;
    rmCtx.drawImage(ROMEO, 0, 0, FRAME.width / 2, FRAME.height / 2);
    rmCtx.drawImage(FRAME, 0, 0, FRAME.width / 2, FRAME.height / 2);
  };
}

document.getElementById("romeo").addEventListener(
  "click",
  function () {
    console.log("clicked");
  },
  false
);