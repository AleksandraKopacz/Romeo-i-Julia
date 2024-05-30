const bg = document.getElementById("bg");
const bgCtx = bg.getContext("2d");

const BG_COLOR = "#392f3d";
const STRIPES_COLOR = "#252229";

bg.width = window.innerWidth;
bg.height = window.innerHeight;

bgStart();

function bgStart() {
  solidColor();
  stripesDraw();
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
