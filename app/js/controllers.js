'use strict';
var myAdminApp =angular.module('myAdminApp',['ngRoute']);
myAdminApp.config(['$routeProvider',function($routeProvide){
    $routeProvide
        .when('/',{
        templateUrl:'template/index.html',
            controller:'DefaultCtrl'
        })
        .when('/diagrams',{
            templateUrl:'template/diagrams.html',
            controller:'DiagramsCtrl'
        })
        .when('/graphics',{
            templateUrl:'template/graphics.html',
            controller:'GraphicsCtrl'
        })
        .when('/readers',{
            templateUrl:'template/index.html',
            controller:'ReadersCtrl'
        })
        .when('/tables',{
            templateUrl:'template/index.html',
            controller:'DefaultCtrl'
        })
        .otherwise({

        redirectTo:'/'
    });

}]);

myAdminApp.controller('DefaultCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
$scope.title="Пользователи";
   $http.get('data/users.json').success(function (data,status,headers,config) {
       $scope.users =data;
   });

}])

    myAdminApp.controller('ReadersCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
        $scope.title="Подписчики";
        $http.get('data/readers.json').success(function (data,status,headers,config) {
            $scope.users =data;
        });

}])

myAdminApp.controller('GraphicsCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.title="Графики";


}])

myAdminApp.controller('DiagramsCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.title="Диаграммы";


}])











