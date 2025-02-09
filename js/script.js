document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("main-options-menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
