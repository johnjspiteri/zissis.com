(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.event', {
            url: 'events',
            metaTags: {
                title: 'Events',
                description: 'Register for one of these events occurring in the future or contact me to hold an event at your organization.'
            },
            views: {
                'page@': {
                    templateUrl: 'event/list/index.html',
                    // resolve: {
                    //     listResolve: ['eventList', function(eventList) {
                    //         return eventList.get().$promise;
                    //     }]
                    // },
                    controller: 'EventListController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.event.list').config(internal);

    internal.$inject = ['$stateProvider'];
})();
