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
        // responsive: [
        // {
        //     breakpoint: 1200,
        //     settings: {
        //     slidesToShow: 2
        //     }
        // },
        // ]
    });
    }
   
    // faq
    if (jQuery('[data-faq]').length > 0) {
      $('[data-faq]').click(function(){
        $(this).find('.faq__title').toggleClass('open');
        $(this).find('p').slideToggle(300);
      })
    }
    // burger

    // $('[data-burger]').click(function(){
    //   $('html').toggleClass("open");
    //   $(this).toggleClass("open");
    //   $('[data-nav]').toggleClass("open");
    //   $('body').toggleClass('open');
    // });
})