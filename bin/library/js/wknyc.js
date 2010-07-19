/**
 * alex.nguyen@wk.com
 */
//Main namespace
var wknyc = {
	nav: {},
	utils: {},
	globals: {},
	gui: {},
	twitter: "http://api.twitter.com/1/statuses/user_timeline.json?id=16405865",
	facebook: "http://www.facebook.com/feeds/status.php?id=717091609&viewer=717091609&key=b827c1adc5&format=rss20"
};

//Functions
wknyc.loadLetters = function() {
	wknyc.utils.log(letters.w[Math.ceil(Math.random()*letters.w.length)-1].src);
	$('#w').html('<img src="library/img/w/'+letters.w[Math.ceil(Math.random()*letters.w.length)-1].src+'" alt="'+letters.w[Math.ceil(Math.random()*letters.w.length)-1].alt+'"');
	$('#plus').html('<img src="library/img/plus/'+letters.plus[Math.ceil(Math.random()*letters.plus.length)-1].src+'" alt="'+letters.plus[Math.ceil(Math.random()*letters.plus.length)-1].alt+'"');
	$('#k').html('<img src="library/img/k/'+letters.k[Math.ceil(Math.random()*letters.k.length)-1].src+'" alt="'+letters.k[Math.ceil(Math.random()*letters.k.length)-1].alt+'"');
	$('#n').html('<img src="library/img/n/'+letters.n[Math.ceil(Math.random()*letters.n.length)-1].src+'" alt="'+letters.n[Math.ceil(Math.random()*letters.n.length)-1].alt+'"');
	$('#y').html('<img src="library/img/y/'+letters.y[Math.ceil(Math.random()*letters.y.length)-1].src+'" alt="'+letters.y[Math.ceil(Math.random()*letters.y.length)-1].alt+'"');
	$('#c').html('<img src="library/img/c/'+letters.c[Math.ceil(Math.random()*letters.c.length)-1].src+'" alt="'+letters.c[Math.ceil(Math.random()*letters.c.length)-1].alt+'"');
}

//Utilities
wknyc.utils.renderFonts = function() {
	//Cufon.replace($('.letterGothicStd'), { fontFamily: 'Letter Gothic Std', hover: {color: '#0ff'}, hoverables: {li:'true', a:'true'} });
}


wknyc.utils.preload = function() {
	spinner("landing-load", 5, 10, 12, 2, "#fff");
	$(function () {
		var img = new Image();
		var allimg = $('#landing-right img');
		allimg.hide();
		allimg.each(
			function(){
				var src = $(this).attr('src');
				$(this).load(
					function () {
						$(this).hide();
						$('#landing-load').remove();
						$(this).fadeIn();
				}).error(function () {
				// notify the user that the image could not be loaded
			}).attr('src', src);
		});
	});
}

/**
 * Checks for the existence of the global console object and the log method.
 * Should be used instead of console.log so that IE doesn't throw errors when
 * it doesn't find console.
 * @param {Object} message - Message to be sent to console.log
 */
wknyc.utils.log = function(message) {
	try{
		console.log(message);
	}catch(err){
		return false;
	}
}

// rafael svg lib
function spinner(holderid, R1, R2, count, stroke_width, colour) {
    var sectorsCount = count || 12,
        color = colour || "#fff",
        width = stroke_width || 15,
        r1 = Math.min(R1, R2) || 35,
        r2 = Math.max(R1, R2) || 60,
        cx = r2 + width,
        cy = r2 + width,
        r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),
        
        sectors = [],
        opacity = [],
        beta = 2 * Math.PI / sectorsCount,

        pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
        Raphael.getColor.reset();
    for (var i = 0; i < sectorsCount; i++) {
        var alpha = beta * i - Math.PI / 2,
            cos = Math.cos(alpha),
            sin = Math.sin(alpha);
        opacity[i] = 1 / sectorsCount * i;
        sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
        if (color == "rainbow") {
            sectors[i].attr("stroke", Raphael.getColor());
        }
    }
    var tick;
    (function ticker() {
        opacity.unshift(opacity.pop());
        for (var i = 0; i < sectorsCount; i++) {
            sectors[i].attr("opacity", opacity[i]);
        }
        r.safari();
        tick = setTimeout(ticker, 1000 / sectorsCount);
    })();
    return function () {
        clearTimeout(tick);
        r.remove();
    };
}

/////////////////////////////////////////////////////////////////////////////////////////
function init() {
	wknyc.utils.renderFonts();
	//wknyc.loadLetters();
	setTimeout(
		function(){
			$('#logo').fadeIn(400);
		},
	500);
}

$(document).ready(function(){
	init();
});