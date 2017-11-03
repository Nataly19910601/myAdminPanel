'use strict';

var myadminApp =angular.module('admin', ['admin.services','admin.filters'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {template: 'template/index.html', controller: defaultCtrl})
            .when('/tables', {template: 'template/tables.html', controller: NewCtrl})
            .when('/diagrams/:id', {template: 'template/diagrams.html', controller: EditCtrl})
            .otherwise({redirectTo: '/'});
    },
    ]);