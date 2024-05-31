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