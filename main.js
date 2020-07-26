// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}

// slider
var slides = document.querySelectorAll(".slider .slider-item");
var dots = document.querySelectorAll(".dots .dot");
var slideIndex = 1;

Array.from(dots).forEach((item, index) => {
    item.addEventListener('click', event => {
        currentSlide(index + 1);
    })
})
document.querySelector(".slider .prev").addEventListener('click', event => {
    plusSlides(-1);
})
document.querySelector(".slider .next").addEventListener('click', event => {
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
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

// slider2
var slides2 = document.querySelectorAll(".slider2 .slider-item");
var slideIndex2 = 1;
document.querySelector(".slider2 .prev").addEventListener('click', event => {
    plusSlides2(-1);
})
document.querySelector(".slider2 .next").addEventListener('click', event => {
    plusSlides2(1);
})
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
    }
    slides2[slideIndex2 - 1].style.display = "flex";
}
