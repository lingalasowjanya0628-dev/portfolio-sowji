```javascript
alert("Welcome to Sowjanya's Portfolio!");

document.addEventListener("DOMContentLoaded", function () {

    var links = document.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("You clicked: " + this.textContent.trim());

        });

    });

});
```
