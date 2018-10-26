$(document).ready(function() {

    $('.main_btna, a[href="#sheldure"], .main_btn').on('click', function() {
        $('.overlay').fadeToggle('900');
        $(".modal").slideDown(500);
    });
    $('button:eq(0)').on('click', function() {
        $(".modal").slideUp(500);
        $('.overlay').fadeToggle(1300);
    });


});