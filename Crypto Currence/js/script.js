$(function () {
	"use strict";
  

  // search bar js
    $(".search-bar").on("click", function(){
      $(".search_box").slideDown(1000)
    })

    $(".close").on("click", function(){
        $(".search_box").slideUp(1000)
    })

    // Infinite Scrolling

    $('.demo').infiniteslide({
      'speed': 100,
      'direction':'left'
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
