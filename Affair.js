(function() {
	// Global object
	var self = this;

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
}).call(this);