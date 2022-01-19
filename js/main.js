 $(document).ready(function(){
    var mobile = $('#mobile');
    var close = $('#mobclose'); 
    var pdf_open = $('#pdf_open')
    var pdf = $('.pdf')
    var pdf_visible = $('#pdf_visible')
    var pdf_close = $('#pdf_close')
    var hidden_article = $('.hidden-article')

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
    pdf_open.on("click", function() {
      event.preventDefault();
      pdf.addClass('pdf_active');
      pdf_open.addClass('pdf_unactive');
      pdf_close.addClass('hidden-article');
     
    });
    pdf_close.on("click", function() {
      event.preventDefault();
      pdf.removeClass('pdf_active');
      pdf_open.removeClass('pdf_unactive');
      pdf_close.removeClass('hidden-article')
    });
  });