'use strict';
var myAdminApp =angular.module('myAdminApp',['ngRoute']);
myAdminApp.config(['$routeProvider',function($routeProvide){
    $routeProvide
        .when('/',{
        templateUrl:'template/users.html',
            controller:'UsersCtrl'
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
            templateUrl:'template/users.html',
            controller:'ReadersCtrl'
        })
        .when('/users',{
            templateUrl:'template/users.html',
            controller:'UsersCtrl'
        })
        .when('/tables',{
            templateUrl:'template/users.html',
            controller:'UsersCtrl'
        })
        .otherwise({

        redirectTo:'/'
    });

}]);



/*Контроллеры*/
myAdminApp.controller('DefaultCtrl',['$scope','$http','$location',function ($scope,$http,$location) {


}]);
myAdminApp.controller('UsersCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.title="Пользователи";
    console.log('$location.url() -', $location.url());
    console.log('$location.url() -', $location.path());
    console.log('$location.url() -', $location.hash());
    $http.get('data/users.json').success(function (data,status,headers,config) {
        $scope.users =data;
    });

}]);
    myAdminApp.controller('ReadersCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
        $scope.title="Подписчики";
        $http.get('data/readers.json').success(function (data,status,headers,config) {
            $scope.users =data;
        }).error(function(data, status, headers, config) {
            alert("Данные не смогли подключиться");
        });

}]);

myAdminApp.controller('GraphicsCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.title="Графики";


}]);

myAdminApp.controller('DiagramsCtrl',['$scope','$http','$location',function ($scope,$http,$location) {
    $scope.title="Диаграммы";


}]);









