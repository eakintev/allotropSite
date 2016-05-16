jQuery(document).ready(function($) {
  
    // using sticky navbar
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "75px");
          	$('#main-menu-logo').show();
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
            $('#main-menu-logo').hide();
        }
    });

	$('#menu-link1').click(function(){
		$(this).addClass('active-menu-link');
		$('#menu-link2').removeClass('active-menu-link');
		$('#menu-link3').removeClass('active-menu-link');
		$('#about-the-game').show();
		$('#main-form-reports').hide();
		$('#google-form-bugs').hide();

		$('html, body').animate({scrollTop: $('#about-the-game').offset().top-75 }, 500);
	});
	
	$('#menu-link2').click(function(){
		$(this).addClass('active-menu-link');
		$('#menu-link1').removeClass('active-menu-link');
		$('#menu-link3').removeClass('active-menu-link');
		$('#about-the-game').hide();
		$('#main-form-reports').show();
		$('#google-form-bugs').hide();

		$('html, body').animate({scrollTop: $('#main-form-reports').offset().top-75 }, 500);
	});

	$('#menu-link3').click(function(){
		$(this).addClass('active-menu-link');
		$('#menu-link1').removeClass('active-menu-link');
		$('#menu-link2').removeClass('active-menu-link');
		$('#about-the-game').hide();
		$('#main-form-reports').hide();
		$('#google-form-bugs').show();

		$('html, body').animate({scrollTop: $('#google-form-bugs').offset().top-75 }, 500);
	});

    $('#menu-link1').mouseenter(function() {
		$(this).addClass('hover-menu-link');
   	});
   	$('#menu-link1').mouseleave(function() {
    	$(this).removeClass('hover-menu-link');
    }); 

    $('#menu-link2').mouseenter(function() {
		$(this).addClass('hover-menu-link');
   	});
   	$('#menu-link2').mouseleave(function() {
    	$(this).removeClass('hover-menu-link');
    });

    $('#menu-link3').mouseenter(function() {
		$(this).addClass('hover-menu-link');
   	});
   	$('#menu-link3').mouseleave(function() {
    	$(this).removeClass('hover-menu-link');
    }); 



    $('#submenu-link1').mouseenter(function() {
		$(this).addClass('submenu-hover');
   	});
   	$('#submenu-link1').mouseleave(function() {
    	$(this).removeClass('submenu-hover');
    }); 

   	$('#submenu-link2').mouseenter(function() {
		$(this).addClass('submenu-hover');
   	});
   	$('#submenu-link2').mouseleave(function() {
    	$(this).removeClass('submenu-hover');
    }); 

   	$('#submenu-link3').mouseenter(function() {
		$(this).addClass('submenu-hover');
   	});
   	$('#submenu-link3').mouseleave(function() {
    	$(this).removeClass('submenu-hover');
    });


   	$('#submenu-link1').click(function(){
		$('#google-form-student').show();
		$('#google-form-teacher').hide();
		$('#google-form-statistics').hide();
		$(this).addClass('submenu-active');
		$("#submenu-link2").removeClass('submenu-active');
		$("#submenu-link3").removeClass('submenu-active');

		$('html, body').animate({scrollTop: $('#main-form-reports').offset().top-75 }, 500);
	});

   	$('#submenu-link2').click(function(){
		$('#google-form-student').hide();
		$('#google-form-teacher').show();
		$('#google-form-statistics').hide();
		$(this).addClass('submenu-active');
		$("#submenu-link1").removeClass('submenu-active');
		$("#submenu-link3").removeClass('submenu-active');

		$('html, body').animate({scrollTop: $('#main-form-reports').offset().top-75 }, 500);
	});

	$('#submenu-link3').click(function(){
		$('#google-form-student').hide();
		$('#google-form-teacher').hide();
		$('#google-form-statistics').show();
		$(this).addClass('submenu-active');
		$("#submenu-link1").removeClass('submenu-active');
		$("#submenu-link2").removeClass('submenu-active');

		$('html, body').animate({scrollTop: $('#main-form-reports').offset().top-75 }, 500);
	});


});