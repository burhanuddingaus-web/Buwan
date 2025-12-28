// ================================
// 1. Heart Rain
// ================================
function createHearts() {
    const container = document.getElementById('heart-container');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Random horizontal position
        heart.style.left = Math.random() * 100 + 'vw';

        // Random size
        const size = Math.random() * 20 + 10; // 10px to 30px
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';

        // Random animation duration
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

        container.appendChild(heart);

        // Remove heart after falling
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200);
}

// Start hearts when page loads
window.onload = createHearts;

// ================================
// 2. Anniversary Timer
// ================================
const startDate = new Date(2022, 11, 3); // Month is 0-indexed, so 11 = December

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    document.getElementById('days').innerText =
        Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText =
        Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText =
        Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById('seconds').innerText =
        Math.floor((diff / 1000) % 60);
}

// ================================
// 3. Birthday Unlock Logic
// ================================
function checkDate() {
    const bday = document.getElementById('birthdate').value;

    if (bday === "1999-12-29") {
        // Hide login screen
        document.getElementById('login-screen').style.display = 'none';

        // Show main content
        const main = document.getElementById('main-content');
        main.style.display = 'flex';
        main.style.flexDirection = 'column';
        main.style.alignItems = 'center';

        // Play birthday music
        const music = new Audio("song.mp3");
        music.loop = true;
        music.play().catch(err => {
            console.log("Music will play after user interaction.");
        });

        // Start timer
        updateTimer();
        setInterval(updateTimer, 1000);
    } else {
        alert("Enter the correct birthdate to see your surprise! ❤️");
    }
}

// ================================
// 4. Unlock Love Letter
// ================================
function unlockLetter() {
    const inputDate = document.getElementById("anniversaryDate").value;
    const correctDate = "2022-12-03";

    if (inputDate === correctDate) {
        document.getElementById("love-letter").style.display = "block";
        alert("You unlocked my heart ❤️");
    } else {
        alert("Wrong date 😢 Try again, my love ❤️");
    }
}

// ================================
// 5. Blow Candle
// ================================
function blowCandle() {
    document.getElementById('cake').style.opacity = '0.5';
    alert("Wish made! I love you! ✨🎂");
}
