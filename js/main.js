jQuery(document).ready(function($){    
    if (jQuery('[data-readmore]').length > 0) {
      jQuery('[data-readmore]').readmore({
        collapsedHeight: 313,
        moreLink: '<a href="#">Read more</a>'
      });
    }
    if (jQuery('[data-readmoref]').length > 0) {
      jQuery('[data-readmoref]').readmore({
        collapsedHeight: 189,
        moreLink: '<a href="#">Read more</a>'
      });
    }
    if (jQuery('[data-readmoret]').length > 0) {
      jQuery('[data-readmoret]').readmore({
        collapsedHeight: 380,
        moreLink: '<a href="#">Read more</a>'
      });
    }
    //nav
    if ($(window).width() > 993 ) {
      $('[data-nav] > ul >li').hover(function(){
        $(this).each(function(){
          $('[data-nav] li').toggleClass('transp');
        });
        $(this).removeClass('transp');
      });
      var menuChild = $('[data-nav] > ul >li.menu-item-has-children');

      $(menuChild).hover(function(){
        $('body').toggleClass('open');
      });
    }
    if ($(window).width() < 993 ) {
      $('[data-nav] .menu-item-has-children > a').click( function(){
        return false;
      })
    }
    if ($(window).width() < 769 ) {
      $('.footer__title').click( function(){
        $(this).parent().find('ul').toggleClass('open');
      })
    }
      // fixed header
      var body = jQuery('body');
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 40) {
              body.addClass("header_fixed");
          } else {
              body.removeClass("header_fixed");
          }
      });

        //tabs
      $('[data-can]').on('click', function() {
          $(this).addClass('active').siblings().removeClass('active')
            .closest('.can__wrap').find('ul.can__list').removeClass('active').eq($(this).index()).addClass('active');
          }); 
    // team
    $('[data-team]').click(function(){
      $(this).toggleClass('open');
      $(this).find('.team__title').toggleClass('open');
      $(this).find('p').slideToggle(300);
    })
    //slider
    if (jQuery('[data-writers]').length > 0) {
      $('[data-writers]').slick({
        dots: true,
        speed: 300,
        slidesToShow: 2,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }
        },
        ]
    });
    }
    if (jQuery('[data-talk]').length > 0) {
      $('[data-talk]').slick({
        dots: true,
        appendDots: $('[data-line]'),
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        variableWidth: true
    });
    }
    var sliderItemsNum = $('[data-talk]').find('.slick-slide').not('.slick-cloned').length;
    var dotWidth = $('[data-THelp]').width() / sliderItemsNum;
    $('[data-line] ul li').css({'width': dotWidth});

    // faq
    if (jQuery('[data-faq]').length > 0) {
      $('[data-faq]').click(function(){
        $(this).find('.faq__title').toggleClass('open');
        $(this).find('p').slideToggle(300);
      })
    }
    // burger

    $('[data-burger]').click(function(){
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
    });

    //cookies

    $(function() {
      // Проверяем запись в куках о посещении
      // Если запись есть - ничего не происходит
         if (!$.cookie('hideModal')) {
      // если cookie не установлено появится окно
      // с задержкой 5 секунд
        var delay_popup = 1000;
        setTimeout("document.querySelector('[data-cookies]').style.display='inline-block'", delay_popup);
         }
         $.cookie('hideModal', true, {
       // Время хранения cookie в днях
        expires: 1,
        path: '/'
       });
    });
     
    // Закрытие полосы cookie
     
     
    $('.cookies__btn').click(function(){
        $('[data-cookies]').fadeOut();
    });
})