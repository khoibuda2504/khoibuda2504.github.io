$(function(){
	new WOW().init();
	$('#light').lightGallery();
	$('.gallery-img').lightGallery();
})

$(function() {

	// Fixed menu on scroll
	var header = $("header");
	if(header.length >=  1){
		var sticky = header.offset().top;
		$(window).scroll(function(){
			if($(this).scrollTop() > sticky){
				header.addClass("fixed");
			}
			else{
				header.removeClass("fixed");
			}
		});
	}

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
    $(".mobile-menu-btn").click(function(){
		$('.header__nav').toggleClass('open');
		$('.header__overlay').toggleClass('open');
		$(this).toggleClass('active');
	})
	$('.header__overlay').click(function(){
		$(this).toggleClass('open');
		$('.header__nav').toggleClass('open');
		$(".mobile-menu-btn").toggleClass('active');
	})
    $(".history-btn").click(function(){
		$('.history__list').toggleClass('open');
		$('.history__overlay').toggleClass('open');
		$(this).toggleClass('active');
	})
    $(".history__overlay").click(function(){
		$('.history__list').toggleClass('open');
		$('.history-btn').toggleClass('active');
		$(this).toggleClass('open');
	})
	$('.banner__slide').click(function() {
		$('.banner__tag').toggleClass('slide');
		$(this).find('i').toggleClass('active');
		$(this).toggleClass('slide');
	})
})
$(function(){
    var mySwiper = new Swiper('.swiper-container', {
		
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
		speed: 1500,
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 1500,
		},
		loop: true,
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  })
	
	var swiperV = new Swiper('.swiper-container-v', {
		pagination: '.swiper-pagination-v',
		speed: 1500,
		loop: true,
		autoplay: {
			delay: 1500,
		},
		direction: 'vertical',
		//effect: 'cube',
		thumbs: {
			swiper: {
			  el: '.swiper-container-thumbs',
			  slidesPerView: 5,
			}
		}
	});
	
})


$(function(){
	const pics = $('.detail__pics > img')
	pics.each((index,pic) => {
		pic.addEventListener('click', () => {
			const src = pic.getAttribute("src");
			document.getElementById('mypic').src = src;
		})
	})
})


$(function(){
	$('.dropdown1').each(function(){
		$(this).find('> a').after("<i></i>");
		$(this).find('i').addClass("fa fa-caret-down arrow1");
		$(this).find('i').click(function(){
			$(this).toggleClass('active');
			$(this).parent().toggleClass("open");
		})
	})
})
$(function(){
	$('.dropdown2').each(function(){
		$(this).find('> a').after("<i></i>");
		$(this).find('i').addClass("fa fa-caret-right arrow2");
		$(this).find('i').click(function(){
			$(this).toggleClass('active');
			$(this).parent().toggleClass("open")
		})
	})
})

$(function(){
	$(".tutorial").each(function(){
		var tabs = $(this);
		tabs.find(".tutorial__item").first().addClass("current");
		tabs.find(".register__content").first().addClass("current");
		tabs.find(".tutorial__item").click(function(){
			var tab_id = $(this).attr('data-tab');
			console.log(tab_id);
			tabs.find(".tutorial__item").removeClass("current");
			tabs.find(".register__content").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	$(".product-wrapper").each(function(){
		var tabs = $(this);
		tabs.find(".product-L__card").first().addClass("current");
		tabs.find(".product-R__cards").first().addClass("current");
		tabs.find(".product-L__card").click(function(){
			var tab_id = $(this).attr('data-tab');
			if (tab_id === "#domestic") {
				$('#change1').attr('src','./images/change1.png');
				$('#change2').attr('src','./images/home-L-icon2.png');
			}
			if (tab_id === "#export") {
				$('#change2').attr('src','./images/change2.png');
				$('#change1').attr('src','./images/home-L-icon1.png')
			}
			tabs.find(".product-L__card").removeClass("current");
			tabs.find(".product-R__cards").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	$(".product-R").each(function(){
		var tabs = $(this);
		tabs.find(".product__list li").first().addClass("current");
		tabs.find(".product-R__cards").first().addClass("current");
		tabs.find(".product__list li").click(function(){
			var tab_id = $(this).attr('data-tab');
			tabs.find(".product__list li").removeClass("current");
			tabs.find(".product-R__cards").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	$(".branch").each(function(){
		var tabs = $(this);
		tabs.find(".product-L__card").first().addClass("current");
		tabs.find(".branch-R").first().addClass("current");
		tabs.find(".product-L__card").click(function(){
			var tab_id = $(this).attr('data-tab');
			if (tab_id === "#bentre") {
				$('#change3').attr('src','./images/group1-about.png');
				$('#change4').attr('src','./images/group2-about.png');
			}
			if (tab_id === "#hanoi") {
				$('#change4').attr('src','./images/v2.png');
				$('#change3').attr('src','./images/v1.png')
			}
			tabs.find(".product-L__card").removeClass("current");
			tabs.find(".branch-R").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	$(".organ").each(function(){
		var tabs = $(this);
		tabs.find(".organ__card").first().addClass("current");
		tabs.find(".organ__custom").first().addClass("current");
		tabs.find(".organ__card").click(function(){
			var tab_id = $(this).attr('data-tab');
			tabs.find(".organ__card").removeClass("current");
			tabs.find(".organ__custom").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	$(".history").each(function(){
		var tabs = $(this);
		tabs.find(".history__list li").first().addClass("current");
		tabs.find(".history__inner").first().addClass("current");
		tabs.find(".history__list li").click(function(){
			var tab_id = $(this).attr('data-tab');
			tabs.find(".history__list li").removeClass("current");
			tabs.find(".history__inner").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
	
})