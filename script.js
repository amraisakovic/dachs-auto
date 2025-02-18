const navbar = document.getElementById("navbar");
const hotspots = document.querySelectorAll(".hotspot");
const hotspotInfo = document.getElementById("hotspotInfo");
const hotspotTitle = document.getElementById("hotspotTitle");
const hotspotDescription = document.getElementById("hotspotDescription");

// FADE NAVBAR ON SCROLL
window.addEventListener("scroll", () => {
    navbar.style.opacity = window.scrollY > 50 ? "0" : "1";
});

// HOTSPOT FUNCTIONALITY (SHOW BLOCK WITH SMOOTH ANIMATION)
hotspots.forEach(spot => {
    spot.addEventListener("mouseenter", function (event) {
        // Get service name & description
        const serviceName = this.dataset.service;
        const serviceDescription = this.dataset.description;

        // Update info block content
        hotspotTitle.innerText = serviceName;
        hotspotDescription.innerText = serviceDescription;

        // Position info block near the hotspot
        const offsetX = 20;
        const offsetY = 20;
        hotspotInfo.style.left = event.pageX + offsetX + "px";
        hotspotInfo.style.top = event.pageY + offsetY + "px";

        // Make it visible with animation
        hotspotInfo.style.opacity = "1";
        hotspotInfo.style.transform = "scale(1)";
    });

    // Move the block if user moves the mouse
    spot.addEventListener("mousemove", function (event) {
        const offsetX = 20;
        const offsetY = 20;
        hotspotInfo.style.left = event.pageX + offsetX + "px";
        hotspotInfo.style.top = event.pageY + offsetY + "px";
    });

    // Hide info block when leaving the hotspot
    spot.addEventListener("mouseleave", function () {
        hotspotInfo.style.opacity = "0";
        hotspotInfo.style.transform = "scale(0.8)";
    });
});
