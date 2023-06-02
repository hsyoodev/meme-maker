const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// emergency exit drawing

// canvas
canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = "#00AF6B";

// background
ctx.fillStyle = "white";
ctx.fillRect(150, 50, 500, 700);

// head
ctx.beginPath();
ctx.arc(300, 150,  60, 0, 2 * Math.PI);
ctx.fillStyle = "#00AF6B";
ctx.fill();

// body
ctx.moveTo(150, 350);
ctx.lineTo(200, 350);
ctx.arcTo(310, 240, 540, 240, 70);
ctx.arcTo(540, 240, 590, 380, 70);
ctx.arcTo(590, 380, 530, 380, 30);
ctx.arcTo(530, 380, 500, 300, 30);
ctx.lineTo(500, 300);
ctx.lineTo(430, 300);
ctx.lineTo(480, 450);
ctx.lineTo(490, 550);
ctx.arcTo(650, 550, 640, 590, 50);
ctx.lineTo(430, 610);
ctx.lineTo(420, 470);
ctx.arcTo(300, 700, 240, 700, 40);
ctx.lineTo(240, 700);
ctx.lineTo(350, 450);
ctx.lineTo(310, 320);
ctx.arcTo(220, 410, 150, 410, 40);
ctx.lineTo(150, 410);
ctx.fill();