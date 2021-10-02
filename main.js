$(document).ready(function () {
    $('.burger-menu').click(function (event) {
        $('.burger-menu, .bg-lists').toggleClass('active');
    });

    let btnTop = $('#btn-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btnTop.addClass('show');
        }
        else {
            btnTop.removeClass('show');
        }
    });
    btnTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop:0}, '300');
    })});