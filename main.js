$(document).ready(function () {
	'use strict';

	console.log(quotes.length);

	changeQuote();
	
	$('#new-quote').click(function() {
		changeQuote();
	});
});

function changeQuote() {
	$('#wrapper').fadeOut('slow', function() {
		let i = Math.floor(quotes.length * Math.random());
		let text = quotes[i].text;
		let author = quotes[i].author;
		$('#text').prop('innerHTML', text);
		$('#author').prop('innerHTML', author);
		let twitterLink = encodeURI(`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}" ${author}`);
		$('#tweet-quote').prop('href', twitterLink); 
		let mastodonLink = encodeURI(`https://mastodon.social/share?text="${text}" ${author}`);
		$('#toot-quote').prop('href', mastodonLink);
		$(this).fadeIn('slow');
	});
}

let quotes = [
	{
		text: "If opportunity doesn't knock, build a door.",
		author: "Milton Berle"
	},
	{
		text: "In a gentle way, you can shake the world.",
		author: "Mahatma Gandhi"
	},
	{
		text: "Happiness is not something you postpone for the future; it is something you design for the present.",
		author: "Jim Rohn"
	},
	{
		text: "Thinking: the talking of the soul with itself.",
		author: "Plato"
	},
	{
		text: "Everyone here has the sense that right now is one of those moments when we are influencing the future.",
		author: "Steve Jobs"
	},
	{
		text: "Let us always meet each other with smile, for the smile is the beginning of love.",
		author: "Mother Teresa"
	},
	{
		text: "Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.",
		author: "Helen Keller"
	},
	{
		text: "Love is the beauty of the soul.",
		author: "Saint Augustine"
	},
	{
		text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
		author: "Lao Tzu"
	},
	{
		text: "It is sad not to love, but it is much sadder not to be able to love.",
		author: "Miguel de Unamuno"
	},
	{
		text: "The secret of getting ahead is getting started.",
		author: "Mark Twain"
	},
	{
		text: "Only I can change my life. No one can do it for me.",
		author: "Carol Burnett"
	},
	{
		text: "Keep your eyes on the stars, and your feet on the ground.",
		author: "Theodore Roosevelt"
	},
	{
		text: "Quality is not an act, it is a habit.",
		author: "Aristotle"
	},
	{
		text: "The more man meditates upon good thoughts, the better will be his world and the world at large.",
		author: "Confucius"
	},
	{
		text: "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
		author: "Nelson Mandela"
	},
	{
		text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
		author: "Thomas A. Edison"
	},
	{
		text: "Step by step and the thing is done.",
		author: "Charles Atlas"
	}
];
