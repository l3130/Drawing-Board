const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSizeInput = document.getElementById('brushSize');
const clearBtn = document.getElementById('clearBtn');

let drawing = false;
let lastX = 0;
let lastY = 0;

// Set initial brush settings
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSizeInput.value;
ctx.lineCap = 'round';

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = brushSizeInput.value;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => 
    drawing = false
    // Reset the path to avoid connecting lines
    ); 
canvas.addEventListener('mouseleave', () => {
    drawing = false;
});

// Update brush color
colorPicker.addEventListener('input', () => {
    ctx.strokeStyle = colorPicker.value;
});

// Update brush size
brushSizeInput.addEventListener('input', () => {
    ctx.lineWidth = brushSizeInput.value;
});

// Clear the canvas
clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

