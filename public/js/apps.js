(function ($) {
  "use strict";
  // jquery loader

  //     $(window).ready(function(){
  //         var count = 0;
  //         var counter = setInterval(function(){
  //             if(count < 101) {
  //                 $('.count').text(count + '%');
  //                 $('.loader').css('width', count + '%');
  //                 count++
  //             }
  //             else {
  //                 clearInterval (counter)
  //                 $('.section-loader').addClass('fadeOut animated');
  //                 $('.section-loader').addClass('hide-box');
  //             }

  //     }, 100)

  // })
  // page loader

  // $(window).load(function(){
  //     $('body').addClass('page-loaded');
  // })

  // live player trigger

  jQuery(window).on("load", function () {
    jQuery(".mejs__button.mejs__playpause-button.mejs__play button").trigger(
      "click"
    );
  });

  jQuery(document).ready(function ($) {
    // sticy show /hide live player

    jQuery(".close-new-btn").on("click", function () {
      $(".live-player-box").toggleClass("live-player-hide");
    });

    // menu for dropdown
    if (document.documentElement.clientWidth > 991) {
      $(".navigation-box ul li.dropdown").hover(
        function () {
          $(this)
            .children("ul.dropdown-menu")
            .stop(true, true)
            .delay(200)
            .fadeIn(500);
          jQuery(this).addClass("open");
        },
        function () {
          $(this)
            .children("ul.dropdown-menu")
            .stop(true, true)
            .delay(200)
            .fadeOut(500);
          jQuery(this).removeClass("open");
        }
      );
    }
    // home main slider

    if ($(".home-slider").length) {
      $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: "fadeOut",
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: false,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".home-slider .item").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-arrow-left"></i>',
          '<i class="lnr lnr-arrow-right"></i>',
        ],
      });
    }
    if ($(".testimonial-slider").length) {
      $(".testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".testimonial-slider .item").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
        },
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
      });
    }

    if ($(".service-slider").length) {
      $(".service-slider").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".service-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 4,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
      });
    }

    if ($(".service-slider-inner").length) {
      $(".service-slider-inner").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".service-slider-inner .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
      });
    }

    // partner slider

    if ($(".partner-slider").length) {
      $(".partner-slider").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".partner-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 2,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 3,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 6,
            nav: false,
            dots: true,
            loop: true,
          },
        },
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
      });
    }

    // sector slider

    if ($(".sector-slider").length) {
      $(".sector-slider").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".sector-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },

          1000: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    // artists slider

    if ($(".artists-slider").length) {
      $(".artists-slider").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: false,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".artists-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },

          1000: {
            items: 4,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    // artist slider

    if ($(".artist-slider-right").length) {
      $(".artist-slider-right").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 0,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".artist-slider-right .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    // prog slider

    if ($(".prog-slider-right").length) {
      $(".prog-slider-right").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 0,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".prog-slider-right .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },

          1000: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    if ($(".featured-slider").length) {
      $(".featured-slider").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".featured-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },

          1000: {
            items: 4,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    // rj slider

    if ($(".rjs-slider").length) {
      $(".rjs-slider").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".rjs-slider .items").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
            loop: true,
          },

          1000: {
            items: 6,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }

    // sector slider

    if ($(".team-slider").length) {
      $(".team-slider").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        margin: 30,
        //animateOut: 'fadeOut',
        autoplayHoverPause: true,
        singleItem: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 4000,
        //navSpeed: 500,
        dots: true,
        nav: false,
        responsiveClass: true,
        onInitialize: function (event) {
          if ($(".team-slider .team-item").length <= 1) {
            this.settings.loop = false;
          }
        },
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
            loop: true,
          },
          600: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },

          1000: {
            items: 4,
            nav: true,
            dots: false,
            loop: true,
          },
        },
        navText: [
          '<i class="lnr lnr-chevron-left"></i>',
          '<i class="lnr lnr-chevron-right"></i>',
        ],
      });
    }
  });

  /*------------------------------rel action -----------------------------*/

  jQuery("a[rel*=external]").click(function () {
    window.open(this.href);

    return false;
  });

  // jQuery(window).scroll(function() {
  //     var value = jQuery(this).scrollTop();
  //     if (value > 1000) {
  //         jQuery('body').addClass('sticky_nav');
  //         jQuery('.main-menu').addClass("fixed-top");
  //     } else {
  //         jQuery('body').removeClass('sticky_nav');
  //         jQuery('.main-menu').removeClass("fixed-top");
  //     }
  // });

  // stick header

  // jQuery(window).scroll(function() {
  //     var value = jQuery(this).scrollTop();
  //     if (value > 600) {
  //         jQuery('body').addClass('sticky_nav');
  //         jQuery('.header-main').addClass("fixed-top");
  //     } else {
  //         jQuery('body').removeClass('sticky_nav');
  //         jQuery('.header-main').removeClass("fixed-top");
  //     }
  // });

  // var s = $(".header-main");
  // var pos = s.position();
  // $(window).on('scroll', function() {
  //     var windowpos = $(window).scrollTop();
  //     if (windowpos > 344) {
  //         s.addClass("fixed-tops");
  //     } else {
  //         s.removeClass("fixed-tops");
  //     }
  // });

  // new sticky header
  if (document.documentElement.clientWidth > 991) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        $(".header").addClass("fixed-tops slideInDown animated");
      } else {
        $(".header").removeClass("fixed-tops slideInDown animated");
      }
    });
  }

  // new sticky header
  // $(document).ready(function() {

  // 	var div = $('.header-main');
  // 	var start = $(div).offset().top;

  // 	$.event.add(window, "scroll", function() {
  // 		var p = $(window).scrollTop();
  // 		$(div).css('position',((p)>start) ? 'fixed' : 'static');
  // 		$(div).css('top',((p)>start) ? '0px' : '');
  // 	});

  // });

  // Header main menu fixed
  // var stickyOffset = $('.main-menu').offset().top;

  // $(window).scroll(function(){
  //   var sticky = $('.main-menu'),
  //       scroll = $(window).scrollTop();

  //   if (scroll >= stickyOffset) sticky.addClass('is-sticky');
  //   else sticky.removeClass('is-sticky');
  // });

  // sticky cat menu for mobile
  // if (document.documentElement.clientWidth < 1025) {
  // $(window).scroll(function () {
  //     if ($(window).scrollTop() > $(".mobile-cat-menu").height()) {
  //         $(".mobile-cat-menu").addClass("fixed-top");
  //     } else {
  //         $(".mobile-cat-menu").removeClass("fixed-top");

  //     }
  // });
  // }

  // search toggle

  // $(document).ready(function() {
  //     $('.btn-search').click(function(event) {
  //         event.stopPropagation();
  //         $(".btn-search").toggleClass("close-icon");
  //         $('.search-top').css({
  //             display: 'block'

  //         });
  //     });
  //     $(".search-top").on("click", function(event) {
  //         event.stopPropagation();
  //     });
  // });

  // $(document).on("click", function() {
  //     $(".btn-search").removeClass("close-icon");
  //     $('.search-top').css({
  //         display: 'none'
  //     });
  // });

  // search open system

  // search panel

  $(document).ready(function () {
    $(".btn-search").click(function (event) {
      event.stopPropagation();
      $("body").addClass("search-panel-active");
      $(".search-panel").css({
        left: "0",
      });

      $(".search-form").addClass("fadeInUp animated");
    });

    $(".menu-close").click(function (event) {
      event.stopPropagation();
      $("body").removeClass("search-panel-active");
      $(".search-panel").css({
        left: "-100%",
      });

      $(".search-form").removeClass("fadeInUp animated");
    });
    $(".search-form").on("click", function (event) {
      event.stopPropagation();
    });

    $(document).on("click", function () {
      $("body").removeClass("search-panel-active");
      $(".search-panel").css({
        left: "-100%",
      });
    });
  });

  // slide menu

  $(document).ready(function () {
    $(".menu-toggle").click(function (event) {
      event.stopPropagation();
      $("body").addClass("overflow-hide");
      $(".primary-panel").css({
        right: "0",
      });
    });

    $(".menu-close").click(function (event) {
      event.stopPropagation();
      $("body").removeClass("overflow-hide");
      $(".primary-panel").css({
        right: "-500px",
      });
    });
    $(".primary-panel").on("click", function (event) {
      event.stopPropagation();
    });
  });

  $(document).on("click", function () {
    $("body").removeClass("overflow-hide");
    $(".primary-panel").css({
      right: "-500px",
    });
  });

  // jQuery(window).scroll(function() {
  //     var value = jQuery(this).scrollTop();
  //     if (value > 800) {
  //         jQuery('body').addClass('sticky_title');
  //         jQuery('.news-big-title').addClass("title-top");
  //     } else {
  //         jQuery('body').removeClass('sticky_title');
  //         jQuery('.news-big-title').removeClass("title-top");
  //     }
  // });

  // fixed video when scroll on desktop only
  // jQuery(window).scroll(function() {
  //     var value = jQuery(this).width();
  //     var scrollHeight = jQuery(this).scrollTop();
  //     if ((value > 1024) && (scrollHeight > 3000)) {
  //         jQuery('body').addClass('video-scrolled');
  //         jQuery('.detail-box .editor-box .embed-responsive').addClass("video-fixed");
  //         if (!jQuery('.close-vid-btn')[0]) {
  //             jQuery('.video-fixed').append('<span class="close-vid-btn lnr lnr-cross"></span>');

  //             jQuery('.close-vid-btn').on('click', function() {
  //                 // alert('Clicked');
  //                 $("body").removeClass('video-scrolled');

  //                 $('.detail-box .editor-box .embed-responsive').addClass("video-clicked");
  //                 $(this).removeClass('active');
  //             })
  //         }

  //     } else {
  //         jQuery('body').removeClass('video-scrolled');
  //         jQuery('.detail-box .editor-box .embed-responsive').removeClass("video-fixed");
  //         jQuery('.close-vid-btn').remove();
  //     }
  // });

  // fact counter

  // jQuery(document).ready(function($) {
  //     $('.counter').counterUp({
  //         delay: 10,
  //         time: 1000
  //     });
  // });

  // scrll to top
  jQuery(".scrollToTop").click(function (e) {
    "use strict";
    jQuery("html,body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    e.preventDefault();
    return false;
  });

  //scroll action button

  // $(document).scroll(function() {
  //     var y = $(this).width();
  //     if (y > 1024) {
  //         $(".upToScroll").addClass("buttonShow");
  //     } else {
  //         $(".upToScroll").removeClass("buttonShow");
  //     }

  // });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
      $(".upToScroll").addClass("buttonShow");
    } else {
      $(".upToScroll").removeClass("buttonShow");
    }
  });

  //magnific popup gallery

  // $(document).ready(function() {
  //     $('.popup-gallery').magnificPopup({
  //         delegate: 'a',
  //         type: 'image',
  //         tLoading: 'Loading image #%curr%...',
  //         mainClass: 'mfp-img-mobile',
  //         gallery: {
  //             enabled: true,
  //             navigateByImgClick: true,
  //             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  //         },
  //         image: {
  //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //             titleSrc: function(item) {
  //                 return item.el.attr('title');
  //             }
  //         }
  //     });
  // });

  // jQuery(".popup-gallery").click(function() {
  //     jQuery('body').addClass("fadeIn animated");
  // });

  // jQuery(".mfp-bg").click(function() {
  //     jQuery('body').addClass("fadeOut animated").removeClass("fadeIn animated");

  // });

  //table class

  jQuery("table")
    .addClass("table table-striped")
    .wrap("<div class='table-responsive' />");
  // embed iframe

  jQuery(".editor-box iframe").wrap(
    "<div class='embed-responsive embed-responsive-16by9' />"
  );
  jQuery(".news-break iframe").wrap(
    "<span class='embed-responsive embed-responsive-16by9' />"
  );
  jQuery(".video-detail iframe").wrap(
    "<span class='embed-responsive embed-responsive-16by9' />"
  );
  jQuery(".google-maps iframe").wrap(
    "<span class='embed-responsive embed-responsive-16by9' />"
  );
  jQuery(".featured-images iframe").wrap(
    "<span class='embed-responsive embed-responsive-16by9' />"
  );
  jQuery(".featured-videos iframe").wrap(
    "<span class='embed-responsive embed-responsive-16by9' />"
  );

  // ! function() {
  //     setTimeout(function() {
  //         $('.preloader').css({ opacity: '0' }).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
  //             $(this).hide();
  //         });
  //     }, 1000);
  // }();

  setTimeout(function () {
    $(".modalbox").addClass("modal-open animated fadeIn");
  }, 5000);

  jQuery(document).ready(function ($) {
    //     //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
    //     var MQL = 240;

    //     //primary navigation slide-in effect
    //     if ($(window).width() > MQL) {
    //         var headerHeight = $('.cd-header').height();
    //         $(window).on('scroll', {
    //                 previousTop: 0
    //             },
    //             function() {
    //                 var currentTop = $(window).scrollTop();
    //                 //check if user is scrolling up
    //                 if (currentTop < this.previousTop) {
    //                     //if scrolling up...
    //                     if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
    //                         $('.cd-header').addClass('is-visible');
    //                     } else {
    //                         $('.cd-header').removeClass('is-visible is-fixed');
    //                     }
    //                 } else {
    //                     //if scrolling down...
    //                     $('.cd-header').removeClass('is-visible');
    //                     if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
    //                 }
    //                 this.previousTop = currentTop;
    //             });
    //     }

    //open/close primary navigation
    $(".cd-primary-nav-trigger").on("click", function () {
      $(".cd-menu-icon").toggleClass("is-clicked");
      $(".cd-header").toggleClass("menu-is-open");

      //For firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
      if ($(".cd-primary-nav").hasClass("is-visible")) {
        $(".cd-primary-nav")
          .removeClass("is-visible")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $("body").removeClass("overflow-hidden");
            }
          );
      } else {
        $(".cd-primary-nav")
          .addClass("is-visible")
          .one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function () {
              $("body").addClass("overflow-hidden");
            }
          );
      }
    });
  });

  // sifaris toogle

  // jQuery('.sifaris-btn').on('click', function() {

  //     $(".sifaris").css('display', 'none');

  // })

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 1500) {
      //$(".sifaris").css('transform', 'translate(0,-50%)');
      $(".sifaris").addClass("slide-left");
    } else {
      $(".sifaris").removeClass("slide-left");
      $(".sifaris").addClass("slide-hide");
    }
  });

  // show author news

  $(function () {
    //run when the DOM is ready
    $(".author-icon").click(function () {
      $(".author-news").slideToggle();
      $(".author-icon").toggleClass("active");
    });
  });

  // parallax effects

  // if ($(window).width() > 992) {
  //     $(".parallaxie").parallaxie({
  //         speed: 0.55,
  //         offset: 0,
  //     });
  // }

  // hide slider result
  // jQuery('.close-btn').on('click', function() {
  //     $('.result-slideout').css("left", "-390px");
  //     $("body").removeClass('overflow-hidden');
  // })

  // ! function() {
  //     setTimeout(function() {
  //         $('.sticky-notice').addClass('notice-pushed fadeInUp animated', function() {
  //             $(this).show();
  //         });
  //     }, 8000);
  // }();

  // skip this

  //$('.sticky-notice').addClass("notice-pushed fadeInUp animated");

  $(function () {
    //run when the DOM is ready
    $(".close-button").click(function () {
      //use a class, since your ID gets mangled
      $(".sticky-notice").addClass("bounceOutDown animated"); //add the class to the clicked element
    });
  });

  // show filters

  // $(function() { //run when the DOM is ready
  //     $(".filter-option").click(function() { //use a class, since your ID gets mangled
  //         $('.filters').addClass("show-filter fadeInUp animated"); //add the class to the clicked element
  //     });
  // });

  // floatable form

  $(".textfield, .textarea")
    .on("focus blur", function (e) {
      $(this)
        .parents(".fieldbox")
        .toggleClass("focused", e.type === "focus" || this.value.length > 0);
    })
    .trigger("blur");

  // on scroll show

  // $(document).ready(function() {

  //     /* Every time the window is scrolled ... */
  //     $(window).scroll(function() {

  //         /* Check the location of each desired element */
  //         $('.items img').each(function(i) {

  //             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //             var bottom_of_window = $(window).scrollTop() + $(window).height();

  //             /* If the object is completely visible in the window, fade it it */
  //             if (bottom_of_window > bottom_of_object) {

  //                 $(this).animate({ 'opacity': '1' }, 500);

  //             }

  //         });

  //     });

  // });

  // hide sticky footer ad
  // jQuery('.mini-btn').on('click', function() {
  //     $('.sticky-footer-ad').toggleClass('sticky-ad-hide');

  // })

  // bichar blog position setting for mobile

  // $(document).ready(function() {

  //     var deviceWidth = jQuery(this).width();
  //     if (deviceWidth < 576) {
  //         $(".right-side .bichar-mobile").insertBefore(".section.video-section") && jQuery(".bichar-mobile, .for-mobile").wrap("<div class='right-side only-mobile' />");
  //         //$(".left-side.sif.col-md-2").insertAfter('.get-news-alert');
  //     }

  // });
  // $(document).ready(function() {

  //     var deviceWidth = jQuery(this).width();
  //     if (deviceWidth < 768) {
  //         $(".left-side.sif .sif-left").insertAfter('.get-news-alert');
  //     }
  // });

  // contact scroll

  $(".address-btn").click(function () {
    $("html, body").animate(
      { scrollTop: $("#contact-box").offset().top - 100 },
      "slow"
    );
  });

  // news ticker

  $("a.page-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 80,
        },
        1500
      );
    e.preventDefault();
  });

  // $(document).ready(function() {
  //     $('.popup-gallery').magnificPopup({
  //         delegate: 'a',
  //         type: 'image',
  //         tLoading: 'Loading image #%curr%...',
  //         mainClass: 'mfp-img-mobile',
  //         gallery: {
  //             enabled: true,
  //             navigateByImgClick: true,
  //             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  //         },
  //         image: {
  //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //             titleSrc: function(item) {
  //                 return item.el.attr('title');
  //             }
  //         }
  //     });
  // });

  // drop down click collapsed menu

  // if((document.documentElement.clientWidth < 991) && $('.navigation_box ul li.dropdown ul').length){
  // 	$('.navigation_box ul li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

  // 	//Dropdown Button
  // 	$('.navigation_box ul li.dropdown .dropdown-btn').on('click', function() {
  //         $(this).prev('ul').slideToggle(500);
  //         $('.dropdown-btn').toggleClass('active');
  // 	});

  // 	//Disable dropdown parent link
  // 	$('.navigation_box ul li.dropdown > a').on('click', function(e) {
  // 		e.preventDefault();
  // 	});
  // }

  // $ = jQuery;
  // $('.navigation_box').find("ul > li > a").on('click', function () {
  //     var nxtLink = $(this).next();
  //     var parent = $(this).parent();
  //     if ((nxtLink.is('ul')) && (nxtLink.is(':visible'))) {
  //         nxtLink.slideUp(300);
  //         parent.removeClass('active-menu');
  //         $(this).removeClass("menu-up").addClass("menu-down");
  //     }
  //     if ((nxtLink.is('ul')) && (!nxtLink.is(':visible'))) {
  //         $('.navigation_box').find('ul > li > ul:visible').slideUp(300);
  //         $('.navigation_box').find('ul > li').removeClass('active-menu');
  //         nxtLink.slideDown(300);
  //         parent.addClass('active-menu');
  //         $('.navigation_box').find('ul > li:has(ul) > a').removeClass("menu-up").addClass("menu-down");
  //         $(this).addClass("menu-up");
  //     }
  //     if (nxtLink.is('ul')) {
  //         return false;
  //     } else {
  //         return true;
  //     }
  // });

  // login option

  jQuery(".login-link").click(function () {
    jQuery(".login-box .dropdown-menu").addClass("fadeInUp animated");
  });

  // jauery marquee

  $(function () {
    $("marquee")
      .mouseover(function () {
        $(this).attr("scrollamount", 0);
      })
      .mouseout(function () {
        $(this).attr("scrollamount", 5);
      });
  });

  //wow effects

  function afterReveal(el) {
    el.addEventListener("animationend", function () {
      $(this).css({
        "animation-name": "none",
      });
    });
  }
  var wow = new WOW({
    mobile: false,
    callback: afterReveal,
  });
  wow.init();

  // scroller tabs
})(jQuery);
