// 1. Set the Anniversary Date (Year, Month-1, Day)
// Example: 3 December 2023
const startDate = new Date(2022, 12, 3);

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

// 2. Birthday Unlock Logic
function checkDate() {
    const bday = document.getElementById('birthdate').value;

    if (bday === "1999-12-29") {
        document.getElementById('login-screen').style.display = 'none';

        const main = document.getElementById('main-content');
        main.style.display = 'flex';
        main.style.flexDirection = 'column';
        main.style.alignItems = 'center';

        updateTimer();                 // ✅ update immediately
        setInterval(updateTimer, 1000);
    } else {
        alert("Enter the correct birthdate to see your surprise! ❤️");
    }
}

function unlockLetter() {
    const inputDate = document.getElementById("anniversaryDate").value;

    // CHANGE this to YOUR real anniversary date
    const correctDate = "2022-12-03";

    if (inputDate === correctDate) {
        document.getElementById("love-letter").style.display = "block";
        alert("You unlocked my heart ❤️");
    } else {
        alert("Wrong date 😢 Try again, my love ❤️");
    }
}

// 3. Blow Candle
function blowCandle() {
    document.getElementById('cake').style.opacity = '0.5';
    alert("Wish made! I love you! ✨🎂");
}
