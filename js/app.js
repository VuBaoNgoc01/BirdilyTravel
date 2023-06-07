$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 200) {
            $('.scroll-to-top').addClass("active")
        } else {
            $('.scroll-to-top').removeClass("active")
        }
    });

    $("#scroll-to-top").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
});

$('.slider-home').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false,
    autoplay: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});

$('.list-tour').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    speed: 500,
    dots: false,
    autoplay: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                rows: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                rows: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});

$('.list-cmt').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    autoplay: false,
    arrows: false,
    //prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
    //nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
});

//Active Menu

const menuChild = document.getElementById("menu-child");
const navChild = document.getElementById("nav-child");

menuChild.addEventListener("click", () => {
    menuChild.classList.toggle("active");
    navChild.classList.toggle("active");
});

//Watch Video

const btnVid = document.getElementById("btn-vid");
const boxVid = document.getElementById("box-vid");

btnVid.addEventListener("click", () => {
    btnVid.classList.toggle("active");
    boxVid.classList.toggle("active");

});


