/**
 * Allows for listening to events fired.
 */
com.squeed.demo.util.Observable = function() {};

com.squeed.demo.util.Observable.prototype = {
	
	addListener: function(eventName, callback, callbackScope) {
		this.callback = callback;
	},
	
	fire: function() {
		this.callback.call(this);
	}
};
