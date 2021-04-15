var mob_x = 1;

function main_mob_func(num){
  mob_x+=num;
  if(mob_x == 2){
    $(".set").show();
    $(".main-cam").hide();
    $(".cond").hide();
    $(".cir-1").css("color", "white");
    $(".cir-3").css("color", "white");
    $(".cir-2").css("color", "#00EAF0");
    $("#mob-desc-title").html('СИСТЕМЫ КОНТРОЛЯ ДОСТУПА');
    $("#mob-desc-txt1").html('ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ СОТРУДНИКОВ');
    $("#mob-desc-txt2").html('И ПОСЕТИТЕЛЕЙ ОБЪЕКТА УЖЕ ЧЕРЕЗ 3 ДНЯ');
  }
  if(mob_x == 3){
    $(".cond").show();
    $(".set").hide();
    $(".main-cam").hide();
    $(".cir-2").css("color", "white");
    $(".cir-1").css("color", "white");
    $(".cir-3").css("color", "#00EAF0");
    $("#mob-desc-title").html('МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ');
    $("#mob-desc-txt1").html('ПРОФЕССИОНАЛЬНАЯ УСТАНОВКА ОБОРУДОВАНИЯ, А ТАКЖЕ');
    $("#mob-desc-txt2").html('КАЖДЫЕ 3 МЕСЯЦА ДИАГНОСТИКА И ПРОВЕРКА СИСТЕМ');
  }
  if(mob_x == 4){
    mob_x = 1;
    $(".main-cam").show();
    $(".cond").hide();
    $(".set").hide();
    $(".cir-3").css("color", "white");
    $(".cir-2").css("color", "white");
    $(".cir-1").css("color", "#00EAF0");
    $("#mob-desc-title").html('СИСТЕМЫ ДЛЯ БЕЗОПАСНОСТИ');
    $("#mob-desc-txt1").html('ЗАЩИТА ОТ ВЗЛОМОВ И ГРАБЕЖЕЙ «ПОД КЛЮЧ»');
    $("#mob-desc-txt2").html('С ГАРАНТИЕЙ НА ОБОРУДОВАНИЕ ОТ 2 ЛЕТ');
  }
  if(mob_x == -1 || mob_x == 0){
    mob_x = 3;
    $(".cond").show();
    $(".set").hide();
    $(".main-cam").hide();
    $(".cir-1").css("color", "white");
    $(".cir-3").css("color", "#00EAF0");
    $(".cir-2").css("color", "white");
    $("#mob-desc-title").html('МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ');
    $("#mob-desc-txt1").html('ПРОФЕССИОНАЛЬНАЯ УСТАНОВКА ОБОРУДОВАНИЯ, А ТАКЖЕ');
    $("#mob-desc-txt2").html('КАЖДЫЕ 3 МЕСЯЦА ДИАГНОСТИКА И ПРОВЕРКА СИСТЕМ');
  }
  if(mob_x == 1){
    $(".main-cam").show();
    $(".cond").hide(); 
    $(".set").hide();
    $(".cir-2").css("color", "white");
    $(".cir-3").css("color", "white");
    $(".cir-1").css("color", "#00EAF0");
    $("#mob-desc-title").html('СИСТЕМЫ ДЛЯ БЕЗОПАСНОСТИ');
    $("#mob-desc-txt1").html('ЗАЩИТА ОТ ВЗЛОМОВ И ГРАБЕЖЕЙ «ПОД КЛЮЧ»');
    $("#mob-desc-txt2").html('С ГАРАНТИЕЙ НА ОБОРУДОВАНИЕ ОТ 2 ЛЕТ');
  }
}

$('#mob-btn-1').click(function(){
  $("#mob-main-text").html('Системы охранной сигнализации');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-2').click(function(){
  $("#mob-main-text").html('text2');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-3').click(function(){
  $("#mob-main-text").html('text3');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-4').click(function(){
  $("#mob-main-text").html('text4');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-5').click(function(){
  $("#mob-main-text").html('text5');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-6').click(function(){
  $("#mob-main-text").html('text6');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-7').click(function(){
  $("#mob-main-text").html('text7');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-8').click(function(){
  $("#mob-main-text").html('text8');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$('#mob-btn-9').click(function(){
  $("#mob-main-text").html('text9');
  $("#mob-after-text").html('24 часа, 7 дней в неделю обеспечивают безопасность дома и контроль за бизнес-объектами, предотвращая кражи и взломы');
});

$(".mob-image").click(function(){
  $(this).toggle();
  $("#mob-videott").toggle();
  document.getElementById("mob-videott").play();
});