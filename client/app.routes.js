angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/components/home/home.html',
                controller: 'home',
            })
            .when('/search', {
                templateUrl: '/components/search/search.html',
                controller: 'search',
                resolve : {
                    details : function(hoteldata){
                        return hoteldata.getRawData()
                    }
                }
            })
             .when('/orders', {
                templateUrl: '/components/orders/orders.html',
                controller: 'orders'
            })
    })