/* SHOW/HIDE BACK TO TOP BUTTON
 * ====================================================== */
jQuery(document).ready(function(){
    jQuery('.go-top').hide();
    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.go-top').fadeIn(300);
        } else {
            jQuery('.go-top').fadeOut(300);
        }
    });

    jQuery('.go-top').click(function(event){
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});
