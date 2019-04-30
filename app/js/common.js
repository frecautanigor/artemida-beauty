$( document ).ready(function() {

	// Browse files
	$('.chooseFile').bind('change', function () {
		var filename = $(".chooseFile").val();
		if (/^\s*$/.test(filename)) {
			$(".file-upload").removeClass('active');
			$(".noFile").text("JS Imaginea nu a fost selectată"); 
		}
		else {
			$(".file-upload").addClass('active');
			$(".noFile").text(filename.replace("C:\\fakepath\\", "")); 
		}
	});

	// Select block
	$('select').each(function () {

		var $this = $(this),
			numberOfOptions = $(this).children('option').length;

		$this.addClass('s-hidden');

		$this.wrap('<div class="select"></div>');

		$this.after('<div class="styledSelect"></div>');

		var $styledSelect = $this.next('div.styledSelect');

		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.styledSelect.active').each(function () {
				$(this).removeClass('active').next('ul.options').hide();
			});
			$(this).toggleClass('active').next('ul.options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

	// Aside panel
	$('.aside__button').click(function() {
		var aside = $('#'+ $(this).attr('data-aside'));
		aside.toggleClass('show');
		if (aside.hasClass('show')) {
		  $(this).text('X');}
		else {
		  $(this).text('☰');
		}
	  });

	// hamburger
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
		forEach(hamburgers, function(hamburger) {
			hamburger.addEventListener("click", function() {
				this.classList.toggle("is-active");
			}, false);
		});
	}

	//hamburger click show nav
	$('.hamburger').click(function() {
		$( ".links" ).toggleClass( "show");
		$('nav').toggleClass("active");
	});

	//add bg for nav on scrolling
	$(function() {
		var nav = $('.sticky');
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();

			if (scroll >= 400) {
				nav.removeClass('transparent').addClass("dark");
			}
			else {
				nav.removeClass("dark").addClass('transparent');

        	}
	    });
	});

	// footer__partners slick
	$('.footer__partners').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
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

	// btn back to top
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	// validator
	$( "#form-call" ).validate({
		rules: {
		// no quoting necessary
			name: {
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			name: {
				required:"Cîmp Obligatoriu",
				minlength: "Minim 5 caractere !"
			},
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},                                           
		},
	});

	$( "#newsletter__form" ).validate({
		rules: {
			mail: {
				required: true,
				email: true,
			},
		},
		messages: {
			mail: {
				required:"Mail Obligatoriu",
				email: "Mail invalid"
			},
		},
	});

	$( "#services__form-1" ).validate({
		rules: {
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
		},
	});

	$( "#services__form-2" ).validate({
		rules: {
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
		},
	});

	$( "#services__form-3" ).validate({
		rules: {
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
		},
	});

	$( "#services__form-4" ).validate({
		rules: {
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
		},
	});

	$( "#services__form-5" ).validate({
		rules: {
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
		},
		messages: {
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
		},
	});

	$( "#schelduling__form" ).validate({
		rules: {
			message: {
					required: true,
					minlength: 10
			},
			name: {
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
			mail: {
				required: true,
				email: true,
			},
		},
		messages: {
			message: {
					required:"Cîmp Obligatoriu",
					minlength: 10
			},
			name: {
				required:"Cîmp Obligatoriu",
				minlength: "Minim 5 caractere !"
			},
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
			mail: {
				required:"Mail Obligatoriu",
				email: "Mail invalid"
			},
		},
	});

	$( "#testimonial__form" ).validate({
		rules: {
			message: {
				required: true,
				minlength: 10
			},
			name: {
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
			choseFile: {
				required: true,
			},
		},
		messages: {
			message: {
					required:"Cîmp Obligatoriu",
					minlength: 10
			},
			name: {
				required:"Cîmp Obligatoriu",
				minlength: "Minim 5 caractere !"
			},
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
			choseFile: {
				required: "Alege imaginea."
			}
		},
	});

	$( "#career__form" ).validate({
		rules: {
			message: {
				required: true,
				minlength: 10
			},
			name: {
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				digits: true,
				minlength: 9
			},
			mail: {
				required: true,
				email: true,
			},
		},
		messages: {
			message: {
				required:"Cîmp Obligatoriu",
				minlength: "Minim 10 caractere"
			},
			name: {
				required:"Cîmp Obligatoriu",
				minlength: "Minim 5 caractere !"
			},
			phone: {
				required: "Cîmp Obligatoriu",
				digits: "Doar cifre",
				minlength: "Minim 9 cifre !",
			},
			mail: {
				required:"Mail Obligatoriu",
				email: "Mail invalid"
			},
		},
	});

	// preloader
	$(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(2000).fadeOut('slow');
    });

	// cookies
	$(function () {
	$('.cookie-popup').firstVisitPopup({
	  cookieName : 'homepage',
	  showAgainSelector: '#show-message'
	 });
	});

	// smoth scroll
	$(document).ready(function() {
		try {
			$.browserSelector();
			if ($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
		} catch (err) {};
	});

});