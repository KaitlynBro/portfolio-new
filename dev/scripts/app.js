console.log('henlo');
var portfolio = {};

portfolio.init = function() {
	portfolio.getPortfolio();
}	

portfolio.getPortfolio = function() {
	$("button").on('click', function() {
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top},
        'slow');
	});
}


$(document).ready(function() {
	portfolio.init();
});


