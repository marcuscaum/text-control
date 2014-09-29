(function( $ ) {
    $.fn.textControl = function(options) {
     
        var text = this.text();
      	var lg = text.length;

		var settings = $.extend({
            limit: 15
        }, options );

     	console.log(settings.letras);

		if(lg >= settings.letras){
			text = text.substring(0, settings.letras + 3) + "...";
			console.log(text);
		}

		return this.text(text)

     }
  
}( jQuery ));
