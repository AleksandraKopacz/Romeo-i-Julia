const FRAME4 = new Image();
FRAME4.src = "./assets/images/frame.png";

const NURSE = new Image();
NURSE.src = "./assets/images/nurse.png";

const nurse = document.getElementById("nurse");
const nuCtx = nurse.getContext("2d");

loadNurse();

function loadNurse() {
  FRAME4.onload = () => {
    nurse.width = FRAME4.width / 3;
    nurse.height = FRAME4.height / 2;
    nuCtx.drawImage(NURSE, 0, 75, FRAME4.width / 3, FRAME4.height / 3);
    nuCtx.drawImage(FRAME4, 0, 75, FRAME4.width / 3, FRAME4.height / 3);
  };
}