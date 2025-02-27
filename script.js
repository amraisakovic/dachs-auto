const navbar = document.getElementById("navbar");
const hotspots = document.querySelectorAll(".hotspot");
const slidingText = document.querySelector(".sliding-text span");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("nav-menu");

const messages = [
    "Call us to schedule an inspection!",
    "Book your next car service today!",
    "We offer professional maintenance!",
    "Visit us at 9211 Avenue L, Brooklyn!"
];

let index = 0;

// Change message dynamically
function changeMessage() {
    slidingText.innerText = messages[index];
    index = (index + 1) % messages.length;
}
setInterval(changeMessage, 10000);

// Fade navbar on scroll
window.addEventListener("scroll", () => {
    navbar.style.opacity = window.scrollY > 50 ? "0" : "1";
});

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Hotspot functionality (Hover for Desktop, Tap for Mobile)
hotspots.forEach(spot => {
    let isExpanded = false;

    spot.addEventListener("mouseenter", function () {
        this.innerHTML = `<strong>${this.dataset.service}</strong><br>${this.dataset.description}`;
        this.style.animation = "none";
        this.style.fontSize = "14px";
    });

    spot.addEventListener("mouseleave", function () {
        this.innerHTML = "";
        this.style.animation = "pulsate 1.5s infinite ease-in-out";
        this.style.fontSize = "0";
    });

    spot.addEventListener("click", function (event) {
        event.stopPropagation();
        if (!isExpanded) {
            this.innerHTML = `<strong>${this.dataset.service}</strong><br>${this.dataset.description}`;
            this.style.animation = "none";
            this.style.fontSize = window.innerWidth <= 768 ? "11px" : "14px";
            isExpanded = true;
        } else {
            this.innerHTML = "";
            this.style.animation = "pulsate 1.5s infinite ease-in-out";
            this.style.fontSize = "0";
            isExpanded = false;
        }
    });
});

// Close hotspots when tapping outside
document.addEventListener("click", () => {
    hotspots.forEach(spot => {
        spot.innerHTML = "";
        spot.style.animation = "pulsate 1.5s infinite ease-in-out";
        spot.style.fontSize = "0";
    });
});
