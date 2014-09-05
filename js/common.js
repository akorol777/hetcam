$(document).ready(function() {

	$('.for-nav').click(function(){
		$('.nav').toggleClass('nav-open');
		return false							
	});

	$('.nav').find('a').click(function(){
		return false							
	});	



	$('#for-popup1').click(function(){
		$('#popup1').toggleClass('popup-open');
		return false							
	});

	$('.popup').click(function(){
		return false							
	});		


	$(document).click(function(){
		$('.nav').removeClass('nav-open');
		$('#popup1').removeClass('popup-open');								
	});


});


