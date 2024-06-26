const MOON = new Image();
MOON.src = "./assets/images/moon.png";

const CLOCK = new Image();
CLOCK.src = "./assets/images/clock.png";

const LONGER = new Image();
LONGER.src = "./assets/images/longer.png";

const SHORTER = new Image();
SHORTER.src = "./assets/images/shorter.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
CLOCK.onload = () => {
  setInterval(drawClock, 1000);
};

function drawClock() {
  drawFace(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx) {
  ctx.drawImage(MOON, -188, -186, 375, 375);
  ctx.drawImage(CLOCK, -180, -179, 360, 360);
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHour(ctx, hour, radius * 0.5);
  //minute
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawMinute(ctx, minute, radius * 0.8);
  // second
  second = (second * Math.PI) / 30;
  drawSecond(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHour(ctx, pos, length) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.drawImage(
    SHORTER,
    -20,
    -length - 10,
    SHORTER.width * 0.15,
    SHORTER.height * 0.15
  );
  ctx.rotate(-pos);
}

function drawMinute(ctx, pos, length) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.drawImage(
    LONGER,
    -10,
    -length,
    LONGER.width * 0.15,
    LONGER.height * 0.15
  );
  ctx.rotate(-pos);
}

function drawSecond(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width * 0.25;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length * 0.99);
  ctx.stroke();
  ctx.rotate(-pos);
}
