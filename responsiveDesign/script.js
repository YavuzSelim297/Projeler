function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    var burger = document.getElementById("hamburger");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}