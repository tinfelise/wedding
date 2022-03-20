//Scroll events
$(window).scroll( function () {
	var position = $(this).scrollTop();
	var header = $('header').height();
	var offsetPosition = position + header;
	var height = $(window).height();
	var bottom = position + height;
	var pageBottom = $(document).height();

	// Nav bar positioning
    $('section').each(function() {
    	var id = $(this).attr('id');
        if (offsetPosition > $(this).offset().top && offsetPosition <= $(this).offset().top + $(this).height() ){ 
            $('nav a[href="#'+id+'"]').addClass('current');
        } else {
            $('nav a[href="#'+id+'"]').removeClass('current');
        }   
    });
    if (bottom == pageBottom) {
		var last = $('section').last().attr('id');
		$('nav a').removeClass('current');
		$('nav a[href="#'+last+'"]').addClass('current');
	};

    // Header fill state
    if (position > header) {
        $("header").addClass("filledHeader");
    }
    else {
        $("header").removeClass("filledHeader");
    };
});

//Smooth scrolling to anchor tags
$( document ).ready(function() {
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
		var destination = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(destination).offset().top
		}, 1000);
	});
});

// Mobile nav menu
$('nav').on("click", function () {
	$('body').toggleClass('blurSubheader');
	$('header').toggleClass('open');
	$('header.open #logo').on("click", function () {
		$('body').toggleClass('blurSubheader');
		$('header').toggleClass('open');
	});
});

var gallery_photos = [
    {
        url: '1date.jpeg',
        text: 'Our first date!'
    },
    {
        url: '2pic.jpeg',
        text: 'First picture together'
    },
    {
        url: '3dinnerout.jpeg',
        text: ''
    },
    {
        url: '4nightaway.jpeg',
        text: ''
    },
    {
        url: '5firsttrip.jpeg',
        text: ''
    },
    {
        url: '6firstskate.jpeg',
        text: ''
    },
    {
        url: '7ski.jpeg',
        text: ''
    },
    {
        url: 'surf.jpeg',
        text: ''
    },
    {
        url: 'vaccine.jpeg',
        text: ''
    },
    {
        url: 'concert.jpeg',
        text: ''
    },
    {
        url: 'symphony.jpeg',
        text: ''
    },
    {
        url: '8movingintogether.mp4',
        text: '',
        type: 'video'
    }
];

function create_gallery (photos) {
    for (item in photos) {
        var photo = photos[item];
        var url = 'images/' + photo.url;
        if (photo.type == 'video') {
            var html = '<video autoplay muted loop playsinline>';
                html += '<source src="' + url + '" type="video/mp4">';
                html += '</video>';
                // html = '<video autoplay muted loop><source src="https://belong-consumer-assets.s3.us-west-1.amazonaws.com/belong-explainer-video/belong_explainer.mp4" type="video/mp4"></video>';
        } else {
            var html = '<img src="' + url + '" alt="' + photo.text + '">';
        };
        $('#gallery').append(html);
    };
};
create_gallery(gallery_photos);

function copyToClipBoard(element) {
    $(element).removeClass('copied');

    var $temp = $("<input>");
    $("body").append($temp);

    var content = $(element).text();
    $temp.val(content).select();
    document.execCommand("copy");
    $temp.remove();

    $(element).addClass('copied');
};
