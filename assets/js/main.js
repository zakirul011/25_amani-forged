(function ($) {
   "use strict";

   /*=========================
	PRELOADER JS
	===========================*/   
   $(window).on("load", function (event) {
      $(".preloader").delay(500).fadeOut(500);
   });

   
	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: false,
         asNavFor: '.hero-navs',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();

   /*=========================
	hero-navs
	===========================*/
	$('.hero-navs').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
      asNavFor: '.hero-slider',
      
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

   /*=========================
	product-slider
	===========================*/
	// On before slide change
	var productSlider = $('.product-slider')

	productSlider.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',

		responsive: [{
         breakpoint: 1200,
         settings: {
            slidesToShow: 4,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 2,
         }
      }
   ]
	});


   /*=========================
	product-2-slider
	===========================*/
	$('.product-2-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		asNavFor: '.product-2-navs',
	});
	$('.product-2-navs').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		asNavFor: '.product-2-slider',
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',

		responsive: [{
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 2,
         }
      }
   ]
	});
	
   /*=========================
	testimony-slider
	===========================*/
	$('.testimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		asNavFor: '.testimony-navs',
	});
	$('.testimony-navs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		asNavFor: '.testimony-slider',
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
	});


	// footer-slider
   $(".footer-slide").magnificPopup({
      type: "image",
		gallery: {
			enabled: true,
		},
   });

	$('.footer-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: true,
		arrows: false,

		responsive: [{
         breakpoint: 1200,
         settings: {
            slidesToShow: 6,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 5,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 4,
         }
      },
      {
         breakpoint: 480,
         settings: {
            slidesToShow: 3,
         }
      }
   ]
	});


	// feature-slider
	$('.feature-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',

		responsive: [{
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
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

		// promo-slider
		var promoSlider = $('.promo-slider')

		promoSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			var next_slick_img = $('.promo-slider-wrap .slick-current').next().css('background-image')
			var prev_slick_img = $('.promo-slider-wrap .slick-current').prev().css('background-image')
			$('.promo-slider-wrap .slick-next').css('background-image', next_slick_img);
			$('.promo-slider-wrap .slick-prev').css('background-image', prev_slick_img);
	  });
	  
	  promoSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			appendArrows: '.promo-slider-wrap',
		});

		
		// profile-slider
	  $('.profile-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
		});



		// GALLERY MASONRY
		if (window.matchMedia("(max-width: 767px)").matches) {
			$('.gallery-wrap').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
			});
	
		}else{
			$('.gallery-wrap').imagesLoaded( function() {
				$('.gallery-wrap').masonry();
				
				// skrollr
				var s = skrollr.init();
				if (s.isMobile()) {
					s.destroy();
				}
			 });
		}

	// sticky
	var wind = $(window);
	var sticky = $('.header-area');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	// reponsive menu
	const resBar = document.querySelectorAll('.menu-icon, .sidebar-wrap, sidebar-close ')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	//  custom tabs
	 tabFunc(document.querySelectorAll('.feature-links li'), document.querySelectorAll('.feature-tab'))

	 function tabFunc(tabLinks, tabs) {
		 tabLinks.forEach((link, index) => {
			 link.addEventListener('click', ()=>{
				 for (let i = 0; i < tabLinks.length; i++) {
					 tabLinks[i].classList.remove('active')
					 tabs[i].classList.remove('active')
				 }
				 link.classList.add('active')
				 tabs[index].classList.add('active')
			 })
		 });
	 }

   /*=========================
	magnificPopup image JS
	===========================*/
   $(".video-btn").magnificPopup({
      type: "iframe",
   });

   $(".pop-img-btn").magnificPopup({
      type: "image",
   });
   $(".gallery-view").magnificPopup({
      type: "image",
		gallery: {
			enabled: true,
		},
   });
   /*=========================
	SCROLL-UP JS
	===========================*/
   $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });


   // niceSelect
   $("select").niceSelect();



})(jQuery);
