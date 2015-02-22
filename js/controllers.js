"use strict";
angular.module('angularTests.controllers',[])
    .controller('mainPageController',['$scope','$state','$rootScope',
        function($scope, $state,$rootScope) {

            function stateChangeCallback (event, toState, toParams, fromState, fromParams){
                console.debug("stateChangeCallback called");
                $scope.setLastEvent("going to state "+toState.name + " from state:" + fromState.name);
            }

            $scope.title = "gigi";
            $scope.lastEvent='nothing yet';
            $scope.navigate = function(stateName){
                $state.go(stateName);
            };
            $scope.setLastEvent = function(text){
                $scope.lastEvent=text;
            };
            $rootScope.$on('$stateChangeStart', stateChangeCallback);
        }
    ])
    .controller('view1Controller',['$scope',
        function($scope) {
            console.debug("view1Controller");


        }
    ])
    .controller('view2Controller',['$scope',
        function($scope) {
            console.debug("view2Controller");
        }
    ])
    .controller('view3Controller',['$scope',
        function($scope) {
            console.debug("view3Controller");
        }
    ])
    .controller('parallelController',['$scope',
        function($scope) {
            console.debug("parallelController");
        }
    ])
    .controller('view2sub1Controller',['$scope',
        function($scope) {
            console.debug("view2sub1Controller");
        }
    ]);
