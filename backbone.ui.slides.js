define(['jquery','backbone','underscore'],
function($      , Bakcbone , undef      ) {

	var SlidesView = Backbone.View.extend({

		initialize: function(options) {

			_.bindAll(this,'update');

			/**
			 * The slides wrapper element
			 */
			this.$slider = typeof options.slider === 'string' ? this.$el.find(options.slider) : options.slider;
			this.update();

			/**
			 * Listen to resize events on the window
			 */
			$(window).resize(this.update);
		},

		update: function() {
			var slideWidth = this.$el.width(),
				$slides = this.$slider.children();

			this.$slider.width(slideWidth * $slides.length);

			$slides
				// set the slides width
				.width(slideWidth)
				// and position them
				.each(function(index, slide) {
					$(slide).css({
						position: 'absolute',
						left: index * slideWidth,
					});
				});
		},

		slide: function(to) {

			var $slide = this.$slider.find(to),
				// guarantee that $slide is not null
				$slide = $slide.length === 1 ? $slide : $(this.$slider.children()[ to ]),
				slidePos = $slide.position().left;

			return this.$slider.animate({
				left: -1 * slidePos
			});
		}
	});

	return SlidesView;

});