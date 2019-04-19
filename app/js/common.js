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
});