//document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.7/jquery.min.js">\x3C/script>');
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.1/underscore-min.js">\x3C/script>');
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min.js">\x3C/script>');

var prez = (function() {
    
   var logMessages = []; 

   
    return {
	showLog : function() {

	    if (typeof result === "undefined") {
		window.result = "";
	    }

	    window.result = logMessages.join("<br\>");
	    logMessages = [];
	},
	log : function (s) {
	    logMessages.push(s);
	}
    };
}());


var log = function (message) {
    if (typeof window.result === "undefined" ||
       window.result === null) {
	window.result = "";
    }

    window.result = window.result + message + "<br/>";
};



