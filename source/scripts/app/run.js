(function() { "use strict";

	function internal (Angularytics, runFactory) {

		Angularytics.init();
		runFactory.init();
	}

	angular
		.module('app').run(internal);

	internal.$inject = ['Angularytics', 'runFactory'];

})();
