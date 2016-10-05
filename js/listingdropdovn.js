
$(document).ready(function(){

$('.js-search-specialty-dropdown').click(function(event){
var clicked = $(event.target);	
var list = $(this).find(".ui-gs-viewport");
if (!$(this).hasClass('ui-gs-open')){
$(this).addClass('ui-gs-open');
$(list).css({'left':'0'});
}
else{
$(this).removeClass('ui-gs-open');
$(list).css({'left':'-999em'});
}

});
$('.js-search-insurance-dropdown').click(function(event){
var clicked = $(event.target);	
var list = $(this).find(".ui-gs-viewport");
if (!$(this).hasClass('ui-gs-open')){
$(this).addClass('ui-gs-open');
$(list).css({'left':'0'});
}
else{
$(this).removeClass('ui-gs-open');
$(list).css({'left':'-999em'});
}

})
})