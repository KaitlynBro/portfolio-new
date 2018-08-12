(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var portfolio = {};

portfolio.init = function () {
	portfolio.getPortfolio();
};

portfolio.getPortfolio = function () {
	$('.seemore').on('click', function () {
		$('html,body').animate({
			scrollTop: $('.about-section').offset().top }, 'slow');
	});
};

$(document).ready(function () {
	portfolio.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksWUFBWSxFQUFoQjs7QUFFQSxVQUFVLElBQVYsR0FBaUIsWUFBVztBQUMzQixXQUFVLFlBQVY7QUFDQSxDQUZEOztBQUlBLFVBQVUsWUFBVixHQUF5QixZQUFXO0FBQ25DLEdBQUUsVUFBRixFQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBVztBQUNsQyxJQUFFLFdBQUYsRUFBZSxPQUFmLENBQXVCO0FBQ25CLGNBQVcsRUFBRSxnQkFBRixFQUFvQixNQUFwQixHQUE2QixHQURyQixFQUF2QixFQUVJLE1BRko7QUFHRixFQUpEO0FBS0EsQ0FORDs7QUFTQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7QUFDNUIsV0FBVSxJQUFWO0FBQ0EsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgcG9ydGZvbGlvID0ge307XG5cbnBvcnRmb2xpby5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdHBvcnRmb2xpby5nZXRQb3J0Zm9saW8oKTtcbn1cdFxuXG5wb3J0Zm9saW8uZ2V0UG9ydGZvbGlvID0gZnVuY3Rpb24oKSB7XG5cdCQoJy5zZWVtb3JlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJCgnLmFib3V0LXNlY3Rpb24nKS5vZmZzZXQoKS50b3B9LFxuICAgICAgICAnc2xvdycpO1xuXHR9KTtcbn1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblx0cG9ydGZvbGlvLmluaXQoKTtcbn0pOyJdfQ==
