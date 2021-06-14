$('.menu-burger').click(function () {
	$('.menu-body').toggleClass('show')
});

$('#up, #up2').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});

const helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

$('.reviews-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
	$('.reviews-info span').text(helpers.addZeros(currentSlide + 1));
});
$('.reviews-slider').slick({
	dots: false,
	infinite: false,
	nextArrow: $('.reviews-arrows__next'),
	prevArrow: $('.reviews-arrows__prev'),
});

$('.cases-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
	$('.cases-info span').text(helpers.addZeros(currentSlide + 1));
});
$('.cases-slider').slick({
	dots: false,
	infinite: false,
	nextArrow: $('.cases-arrows__next'),
	prevArrow: $('.cases-arrows__prev')
});

$('.cases-slider__for').slick({
	dots: false,
	arrows: false,
	slidesToShow: 1,
	asNavFor: '.cases-slider__nav'
});
$('.cases-slider__nav').slick({
	dots: false,
	slidesToShow: 3,
	focusOnSelect: true,
	asNavFor: '.cases-slider__for',
	nextArrow: $('.cases-slider__control-next'),
	prevArrow: $('.cases-slider__control-prev')
});

$('.btnMore').click(function () {
	$('.more').toggleClass('open');
	// $('.btnMore').css('display', 'none');
	if ($(this).text() === "читать далее") {
		$(this).text("скрыть");
		$('.topText').css('mask-image', 'none');
	} else {
		$(this).text("читать далее");
		$('.topText').css('mask-image', '');
	}
});

$('.cases-arrows').click(function () {
	$('.more').removeClass('open');
	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		$('.btnMore').text("читать далее").css('display', 'block');
	}
});

