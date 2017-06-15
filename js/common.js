$(function() {


    // SLICK

    $('.single-item').slick({
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    // centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // arrows: false,
                    // centerMode: true,
                    // centerPadding: '5px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: true,
        slidesToShow: 3,
        variableWidth: true,
        // respondTo: 'slider',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    infinite: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    infinite: true,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.responsive').slick({
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        adaptiveHeight: true,
        slidesToShow: 4,
        variableWidth: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });





    // FANCYBOX

    $("[data-fancybox]").fancybox({
        // Options will go here
    });


    $("#test").on('click', function() {

        $.fancybox.open([
            {
                src  : '../img/6new-large.jpg',
                opts : {
                    // caption : 'First caption'
                }
            },
            {
                src  : '../img/160-large.jpg',
                opts : {
                    // caption : 'First caption'
                }
            },
            {
                src  : '../img/7new-large.jpg',
                opts : {
                    // caption : 'Second caption'
                }
            }
        ], {
            loop : true,
            hash : "test"
        });

    });


    // $("#test-feedback-video").on('click', function() {
    //
    //     $.fancybox.open([
    //         {
    //             src  : '../img/ВАНЯVIDEO.mp4',
    //             opts : {
    //                 // caption : 'First caption'
    //             }
    //         },
    //         {
    //             src  : '../img/160-large.jpg',
    //             opts : {
    //                 // caption : 'First caption'
    //             }
    //         },
    //         {
    //             src  : '../img/7new-large.jpg',
    //             opts : {
    //                 // caption : 'Second caption'
    //             }
    //         }
    //     ], {
    //         loop : true,
    //         hash : "test"
    //     });
    // });

    // PLAY VIDEO


    var controls = {
        video: $(".bottom-video"),
        playpause: $(".playpause")
    };
    var video = controls.video[0];
    controls.playpause.click(function(){
            video.play();
            $(this).remove();
    });


    // OPEN BLOCK section ELSE

    $('.else-item-wrap .else-item-txt').hide();
    $a = $('.else-item-wrap a');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
    });


    $('.else-item, .else-item-2').click(function(){
        $('.else-item, .else-item-2').toggleClass('active');
    });



    // SELECT

    $('select').selectize({
        create: true,
    });



});
