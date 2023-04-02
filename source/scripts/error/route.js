(function() { "use strict";

	function routes($stateProvider) {
		$stateProvider
			.state('app.error', {
				url: 'page-not-found',
				metaTags: {
					title: 'Page Not Found',
					description: 'Please use the navigation above to start from the beginning.'
				},
				views: {
					'page@': {
						templateUrl: 'error/index.html'
					}
				}
			});
	}

	angular
		.module('app.error')
		.config(routes);

		routes.$inject = ['$stateProvider'];

})();
