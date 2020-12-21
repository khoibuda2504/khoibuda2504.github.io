
$(function(){
    $(".mobile-menu-btn").click(function(){
		$('.main-menu').toggleClass('open');
		$('.overlay').toggleClass('open')
		$(this).toggleClass('active');
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
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  })
	  
	  
})


$(function(){
	$('.overlay').click(function(){
		$('.main-menu').removeClass('open');
		$(this).removeClass('open');
		$('.mobile-menu-btn').removeClass('active')
		
	})
})
$(function(){
	$('.dropdown1').each(function(){
		$(this).find('> a').append("<i></i>");
		$(this).find('i').addClass("fa fa-caret-down");
		$(this).find('i').click(function(){
			console.log('CLICKED;')
		})
	})
})
$(function(){
	$('.dropdown2').each(function(){
		$(this).find('> a').append("<i></i>");
		$(this).find('i').addClass("fa fa-caret-right");
	})
})
   
$(function(){
	$(".main-menu a").click(function(){
		console.log('Clicked!')
		$(this).find('i').toggleClass('active');
		$(this).parent().toggleClass('open');
	})  
})
$(function(){
	$(".main-menu i").click(function(){
		console.log('Clicked!!!!')
		
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
})