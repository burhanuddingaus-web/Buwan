// Heart Rain
function createHearts() {
    const container = document.getElementById('heart-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 20 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 200);
}
window.onload = createHearts;

// Unlock Gift and Play Music
function checkDate() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) { alert("Please enter your birthdate!"); return; }
    document.getElementById("login-screen").style.display = "none";
    const main = document.getElementById("main-content");
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
    document.getElementById("bg-music").play().catch(() => {});
}

// Unlock Love Letter
function unlockLetter() {
    const anniversary = document.getElementById("anniversaryDate").value;
    if (!anniversary) { alert("Please enter our anniversary date!"); return; }
    document.getElementById("love-letter").style.display = "block";
}

// Blow Candle
function blowCandle() {
    alert("✨ Candle blown! Make your wish! ✨");
}
