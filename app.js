const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function movePainting(event) {
    if(isPainting){
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

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", movePainting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", onLineWidthChange);