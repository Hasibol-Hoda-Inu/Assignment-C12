$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 20){
            $(".back-to-top i").fadeIn()
        }else{
            $(".back-to-top i").fadeOut()
        }
    });


    $(".back-to-top i").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 800);
    });
   


    //animation scroll js
   var html_body = $('html, body');
   $('nav a').on('click', function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
           if (target.length) {
               html_body.animate({
                   scrollTop: target.offset().top - 0
               }, 1500,);
               return false;
           }
       }
   });
});