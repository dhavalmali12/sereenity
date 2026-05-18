$(document).ready(function() {

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });
});
const swiper = new Swiper('.testimonials__swiper', {
    slidesPerView: 3,
    spaceBetween: 90,
    loop: true,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            enabled: false,
            spaceBetween: 0,
        },


        768: {
            slidesPerView: 2,
            spaceBetween: 130,

        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 120,
        }

    }

});

const newswiper = new Swiper('.space-talk-swiper', {
    slidesPerView: 1,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    on: {
        init: function() {
            runCounter(this);
        },
        slideChangeTransitionEnd: function() {
            runCounter(this);
        }
    }
});

function runCounter() {
    const counter = $('.swiper-slide-active .counter');

    counter.text(0);
    counter.text(counter.data('count')).counterUp({
        delay: 20,
        time: 3000
    });
}


// this code is scrolltottop btn
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#scrolltopbtn').addClass('show');
    } else {
        $('#scrolltopbtn').removeClass('show');
    }

});

$('#scrolltopbtn').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});
$(document).ready(function() {
    $('.counter-card-2').counterUp({
        delay: 20,
        time: 3000
    });
});
$(document).ready(function() {
    $(".accordion-triggler").click(function() {

        $(".accordion-detail").slideUp(300);
        $(".accordion-triggler").removeClass("active");
        $(".accordion-triggler h4").removeClass("active");
        $(this).find(".accordion-detail").slideDown(300);
        $(this).addClass("active");
        $(this).find("h4").addClass("active");


    });
    $(".change").click(function() {
        $(this).toggleClass("active");
        $(".yearly-price").toggleClass("active");
        $(".monthly-price").toggleClass("active");
    });
    $(".toggle-menu").click(function() {
        $(".toggle-menu").addClass("active");
        $(".mobile-menu").addClass("active");
        $(".cross").addClass("active");
    });
    $(".cross").click(function() {
        $(".cross").removeClass("active");
        $(".mobile-menu").removeClass("active");
        $(".toggle-menu").removeClass("active");
    });

});