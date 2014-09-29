(function( $ ) {
    $.fn.textControl = function(options) {
     
        var text = this.text();
      	var lg = text.length;

		var settings = $.extend({
            limit: 15
        }, options );

     	console.log(settings.limit);

		if(lg >= settings.limit){
			text = text.substring(0, settings.limit + 3) + "...";
			console.log(text);
		}

		return this.text(text)

     }
  
}( jQuery ));
