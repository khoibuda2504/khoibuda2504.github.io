$(function(){
    $(".mobile-menu-btn").click(function(){
        $('.main-menu').addClass('open');
        $(this).addClass('active');
    })
    $('.main-menu').click(function(){
        $(this).removeClass('open');
        $('.mobile-menu-btn').removeClass('active')
    })
})