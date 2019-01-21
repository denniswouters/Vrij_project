// Hieronder zeg ik dat wanneer het personage tussen de 1800 en 2400 pixels zit, een wolk moet laten zien.
$(document).scroll(function () {
var x = $(this).scrollLeft();
if ((x > 3400) && (x < 4000)) {
	$('img#tekstwolkje, #tekstinwolkje').fadeIn();
  }  else {
	$('img#tekstwolkje, #tekstinwolkje').fadeOut();
  } 
});
