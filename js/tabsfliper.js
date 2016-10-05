



$(document).ready(function(){
// make all tabs unactive
$('.boxes-item').each(function(){
$(this).removeClass('active');
});
// make first tab title active
$('.boxes-item.first').addClass('active');
		
// show first tab
$('.search-first-block').fadeIn(500);
$('.search-first-block').css({'postion':'relative'});
// scroll listner
$(window).scroll(function(){
	var topScroll = window.pageYOffset;
	var stopBlock = $('#stopblock').offset().top;
	var docheight = $(document).height();
	if (topScroll >= (stopBlock-150)){
		
		
		setTimeout(function(){
			$('.search-second-block').fadeIn(500);
	
			$('.search-first-block').fadeOut(10);
	
			$('.search-third-block').fadeOut(10);
			$('.search-second-block').css({'postion':'relative'});
			$('.boxes-item').each(function(){
				$(this).removeClass('active');
			});
			$('.boxes-item.second').addClass('active');
			
			
		}, 4000);
		setTimeout(function(){
			$('.search-third-block').fadeIn(500);
	
			$('.search-first-block').fadeOut(10);
	
			$('.search-second-block').fadeOut(10);
			$('.search-third-block').css({'postion':'relative'});
			$('.boxes-item').each(function(){
				$(this).removeClass('active');
			});
			$('.boxes-item.third').addClass('active');
			
			$('#stopblock').remove();
		}, 8000);
		
		
		
	};

});

	
	$('.boxes-item.first').click(function(){
		$('.boxes-item').each(function(){
				$(this).removeClass('active');
		});
		$('.boxes-item.first').addClass('active');
		$('.search-first-block').fadeIn(500);
		
		$('.search-second-block').fadeOut(10);
		
		$('.search-third-block').fadeOut(10);
		
		$('.search-first-block').css({'postion':'relative'});
	}); 
	$('.boxes-item.second').click(function(){
	$('.boxes-item').each(function(){
			$(this).removeClass('active');
	});
	$('.boxes-item.second').addClass('active');
	$('.search-second-block').fadeIn(500);
	
	$('.search-first-block').fadeOut(10);
	
	$('.search-third-block').fadeOut(10);
	
	$('.search-second-block').css({'postion':'relative'});
		
	}); 
	$('.boxes-item.third').click(function(){
	$('.boxes-item').each(function(){
			$(this).removeClass('active');
	});
	$('.boxes-item.third').addClass('active');
	$('.search-third-block').fadeIn(500);
	
	$('.search-first-block').fadeOut(10);
	
	$('.search-second-block').fadeOut(10);
	
	$('.search-third-block').css({'postion':'relative'});
		
	});
	
	

});
