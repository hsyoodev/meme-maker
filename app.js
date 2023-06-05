const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

function movePainting(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function stopPainting() {
  isPainting = false;
}
function fillCanvas() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}
function fillText(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = " 68px sans-serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}
function changeLineWidth(event) {
  ctx.lineWidth = event.target.value;
}
function changeCustomColor(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function changeColor(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function changeMode() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "🩸 Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "🖌️ Draw";
  }
}
function resetCanvas() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.restore();
}
function eraseCanvas() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "🩸 Fill";
}
function loadImage(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };
  fileInput.value = null;
}
function saveImage() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("mousemove", movePainting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", fillCanvas);
canvas.addEventListener("dblclick", fillText);

lineWidth.addEventListener("change", changeLineWidth);
color.addEventListener("change", changeCustomColor);
colorOptions.forEach((color) => color.addEventListener("click", changeColor));
modeBtn.addEventListener("click", changeMode);
destroyBtn.addEventListener("click", resetCanvas);
eraserBtn.addEventListener("click", eraseCanvas);
fileInput.addEventListener("change", loadImage);
saveBtn.addEventListener("click", saveImage);
