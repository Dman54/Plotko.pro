var slideIndex2, width, slider2_width = 800;
width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// console.log(width);
window.addEventListener('resize', windowresize);
function windowresize() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // location.reload();
}

var materials_menu_wrapper = document.querySelector('.materials-menu-wrapper');
var materials_menu = document.querySelector('.materials-menu');
const cost_prev = document.querySelector('.cost-prev');
const cost_next = document.querySelector('.cost-next')
var deltaWheel = 60;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // console.log(width);

    const _R = document.querySelector('[type=range]');
    document.documentElement.classList.add('js');
    _R.addEventListener('input', e => {
        _R.style.setProperty('--val', +_R.value);
    }, false);

    function checkarrows() {
        if (materials_menu_wrapper.scrollLeft > 0) {
            cost_prev.style.display = "block";
        } else {
            cost_prev.style.display = "none";
        }
        if (Math.max(materials_menu_wrapper.offsetWidth, materials_menu_wrapper.clientWidth) + materials_menu_wrapper.scrollLeft < materials_menu_wrapper.scrollWidth) {
            cost_next.style.display = "block";
        } else {
            cost_next.style.display = "none";
        }
    }

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        materials_menu_wrapper.scrollLeft -= (delta * deltaWheel);
        e.preventDefault();
        checkarrows();
    }
    if (materials_menu_wrapper.addEventListener) {
        // IE9, Chrome, Safari, Opera
        materials_menu_wrapper.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        materials_menu_wrapper.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        materials_menu_wrapper.attachEvent("onmousewheel", scrollHorizontally);
    }

    cost_prev.addEventListener('click', event => {
        materials_menu_wrapper.scrollLeft -= deltaWheel;
        checkarrows();
    })

    cost_next.addEventListener('click', event => {
        materials_menu_wrapper.scrollLeft += deltaWheel;
        checkarrows();
    })

    var slides0 = document.querySelectorAll(".cur_item");
    // var slideIndex0 = 1;
    var materials_menu_els = document.querySelectorAll('.materials-menu li');
    Array.from(materials_menu_els).forEach((item, index) => {
        item.addEventListener('click', event => {
            if (item.classList.contains('active')) {
                return;
            }
            Array.from(materials_menu_els).forEach((item, index) => {
                item.classList.remove('active');
            })
            item.classList.add('active');
            Array.from(slides0).forEach((item, index) => {
                item.classList.remove('active');
            })
            slides0[index].classList.add('active');
            cur_price_low = eval(document.querySelectorAll('.cur_price_low')[index].textContent);
            cur_price_high = eval(document.querySelectorAll('.cur_price_high')[index].textContent);
            cur_price_number_low.textContent = Math.ceil(+metrag.value * cur_price_low);
            cur_price_number_high.textContent = Math.ceil(+metrag.value * cur_price_high);
        })
    })

    const metrag = document.getElementById('metrag');
    const cur_metrag = document.querySelector('.cur_metrag_number');
    var cur_price_low = eval(document.querySelectorAll('.cur_price_low')[0].textContent);
    var cur_price_high = eval(document.querySelectorAll('.cur_price_high')[0].textContent);
    var cur_price_number_low = document.querySelector('.cur_price_number_low');
    var cur_price_number_high = document.querySelector('.cur_price_number_high');
    metrag.addEventListener('change', e => {
        cur_metrag.textContent = e.target.value;
        cur_price_number_low.textContent = Math.ceil(+e.target.value * cur_price_low);
        cur_price_number_high.textContent = Math.ceil(+e.target.value * cur_price_high);
    }, false);

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
        if (width > 990) {
            return;
        }
        var maxHeight = 0;
        Array.from(document.querySelectorAll('.item-description')).forEach((item, index) => {
            // console.log(item.offsetHeight);
            if (maxHeight < item.offsetHeight) {
                maxHeight = item.offsetHeight;
            }
        });
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

window.onload = function () {
    // ready();
    if (Math.max(materials_menu_wrapper.offsetWidth, materials_menu_wrapper.clientWidth) + materials_menu_wrapper.scrollLeft < materials_menu_wrapper.scrollWidth) {
        cost_next.style.display = "block";
    } else {
        cost_next.style.display = "none";
    }
};