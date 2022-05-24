//preloader section start
$(window).on('load' , function() {
    $('.preloader').fadeOut(1000);
 })
 //preloader section end
 //header animation section start
 $(window).on('scroll' , function(){
    var scrollSize = $(window).scrollTop()
 
    if(scrollSize > 75){
       $('.header').addClass('active_menu')
    }
    else {
       $('.header').removeClass('active_menu') 
    }
  })
//header animation section end
//banner slider start
$('.banner_slider').slick({
    prevArrow:false,
    nextArrow:false,
    dots:true,
    dotsClass:'banner_slider_dot',
    speed:500,
  });
//banner slider end
//back to top arrow start

$(function () {

    $(window).on('scroll', function () {
 
       var scrollSize = $(window).scrollTop()
 
       if (scrollSize > 600) {
          $('#backToTop').css({
             bottom: '40px',
             opacity:1
          });
       } else {
          $('#backToTop').css({
             bottom: '500px',
             opacity:0
          });
       }
    })

    $('#backToTop').on('click', function () {
        $('html, body').animate({
           scrollTop:0,
        },1000)
     })
})
new VenoBox({
   spinner:'grid',
   spinColor:'orange',
   titleattr:'title',
   titlePosition:	'top',
});
 //back to top arrow end
