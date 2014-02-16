(function() {
	// Global object
	var self = this;

	// Some methods we need;
	var forEach        = Array.prototype.forEach,
		hasOwnProperty = Object.prototype.hasOwnProperty,
		slice          = Array.prototype.slice;

	// Use by noConflict method
	var exAffair = self.Affair;

	var Affair;
	if(typeof exports !== 'undefined') {
		Affair = exports;
	}else{
		Affair = self.Affair = {};
	}

	Affair.VERSION = '0.1.0';

	// Some methods
	Affair.noConflict = function() {
		self.Affair = exAffair;
		return this;
	};

	var Toolkit = {
		on: function() {

		},
		once: function() {

		},
		off: function() {

		},
		emit: function() {

		},
		remove: function() {

		}
	}
}).call(this);