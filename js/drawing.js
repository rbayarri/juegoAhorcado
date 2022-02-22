let canvas = document.querySelector("canvas");
let drawing = canvas.getContext("2d");
let width, height;

function calculateDimensions() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
}

function drawGallow() {
  drawing.lineWidth = 4;
  drawing.moveTo(width / 3, height - height / 8);
  drawing.lineTo((width / 3) * 2, height - height / 8);
  drawing.stroke();

  drawing.moveTo((width / 3) * 1.25, height - height / 8);
  drawing.lineTo((width / 3) * 1.25, height / 8);
  drawing.stroke();

  drawing.lineTo((width / 3) * 1.75, height / 8);
  drawing.stroke();

  drawing.lineTo((width / 3) * 1.75, height * 0.1875);
  drawing.stroke();
}

function drawHead() {
  drawing.beginPath();
  drawing.arc(
    (width / 3) * 1.75,
    height * 0.25,
    height * 0.0625,
    0,
    2 * Math.PI
  );
  drawing.stroke();
}

function drawBody() {
  drawing.moveTo((width / 3) * 1.75, height * 0.3125);
  drawing.lineTo((width / 3) * 1.75, height * 0.5625);
  drawing.stroke();
}

function drawLeftLeg() {
  drawing.moveTo((width / 3) * 1.75, height * 0.5625);
  drawing.lineTo((width / 3) * 1.625, height * 0.75);
  drawing.stroke();
}

function drawRightLeg() {
  drawing.moveTo((width / 3) * 1.75, height * 0.5625);
  drawing.lineTo((width / 3) * 1.875, height * 0.75);
  drawing.stroke();
}

function drawLeftArm() {
  drawing.moveTo((width / 3) * 1.75, height * 0.3125);
  drawing.lineTo((width / 3) * 1.625, height * 0.5);
  drawing.stroke();
}

function drawRightArm() {
  drawing.moveTo((width / 3) * 1.75, height * 0.3125);
  drawing.lineTo((width / 3) * 1.875, height * 0.5);
  drawing.stroke();
}

function clear(){
  drawing.clearRect(0,0,width,height);
}