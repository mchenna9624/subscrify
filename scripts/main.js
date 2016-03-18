var ppp = ppp || {};

ppp.common = ppp.common || {};

(function(module){
	
	var initIntro = function(){
		$("#firstSecion").width($(window).width()-30);
		$("#firstSecion").height($(window).height());		
	};
	
	module.initLoad = function(){
		$(window).resize(function(){
			initIntro();
		});
	};
	
	module.initReady = function(){
		initIntro();

		$(document).on("scroll", function(){
			var menu = $('#secondSection');
			var origOffsetY = menu.offset().top;		
			if ($(window).scrollTop() >= origOffsetY - 60) {
				$('.fixedNav').addClass('sticky');
			} else {
				$('.fixedNav').removeClass('sticky');
			}			
		});		
	};

	

})(ppp.common);



$(window).load(function(){
	ppp.common.initLoad();
});

$(document).ready(function(){
	ppp.common.initReady();
});


