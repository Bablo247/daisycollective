// Countdown Timer
const launchDate = new Date("July 13, 2025").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Launched!";
    }
}, 1000);


// Popup for Newsletter Sign-Up
const signupBtn = document.getElementById("signup-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementsByClassName("close")[0];

signupBtn.onclick = () => {
    popup.style.display = "block";
}

closeBtn.onclick = () => {
    popup.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
