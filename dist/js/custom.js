

$(document).ready(function(){

        if($("#ex12c").length){

            $("#ex12c").slider({
                id: "slider12c",
                min: 0,
                max: 900,
                range: true,
                value: [0, 900]
            });
            $("#ex12c").on("slide", function(slideEvt) {
                $("#ex12c-val").text("Price: Rs." + slideEvt.value[0] + " - Rs."+ slideEvt.value[1]);
            });
        }
        if($("#ex12d").length){
            $("#ex12d").slider({
                id: "slider12d",
                min: 1,
                max: 34,
                range: true,
                value: [1, 34]
            });
            $("#ex12d").on("slide", function(slideEvt) {
                $("#ex12d-val").text("Range: " + slideEvt.value[0] + " - "+ slideEvt.value[1]);
            });
        }
        if($("#ex12e").length){

            $("#ex12e").slider({
                id: "slider12e",
                min: 1,
                max: 36,
                range: true,
                value: [1, 36]
            });
            $("#ex12e").on("slide", function(slideEvt) {
                $("#ex12e-val").text("Range: " + slideEvt.value[0] + " - "+ slideEvt.value[1]);
            });
        }
        if($("#ex12f").length){

            $("#ex12f").slider({
                id: "slider12f",
                min: 1,
                max: 35,
                range: true,
                value: [1, 35]
            });
            $("#ex12f").on("slide", function(slideEvt) {
                $("#ex12f-val").text("Range: " + slideEvt.value[0] + " - "+ slideEvt.value[1]);
            });
        }
        if($("#ex12g").length){

            $("#ex12g").slider({
                id: "slider12g",
                min: 1,
                max: 35,
                range: true,
                value: [1, 35]
            });
            $("#ex12g").on("slide", function(slideEvt) {
                $("#ex12g-val").text("Range: " + slideEvt.value[0] + " - "+ slideEvt.value[1]);
            });
        }






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
                    if(target.children("i").hasClass("fa-plus")){
                        target.children("i").removeClass("fa-plus");
                        target.children("i").addClass("fa-minus");
                    }
                     else{
                        target.children("i").addClass("fa-plus");
                        target.children("i").removeClass("fa-minus");
                    }
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
        $(".left-bar h3").on("click",function(event){
            var target = $(event.target);

            if(target.next().is(":visible"))
            {
                $(this).children("i").removeClass("fa-minus");
                $(this).children("i").addClass("fa-plus");
            }
            else{
                $(this).children("i").removeClass("fa-plus");
                $(this).children("i").addClass("fa-minus");
            }

            $(this).next("div").slideToggle();
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

