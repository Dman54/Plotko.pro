var slideIndex2, width, slider2_width = 800, slider3_width = 700;
width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// console.log(width);
window.addEventListener('resize', windowresize);
function windowresize() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // location.reload();
}

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // console.log(width);

    // slider3
    var slides = document.querySelectorAll(".slider3 .slider-item");
    var slideIndex = 1;
    document.querySelector(".slider3 .prev").addEventListener('click', event => {
        plusSlides(-1);
    })
    document.querySelector(".slider3 .next").addEventListener('click', event => {
        plusSlides(1);
    })
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.marginRight = "0";
            slides[i].style.order = "0";
        }
        slides[slideIndex - 1].style.display = "block";
        if (width > slider3_width) {
            slides[slideIndex - 1].style.marginRight = "30px";
            if (n == slides.length || n == 0) {
                slides[0].style.display = "block";
                slides[0].style.order = "1";
            } else {
                slides[slideIndex].style.display = "block";
            }
        }
    }

    // slider2
    var slides2 = document.querySelectorAll(".slider2 .review-item");
    document.querySelector(".slider2 .prev").addEventListener('click', event => {
        plusSlides2(-1);
    })
    document.querySelector(".slider2 .next").addEventListener('click', event => {
        plusSlides2(1);
    })
    slideIndex2 = 1;
    showSlides2(slideIndex2);
    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }
    function showSlides2(n) {
        var i;
        if (n > slides2.length) {
            slideIndex2 = 1
        }
        if (n < 1) {
            slideIndex2 = slides2.length
        }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
            slides2[i].style.marginRight = "0";
            slides2[i].style.order = "0";
        }
        slides2[slideIndex2 - 1].style.display = "block";
        if (width > slider2_width) {
            slides2[slideIndex2 - 1].style.marginRight = "30px";
            if (n == slides2.length || n == 0) {
                slides2[0].style.display = "block";
                slides2[0].style.order = "1";
            } else {
                slides2[slideIndex2].style.display = "block";
            }
        }
    }

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