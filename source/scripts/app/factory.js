(function() { 'use strict';

    function internal($rootScope, $state, $stateParams, MetaTags) {
        var factory = {};

        factory.init = function() {
            $rootScope.MetaTags = MetaTags;
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.panel = false;
			$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
			    event.preventDefault();
				$state.go('app.error');
			});

        };

        return factory;
    }

	angular.module('app').factory('runFactory', internal);

	internal.$inject = ['$rootScope', '$state', '$stateParams', 'Angularytics', 'MetaTags'];

})();
