const navbar = document.getElementById("navbar");
const hotspots = document.querySelectorAll(".hotspot");
const slidingText = document.querySelector(".sliding-text span");

const messages = [
    "Call us to schedule an inspection!",
    "Book your next car service today!",
    "We offer professional maintenance!",
    "Visit us at 9211 Avenue L, Brooklyn!"
];

let index = 0;

// Function to change text dynamically
function changeMessage() {
    slidingText.innerText = messages[index];
    index = (index + 1) % messages.length;
}

// Change message every 10 seconds (matches animation duration)
setInterval(changeMessage, 10000);

// FADE NAVBAR ON SCROLL
window.addEventListener("scroll", () => {
    navbar.style.opacity = window.scrollY > 50 ? "0" : "1";
});

// HOTSPOT FUNCTIONALITY (Hover for Desktop, Tap for Mobile)
hotspots.forEach(spot => {
    let isExpanded = false;

    // Desktop: Expand on hover
    spot.addEventListener("mouseenter", function () {
        this.innerHTML = `<strong>${this.dataset.service}</strong><br>${this.dataset.description}`;
        this.style.animation = "none"; // Stop pulsating
    });

    spot.addEventListener("mouseleave", function () {
        this.innerHTML = "";
        this.style.animation = "pulsate 1.5s infinite ease-in-out"; // Restart pulsating
    });

    // Mobile: Expand on tap
    spot.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing immediately
        if (!isExpanded) {
            this.innerHTML = `<strong>${this.dataset.service}</strong><br>${this.dataset.description}`;
            this.style.animation = "none";
            isExpanded = true;
        } else {
            this.innerHTML = "";
            this.style.animation = "pulsate 1.5s infinite ease-in-out";
            isExpanded = false;
        }
    });
});

// Close hotspots when tapping anywhere else on mobile
document.addEventListener("click", function () {
    hotspots.forEach(spot => {
        spot.innerHTML = "";
        spot.style.animation = "pulsate 1.5s infinite ease-in-out";
    });
});
