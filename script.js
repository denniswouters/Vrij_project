$(document).scroll(function () {
var x = $(this).scrollLeft();
if ((x > 1800) && (x < 2400)) {
	$('img#tekstwolkje').fadeIn();
  }  else {
	$('img#tekstwolkje').fadeOut();
  } 
});