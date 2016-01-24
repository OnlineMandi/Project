

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


        function runSlider(val){
            $('.bxslider-sellers').bxSlider({
                minSlides: 1,
                maxSlides: val,
                moveSlides:1,
                slideWidth: 262,
                slideMargin: 30,
                auto: true,
                autoControls: true,
                pager:false
            });
            $('.bxslider-sellers-sd').bxSlider({
                 minSlides: 1,
                 maxSlides: val,
                 moveSlides:1,
                 slideWidth: 262,
                 slideMargin: 30,
                 auto: true,
                 autoControls: true,
                 pager:false
             });
        }

        var winwid = $(window).width();

        if(winwid<591)
        {
            runSlider(1);
        }
        else if(winwid<768){
            runSlider(2);
        }
        else{
            runSlider(4);
        }


         if(winwid<768){

             $(".navbar-toggle").click(function(event){
                 var target = $( event.target );

                if(target.is(".collapsed"))
                {
                    $(".mobi-menu").animate({
                        left:0
                    },400);
                    $(".bg").fadeIn();
                }
                 else{
                    $(".mobi-menu").animate({
                        left:"-240px"
                    },400);
                    $(".bg").fadeOut();
                }


             });
             $(".bg").click(function(){
                 $(this).fadeOut();
                 $(".mobi-menu").animate({
                     left:"-240px"
                 },400);
                 $(".navbar-toggle").addClass("collapsed");
             });

             function handler( event ) {
                 var target = $(event.target);
                 if (target.is("a.main-li")) {
                     if(!target.parent().children("ul").is(":visible"))
                     {
                         target.parents("ul").find("ul").slideUp();
                         target.parents("ul").find("a.main-li i").addClass("fa-plus");
                         target.parents("ul").find("a.main-li i").removeClass("fa-minus");
                     }
                     target.parent().children("ul").slideToggle();

                     target.children("i").addClass("fa-p");

                     //target.parents("ul").find("a.main-li i").addClass("fa-plus");
                     //target.children("i").addClass("fa-p");


                 }
             }
             $(".sub-menu-mobi").click(handler);


         }
         else{
             $(".main-ul>li").hover(function(){
                 $(this).children(".sub-menu").stop(true,false).fadeIn().css("top","100%");

             },function(){
                 $(this).children(".sub-menu").stop(true,false).fadeOut().css("top","150%");

             });
         }








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

