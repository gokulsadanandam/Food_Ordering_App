angular.module('app')
    .service('login', function($http) {

        this.getUser = function() {
            return this.user
        }

        this.setUser = function(data) {
            this.user = data
        }

        this.userIsloggedIn = function() {
            return $http({
                method: 'GET',
                url: '/api/user'
            })
        }
    })
    .service('hoteldata', function($http, $window) {

        this.getHotelData = function() {

            if (this.hotelData) {
                return this.hotelData
            } else {
                return JSON.parse($window.localStorage.getItem('hoteldata'))
            }

        }

        this.setHotelData = function(data) {
            this.hotelData = data
        }

        this.cacheData = function(data) {
            $window.localStorage.setItem('hoteldata', JSON.stringify(data))
            this.hotelData = data
        }

        this.getRawData = function() {
            $http({
                method: 'GET',
                url: '/api/data'
            }).then((data) => {
                this.cacheData(data.data)
            })
        }
    })
    .service('summary', function($window) {

        this.summary = new Array()

        this.setOrderSummary = function(data) {
            this.summary.push(data)
            if (JSON.parse($window.localStorage.getItem('summary'))) {
                let summary = JSON.parse($window.localStorage.getItem('summary'))
                summary.push(data)
                $window.localStorage.setItem('summary', JSON.stringify(summary))
            } else {
                $window.localStorage.setItem('summary', JSON.stringify(this.summary))
            }
        }

        this.getOrderSummary = function() {
            if(JSON.parse($window.localStorage.getItem('summary'))!=null){
                if (this.summary.length > JSON.parse($window.localStorage.getItem('summary')).length ) {
                    return this.summary
                }else{
                    return JSON.parse($window.localStorage.getItem('summary'))
                }
            } else {
                    return this.summary
            }

        }

    })