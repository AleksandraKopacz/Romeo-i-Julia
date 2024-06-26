const bg = document.getElementById("bg");
const bgCtx = bg.getContext("2d");

const BG_COLOR = "#392f3d";
const STRIPES_COLOR = "#252229";

const LACE1 = new Image();
LACE1.src = "./assets/images/lace1.png";

const LACE2 = new Image();
LACE2.src = "./assets/images/lace2.png";

bg.width = window.innerWidth;
bg.height = window.innerHeight;

bgStart();

function bgStart() {
  solidColor();
  stripesDraw();
  laceDraw();
}

function solidColor() {
  bgCtx.fillStyle = BG_COLOR;
  bgCtx.fillRect(0, 0, bg.width, bg.height);
}

function stripesDraw() {
  var destination = 0;
  bgCtx.beginPath();
  bgCtx.strokeStyle = STRIPES_COLOR;
  bgCtx.lineWidth = 100;
  for (let i = 0; i < 10; i++) {
    bgCtx.moveTo(0, destination);
    bgCtx.lineTo(bg.width, destination);
    bgCtx.stroke();
    destination = destination + 200;
  }
}

function laceDraw() {
  LACE1.onload = () => {
    bgCtx.drawImage(
      LACE1,
      -bg.width * 0.15,
      -bg.height * 0.3,
      LACE1.width / 2,
      LACE1.height / 2
    );
  };

  LACE2.onload = () => {
    bgCtx.drawImage(
      LACE2,
      bg.width * 0.8,
      bg.height * 0.65,
      LACE1.width / 2,
      LACE1.height / 2
    );
  };
}
