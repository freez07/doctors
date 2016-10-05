/**
  * Showmap loader by Constantins Solovyov aka Source888
  *
  *
  */




$(document).ready(function(){
	
	
	$('#showmap').click(function(){
if (!($('.modal-wrapper').hasClass('showen'))){
$('.modal-wrapper').fadeIn("slow");
$('.modal-wrapper').addClass('showen');
}
else
{
$('.modal-wrapper').fadeOut("slow");
$('.modal-wrapper').removeClass('showen');
}
});
$(document).mouseup(function (e) {
    var container = $(".gmap-layer");
    if (container.has(e.target).length === 0){
       $('.modal-wrapper').fadeOut("slow");
	   $('.modal-wrapper').removeClass('showen');
    }
	});
$('#closemap').click(function(){
	$('.modal-wrapper').fadeOut("slow");
	$('.modal-wrapper').removeClass('showen');
	
});
})