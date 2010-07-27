/**
* alex.nguyen@wk.com
*/
var key = "ABQIAAAAPTnXcVqfUi1sP5f6ICVgmxQc3j_nh1j2x--AEeCbdrwZ4YHIyBRCF9nK0yL6ZrPKbZn8ns-MYrEvrA";
var _feed;
google.load("feeds", "1");
 
function getFeed(url, isTwitter) {
	var feed = new google.feeds.Feed(url);
	feed.load(function(result) {
		if (!result.error) {
			_feed = result;
			var content;
			if(isTwitter){
				var txt = result.feed.entries[0].content;
				content = txt.substring(txt.indexOf(": ") + 2, txt.length);
			}else{
				content = result.feed.entries[0].content;
			}
			var c = $('<p class="first">'+content+'</p>');
			$('.follow').append(c);
			/*
			$('status'+index+'Content').set('html', content);
			$('status'+index+'Author').set('html', user);
			$('status'+index+'Time').set('html', result.feed.entries[0].publishedDate);
			*/
		}
	});
};

function getBlog() {
	var cacheKiller = Math.random();
	var feed = new google.feeds.Feed("http://feeds.feedburner.com/wknyc?"+cacheKiller);
	
	var _html = $('blogPostMarkup').get('html');
	feed.setNumEntries(3);
	
	feed.load(function(result) {
		if (!result.error) {
			blog = result;
			_delay = 100;
			for (var i=0; i<blog.feed.entries.length; i++) {
				/*
				_delay += 250;
				var el = new Element('div', {'html':_html, 'styles':{'margin-bottom':'20px'}});
				el.getElement('.author').set('html', blog.feed.entries[i].title);
				el.getElement('.dateAndTime').set('html', blog.feed.entries[i].publishedDate);
				el.getElement('a').set('href', "/postings/#" + blog.feed.entries[i].title.toString());
				el.injectBefore('blogPostMarkup');
				
				el.fade('hide');
				el.set('tween', {duration:300, transition:Fx.Transitions.linear.easeIn});
				el.tween.delay(_delay, el,['opacity', 1]);
				*/
			}
		}
	});
}