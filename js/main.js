$(function(){
	new WOW().init();
	
})

$(function() {

	// Show scroll top btn on scroll
	if ("#scroll-top".length >= 1) {
		var scrollTopBtn = $("#scroll-top");
		$(window).scroll(function() {
			$(this).scrollTop() > 200
				? scrollTopBtn.addClass("show")
				: scrollTopBtn.removeClass("show");
		});
		scrollTopBtn.click(function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");
		})
	}
});
$(function(){
    $(".user").click(function(){
		$('.left').toggleClass('open');
	})
	$('.left').click(function() {
		$('.left').removeClass('open')
	})
	$('.checkbox').change(function(){
		$('body').toggleClass('dark')
		$('.info').toggleClass('dark')
		$('.introduce__text').toggleClass('dark')
	})
})
$(function(){
    var mySwiper = new Swiper('.swiper-container', {
		
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 1500,
		},
		loop: true,
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  })
})
