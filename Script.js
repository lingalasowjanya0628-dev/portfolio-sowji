// Show a message when the page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Sowjanya's Portfolio!");
});

// Add active effect to navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });

});
