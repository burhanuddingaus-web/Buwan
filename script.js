// ===== Heart Rain =====
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
        heart.style.transform = `rotate(${Math.random()*20 - 10}deg)`;
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 200);
}
window.onload = createHearts;

// ===== Timer =====
const startDate = new Date(2022, 11, 3); // December = 11
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    document.getElementById('days').innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById('hours').innerText = Math.floor((diff / (1000*60*60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / (1000*60)) % 60);
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60);
}
function startTimer() {
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ===== Unlock Gift & Play Music =====
function checkDate() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) { alert("Please enter your birthdate!"); return; }

    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-wrapper").style.display = "flex";

    document.getElementById("bg-music").play().catch(() => {});
    startTimer();
}

// ===== Unlock Love Letter =====
function unlockLetter() {
    const anniversary = document.getElementById("anniversaryDate").value;
    if (!anniversary) { alert("Please enter our anniversary date!"); return; }
    document.getElementById("love-letter").style.display = "block";
}

// ===== Blow Candle =====
function blowCandle() {
    alert("✨ Candle blown! Make your wish! ✨");
}

// ===== Flip Cards =====
const flipCards = document.querySelectorAll('.flip-card-inner');
flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


