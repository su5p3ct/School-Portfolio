const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;

let drawing = false;
let erasing = false;
let strokeColor = document.getElementById('colorPicker').value;

document.getElementById('colorPicker').addEventListener('change', (event) => {
    strokeColor = event.target.value;
    erasing = false;
});

document.getElementById('eraser').addEventListener('click', () => {
    strokeColor = 'white';
    erasing = true;
});

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });

canvas.addEventListener('mousemove', (event) => {
    if (!drawing) return;
    ctx.lineWidth = erasing ? 10 : 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeColor;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
function toggleLab(id) {
    let labContent = document.getElementById(id);
    if (labContent.style.display === "none" || labContent.style.display === "") {
        labContent.style.display = "block";
        labContent.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        labContent.style.display = "none";
    }
}

function openPopup(url) {
    let popup = window.open(url, "Live Demo", "width=800,height=600");
    if (!popup) alert("Pop-up blocked! Please allow pop-ups to view live demos.");
}
function toggleCode(id) {
    let codeContent = document.getElementById(id);
    if (codeContent.style.display === "none" || codeContent.style.display === "") {
        codeContent.style.display = "block";
        codeContent.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        codeContent.style.display = "none";
    }
}