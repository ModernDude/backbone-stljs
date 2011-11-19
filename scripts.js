//document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js">\x3C/script>');
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.1/underscore-min.js">\x3C/script>');
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min.js">\x3C/script>');
//document.write('<script src="https://raw.github.com/jeromegn/Backbone.localStorage/master/backbone.localStorage-min.js">\x3C/script>');
document.write('<script src="https://raw.github.com/k33g/ossicle/master/js/backbone.sync/backbone-sync-localstorage.js">\x3C/script>');

var log = function (message) {
    if (typeof window.result === "undefined" || window.result === null) {
	window.result = "";
    }
    
    if (typeof message === "object") {
    	window.result = window.result + JSON.stringify(message);
    } else {
    	window.result = window.result + message + "<br/>";
    }
};



