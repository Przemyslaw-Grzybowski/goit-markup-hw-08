const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".menu-close");
const openMenuBtn = document.querySelector(".open-menu");

openMenuBtn.addEventListener("click", (e) => {
    menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
    menuOverlay.classList.add("d-none");
});
