$(document).ready(function() {

  $("a.gallery").fancybox(
      {
        "padding": 20,
        "imageScale": false,
        "zoomOpacity": false,
        "zoomSpeedIn": 1000,
        "zoomSpeedOut": 1000,
        "zoomSpeedChange": 1000,
        "frameWidth": 700,
        "frameHeight": 600,
        "overlayShow": true,
        "overlayOpacity": 0.8,
        "hideOnContentClick": false,
        "centerOnScroll": false

      });

  $("a.gallery-portfolio").fancybox(
      {
        "padding": 20,
        "imageScale": false,
        "zoomOpacity": false,
        "zoomSpeedIn": 1000,
        "zoomSpeedOut": 1000,
        "zoomSpeedChange": 1000,
        "frameWidth": 700,
        "frameHeight": 600,
        "overlayShow": true,
        "overlayOpacity": 0.8,
        "hideOnContentClick": false,
        "centerOnScroll": false

      });

  $("a.work-portfolio").fancybox(
      {
        "padding": 20,
        "imageScale": false,
        "zoomOpacity": false,
        "zoomSpeedIn": 1000,
        "zoomSpeedOut": 1000,
        "zoomSpeedChange": 1000,
        "frameWidth": 700,
        "frameHeight": 600,
        "overlayShow": true,
        "overlayOpacity": 0.8,
        "hideOnContentClick": false,
        "centerOnScroll": false

      });

  $('.toggle_block-hover').click(function () {
    $('.bath_design').slideToggle();
  });

  $('.click_hover').click(function () {
    $('.services-list').slideToggle();
  });

  //Табы
  $('.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs_carousel-slide').css('display', 'block').slick('reinit');
  });

  $('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
  });

  $('.single-slide').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa fa-angle-left"></i>',
    nextArrow: '<i class="fa fa-angle-right"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  $('.tabs_carousel-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<div class="prev">Предыдущий</div>',
    nextArrow: '<div class="next">Следующий</div>'
  });

  $('.bath_work-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa fa-arrow-left"></i>',
    nextArrow: '<i class="fa fa-arrow-right"></i>'
  });

  $(document).ready(function () { // модальное окно форма обратной связи
    $('.popup-btn').click(function (event) {
      event.preventDefault();
      $('#overlay').fadeIn(400,
          function () {
            $('#modal_form')
                .css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 200);
          });
    });

    $('#modal_close, #overlay').click(function () {
      $('#modal_form')
          .animate({opacity: 0, top: '45%'}, 200,
              function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
              }
          );
    });
  });

});
