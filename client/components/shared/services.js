angular.module('app')
    .service('login', function($http) {

        this.getUser = function() {
            return this.user
        }

        this.setUser = function(data) {
            this.user = data
        }

        this.userIsloggedIn = function() {
            return  $http({
                method: 'GET',
                url: '/api/user'
            })
        }
    })
    .service('hoteldata', function($http,$window) {

        this.getHotelData = function() {
            
            if(this.hotelData){
                return this.hotelData                
            }else{
                return JSON.parse($window.localStorage.getItem('hoteldata'))
            }

        }

        this.setHotelData = function(data) {
            this.hotelData = data
        }

        this.cacheData = function(data){
            $window.localStorage.setItem('hoteldata',JSON.stringify(data))
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
    .service('summary', function(){
            
        this.summary = new Array()

        this.setOrderSummary = function(data){
            this.summary.push(data)
        }

        this.getOrderSummary = function(){
            return this.summary
        }   

    })



