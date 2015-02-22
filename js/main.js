"use strict";
angular.module('angularTests',['ui.router', 'angularTests.controllers'])
    .config([ '$stateProvider','$urlRouterProvider', function( $stateProvider, $urlRouteProvider){

        $urlRouteProvider.otherwise("/state1");

        $stateProvider
            .state('state1',{
                url: '/state1',
                views: {
                    viewA: {templateUrl: 'partials/view1.html', controller:"view1Controller"},
                    viewParallel:{templateUrl:'partials/parallelView.html', controller:"parallelController"}
                }

            })
            .state('state2',{
                url: '/state2',
                views: {
                    viewA: {templateUrl: 'partials/view2.html', controller:'view2Controller'},
                    viewParallel:{templateUrl:'partials/parallelView.html', controller:"parallelController"}
                }

            })
            .state('state2.sub1',{
                url: '/sub1',
                templateUrl: 'partials/state2.sub1.html',
                controller:'view2sub1Controller'
            })
            .state('state3',{
                url: '/state3',
                template: '<div ng-controller="view3Controller"> <h2>This is view3</h2></div>',
                controller: 'view3Controller'
            });
    }]
);
