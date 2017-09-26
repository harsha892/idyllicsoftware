  "use strict";

  /*----------------------------------------------------------------------*/
  /* =  Number Counter
  /*----------------------------------------------------------------------*/

      var timer = $('.timer');
        if(timer.length) {
          timer.appear(function () {
            timer.countTo();
          })
      }

  /*----------------------------------------------------------------------*/
  /* =  portfolio isotope
  /*----------------------------------------------------------------------*/

          var $container = $('.projects-list');
          $container.imagesLoaded( function(){
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
          });

          // Isotope Filter
          $('.isotope-filters a').on('click', function() {
              $('.isotope-filters .selected').removeClass('selected');
              $(this).addClass('selected');
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      duration: 750,
                      easing: 'linear',
                      queue: false
                  }
              });
              return false;
          });

  // /*----------------------------------------------------------------------*/
  // /* =  Owl carousell
  // /*----------------------------------------------------------------------*/

 // Home Slider
	 $('#slider').owlCarousel({
        margin:0,
		    loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        smartSpeed:800,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

// Fullwidth carousel

	 $('.fullwidth-carousel').owlCarousel({
        margin:0,
		    loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        smartSpeed:800,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

  //  Item carousel
  $('.small-item-carousel').owlCarousel({
        margin:0,
        dots:true,
        autoplay:false,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            450:{
                items:2
            },
            678:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

  /* ---------------------------------------------------------------------- */
  /*  Contact Map 2
  /* ---------------------------------------------------------------------- */
      var gmMapDiv = $("#map-section");

      if (gmMapDiv.length) {
              var gmCenterAddress = gmMapDiv.attr("data-address");
              var gmMarkerAddress = gmMapDiv.attr("data-address");

              gmMapDiv.gmap3({
              action: "init",
              marker: {
                  address: gmMarkerAddress,
                  options: {
                      icon: "images/others/marker.png"
                  }
              },
              map: {
                  options: {
                      zoom: 14,
                      zoomControl: true,
                      zoomControlOptions: {
                          style: google.maps.ZoomControlStyle.SMALL
                      },
                      mapTypeControl: false,
                      scaleControl: false,
                      scrollwheel: false,
                      streetViewControl: false,
                      draggable: true,
                  }
              }
          });
      }

  /*----------------------------------------------------------------------*/
  /* =  contact-form-validate
  /*----------------------------------------------------------------------*/
        if($('.contact-form').length){
          $('.contact-form').validate({ // initialize the plugin
            rules: {
              name: {
                required: true
              },
              email: {
                required: true,
                email: true
              },
              message: {
                required: true
              },
              subject: {
                required: true
              }
            },
            submitHandler: function (form) {
              // sending value with ajax request
              $.post($(form).attr('action'), $(form).serialize(), function (response) {
                $(form).parent('div').append(response);
                $(form).find('input[type="text"]').val('');
                $(form).find('input[type="email"]').val('');
                $(form).find('textarea').val('');
              });
              return false;
            }
          });
        }

  /*----------------------------------------------------------------------*/
  /* =  Accordion
  /*----------------------------------------------------------------------*/

        var allPanels = $(".accordion > dd").hide();

        allPanels.first().slideDown("easeOutExpo");

        $(".accordion > dt > a").first().addClass("active");

            $(".accordion > dt > a").on('click', function(){

            var current = $(this).parent().next("dd");
            $(".accordion > dt > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;
        });

  /*----------------------------------------------------------------------*/
  /* =  Fancy Box
  /*----------------------------------------------------------------------*/

    $(".prettyPhoto").prettyPhoto({
        show_title: false,
        slideshow: 3000,
        overlay_gallery: true,
        social_tools: ''
      });

      /*----------------------------------------------------------------------*/
      /* =  scroll to top
      /*----------------------------------------------------------------------*/
        $(window).scroll(function(){
          if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
          } else {
            $('.scrollToTop').fadeOut();
          }
        });

        $('.scrollToTop').on('click', function() {
          $('html, body').animate({scrollTop : 0},800);
          return false;
        });
