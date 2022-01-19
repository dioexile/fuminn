$(document).ready(function() {
    jQuery(function(n) {
        var o = n("#up");
        n(window).scroll(function() {
            o["fade" + (1 < n(this).scrollTop() ? "In" : "Out")](200)
        }), $("#up").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 300)
        })
    })
});