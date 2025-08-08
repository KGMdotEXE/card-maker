// ===================== Card Type Selection =====================
function CardType() {
    const cardType = document.getElementById("Card_type").value;
    const cardMessage = document.getElementById("cardMessage");
    const cardInputs = {
        Mcard: "inputMcard",
        Icard: "inputIcard",
        Tcard: "inputTcard",
        Acard: "inputAcard"
    };

    // Hide all card input sections
    Object.values(cardInputs).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Show selected card input section and set message
    if (cardInputs[cardType]) {
        cardMessage.textContent = `คุณเลือก ${cardType.replace('card', ' card')}`;
        document.getElementById(cardInputs[cardType]).style.display = "block";
        if (cardType === "Mcard") drawMcard();
        if (cardType === "Tcard") drawTcard();
        if (cardType === "Icard") drawIcard();
        if (cardType === "Acard") drawAcard();
    } else {
        cardMessage.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Card_type").addEventListener("change", CardType);
});

// ===================== Canvas Drawing Helpers =====================
function loadAndDrawImage(canvasId, imgSrc, drawCallback) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        drawCallback(ctx);
    };
}

// ===================== Draw Card Functions =====================

// --- Material Card ---
function drawMcard() {
    loadAndDrawImage('canvasMcard', './pic/Mcard.png', ctx => {
        const Msubtype = document.getElementById('MsubType').value;
        if (Msubtype === "wood") {
            ctx.font = 'bold 24px MedievalSharp';
            ctx.fillStyle = 'brown';
        } else if (Msubtype === "metal") {
            ctx.font = 'bold 24px MedievalSharp';
            ctx.fillStyle = 'gray';
        } else if (Msubtype === "gem") {
            ctx.font = 'bold 24px MedievalSharp';
            ctx.fillStyle = 'blue';
        } else {
            ctx.font = 'bold 24px MedievalSharp';
            ctx.fillStyle = 'black';
        }
        ctx.fillText(document.getElementById('cardNameM').value, 20, 235);
        ctx.font = '18px MedievalSharp';
       const detailLines = document.getElementById('cardDetailM').value.split('\n');
        detailLines.forEach((line, i) => {
        ctx.fillText(line, 20, 270 + i * 20);});
        ctx.font = 'bold 35px MedievalSharp';
        ctx.fillStyle = 'yellow';
        ctx.fillText(document.getElementById('QPM').value, 250, 235);
    });
}

// --- Item Card ---
function drawIcard() {
    loadAndDrawImage('canvasIcard', './pic/Icard.png', ctx => {
        ctx.font = 'bold 24px MedievalSharp';
        ctx.textAlign = 'start';
        ctx.fillStyle = 'black';
        ctx.fillText(document.getElementById('cardNameI').value, 20, 235);
        ctx.font = '18px MedievalSharp';
        ctx.fillText(document.getElementById('cardDetailI').value, 20, 300);
        ctx.font = 'bold 28px MedievalSharp';
        ctx.fillStyle = 'black';
        ctx.fillText(document.getElementById('QPI').value, 210, 235);
        ctx.fillStyle = 'blue';
        ctx.fillText(document.getElementById('BP').value, 255, 235);
        ctx.textAlign = 'center';
        ctx.font = '16px MedievalSharp';
        ctx.fillText(document.getElementById('craftRecipes').value, 150, 275);
    });
}

// --- Tool Card ---
function drawTcard() {
    loadAndDrawImage('canvasTcard', './pic/Tcard.png', ctx => {
        ctx.font = 'bold 24px MedievalSharp';
        ctx.fillStyle = 'black';
        ctx.fillText(document.getElementById('cardNameT').value, 20, 235);
        ctx.font = '18px MedievalSharp';
        ctx.fillText(document.getElementById('cardDetailT').value, 20, 270);
        ctx.font = 'bold 28px MedievalSharp';
        ctx.fillStyle = 'lightgreen';
        ctx.fillText(document.getElementById('TP').value, 250, 235);
    });
}

// --- Addon Card ---
function drawAcard() {
    loadAndDrawImage('canvasAcard', './pic/Acard.png', ctx => {
        ctx.font = 'bold 24px MedievalSharp';
        ctx.fillStyle = 'yellow';
        ctx.textAlign = 'start';
        ctx.font = '18px MedievalSharp';
        ctx.fillText(document.getElementById('cardDetailA').value, 25, 260);
        ctx.textAlign = 'center';
        ctx.fillText(document.getElementById('cardNameA').value, 150, 35);
    });
}

// ===================== Event Listeners =====================

// Material Card
['cardNameM', 'cardDetailM','QPM'].forEach(id => {
    document.getElementById(id).addEventListener('input', drawMcard);
});

// Item Card
['cardNameI', 'cardDetailI', 'craftRecipes', 'QPI', 'BP'].forEach(id => {
    document.getElementById(id).addEventListener('input', drawIcard);
});

// Tool Card
['cardNameT', 'cardDetailT', 'TP'].forEach(id => {
    document.getElementById(id).addEventListener('input', drawTcard);
});

// Addon Card
['cardNameA', 'cardDetailA'].forEach(id => {
    document.getElementById(id).addEventListener('input', drawAcard);
});
