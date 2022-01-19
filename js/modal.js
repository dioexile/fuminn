$(document).ready(function() {

    var open = $('#open');

    var close = $('#close');

    var modal = $('#modal');

    var open2 = $('#modal-phone');

    var open3 = $('#footer');

    var open4 = $('#1');

    var open7 = $('#menu-phone');

    var open5 = $('#2');

    var open6 = $('#3');

    var open8 = $('#intro-btn');

    var open9 = $('#call');

    var open10 = $('#recp');

    var open11 = $('#ispm-article1');

    var open12 = $('#serv-btn');

    let elem = document.getElementById('over');

    var open13 = $('#ispm-more');

    close.on('click', function() {
        modal.removeClass('modal_active');
        elem.style.overflow = 'visible';
    });

    open.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });


    open2.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open3.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open4.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open5.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open6.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open7.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open8.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';

    });



    open9.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });



    open10.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });


    open11.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });


    open12.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';

    });
    open13.on('click', function() {
        event.preventDefault();
        modal.addClass('modal_active');
        elem.style.overflow = 'hidden';
    });

});