"use strict";
angular.module('angularTests',['ui.router', 'angularTests.controllers'])
    .config([ '$stateProvider','$urlRouterProvider', function( $stateProvider, $urlRouteProvider){

        $urlRouteProvider.otherwise("/state1");

        $stateProvider
            .state('state1',{
                url: '/state1',
                templateUrl: 'partials/view1.html'
            })
            .state('state2',{
                url: '/state2',
                templateUrl: 'partials/view2.html'

            });
    }]
);
