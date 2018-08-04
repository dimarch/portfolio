(function($) {
	"use strict";

	$(window).on('load', function() {
	    $(".preloader").fadeOut("slow", function() {
	        $(".preloader-left").addClass("slide-left");
	    });

	    $('#lionhero').owlCarousel({
	        animateOut: 'fadeOut',
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontextslider').owlCarousel({
	        nav: false,
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontestimonial').owlCarousel({
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    //Portfolio masonry
	    var $container = $('#portfolio-container');
	    $container.isotope({
	        masonry: {
	            columnWidth: '.portfolio-item'
	        },
	        itemSelector: '.portfolio-item'
	    });
	    $('#filters').on('click', 'li', function() {
	        $('#filters li').removeClass('active');
	        $(this).addClass('active');
	        var filterValue = $(this).attr('data-filter');
	        $container.isotope({ filter: filterValue });
	    });
	});

	// Typing Animation (Typed.js)
	$('#element').typed({
	    strings: ["UX, UI Designer", "Web App Developer", "Social Animal!"],
	    typeSpeed: 0,
	    loop: true,
	    startDelay: 500,
	    backDelay: 3000,
	    contentType: 'html',
	});

	//Video background
	$(".player").mb_YTPlayer({
	    containment: '#video-wrapper',
	    mute: true,
	    showControls: false,
	    quality: 'default',
	    startAt: 5
	});

	$('.open-sidebar').on('click', function() {
        $('aside').toggleClass('show');
        $(this).toggleClass('active');
        $('.content-blocks').toggleClass('hide-overflow');
    });

    $('.mobile-menu').on('click', function() {
        $('.inline-menu').toggleClass('active');
    });    

	// Intialize Map
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var $mapdiv = $('#map');
		$mapdiv.each(function(){	
			var latitude = $mapdiv.data("latitude");
			var longitude = $mapdiv.data("longitude");
			var markericon = $mapdiv.data("markericon");		
		    var mapOptions = {
		        zoom: 11,
		        center: new google.maps.LatLng(latitude, longitude), 
		        scrollwheel: false,
		        styles: [{
		            featureType: 'all',
		            stylers: [{
		                saturation: -65
		            }]
		        }, {
		            featureType: 'road.arterial',
		            elementType: 'geometry',
		            stylers: [{
		                hue: '#00ffee'
		            }, {
		                saturation: 80
		            }]
		        }, {
		            featureType: 'poi.business',
		            elementType: 'labels',
		            stylers: [{
		                visibility: 'off'
		            }]
		        }]
		    };
		    var mapElement = document.getElementById('map');
		    var map = new google.maps.Map(mapElement, mapOptions);
		    var marker = new google.maps.Marker({
		        position: new google.maps.LatLng(latitude, longitude),
		        map: map,
		        icon: markericon,
		        draggable: true,
		        animation: google.maps.Animation.DROP
		    });
		    marker.addListener('click', toggleBounce);
		    function toggleBounce() {
		        if (marker.getAnimation() !== null) {
		            marker.setAnimation(null);
		        } else {
		            marker.setAnimation(google.maps.Animation.BOUNCE);
		        }
		    }
		});  
	}
	//$('.wpcf7-form input[type="submit"]').replaceWith('<button type="submit" class="btn">' + $('.wpcf7-form input[type="submit"]').val() +'</button>');
		$('input[type="submit"]').replaceWith('<button type="submit" class="btn">' + $('input[type="submit"]').val() +'</button>');
})(jQuery);