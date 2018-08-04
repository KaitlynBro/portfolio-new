(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('henlo');
var portfolio = {};

portfolio.init = function () {
	portfolio.getPortfolio();
};

portfolio.getPortfolio = function () {
	$("button").on('click', function () {
		$('html,body').animate({
			scrollTop: $("#aboutMe").offset().top }, 'slow');
	});
};

$(document).ready(function () {
	portfolio.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFFBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxJQUFJLFlBQVksRUFBaEI7O0FBRUEsVUFBVSxJQUFWLEdBQWlCLFlBQVc7QUFDM0IsV0FBVSxZQUFWO0FBQ0EsQ0FGRDs7QUFJQSxVQUFVLFlBQVYsR0FBeUIsWUFBVztBQUNuQyxHQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFXO0FBQ2hDLElBQUUsV0FBRixFQUFlLE9BQWYsQ0FBdUI7QUFDbkIsY0FBVyxFQUFFLFVBQUYsRUFBYyxNQUFkLEdBQXVCLEdBRGYsRUFBdkIsRUFFSSxNQUZKO0FBR0YsRUFKRDtBQUtBLENBTkQ7O0FBU0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQzVCLFdBQVUsSUFBVjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc29sZS5sb2coJ2hlbmxvJyk7XG52YXIgcG9ydGZvbGlvID0ge307XG5cbnBvcnRmb2xpby5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdHBvcnRmb2xpby5nZXRQb3J0Zm9saW8oKTtcbn1cdFxuXG5wb3J0Zm9saW8uZ2V0UG9ydGZvbGlvID0gZnVuY3Rpb24oKSB7XG5cdCQoXCJidXR0b25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJChcIiNhYm91dE1lXCIpLm9mZnNldCgpLnRvcH0sXG4gICAgICAgICdzbG93Jyk7XG5cdH0pO1xufVxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRwb3J0Zm9saW8uaW5pdCgpO1xufSk7XG5cblxuIl19
