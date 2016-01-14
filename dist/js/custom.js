

$(document).ready(function(){

       $("body").on("mouseover","text.headline,text.headline1",function(){
           $(this).css("fill","url('#mypattern1') none");
       });
       $("body").on("mouseout","text.headline,text.headline1",function(){
           $(this).css("fill","url('#mypattern') none");
       });


        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true,
            nextText: '',
            prevText: ''
        });
        $(".main-ul>li").hover(function(){
            $(">.sub-menu",this).stop(true,false).fadeIn().css("top","100%");

        },function(){
            $(">.sub-menu",this).stop(true,false).fadeOut(400,function(){
                $(".left-list li").removeClass("active");
                $(".left-list li:eq('0')").addClass("active");
                $(".right-list>div").hide();
                $(".right-list>div:eq('0')").fadeIn();
            }).css("top","150%");

        });
        $(".left-list li").on("mouseover",function(){
            $(".left-list li").removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $(".right-list>div").hide();
            $(".right-list>div:eq('"+index+"')").fadeIn();
        });


});

