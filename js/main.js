function headerClass() {
    var scroll = $(window).scrollTop()
    if (scroll >= 0) {
        $('header').removeClass('clearHeader').addClass('darkHeader')
    } else {
        $('header').removeClass('darkHeader').addClass('clearHeader')
    }
}
$(document).ready(function() {

    $('.myform').on('submit', function() {

        var form = $(this);
        var is_form_validate = true

        // if (form.find('input[name=name]').val() == '') {
        //     form.find('input[name=name]').addClass('error')
        //     is_form_validate = false
        // } else {
        //     form.find('input[name=name]').removeClass('error')
        // }

        // if (form.find('input[name=email]').val() == '') {
        //     form.find('input[name=email]').addClass('error')
        //     is_form_validate = false
        // } else {
        //     form.find('input[name=email]').removeClass('error')
        // }

        // if (form.find('input[name=tel]').val() == '') {
        //     form.find('input[name=tel]').addClass('error')
        //     is_form_validate = false
        // } else {
        //     form.find('input[name=tel]').removeClass('error')
        // }

        // if (form.find('textarea[name=textarea]').val() == '') {
        //     form.find('textarea[name=textarea]').addClass('error')
        //     is_form_validate = false
        // } else {
        //     form.find('textarea[name=textarea]').removeClass('error')
        // }

        if (is_form_validate) {
            $.ajax({
                url: "email.php",
                method: form.attr('method'),
                data: form.serialize(),
                success: function(result) {
                    if (result == 'success') {
                        form.find('input').val('')
                        $('.bidForm .form-group').addClass('successed')
                        setTimeout(function() {
                            $('.bidForm .form-group').addClass('second')
                        }, 3000)

                    } else {
                        alert('11')
                    }
                },
                error: function(data) {
                    alert(data)
                }
            });
        }
        return false;
    })


    headerClass()
    $('header ul li a').on('click', function() {
        $(this).parent().siblings().find('a').removeClass('active')
        $(this).addClass('active')
    })
    $('.scrolled').click(function(event) {
        if (this.hash !== '') {
            event.preventDefault()
            const hash = this.hash
            $('html, body').animate({
                    scrollTop: $(hash).offset().top - $('header').height(), // - 100 if you wish
                },
                800
            )
        }
    })


    $(window).scroll(function() {
        headerClass()
    })

    if ($(window).width() < 1299) {

        $('.menu__mobile .wrapper').append($('header a.contact__us__link'))
        $('.menu__mobile .wrapper').append($('header ul'))
        $('.menu__mobile .wrapper').append($('header a.login'))

        $('.menu__mobile li').removeClass('dropdown')
        $('.menu__mobile li div').removeClass('dropdown-menu')

        $('.menu__mobile li a.homes').removeAttr('data-toggle');


        $(document).on('click', '#hamburger', function(e) {
            $('body').addClass('open__mobile')
        })

        $(document).on('click', '.menu__mobile .homes', function(e) {
            e.preventDefault()
            $(this).next().slideToggle()
        })

        $(document).on('click', 'body', function(e) {
            if (!$(e.target).is('#hamburger *, #hamburger, .menu__mobile .wrapper, .menu__mobile .homes')) {
                $('body').removeClass('open__mobile')
            }
        })
    }
    $(document).on('click', '.animate__circle li a', function(e) {
        e.preventDefault()
        $('.animate__circle li a').removeClass('active')
        $(this).addClass('active')
        $('#token__percent').text($(this).data('percent') + '%')
    })


    var roadmap = new Swiper('.roadmap .swiper-container', {
        speed: 500,
        loop: false,
        spaceBetween: 0,
        effect: 'fade',
        // touchRatio: 0,
        slidesPerView: 1,
        clickable: true,
        navigation: {
            prevEl: '.roadmap .btn__prev',
            nextEl: '.roadmap .btn__next'
        }
    });

})

$(document).ready(function() {
    $(".button").click(function() {
        $(".dropdown a").removeClass("clicked");
        $(".dropdown a").children("span").removeClass("clicked");
        $(".arrow").toggleClass("open");
        $(".dropdown").toggleClass("open");
    });

    $(".dropdown a").click(function() {
        $(".dropdown a").removeClass("clicked");
        $(".dropdown a").children("span").removeClass("clicked");
        $(this).toggleClass("clicked");
        $(this).children("span").toggleClass("clicked");
    });
});

$(document).ready(function() {
    $(".button__reward").click(function() {
        $(".dropdown__reward  a").removeClass("clicked");
        $(".dropdown__reward  a").children("span").removeClass("clicked");
        $(".arrow__reward").toggleClass("open");
        $(".dropdown__reward ").toggleClass("open");
    });

    $(".dropdown__reward a").click(function() {
        $(".dropdown__reward  a").removeClass("clicked");
        $(".dropdown__reward a").children("span").removeClass("clicked");
        $(this).toggleClass("clicked");
        $(this).children("span").toggleClass("clicked");
    });
});

// const progressBarContainer = document.querySelector('.progress-bar__container');
// const progressBar = document.querySelector('.progress-bar');
// const progressBarText = document.querySelector('.progress-bar__text');

// const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

// let time = 0;
// let endState = 100;

// progressBarStates.forEach(state => {
//     let randomTime = Math.floor(Math.random() * 3000);
//     setTimeout(() => {
//         if (state == endState) {
//             gsap.to(progressBar, {
//                 x: `${state}%`,
//                 duration: 2,
//                 backgroundColor: '#4895ef',
//                 onComplete: () => {
//                     progressBarText.style.display = "initial";
//                     progressBarContainer.style.boxShadow = '0 0 5px #4895ef';
//                 }
//             });
//         } else {
//             gsap.to(progressBar, {
//                 x: `${state}%`,
//                 duration: 2,
//             });
//         }
//     }, randomTime + time);
//     time += randomTime;
// })

var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
    var targets = getElements(TARGET_CLASS_NAME)
    var sources = getElements(SOURCE_CLASS_NAME)
    sources.forEach(function(sourceNode) {
        var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
        sourceNode.addEventListener('click', function() {
            showTarget(targets, sourceNodeId)
        })
    })
    showTarget(targets, targetIdToShow)
}

function getElements(type) {
    return [].slice.call(document.querySelectorAll('.' + type)).sort(function(targetNode1, targetNode2) {
        var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
        var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
        return target1Num > target2Num
    })
}

function extractId(targetNode, baseClass) {
    var currentClassIndex = targetNode.classList.length
    while (currentClassIndex--) {
        var currentClass = targetNode.classList.item(currentClassIndex)
        var maybeIdNum = parseInt(currentClass.split('-')[1])
        if (isNaN(maybeIdNum)) {
            continue
        }
        var classStrinToValidate = baseClass + '-' + maybeIdNum
        if (classStrinToValidate === currentClass) {
            return maybeIdNum
        }
    }
}

function showTarget(targets, targetId) {
    targets.forEach(function(targetNode, targetIndex) {
        var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
        if (currentTargetNodeId === targetId) {
            targetNode.classList.remove(HIDDEN_CLASS_NAME)
        } else {
            targetNode.classList.add(HIDDEN_CLASS_NAME)
        }
    })
}

main()

// $(".exploder").click(function() {

//     $(this).toggleClass("button__details");

//     $(this).children("span").toggleClass("glyphicon-search glyphicon-zoom-out");

//     $(this).closest("tr").next("tr").toggleClass("hide");

//     if ($(this).closest("tr").next("tr").hasClass("hide")) {
//         $(this).closest("tr").next("tr").children("td").slideUp();
//     } else {
//         $(this).closest("tr").next("tr").children("td").slideDown(350);
//     }
// });

$(function() {

    var polar_to_cartesian, svg_circle_arc_path, animate_arc;

    polar_to_cartesian = function(cx, cy, radius, angle) {
        var radians;
        radians = (angle - 90) * Math.PI / 180.0;
        return [Math.round((cx + (radius * Math.cos(radians))) * 100) / 100, Math.round((cy + (radius * Math.sin(radians))) * 100) / 100];
    };

    svg_circle_arc_path = function(x, y, radius, start_angle, end_angle) {
        var end_xy, start_xy;
        start_xy = polar_to_cartesian(x, y, radius, end_angle);
        end_xy = polar_to_cartesian(x, y, radius, start_angle);
        return "M " + start_xy[0] + " " + start_xy[1] + " A " + radius + " " + radius + " 0 0 0 " + end_xy[0] + " " + end_xy[1];
    };

    animate_arc = function(ratio, svg, perc) {
        var arc, center, radius, startx, starty;
        arc = svg.path('');
        center = 500;
        radius = 450;
        startx = 0;
        starty = 450;
        return Snap.animate(0, ratio, (function(val) {
            var path;
            arc.remove();
            path = svg_circle_arc_path(500, 500, 450, -90, val * 180.0 - 90);
            arc = svg.path(path);
            arc.attr({
                class: 'data-arc'
            });
            perc.text(Math.round(val * 100) + '%');
        }), Math.round(2000 * ratio), mina.easeinout);
    };

    $('.metric').each(function() {
        var ratio, svg, perc;
        ratio = $(this).data('ratio');
        svg = Snap($(this).find('svg')[0]);
        perc = $(this).find('text.percentage');
        animate_arc(ratio, svg, perc);
    });
});