/// <reference path="../typings/tsd.d.ts" />
angular.module('app', ['ngMaterial', 'ui.layout'])
    .controller('AppCtrl', function ($scope, $mdDialog) {

        $scope.showTabDialog = function (ev) {
            $mdDialog.show({
                controller: dialogController,
                templateUrl: 'tabDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };
    });

function dialogController($scope, $mdDialog,$window,$timeout) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.$on('ui.layout.loaded', function (e, id) {
        _.range(100,900,100).forEach(function (interval) {
            $timeout(function () {
                angular.element($window).triggerHandler('resize');
            }, interval);
        });
    });
}
