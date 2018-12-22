angular.module('app', ['header', 'home', 'ngRoute'])
    .service('login', function($http) {

        this.getUser = function() {
            return this.user
        }

        this.setUser = function(data) {
            this.user = data
        }

        this.userIsloggedIn = async function() {

            return await $http({
                method: 'GET',
                url: '/api/user'
            })
        }

    })