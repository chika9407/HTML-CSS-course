$(function(){
		$('.main-slider').slick({
		 dots: true,
		 infinite: false,
		 speed: 300,
		 responsive: [
		   {
		     breakpoint: 1024,
		     settings: {
		       infinite: true,
		       dots: true
		     }
		   },
		   {
		     breakpoint: 600,
		     settings: {
		       dots: false
		     }
		   },
		   {
		     breakpoint: 480,
		     settings: {
		       dots: false
		     }
		    }
		]
	});
});