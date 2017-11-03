'use strict';
var myAdminApp =angular.module('myAdminApp,[]');
myAdminApp.controller('DefaultCtrl',function ($scope) {

    $scope.users =[
        {name:alex,status:online},
        {name:bevel,status:online},
        {name:greg,status:offline},
        {name:leo,status:online},
        {name:jax,status:offline}];


});


/* var myadminApp =angular.module('admin', ['admin.services','admin.filters'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {template: 'template/index.html', controller: defaultCtrl})
            .when('/tables', {template: 'template/tables.html', controller: NewCtrl})
            .when('/diagrams/:id', {template: 'template/diagrams.html', controller: EditCtrl})
            .otherwise({redirectTo: '/'});
    },
    ]);
    */

/* Controllers */









