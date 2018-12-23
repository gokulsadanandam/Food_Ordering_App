angular.module('app')
    .service('hoteldata', function($http, $window) {

        this.getRawData = function() {
            return $http({
                method: 'GET',
                url: '/api/data'
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
            if (JSON.parse($window.localStorage.getItem('summary')) != null) {
                if (this.summary.length > JSON.parse($window.localStorage.getItem('summary')).length) {
                    return this.summary
                } else {
                    return JSON.parse($window.localStorage.getItem('summary'))
                }
            } else {
                return this.summary
            }

        }

    })