$(function() {


    // SLICK

    $('.single-item').slick({
        adaptiveHeight: true
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
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
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

});
