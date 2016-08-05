//jQuery to collapse the navbar on scroll
/* $(document).scroll(function() {
		console.log('************');
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		$("#logo_ir").removeClass("logo_ir");
		$("#logo_ir").addClass("logo_ir_small");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		$("#logo_ir").addClass("logo_ir");
		$("#logo_ir").removeClass("logo_ir_small");
    }
});
 */

$(window).scroll(function() {
	scrollTop = $(window).scrollTop(),
	divOffset = $('.navbar').offset().top,
	dist = (divOffset - scrollTop);
	if (dist <= -10) {
		 $(".navbar-fixed-top").addClass("top-nav-collapse");
		$("#logo_ir").removeClass("logo_ir");
		$("#logo_ir").addClass("logo_ir_small");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		$("#logo_ir").addClass("logo_ir");
		$("#logo_ir").removeClass("logo_ir_small");
	}
});