$(function () {
	"use strict";
  
  //	menufix starts

  var navOffset = $('.menu').offset().top;
  $(window).scroll(function () {
      var scrolling = $(this).scrollTop();
      if (scrolling > navOffset) {
          $('.menu').addClass('menufixed');
      } else {
          $('.menu').removeClass('menufixed');
      }
  });

  //	menufix ends
  $('.fancybox').fancybox({
    arrows:false,
    keyboard: false,

  });


  // search bar js
    $(".search-bar").on("click", function(){
      $(".search_box").slideDown(1000)
    })

    $(".close").on("click", function(){
        $(".search_box").slideUp(1000)
    })

    // Infinite Scrolling

    $('.demo').infiniteslide({
      'speed': 70,
      'direction':'left'
    });

      // Road Map slick slider

      $('.road-map-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1, 
        arrows: true,
        dots:false, 
        centerMode: true,
        nextArrow:$('.arrow_left'),
        prevArrow:$('.arrow_right'),
   
      });

      // Road Map slick slider

      $('.partners-img').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1, 
        arrows: true,
        dots:false, 
        centerMode: true,
        nextArrow:$('.arrow_left'),
        prevArrow:$('.arrow_right'),
   
      });
      

    // team part,

    $('.one').on("click", function () {
      $('.teacher1').toggleClass('teacher-click1');
      $('.tech-button1 i').toggleClass('fas fa-times');
      $('.tech-button1 i').toggleClass('fas fa-ellipsis-h');
      $('.teacher_media1').slideToggle('slow');
  });

  $('.two').on("click", function () {
      $('.teacher2').toggleClass('teacher-click2');
      $('.tech-button2 i').toggleClass('fas fa-times');
      $('.tech-button2 i').toggleClass('fas fa-ellipsis-h');
      $('.teacher_media2').slideToggle('slow');
  });

  $('.three').on("click", function () {
      $('.teacher3').toggleClass('teacher-click3');
      $('.tech-button3 i').toggleClass('fas fa-times');
      $('.tech-button3 i').toggleClass('fas fa-ellipsis-h');
      $('.teacher_media3').slideToggle('slow');
  });


  $('.fure').on("click", function () {
      $('.teacher4').toggleClass('teacher-click4');
      $('.tech-button4 i').toggleClass('fas fa-times');
      $('.tech-button4 i').toggleClass('fas fa-ellipsis-h');
      $('.teacher_media4').slideToggle('slow');
  });

  // Counter js
  $('.counter_number').counterUp({
		time: 3000
	});






















	// pogo slider

    $('#banner').pogoSlider({
        autoplay: true,
        autoplayTimeout: 7000,
        displayProgess: true,
        preserveTargetSize: true,
        targetWidth: 1000,
        targetHeight: 450,
        responsive: true,
        generateNav: false,
      }).data('plugin_pogoSlider');
    


});    
