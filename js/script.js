$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer", "Web Developer", "App Programmer"],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false

    });


});