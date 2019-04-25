
jQuery(document).ready(function($) {
			$(".user-register-section .user-register-form .form-item-consumerorg label").text("Organization");
			$("#myform").trigger('reset');
			$( "<span id='faq-que-icon'></span>" ).insertBefore(".faq-listing span.ui-icon");
			$( "<span id='product-que-icon'></span>" ).insertBefore(".forum-content #block-ibmapi2portal-content table tbody tr td:first-child > div:first-child");
			var $button = $('#edit-user-picture-wrapper').clone();
  			$('#user-image').html($button);
			$(".my-link").click(function(event){
					$(".user-dropdown").toggleClass("display-block");
			});

			// $( "li" ).not( document.getElementById( "notli" ) ).css( "background-color", "red" );
			// $( "#mydiv" ).hasClass( "foo" )

			// $('.user-forgot-password #user-pass #edit-name').attr('placeholder', 'Enter Subject' );
			$('.contact-message-feedback-form #edit-subject-0-value').attr('placeholder', 'Enter Subject' );
			$('.faq-listing .views-exposed-form .form-item input').attr('placeholder', 'Search a topic or question here...' );
			$('.consumerorg-create-form #edit-orgname').attr('placeholder', 'Enter Organization Name' );
			$('.application-create-credentials-form #edit-title').attr('placeholder', 'Enter  Name' );
			$('.application-verify-clientsecret-form #edit-secret').attr('placeholder', 'Enter  Application Secret Id' );
			$('.application-create-credentials-form #edit-summary').attr('placeholder', 'Enter Summary');
			$('.consumerorg-edit-form #edit-orgname').attr('placeholder', 'Your Organization Name' );
			$('#application-create-form-one .form-item #edit-application-redirect-endpoints-0-value').attr('placeholder', 'Enter Redirect URL');
			$('#application-create-form-one .form-item #edit-title-0-value').attr('placeholder', 'Enter Title');
			$('#application-create-form-one .form-item #edit-apic-summary-0-value').attr('placeholder', 'Enter Description');
			
			$('.contact-message-feedback-form #edit-message-0-value').attr('placeholder', 'Enter Message' );
			$('#edit-captcha-response').attr('placeholder', 'Enter Captcha Code' );
			
			$("#header #block-searchform input").attr("placeholder", "search here");
		  $(".search_box_toggle .search_btn").click(function(event){
		    
		     
		     $("#header .search-block-form").fadeIn('slow');
		     $("#header .search_box_toggle .search_btn").fadeOut('slow');
		     $("#header .search_box_toggle span").fadeIn('slow');
		     $(".header-right nav").fadeOut('slow');
	            event.stopPropagation();
			});
	 		$(".search_box_toggle span").click(function(event){
		   
		     
		      $("#header .search-block-form").fadeOut('slow');
		     $("#header .search_box_toggle span").fadeOut('slow');
		     $("#header .search_box_toggle .search_btn").fadeIn('slow');
		     $(".header-right nav").fadeIn('slow');
	            event.stopPropagation();
			});

			$(".op-product-view ul.products-pay-details li article").click(function(event){
				
					window.location=$(this).find(".apicProductCardMain .bx--about__title--name a").attr("href");
			});
			$(".app-listing .api-product-sec article").click(function(event){
					
					window.location=$(this).find(".apicAppCardMain .bx--about__title--name a").attr("href");
			});

			$(".edit-goto").click(function(event){
					window.location= $("#user-edit-link a").attr("href");
			});
			
			$( ".faq-listing .views-exposed-form .form-item input" ).keypress(function() {
  				$( "<span id='faq-que-icon'></span>" ).insertBefore(".faq-listing span.ui-icon");
			});

			$( ".page-product .views-exposed-form .select-wrapper select" ).change(function() {
  				$('.page-product .views-exposed-form .form-actions .form-submit').trigger('click');

			});
			$("#main").click(function(event){
				if ($(".user-dropdown").hasClass("display-block")) {
					$(".user-dropdown").toggleClass("display-block");
				}
			});	

			$("#footer").click(function(event){
				if ($(".user-dropdown").hasClass("display-block")) {
					$(".user-dropdown").toggleClass("display-block");
				}
			});

			$(".bottom-header").click(function(event){
				if ($(".user-dropdown").hasClass("display-block")) {
					$(".user-dropdown").toggleClass("display-block");
				}
			});
				
			

		});

