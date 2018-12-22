angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/components/home/home.html',
                controller: 'home',
                resolve : {
                    hotels : function(hoteldata){
                		return hoteldata.getRawData()
                	}
                }
            })
             .when('/search', {
                templateUrl: '/components/search/search.html',
                controller: 'search'
            })
    })