(function() { 'use strict';

	function internal($compileProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $windowProvider, AngularyticsProvider, cfpLoadingBarProvider, localStorageServiceProvider, StripeElementsProvider, UIRouterMetatagsProvider) {

		StripeElementsProvider.setAPIKey('pk_test_0zM0gFWV9WoehBQUybIsQcVK00qX07QS8n');
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('page-not-found');

		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(local|http|https|app|tel|ftp|file|blob|content|ms-appx|x-wmapp0|cdvfile):|data:image\//);
		cfpLoadingBarProvider.latencyThreshold = 200;
		cfpLoadingBarProvider.includeSpinner = true;
		cfpLoadingBarProvider.includeBar = false;
		cfpLoadingBarProvider.spinnerTemplate = "<div class='backdrop'></div>";

		var angularyticsEventHandlers = [];
		if($windowProvider.$get().location.hostname.match(/192.168.2.10/)) {
			angularyticsEventHandlers.push('Console');
		} else {
			angularyticsEventHandlers.push('GoogleUniversal');
		}
		AngularyticsProvider.setEventHandlers(angularyticsEventHandlers);

		localStorageServiceProvider
			.setPrefix('zissis')
			.setStorageType('localStorage')
			.setNotify(true, true);

		UIRouterMetatagsProvider.setTitleSuffix(' | Zissis Liolios');
		// .setStaticProperties({
		// 	'fb:app_id': 'your fb app id',
		// 	'og:site_name': 'your site name'
		// })
		// .setOGURL(true);
	}

	angular.module('app').config(internal);

	internal.$inject = ['$compileProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$windowProvider', 'AngularyticsProvider', 'cfpLoadingBarProvider', 'localStorageServiceProvider', 'StripeElementsProvider', 'UIRouterMetatagsProvider'];
})();
