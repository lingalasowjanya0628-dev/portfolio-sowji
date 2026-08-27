alert("Welcome to Sowjanya's Portfolio!");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
        console.log("You clicked: " + this.textContent);
    });
});
