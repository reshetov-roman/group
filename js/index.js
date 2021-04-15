$(document).ready(function () {
    $('.preloader').delay(300).fadeOut(0);
    $('form').submit(function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        var formId = $(this).attr('id');
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: data,
            beforeSend: function() {
                $(".loader").show();
                $('#' + formId).css({opacity: 0})
            },
            success: function() {
                $(".loader").hide();
                $('#' + formId).animate({
                    opacity: 0
                }, 600, function() {
                    $('#' + formId).css({visibility: 'hidden'});
                    $('.' + formId).append("<div class='thanks'>Спасибо. Ожидайте звонка.</div>")
                });
            }
        })
    });
    $(".menu-btn").click(function(){
        $(".menu-nav").slideToggle();
        $(".menu-btn").toggleClass('menu-btn_active');
    });

    $(".i_bg").click(function(){
        $('.tel2').toggleClass('active');
    });
    $("a[rel=group1]").fancybox();

    $("#b-cond").click(function(){

    });

    function bCond () {
      var image = $(".m-item");
      var title = $("#desc-title");
      var txt1 = $("#desc-txt1");
      var txt2 = $("#desc-txt2");
      image.fadeOut('fast', function () {
        // title.fadeOut();
        image.attr('src', 'img/1-block/items/cond.png');
        image.css('width', '35em');
        image.fadeIn('fast');
        title.html('&nbsp;').removeClass('type_writer_my');
        txt1.html('Профессиональная установка оборудования, а также').fadeIn(500);
        txt2.html('каждые 3 месяца диагностика и проверка систем').fadeIn(500);
        setTimeout(function () {
          title.html('Монтаж и сервисное обслуживание').addClass('type_writer_my');
        }, 100);
      });
    }

    $("#b-cam").click(function(){

    });

    function bCam () {
      var image = $(".m-item");
      var title = $("#desc-title");
      var txt1 = $("#desc-txt1");
      var txt2 = $("#desc-txt2");
      image.fadeOut('fast', function () {
        // title.fadeOut();
        image.attr('src', 'img/1-block/items/main-cam.png');
        image.css('width', '35em');
        // image.css('margin-left', '500px');
        image.fadeIn('slow');
        title.html('&nbsp;').removeClass('type_writer_my');
        txt1.html('Защита от взломов и грабежей «под ключ»').fadeIn(500);
        txt2.html('с гарантией на оборудование от 2 лет').fadeIn(500);
        setTimeout(function () {
          title.html('Системы для безопасности').addClass('type_writer_my');
        }, 100);
      });
    }

    $("#b-set").click(function(){

    });

    function bSet () {
      var image = $(".m-item");
      var title = $("#desc-title");
      var txt1 = $("#desc-txt1");
      var txt2 = $("#desc-txt2");
      image.fadeOut('fast', function () {
        // title.fadeOut();
        image.css('width', '35em');
        image.attr('src', 'img/1-block/items/nset.png');
        image.fadeIn('fast');
        title.html('&nbsp;').removeClass('type_writer_my');
        txt1.html('Обеспечение безопасности сотрудников').fadeIn(500);
        txt2.html('и посетителей объекта уже через 3 дня').fadeIn(500);
        setTimeout(function () {
          title.html('Системы контроля доступа').addClass('type_writer_my');
        }, 100);
      });
    }

    var list = document.getElementsByClassName("jblock");
    var arr = Array.prototype.slice.call(list, 0 );
    var animation = "flash"
    var keyword = "animated";
    var nn = 0;

    function animate(){
        for (var i = 0; i < 3; i++) {
            (function (i) {
                setTimeout(function () {
                    arr[i].classList.add(animation);
                    arr[i].classList.add(keyword);
                    //$("#"+arr[i].id).click();
                  if (arr[i].id == 'b-cond') {
                    bCond();
                  } else if (arr[i].id == 'b-cam') {
                    bCam();
                  } else if (arr[i].id == 'b-set') {
                    bSet();
                  }
                }, 5000*i);
            })(i);
        };

        arr.forEach(function(element) {
            element.classList.remove(animation);
            element.classList.remove(keyword);
        });
    }

    while(nn!=100){
        (function (nn) {
            setTimeout(function (){
                animate();
            }, 15000*nn);
        })(nn);
        nn++;
    };



    var fir = 0;
    var sec = 0;
    var thr = 0;

    $(document).ready(function(){
        $(".fr").click(function(){
            $(".jk").animate({
                left: "0%"
            });

            $("#first-b").css("z-index", "-1"),
                $("#first-b").animate({
                    opacity:1
                }, 0, function(){
                    $(".first-b").css("opacity", "0"),
                        $(".first-b").css("display", "block").animate({
                            opacity:1
                        })
                });
            $(".first-b").addClass("opacityIn");
            $(".second-b").addClass("fadeInRight");
            $(".third-b").addClass("fadeInRight");

            $(".first-b").removeClass("opacityOut");
            $(".second-b").removeClass("fadeOutRight");
            $(".third-b").removeClass("fadeOutRight");
            fir--;
        });

        $(".sr").click(function(){
            $(".jk").animate({
                left: "0%"
            });

            $("#second-b").css("opacity", "1");
            $("#second-b").css("z-index", "-1");
            $(".second-b").css("display", "block");
            $(".first-b").css("left", "0%");
            $(".second-b").addClass("opacityIn");
            $(".third-b").addClass("fadeInRight");

            $(".second-b").removeClass("opacityOut");
            $(".third-b").removeClass("fadeOutRight");
            sec--;
        });

        $(".first-b").click(function(){
            if(fir==0){
                $(".fr").css('display','block');
                $(".sr").css('display','none');
                $(".tr").css('display','none');

                $(".jk").animate({
                    left: "-66.66%"
                });

                $("#first-b").css("opacity", "1").animate({
                    opacity: 1
                }, 800, function(){
                    $("#first-b").css("z-index", "1111")
                });
                $("#second-b").css("opacity", "0");
                $("#third-b").css("opacity", "0");

                $(".first-b").addClass("opacityOut");
                $(".first-b").css('display','none');
                $(".second-b").addClass("fadeOutRight");
                $(".third-b").addClass("fadeOutRight");

                $(".first-b").removeClass("opacityIn");
                $(".second-b").removeClass("fadeInRight");
                $(".third-b").removeClass("fadeInRight");
                fir++;
            }
        });

        $(".second-b").click(function(){
            if(sec==0){
                $(".fr").css('display','none');
                $(".sr").css('display','block');
                $(".tr").css('display','none');

                $(".jk").animate({
                    left: "-66.66%"
                });

                $("#second-b").css("opacity", "1").animate({
                    opacity: 1
                }, 800, function(){
                    $("#second-b").css("z-index", "1111")
                });
                $("#first-b").css("opacity", "0");
                $("#third-b").css("opacity", "0");

                // $("#first-b").css("opacity", "0");
                // $("#second-b").css("opacity", "1");
                // $("#third-b").css("opacity", "0");

                $(".first-b").css("left", "-66.66%");
                $(".second-b").addClass("opacityOut");
                $(".third-b").addClass("fadeOutRight");

                $(".second-b").removeClass("opacityIn");
                $(".third-b").removeClass("fadeInRight");
                sec++;
            }
        });

        $(".tr").click(function(){
            $(".jk").animate({
                left: "0%"
            });

            $(".first-b").css("left", "0%");
            $(".second-b").css("left", "33.33%");
            $(".third-b").addClass("opacityIn");


            $(".third-b").removeClass("opacityOut");
            thr--;
        });

        $(".third-b").click(function(){
            if(thr==0){

                $(".fr").css('display','none');
                $(".sr").css('display','none');
                $(".tr").css('display','block');

                $(".jk").animate({
                    left: "-66.66%"
                });

                $("#first-b").css("opacity", "0");
                $("#second-b").css("opacity", "0");
                $("#third-b").css("opacity", "1");

                $(".first-b").css("left", "-66.66%");
                $(".second-b").css("left", "-66.66%");
                $(".third-b").addClass("opacityOut");

                $(".third-b").removeClass("opacityIn");
                thr++;
            }
        });
    });


//

    var x=0;
    var xp=0;
    var xc=1;
    var xn=2;
    var texts = [ "СКУД",
        "СИСТЕМЫ ОХРАННОЙ СИГНАЛИЗАЦИИ",
        "ВИДЕОНАБЛЮДЕНИЕ",
        "АВТОМАТИЧЕСКИЕ ВОРОТА",
        "СИСТЕМЫ ПОЖАРНОЙ СИГНАЛИЗАЦИИ",
        "ВИДЕОДОМОФОНИЯ",
        "ТУРНИКЕТЫ",
        "ШЛАГБАУМЫ",
        "МЕТАЛЛОДЕТЕКТОРЫ",
    ];
    var descriptions = ["TEXT8",
        "24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы",
        "TEXT1",
        "TEXT2",
        "TEXT3",
        "TEXT4",
        "TEXT5",
        "TEXT6",
        "TEXT7"];
    $(document).ready(function(){
        $(".up-arrow").click(function(){
            changeIcons(1);
        });

        $(".down-arrow").click(function(){
            changeIcons(-1);
        });
    });


    function changeIcons(num){
        var prevImage = $(".prev-img");
        var prevText = $(".prevText");
        var curImage = $(".cur-img");
        var curText = $(".curText");
        var nextImage = $(".next-img");
        var nextText = $(".nextText");
        var p,c,n;
        xp+=num;
        xc+=num;
        xn+=num;
        if(xp == -1){
            xp = 8;
        }
        if(xc == -1){
            xc = 8;
        }
        if(xn == -1){
            xn = 8;
        }
        if(xp == 9){
            xp = 0;
        }
        if(xc == 9){
            xc = 0;
        }
        if(xn == 9){
            xn = 0;
        }
        console.log(xp);
        console.log(xc);
        console.log(xn);
        p='img/3-block/items/logo/'+Math.abs(xp).toString()+'.png';
        c='img/3-block/items/logo/'+Math.abs(xc).toString()+'-h.png';
        n='img/3-block/items/logo/'+Math.abs(xn).toString()+'.png';
        prevImage.fadeOut('fast', function () {
            prevImage.attr('src', p);
            prevImage.fadeIn('fast');
            prevText.html(texts[xp]).fadeIn(500);
        });
        curImage.fadeOut('fast', function () {
            curImage.attr('src', c);
            curImage.fadeIn('fast');
            curText.html(texts[xc]).fadeIn(500);
        });
        nextImage.fadeOut('fast', function () {
            nextImage.attr('src', n);
            nextImage.fadeIn('fast');
            nextText.html(texts[xn]).fadeIn(500);
        });

        $(".page-number").html(xp+1+"/9");
        $(".title-3b").html(texts[xc]);
        $(".desc-3b").html(descriptions[xc]);
    }

    $(".image").click(function(){
        $(this).toggle();
        $(".videott").toggle();
        document.getElementById("videott").play();
    });

    $('.l-i-1').hover(
        function(){
            var image = $(".i-1-img");
            image.attr('src', 'img/6-block/items/borders-hover.png');
            image.css('width', '216px');
            image.css('margin-top', '-7px');
            image.css('margin-left', '-7px');
        },
        function(){
            var image = $(".i-1-img");
            image.attr('src', 'img/6-block/items/borders.png');
            image.css('width', '200px');
            image.css('margin-top', '0px');
            image.css('margin-left', '0px');
        });
    $('#quiz-btn-1').click(function(){
        $(this).toggle();
        $('#quiz-btn-2').toggle();
        $('.page-number').html('02');
        $('.modal-first-question').toggle();
        $('.modal-second-question').toggle();
    });

    $('#quiz-btn-2').click(function(){
        $(this).toggle();
        $('#quiz-btn-3').toggle();
        $('.page-number').html('03');
        $('.modal-second-question').toggle();
        $('.modal-third-question').toggle();
    });

    $('#quiz-btn-3').click(function(){
        $(this).toggle();
        $('#quiz-btn-4').toggle();
        $('.page-number').html('04');
        $('.modal-third-question').toggle();
        $('.modal-fourth-question').toggle();
    });

    $('#quiz-btn-4').click(function(){
        $(this).toggle();
        $.each($("input[name='item']:checked"), function(){
            console.log($(this).val());
        });
        $.each($("input[name='item-s']"), function(){
            console.log($(this).val());
        });
        $('#quiz-btn-1').toggle();
        $('.page-number').html('01');
        $('.modal-fourth-question').toggle();
        $('.modal-first-question').toggle();
        $('.clear-modal').val('');
        $('#clear-modal').attr("checked", false);
        var arr = [];
        $.each($("input[name='item']"), function(){
            $(this).prop('checked', false);
        });
    });

    $('.btn-close').click(function(){
        $('#quiz-btn-1').show('slow');
        $('#quiz-btn-2').hide();
        $('#quiz-btn-3').hide();
        $('#quiz-btn-4').hide();
        $('.modal-first-question').show('slow');
        $('.modal-second-question').hide();
        $('.modal-third-question').hide();
        $('.modal-fourth-question').hide();
        $('.page-number').html('01');
        $('.clear-modal').val('');
    });

    $(function(){
        $(".phone_input").mask("+7 (999) 999-9999");
    });
})

