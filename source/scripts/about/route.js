(function() { 'use strict';

    function internal($stateProvider) {
        $stateProvider.state('app.about', {
            url: 'about',
            metaTags: {
                title: 'About Me',
                description: 'Life is meant to be lived and enjoyed fully, yet most of us walk around numb and unaware of the everyday riches of life.'
            },
            views: {
                'page@': {
                    templateUrl: 'about/index.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        });
    }

    angular.module('app.about').config(internal);

    internal.$inject = ['$stateProvider'];
})();
