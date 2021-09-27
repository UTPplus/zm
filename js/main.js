$(document).ready(function() {

    $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    var win = $(this); //this = window

    function forMobileMenu() {
        $('.hdr__sidebar__menu .main').append($('.hdr__top__left .logo'))
        $('.hdr__sidebar__menu .main').append($('.hdr__top__left .sell_and_buy_block'))
        $('.hdr__sidebar__menu .main').append($('.hdr__bottom__left ul'))
        $('.hdr__sidebar__menu .main').append($('.hdr__top__right a.phone'))
        $('.hdr__sidebar__menu .main').append($('.hdr__top__right .language'))
        $('.hdr__top').remove()
        $('.hdr__bottom__left').remove()
    }

    if (win.width() < 1024) {

        $(document).on('click', '.hamburger', function() {
            $('header').addClass('active')
        })

        $('body').click(function(e) {
            if (!$(e.target).is('.hamburger *,.hamburger,.hdr__sidebar__menu .main,.hdr__sidebar__menu .main *')) {
                $('header').removeClass('active')
            }
        })

        $(window).on('resize', function() {
            forMobileMenu()
        });

        forMobileMenu()

        $(document).on('click', '.ftr__top .toggle_ftr', function() {
            $(this).toggleClass('active')
            $(this).next().slideToggle()
        })
    }

    $('body').css({
        'paddingTop': $('header').height()
    })

    const swiper = new Swiper('.installment__apply .swiper-container', {
        loop: true,
        speed: 800,
        // effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 50,
        autoplay: {
            delay: 10000,
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        // direction: 'vertical',
        speed: 500,
        loop: false,
        spaceBetween: 20,
        slidesPerView: 6,
        // centeredSlides: true,
        freeMode: true,
        // simulateTouch: false,
        navigation: {
            prevEl: '.thumb__swiper .prev__btn',
            nextEl: '.thumb__swiper .next__btn'
        },
        touchratio: 0,
        watchSlidesProgress: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            767: {
                slidesPerView: 5,
                spaceBetween: 10
            },
            // when window width is >= 1200px
            1024: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1400: {
                slidesPerView: 5
            }
        }
    });

    var galleryTop = new Swiper('.gallery-top', {
        // direction: 'vertical',
        slidesPerView: 1,
        // effect: 'fade',
        loop: false,
        speed: 500,
        spaceBetween: 0,
        thumbs: {
            swiper: galleryThumbs
        },
        autoplay: {
            delay: 5000,
        },
        autoplayDisableOnInteraction: false,
        navigation: {
            prevEl: '.thumb__swiper .prev__btn',
            nextEl: '.thumb__swiper .next__btn'
        }
    });
});