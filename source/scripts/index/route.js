(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.index', {
            url: '',
            metaTags: {
                title: 'Home',
                description: 'Transform into your best version. Register for coaching sessions or for one of the powerful workshop - HeartMath, Heart Imagery.'
            },
            views: {
                'page@': {
                    templateUrl: 'index/index.html',
                    controller: 'IndexController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.index').config(internal);

    internal.$inject = ['$stateProvider'];
})();
