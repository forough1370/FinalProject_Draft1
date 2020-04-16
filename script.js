$(document).ready(function() {

	console.log('script loaded!');

/*		$('.home').on('click',function(e) {

			$('.column-two').toggle();
			$(this).toggleClass('class1')
		 });
		console.log

});*/

	$('.column-one').click(function(){
		$('.column-two').toggle();

	});

	$('.section-one').click(function(){
		$('.column-three').toggle();
	});

	$('.section-design-theory').click(function(){
		$('.column-four').toggle();

	});

	$('.column-four').click(function(){
		$('.column-five').toggle();

	});

	$('.column-five').click(function(){
		$('.two-column-text').toggle();

	});


})