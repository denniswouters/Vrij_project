// Hieronder zeg ik dat wanneer het personage tussen de 1800 en 2400 pixels zit, een wolk moet laten zien.
$(document).scroll(function () {
var x = $(this).scrollLeft();
if ((x > 1800) && (x < 2400)) {
	$('img#tekstwolkje').fadeIn();
  }  else {
	$('img#tekstwolkje').fadeOut();
  } 
});
