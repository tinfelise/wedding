//Scroll events
$(window).scroll( function () {
	var position = $(this).scrollTop();
	var header = $('header').height();
	var offsetPosition = position + header;
	var height = $(window).height();
	var bottom = position + height;
	var pageBottom = $(document).height();

	// Nav bar position highlighting
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
    if (position > 0) {
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
        url: '2pic.jpeg',
        text: 'First picture together'
    },
    {
        url: '3dinnerout.jpeg',
        text: 'First dinner out, 6&nbsp;months&nbsp;in'
    },
    {
        url: '4nightaway.jpeg',
        text: 'First night away'
    },
    {
        url: '5firsttrip.jpeg',
        text: 'First weekend trip'
    },
    {
        url: '6firstskate.jpeg',
        text: 'California dreaming'
    },
    {
        url: '7ski.jpeg',
        text: 'First ski trip'
    },
    {
        url: 'surf.jpeg',
        text: 'She was better...'
    },
    // {
    //     url: 'vaccine.jpeg',
    //     text: 'Vaccinated at&nbsp;last!'
    // },
    {
        url: 'concert.jpeg',
        text: 'First concert'
    },
    {
        url: 'symphony.jpeg',
        text: 'Dolled up for the&nbsp;symphony'
    },
    // {
    //     url: '8movingintogether.mp4',
    //     text: 'Moving in together',
    //     type: 'video'
    // },
    {
        url: 'goldroom.jpeg',
        text: 'Got COVID. Worth&nbsp;it.'
    },
    {
        url: 'halloween.jpeg',
        text: 'Anyone see White&nbsp;Lotus?'
    },
    {
        url: 'firsthike.jpeg',
        text: 'Out with the pup'
    },
    {
        url: 'game.jpeg',
        text: 'First football game. We&nbsp;lost.'
    },
    {
        url: 'pointreyes.jpeg',
        text: 'Point Reyes morning'
    },
    {
        url: 'joshwedding.jpeg',
        text: 'Buttoning buttons is hard'
    },
    {
        url: 'proposal.jpg',
        text: '\"Saw it coming\"'
    },
    {
        url: 'michigan.jpeg',
        text: 'Go Blue!'
    },
    // {
    //     url: 'niece.jpeg',
    //     text: 'Tyler gets a niece!'
    // },
    {
        url: 'donut.jpeg',
        text: 'No donuts for peanuts'
    },
    {
        url: 'revel.jpeg',
        text: 'Fort Funston FTW'
    },
    // {
    //     url: 'monster.jpeg',
    //     text: 'Created a monster'
    // },
    {
        url: 'bob.jpeg',
        text: 'Birthdays with Bob'
    },
    {
        url: 'tahoe.jpeg',
        text: 'Tahoe in the "winter"'
    },
    {
        url: 'engaged.jpeg',
        text: 'Got engaged. NBD.'
    },
    {
        url: 'carmel.jpeg',
        text: 'Weekend in Carmel'
    },
    {
        url: 'bigsky.jpeg',
        text: 'Big Sky crew'
    },
    {
        url: 'horses.jpeg',
        text: 'Mendocino on horseback'
    },
    {
        url: 'mendocino.jpeg',
        text: 'Mendocino on cliffs'
    },
    {
        url: 'drivein.jpeg',
        text: 'Drive-in movie'
    },
    {
        url: 'lazybear.jpeg',
        text: "Kitchen's closed"
    },
    {
        url: 'symphony2.JPG',
        text: "Real mature"
    },
    {
        url: 'backseat.jpeg',
        text: "Post-hike snoozes"
    },
    {
        url: 'proposal_yes.jpg',
        text: 'She said yes, Artie!'
    }
];

function addCode(element,code) {
    $(element).text(code);
};

function create_gallery (photos) {
    for (item in photos) {
        var photo = photos[item];
        var url = 'images/' + photo.url;
        if (photo.type == 'video') {
            var html = '<video autoplay muted loop playsinline>';
                html += '<source src="' + url + '" type="video/mp4">';
                html += photo.text;
                html += '</video>';
                // html = '<video autoplay muted loop><source src="https://belong-consumer-assets.s3.us-west-1.amazonaws.com/belong-explainer-video/belong_explainer.mp4" type="video/mp4"></video>';
        } else {
            var html = '<img src="' + url + '" alt="' + photo.text + '">';
        };
        html = '<div onclick="$(this).toggleClass(\'fullscreen\')" style="background-image: url(' + url + ')">' + html;
        if (photo.text) {
            html = html + '<div>' + photo.text + '</div>';
        };
        html = html + '<i class="fa-solid fa-xmark"></i>' + '</div>'
        $('#gallery').append(html);
    };
};

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

addCode('#UpValley_code','WAHR & INFELISE WEDDING');
addCode('#MountView_code span','AT722');
create_gallery(gallery_photos);