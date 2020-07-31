document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // menu
    document.querySelector(".burger").addEventListener('click', event => {
        openMenu(event.target);
    });
    document.querySelector(".sidebar-overlay").addEventListener('click', event => {
        openMenu(event.target);
    });
    function openMenu(el) {
        document.querySelector(".burger").classList.toggle("open");
        document.querySelector(".topmenu").classList.toggle("open");
        document.querySelector(".sidebar-overlay").classList.toggle("open");
    }
}

// window.onload = function () {
//     ready();
// };