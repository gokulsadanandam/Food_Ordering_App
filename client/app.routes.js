angular.module('app')
	   .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/components/home/home.html',
                controller:'home'
            })
    })