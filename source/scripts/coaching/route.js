(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.coaching', {
            url: 'coaching',
            metaTags: {
                title: 'Transformational Coaching',
                description: 'Focus on where you are in this present moment, how you want to be, where you want to be, and how you want to get there.'
            },
            views: {
                'page@': {
                    templateUrl: 'coaching/index.html',
					controller: 'CoachingController',
					controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.coaching').config(internal);

    internal.$inject = ['$stateProvider'];
})();
