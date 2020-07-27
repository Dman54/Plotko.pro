var slideIndex2, width, slider2_width = 800;

window.addEventListener('resize', windowresize);
function windowresize() {
    // location.reload();
}

window.onload = function () {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    console.log(width);

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
        setHeight();
    }
    function setHeight() {
        var maxHeight = 0;
        Array.from(document.querySelectorAll('.item-description')).forEach((item, index) => {
            console.log(item.offsetHeight);
            if (maxHeight < item.offsetHeight) {
                maxHeight = item.offsetHeight;
            }
        });
        if (width > 990) {
            return;
        }
        if (width > 900) {
            document.querySelector('.portfolio-block').style.marginBottom = 80 + maxHeight + 'px';
        } else if (width > 710) {
            document.querySelector('.portfolio-block').style.marginBottom = 70 + maxHeight + 'px';
        } else if (width > 520) {
            document.querySelector('.portfolio-block').style.marginBottom = 50 + maxHeight + 'px';
        } else {
            document.querySelector('.portfolio-block').style.marginBottom = -15 + maxHeight + 'px';
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
};