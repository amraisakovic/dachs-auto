const navbar = document.getElementById("navbar");
const hotspots = document.querySelectorAll(".hotspot");

// FADE NAVBAR ON SCROLL
window.addEventListener("scroll", () => {
    navbar.style.opacity = window.scrollY > 50 ? "0" : "1";
});

// HOTSPOT FUNCTIONALITY (EXPANDS ON HOVER)
hotspots.forEach(spot => {
    spot.addEventListener("mouseenter", function () {
        // Get service name & description
        const serviceName = this.dataset.service;
        const serviceDescription = this.dataset.description;

        // Expand the hotspot into a block
        this.innerHTML = `<strong>${serviceName}</strong><br>${serviceDescription}`;
    });

    // Shrink back when mouse leaves
    spot.addEventListener("mouseleave", function () {
        this.innerHTML = "";
    });
});
