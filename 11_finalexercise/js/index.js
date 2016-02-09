//NAVIGATION BAR
$("#navigation li a").hover(
        function (event) {
            $(this).siblings(".hideshow").show();
            $(this).siblings(".hideshow").css("background-color", "#808080");

        },
        function (event) {
            $(this).siblings(".hideshow").hide();
            $(this).siblings(".hideshow").css("background-color", "#fff");
        }
     );

// Ensure the DOM is ready
$(document).ready(function() {
	// Apply the cycle to the slideshow
    $('.slides').cycle({
	    fx:     'none',
	    speed:   1000,
	    timeout: 70
	});

	// Pause & play on hover
	$('.slides li').hover(function(){
		$('.slides').cycle('pause');
	}, function(){
		$('.slides').cycle('resume');
	});

  $('#name').click(function(){
    $('body').removeAttr('style');
    $('body').css('background-image', '../images/wallpaper.jpg');
    $('#main').css('height', '0%');
    $('.framecolumn').show();
  });

});
