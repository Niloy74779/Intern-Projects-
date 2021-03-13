$(function () {
	"use strict";

    // preloader
    $(window).on('load',function(){
      $('.praloder_main').delay(100).fadeOut(1000);
    });
    
  //	menufix starts

  var navOffset = $('.customnav').offset().top;
  $(window).scroll(function () {
      var scrolling = $(this).scrollTop();
      if (scrolling > navOffset) {
          $('.customnav').addClass('menufixed');
      } else {
          $('.customnav').removeClass('menufixed');
      }
  });

  //	menufix ends

    // search bar js
    $(".search-bar").on("click", function(){
      $(".search_box").slideDown(1000)
    })

    $(".close").on("click", function(){
        $(".search_box").slideUp(1000)
    })

    // Nav cart 

    $(".nav-cart > i").on("click", function(){
      $(".nav-cart-item").slideToggle(600)
    })
    

    // Account part

    $(".account > a").on("click", function(){
      $(".account-content").slideToggle(700)
    })

    // back to top

    $(window).scroll(function(){

      if($(window).scrollTop() > 700){
          $(".backTop").slideDown(100);
          $(".backTop").css({
              "display": "block"
          });
      }
      else( 
          $(".backTop").css({
          "display": "none"
      }))

    });

    $(".backTop").click(function() {
      $('html, body').animate({
          scrollTop:0,
      });
    });

    // Home page video part
    $('.fancybox').fancybox({
      arrows:false,
      keyboard: false,
      closeExisting: true
    });


    // Infinite Scrolling

    $('.demo').infiniteslide({
      'speed': 70,
      'direction':'left'
    });

      // Road Map slick slider

      $('.road-map-slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1, 
        arrows: true,
        dots:false, 
        centerMode: true,
        nextArrow:$('.arrow_left'),
        prevArrow:$('.arrow_right'),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 730,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
   
      });

    // Expart Part

    const tilt = $('.expart-profile').tilt({
        maxTilt: 4,
        scale:1,
    })

  // Counter js
  $('.counter_number').counterUp({
		time: 3000
	});


   // chart js\

   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [{
             label: 'BitCoin Chart',
             backgroundColor: '#6A1B4D',
             borderColor: 'rgb(255, 99, 132)',
             data: [0, 9, 5, 8, 27, 33, 40],
             defaultFontFamily: 'Latosans-serif',
         }],
     },
     options: {}
 });

 var ctx = document.getElementById('myChart2').getContext('2d');
 var chart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
       datasets: [{
           label: 'BitCoin Chart',
           backgroundColor: '#6A1B4D',
           borderColor: 'rgb(255, 99, 132)',
           data: [0, 10, 5, 2, 20, 30, 40],
           defaultFontFamily: 'Latosans-serif',
       }],
   },
   options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
 type: 'line',
 data: {
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
     datasets: [{
         label: 'BitCoin Chart',
         backgroundColor: '#6A1B4D',
         borderColor: 'rgb(255, 99, 132)',
         data: [0, 5, 4, 39, 23, 29, 37],
         defaultFontFamily: 'Latosans-serif',
     }],
 },
 options: {}
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
