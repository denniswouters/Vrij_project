  $(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});
	 
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#achtergrond-1').css('top',(0-(scrolled*.25))+'px');
		$('#achtergrond-2').css('top',(0-(scrolled*.4))+'px');
        $('#achtergrond-3').css('top',(0-(scrolled*.55))+'px');
	}
 
 });

 