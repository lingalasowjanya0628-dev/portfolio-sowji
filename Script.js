alert("Welcome to Sowjanya's Portfolio!");

document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + this.textContent);
    });
});
