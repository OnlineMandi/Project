

$(document).ready(function(){

       $("body").on("mouseover","text.headline,text.headline1",function(){
           $(this).css("fill","url('#mypattern1') none");
       });
       $("body").on("mouseout","text.headline,text.headline1",function(){
           $(this).css("fill","url('#mypattern') none");
       });

        function stopnav(){
            var high = $(".header").height();
            $("<div class='header-bg'></div>").css("height",high).insertBefore(".header");

            var hight = $(".sub-menu").height();
            $(".right-list").css("height",hight);
        }
        stopnav();



        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            nextText: '',
            prevText: ''
        });
        $('.bxslider-sellers').bxSlider({
            minSlides: 1,
            maxSlides: 4,
            moveSlides:1,
            slideWidth: 262,
            slideMargin: 30,
            auto: true,
            autoControls: true,
            pager:false
        });
        $('.bxslider-sellers-sd').bxSlider({
             minSlides: 1,
             maxSlides: 4,
             moveSlides:1,
             slideWidth: 262,
             slideMargin: 30,
             auto: true,
             autoControls: true,
             pager:false
         });

        $(".main-ul>li").hover(function(){
            $(this).children(".sub-menu").stop(true,false).fadeIn().css("top","100%");

        },function(){
            $(this).children(".sub-menu").stop(true,false).fadeOut().css("top","150%");

        });

        $(".sub-menu-men>.left-list>li").on("mouseover",function(){
            $(".sub-menu-men>.left-list>li").removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $(".sub-menu-men>.right-list>div").hide();
            $(".sub-menu-men>.right-list>div:eq('"+index+"')").fadeIn();
        });

        $(".sub-menu-women>.left-list>li").on("mouseover",function(){
            $(".sub-menu-women>.left-list>li").removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $(".sub-menu-women>.right-list>div").hide();
            $(".sub-menu-women>.right-list>div:eq('"+index+"')").fadeIn();
        });


});

