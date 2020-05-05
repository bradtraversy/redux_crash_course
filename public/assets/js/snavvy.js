(function($){
	$.fn.snavvy = function(options){

		var settings = $.extend({
            width: 100,
            location: 'right',
            parent: 'body',
            close: 'true',
            menuItems: null
        }, options);

		$.snavvy = new Object();
		$.snavvy.i = new Object();

		this.addClass('selector');

		$.snavvy.i.selector = this.selector + "-menu";
		$.snavvy.i.selectorName = $.snavvy.i.selector.substring(1);

		// append snavvy to parent element. Default: body //
		$(settings.parent).append("<div class='snavvy' id=" + $.snavvy.i.selectorName + "></div>");

		// open nav on click //
		this.click( function() {
			// check to see if nav is already open, if not, open it //
			if (!$(this).hasClass('open')){
				$.snavvy.i.selectorName = this.id + "-menu";

				$('#' + $.snavvy.i.selectorName).css(settings.location, 0);
				$(this).addClass('open');
			}

			// otherwise, close it //
			else{
				closeSnavvy('#' + $.snavvy.i.selectorName);
				$(this).removeClass('open');
			}
        });

        // hides snavvy //
        function closeSnavvy(selection){
        	// check settings to determine how to close nav //
        	if(settings.location == "left" || settings.location == "right"){
        		$(selection).css(settings.location, - settings.width + '%');
        	}

        	if(settings.location == "top" || settings.location == "bottom"){
        		getHeight = $(selection).outerHeight();
        		$(selection).css(settings.location, - getHeight);
        	}

        	$('.selector').removeClass('open');
        }

        return this.each( function() {
        	// hide close button (defaults to true) //
		    if (settings.close == "true"){
		    	$('#' + $.snavvy.i.selectorName).append("<div id='close-snavvy' class='fa fa-times'></div>");

		    	// close snavvy with close button //
		        $('#' + $.snavvy.i.selectorName + ' ' + '#close-snavvy').click( function(){
		        	closeSnavvy('#' + $.snavvy.i.selectorName);
		        });
		    }

		    // declare menu items //
		    if (settings.menuItems){
		    	$( '#' + $.snavvy.i.selectorName ).append( $( settings.menuItems ) );
		    }

		    if ( settings.width ) {
		        $('#' + $.snavvy.i.selectorName).css('width', settings.width + '%');
		    }

		    if ( settings.location == "left" || settings.location == "right") {
		        $('#' + $.snavvy.i.selectorName).css(settings.location, - settings.width + '%');
		    }

		    if ( settings.location == 'top' || settings.location == 'bottom') {
		    	getHeight = $('#' + $.snavvy.i.selectorName).outerHeight();
		        $('#' + $.snavvy.i.selectorName).css(settings.location, - getHeight);
		    }

		    // if user sets a parent //
			if (settings.parent != 'body'){
				$(settings.parent).addClass('snavvy-container');
				$('.snavvy-container').parent().css('position', 'relative');
				$('#' + $.snavvy.i.selectorName).addClass('has-container');
			}

			else if(settings.parent == 'body' && settings.location == 'left' || settings.location == 'right'){
				$('#' + $.snavvy.i.selectorName).addClass('snavvy-fullscreen');
			}
		});
	}
}(jQuery));