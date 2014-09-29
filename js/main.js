(function() {
    $(document).ready(function() {
	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
	}
	
	$("nav li").each(function() {
	    var $temp;
	    if ($(this).children().prop("href") == window.location.href) {
		if (($temp = $(this).parent().parent()).is("li")) {
		    $temp.addClass("current");
		} else {
		    $(this).children().addClass("current");
		}
	    }
	});

	$(window).on("scroll", function() {
	    if (!isScrolledIntoView(".slogan")) {
		$("nav li").addClass("shrunk");
		$(".book").addClass("shrunk");
		$(".social").addClass("shrunk");
		$(".totop").addClass("exist");
	    } else {
		$("nav li").removeClass("shrunk");
		$(".book").removeClass("shrunk");
		$(".social").removeClass("shrunk");
		$(".totop").removeClass("exist");
	    }	    
	});
    });
})();
