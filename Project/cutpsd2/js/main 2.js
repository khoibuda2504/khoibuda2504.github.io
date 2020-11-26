
$(function(){
    $(".mobile-menu-btn").click(function(){
		$('.main-menu').toggleClass('open');
		$('.overlay').toggleClass('open')
		$(this).toggleClass('active');
	})
})

$(function(){
	$('.dropdown1').each(function(){
		$(this).find('> a').append("<i></i>");
		$(this).find('i').addClass("fa fa-caret-down");
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
		$(this).find('i').toggleClass('active');
		$(this).parent().toggleClass('open');
	})  
})
$(function(){
	$(".dropdown a").click(function(){
		$(this).find('i').toggleClass('active');
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