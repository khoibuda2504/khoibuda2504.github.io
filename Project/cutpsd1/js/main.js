
$(function(){
    $(".mobile-menu-btn").click(function(){
		$('.main-menu').toggleClass('open');
		$('.overlay').toggleClass('open')
		$(this).toggleClass('active');
    })
})

$(function(){
	$('.dropdown').each(function(){
		$(this).append("<span> <i >  </i></span>");
		$(this).find('i').addClass("fa fa-caret-down");
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
		tabs.find("li").first().addClass("current");
		tabs.find(".tab-content").first().addClass("current");
		tabs.find("li").click(function(){
			var tab_id = $(this).attr('data-tab');
			console.log(tab_id);
			tabs.find("li").removeClass("current");
			tabs.find(".tab-content").removeClass("current");
			$(this).addClass('current');
			tabs.find(tab_id).addClass('current');
		})
	})
})

$(function(){
	$(".tab-service").each(function(){
		var tabs = $(this);
		tabs.find(".other-services__item").first().addClass('active');
		tabs.find(".register").first().addClass("current");
		tabs.find(".other-services__item").click(function(){
			var tab_id = $(this).attr('data-tab');
			console.log(tab_id);
			tabs.find(".other-services__item").removeClass('active');
			tabs.find(".register").removeClass("current");
			$(this).addClass('active');
			tabs.find(tab_id).addClass('current');
		})
	})
});


function counterUp(target, duration = 5000) {
    const finalNumber = parseInt(target.getAttribute('data-counter'));
    const startTime = performance.now();
    function easeOutExpo(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime > duration) {
            target.innerText = finalNumber.toLocaleString();
        } else {
            const timeRate = (1.0 * elapsedTime) / duration
            const numberRate = easeOutExpo(timeRate)
            const currentNumber = Math.round(numberRate * finalNumber)
            target.innerText = currentNumber.toLocaleString();
            requestAnimationFrame(updateNumber)
        }
    }
    requestAnimationFrame(updateNumber)
}

if (document.querySelectorAll('.search-tracking-rightside__number').length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    counterUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px 0px 0px 0px"
        });
        document.querySelectorAll('.search-tracking-rightside__number').forEach(el => observer.observe(el));
    }