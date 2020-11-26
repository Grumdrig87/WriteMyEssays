jQuery(document).ready(function($){    
    if (jQuery('[data-readmore]').length > 0) {
      jQuery('[data-readmore]').readmore({
        collapsedHeight: 313,
        moreLink: '<a href="#">Read more</a>'
      });
    }
    
    $('[data-nav] > ul >li').hover(function(){
        $(this).each(function(){
          $('[data-nav] li').toggleClass('transp');
        });
        $(this).removeClass('transp');
      });
        //tabs
      $('[data-can]').on('click', function() {
          $(this).addClass('active').siblings().removeClass('active')
            .closest('.can__wrap').find('ul.can__list').removeClass('active').eq($(this).index()).addClass('active');
          }); 
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