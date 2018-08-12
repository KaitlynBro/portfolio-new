var portfolio = {};

portfolio.init = function() {
	portfolio.getPortfolio();
}	

portfolio.getPortfolio = function() {
	$('.seemore').on('click', function() {
    $('html,body').animate({
        scrollTop: $('.about-section').offset().top},
        'slow');
	});
}


$(document).ready(function() {
	portfolio.init();
});