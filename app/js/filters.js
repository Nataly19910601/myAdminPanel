'use strict';

/* Filters */
angular.module('myAdminApp.filters', [])

.filter('doneAndFilter',function (user) {
    return user.name && user.status === "online";
});
    /*Сортировка по убыванию и возрастанию*/


    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    }

    /*Меняет иконку стрелки сортировки*/

    $scope.isSortUp = function (fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    }

    $scope.isSortDown = function (fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    }
