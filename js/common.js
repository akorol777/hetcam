$(document).ready(function() {

	$('.for-nav').click(function(){
		$('.nav').toggleClass('nav-open');
		return false							
	});

	$('.nav').find('a').click(function(){
		return false							
	});	


	$('#for-popup2').click(function(){
		$('#popup2').toggleClass('popup-open');
		$('.overlay').toggleClass('overlay-open');
		return false							
	});

	$('.for-popup3').click(function(){
		$('#popup3').toggleClass('popup-open');
		$('.overlay').toggleClass('overlay-open');		
		return false							
	});

	$('#for-popup-video').click(function(){
		$('#popup-video').toggleClass('video-open');
			$('.overlay').toggleClass('overlay-open');	
		return false							
	});		

	$('.popup').click(function(){
		return false							
	});	

	$('.popup-video').click(function(){
		return false							
	});		

	$('.popup__close').click(function(){
		$('.popup').removeClass('popup-open');
		$('#popup-video').removeClass('video-open');
		$('.overlay').removeClass('overlay-open');														
	});

	$(document).click(function(){
		$('.nav').removeClass('nav-open');
		$('#popup2').removeClass('popup-open');
		$('#popup3').removeClass('popup-open');		
		$('#popup-video').removeClass('video-open');
		$('.overlay').removeClass('overlay-open');													
	});


});


