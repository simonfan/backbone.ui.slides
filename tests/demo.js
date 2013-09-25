define(['backbone.ui.slides','jquery'], function(BackboneSlides, $) {

	var slides = window.slides = new BackboneSlides({
		el: $('#frame'),
		slider: $('#frame .slider')
	});

});