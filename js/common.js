$(document).ready(function() {

	$('.for-nav').click(function(){
		$('.nav').toggleClass('nav-open');
		return false							
	});

	$('.nav').find('a').click(function(){
		return false							
	});	

	$(document).click(function(){
		$('.nav').removeClass('nav-open');								
	});

});


