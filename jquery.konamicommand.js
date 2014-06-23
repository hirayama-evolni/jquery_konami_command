(function($){
	"use strict";

	var callbacks = [];

	// register callbacks.
	$.fn.konami = function(f){
		if(!f) return this;

		this.each(function(){
			callbacks.push((function(elm, f){
				return function(){
					f.call(elm);
				};
			})(this, f));
		});

		return this;
	};

	var sequence = [
		38, 38, // up, up,
		40, 40, // down, down,
		37, 39, // left, right,
		37, 39, // left, right,
		66, 65  // "b", "a"
	];

	var current = 0;

	$(function(){
		$(window).on("keydown", function(e){
			if(e.which === sequence[current]){
				// increment the index
				current++;

				if(current === sequence.length){
					current = 0;

					$.each(callbacks, function(){
						(function(dis){
							window.setTimeout(function(){
								dis.call(dis);
							}, 0);
						})(this);
					});
				}
			} else {
				// rollback the index
				current = 0;
			}
		});
	});
})(jQuery);
