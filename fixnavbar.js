document.addEventListener("DOMContentLoaded", function () {
    console.log("test")
    const navbar = document.getElementById("navbar");
    const headerHeight = document.querySelector("header").clientHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= headerHeight) {
            navbar.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("fixed-nav");
        }
    });
});