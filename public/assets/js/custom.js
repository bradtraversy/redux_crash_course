

$(document).ready(function () {


    //img-wrp

    $(".img-wrapper").each(function () {
        var imageUrl = $(this).find('img').attr("src");
        $(this).find('img').css("visibility", "hidden");
        $(this).css('background-image', 'url(' + imageUrl + ')').css("background-repeat", "no-repeat").css("background-size", "cover").css("background-position", "50% 50%");
    });
    //img-wrp



    $(".insightBox a").on("click", function () {
        $(this).closest(".insightBox").children(".insightExpand").addClass("open")
    })
    $(".closeinsight").on("click", function () {
        $(this).closest(".insightExpand").removeClass("open")
    })


    $('.howitworks-slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });


});



var head__t = $(".header_in").outerHeight();
var head__t2 = $(".headerTop").outerHeight();
var head__t3 = $(".cmnBnr").scrollTop();
var head__t4 = $(".cmnBnr").outerHeight();
var head__tt = head__t3 + head__t4;


$(".headHt").css({"height": head__t});
$(".headerTop").css({"height": head__t2});



jQuery(window).scroll(function () {

    var body = jQuery("html, body");
    var threshold = head__t2;
    if (jQuery(window).scrollTop() <= threshold) {
        jQuery('header').removeClass('active');
    } else {
        jQuery('header').addClass('active');
    }


    if (jQuery(window).scrollTop() <= head__tt) {
        jQuery('.headerMain').removeClass('open');
    } else {
        jQuery('.headerMain').addClass('open');
    }


});






/* ---- particles.js config ---- */
if ($("#particles-js").length > 0) {

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 12.181158184520175,
                    "size_min": 0.1,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}


if ($("#particles-js2").length > 0) {

    particlesJS("particles-js2", {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 12.181158184520175,
                    "size_min": 0.1,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


}

if ($("#particles-js3").length > 0) {
    particlesJS("particles-js3", {
        "particles": {
            "number": {
                "value": 180,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#71c2e0"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 8.017060304327615,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 12.181158184520175,
                    "size_min": 0.1,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#71c2e0",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}



/* ---- stats.js config ---- */




