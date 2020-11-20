
$(function(){
    $(".mobile-menu-btn").click(function(){
		$('.main-menu').toggleClass('open');
		$('.overlay').toggleClass('open')
		$(this).toggleClass('active');
    })
})

$(function(){
			$(".main-menu span").click(function(){
				$(this).toggleClass('active');
				$(this).parent().toggleClass('open');
			})  
})


$(function(){
	$(".search-tracking-leftside").each(function(){
		var tabs = $(this);
		tabs.find(".search-tracking-leftside__header li").first().addClass("current");
		tabs.find(".search-tracking-leftside__header li").click(function(){
			var tab_id = $(this).attr('data-tab');
			tabs.find(".search-tracking-leftside__header li").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
})

$(function(){
	$(".other-services__list").each(function(){
		var tabs = $(this);
		tabs.find(".other-services__item").first().addClass('active');
		tabs.find(".other-services__item").click(function(){
			var tab_id = $(this).attr('data-tab');
			tabs.find(".other-services__item").removeClass('active');
			$(this).addClass('active');
			tabs.find(tab_id).addClass('active');
		})
	})
})
