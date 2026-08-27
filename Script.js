alert("Welcome to Sowjanya's Student Portfolio!");

document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + this.textContent);
    });
});
