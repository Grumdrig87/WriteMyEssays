jQuery(document).ready(function($){    
    $('[data-nav] > ul >li').hover(function(){
        $(this).each(function(){
          $('[data-nav] li').toggleClass('transp');
        });
        $(this).removeClass('transp');
      })

    // // faq
    // $('[data-faq]').click(function(){
    //   $(this).find('.faq__title').toggleClass('open');
    //   $(this).find('p').slideToggle(300);
    // })
    // burger

    // $('[data-burger]').click(function(){
    //   $('html').toggleClass("open");
    //   $(this).toggleClass("open");
    //   $('[data-nav]').toggleClass("open");
    //   $('body').toggleClass('open');
    // });
})