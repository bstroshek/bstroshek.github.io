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
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
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

    $('.else-item-txt-xs').hide();
    $a = $('.else-item-wrap-xs a');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
    });


    // $('.else-item').click(function(){
    //     // event.preventDefault();
    //     // $('.this').hide();
    //     $(this).toggleClass('active');
    // });





    // SELECT

    $('select').selectize({
        create: true,
    });


    //Popups

    $("#get-call").fancybox({
        'scrolling'		: 'no',
        'titleShow'		: false,
        'onClosed'		: function() {
            $("#login_error").hide();
        }
    });

    // $(".success").fancybox({
    //     'scrolling'		: 'no',
    //     'titleShow'		: false,
    //     'onClosed'		: function() {
    //         $("#login_error").hide();
    //     }
    // });

    //E-mail Ajax Send from poopup
    $(".form.height-form, .form.width-form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            // $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                // $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });


    // $("#callback-phone").fancybox({
    //     'scrolling'		: 'no',
    //     'titleShow'		: false,
    //     'onClosed'		: function() {
    //         $("#login_error").hide();
    //     }
    // });



    initialize();
    function initialize() {
        var haightAshbury = new google.maps.LatLng(51.0532, 31.83);//(долгота, широта)
        var mapOptions = {
            zoom: 12,//масштаб
            center: haightAshbury,//позиционируем карту на заданые координаты
            mapTypeId: google.maps.MapTypeId.ROADMAP//задаем тип карты
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions), {
            styles:
                [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffeb3b"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]};

        google.maps.event.addListener(map, 'click', function (event) {
            addMarker(event.latLng);
        });//добавляем событие нажание мышки
    }
        //функция добавления маркера
    function addMarker(location) {

        var shadow = new google.maps.MarkerImage('/Images/roles.png',
            new google.maps.Size(37, 32),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 32)); // Теневое изображение

        var image = new google.maps.MarkerImage('/Images/smilies.png',
            new google.maps.Size(20, 32),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 32)); //изображение маркера

        marker = new google.maps.Marker({
            position: location,
            map: map,
            shadow: shadow,
            icon: image,
            title: "My title!)",
            zIndex: 999
        });//добавление маркера
    }


});

