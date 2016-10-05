$(document).ready(function(){
$(window).scroll(function(){
var scrolltop = $('#appform').offset().top;
var scroll = window.pageYOffset;
var margin = scroll - scrolltop;
var girlScroll = scroll + $("#girl").outerHeight() - 240;
var stopScroll = $('.newsletter').offset().top;
if ((scrolltop <= scroll)&&(girlScroll <= stopScroll)){
$('.hidden-xs').css({'margin-top':margin});
}})
})