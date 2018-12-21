angular.module('app', ['header', 'home', 'ngRoute'])
    .service('login', function($http) {

        this.getUser = function() {
            return this.user
        }

        this.setUser = function(data) {
            this.user = data
        }

        this.userIsloggedIn = async function() {

                await $http({
                    method: 'GET',
                    url: '/api/user'
                }).then((response) => {
                    if (response) {
                        this.setUser(true)
                    }
                })
            }
            this.userIsloggedIn()
    })