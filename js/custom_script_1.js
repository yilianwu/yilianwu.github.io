$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({
        'width': 'toggle'
    }, 350);
    $(".menu-overlay").fadeIn(500);
});

$(".menu-overlay").click(function(event) {
    $(".navbar-toggle").trigger("click");
    $(".menu-overlay").fadeOut(500);
});

// if ($(window).width() >= 767) {
//     $('ul.nav li.dropdown').hover(function() {
//         $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//     }, function() {
//         $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//     });

//     $('ul.nav li.dropdown-submenu').hover(function() {
//         $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//     }, function() {
//         $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//     });


//     $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
//         event.preventDefault();
//         event.stopPropagation();
//         $(this).parent().siblings().removeClass('open');
//         $(this).parent().toggleClass('open');
//         $('b', this).toggleClass("caret caret-up");
//     });
// }

// $(window).resize(function() {
//     if( $(this).width() >= 767) {
//         $('ul.nav li.dropdown').hover(function() {
//             $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
//         }, function() {
//             $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
//         });
//     }
// });

var windowWidth = $(window).width();
if (windowWidth > 767) {
    // $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     $(this).parent().siblings().removeClass('open');
    //     $(this).parent().toggleClass('open');
    //     $('b', this).toggleClass("caret caret-up");
    // });

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('ul.nav li.dropdown-submenu').hover(function() {
        $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('>.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
        // $('b', this).toggleClass("caret caret-up");
    });
}
if (windowWidth < 767) {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
        // $('b', this).toggleClass("caret caret-up");
    });
}

// $('.dropdown a').append('Some text');