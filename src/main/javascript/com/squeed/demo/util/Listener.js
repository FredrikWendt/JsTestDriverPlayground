/**
 * Holds information about a registered listener.
 */
com.squeed.demo.util.Listener = function(eventName, callback, scope) {
	this.eventName = eventName;
	this.callback = callback;
	this.scope = scope || this;
}

com.squeed.demo.util.Listener.prototype = {
	triggered: function() {
		if (this.callback) {
			this.callback.apply(this.scope);
		}
	}
}