/* Theme Name: Dorsin - Responsive Landing page template
   Author: Themesbrand
   Version: 1.0.0
   Created: July 2018
   File Description: Main JS file of the template
*/
(function ($) {

    'use strict';

    // Navbar
    function initNavbar() {
  		$('.navbar-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    // Sticky Header
    function initSticky() {
        $(".sticky").sticky({
            topSpacing: 0
        });
    }
    
    //Scrollspy
	function initScrollspy() {
		$("#navbarCollapse").scrollspy({
		    offset:20
		});
	}

	// Magnific Popup
    function initMagnificPopup() {
        $('.video-play-icon').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }

    function initContactForm() {
    	$('#contact-form').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;
        });
    }

    function initSendEmail() {  
        $('#submit').bind('click', function(event) {
            Email.send({
                SecureToken : "98a423f-f7d0-44b0-a6a3-6e573b9805f4",
                To : 'qiaowen0318@outlook.com',
                From : "cowayqiaowen@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
            Email.send({
                Host : "smtp.gmail.com",
                Username : "cowayqiaowen0318@gmail.com",
                Password : "511318dd",
                To : 'qiaowen0318@outlook.com',
                From : "cowayqiaowen@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
        });
    }

    function init() {
        initSendEmail();
        initNavbar();
        initSticky();
        initScrollspy();
        initMagnificPopup();
        initContactForm();
        Waves.init();
    }

    init();

})(jQuery)