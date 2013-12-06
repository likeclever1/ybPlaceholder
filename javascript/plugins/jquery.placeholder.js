/*
	Custom placeholder jQuery plugin for compabolity placeholder in lte ie9;
	by likeclever1@gmail.com;
	https://github.com/likeclever1/ybPlaceholder
	usage:
	$('your input-text').ybPlaceholder({
		delay: 'time'
	});

	example:
	$('input[type="text"]').ybPlaceholder({
		delay: 50
	});
 */

;(function($, undefined) {
	
	"use strict"
	
	$.fn.ybPlaceholder = function(options) {
		
		if(!this.length) {
			return
		}

		var settings = $.extend( {
			'delay' : 40
		}, options);

		return this.each(function() {
			var that = $(this);
			var text = that.attr('placeholder');
			
			var wrapper = $('<div></div>', {
				'class' : 'placeholder-overlay'
			});

			var label = $('<span></span>', {
				'text' :  text,
				'class' : 'placeholder-overlay-label' 
			});

			that.wrap(wrapper);
			label.insertAfter(that);

			that.on('keydown', function(e) {

				if(label.css('display') == 'block' && e.which != 8) {
					label.hide();
				} if(!that.val().length && e.which == 8) {
					label.fadeIn(settings.delay);
				}
			});

			that.on('keyup', function() {
				if( !that.val()) {
					label.fadeIn(settings.delay);	
				}
			});

		});
	};
})(jQuery);