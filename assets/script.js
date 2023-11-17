
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const modalBtn = document.getElementById("outline-play")

    modalBtn.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});
