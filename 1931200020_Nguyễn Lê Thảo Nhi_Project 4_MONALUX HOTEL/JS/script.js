// Mobile Menu Button
$(".gach").click(function() {
    $(".mobile-menu-container").show();
});

//Close Button & move to particular page
$(".closeBtn, .menu a").click(function() {
    $(".mobile-menu-container").hide();
});

// back-to-top Button
jQuery(document).ready(function(){
	jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 150) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });
    jQuery('#back-to-top').click(function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});