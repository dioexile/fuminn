$(document).ready(function(){
    var mobile = $('#mobile');
    var close = $('#mobclose'); 
  $('.toggle').on('click', function(){
    event.preventDefault();
    mobile.addClass('mobile-menu__active');
    close.on('click', function () {
      mobile.removeClass('mobile-menu__active');
    });
  });
  $("body").on("click", "a", function (event) {
          // event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    // top = top + 40;
    $('body,html').animate({scrollTop: top}, 700);
    mobile.removeClass('mobile-menu__active');
  });
  jQuery(function(n) {
    var o = n("#up");
    n(window).scroll(function() {
      o["fade" + (1 < n(this).scrollTop() ? "In" : "Out")](400)
    }), 
    $("#up").click(function() {
      $("html, body").animate({
          scrollTop: 0}, 300)
        })
    });
  });