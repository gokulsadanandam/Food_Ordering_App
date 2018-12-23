/**
 * Home Module
 *
 * Description
 */
angular.module('home', ['slickCarousel', 'ngAnimate', 'ui.bootstrap'])
    .service('data', function() {
        this.images = [{
            'Cuisine': 'Continental',
            'Name': 'Chai Kings',
            'Rating': 2.7,
            'url': '/assets/images/image5.jpg',
            'items': {
                'naan': 25,
                'dosa': 100,
                'chappati': 30,
                'idly': 88
            },
            'location': 'chennai',
            'Address': '18, New Road,Chennai'
        }, {
            'Cuisine': 'American',
            'Name': 'Sangeetha',
            'Rating': 4.7,
            'url': '/assets/images/image1.jpg',
            'items': {
                'burger': 45,
                'naan': 88,
                'chappati': 30,
                'biriyani': 90
            },
            'location': 'chennai',
            'Address': '5, Mahatma Gandhi Road,Chennai'
        }, {
            'Cuisine': 'Indian',
            'Name': 'Saravana Bhavan',
            'Rating': 4,
            'url': '/assets/images/image3.jpg',
            'items': {
                'chappati': 90,
                'dosa': 30,
                'idly': 67,
                'pizza': 100
            },
            'location': 'chennai',
            'Address': '5, Mahatma Gandhi Road,Chennai'
        }, {
            'Cuisine': 'American',
            'Name': 'Dine In',
            'Rating': 3,
            'url': '/assets/images/image2.jpg',
            'items': {
                'dosa': 45,
                'biriyani': 30,
                'idly': 100,
                'pizza': 67
            },
            'location': 'chennai',
            'Address': '5, Mahatma Gandhi Road,Chennai'
        }, {
            'Cuisine': 'Indian',
            'Name': 'Eat Out',
            'Rating': 4,
            'url': '/assets/images/image3.jpg',
            'items': {
                'burger': 45,
                'dosa': 88,
                'biriyani': 45,
                'idly': 67
            },
            'location': 'chennai',
            'Address': '5, Mahatma Gandhi Road,Chennai'
        }]

        this.breakpoints = [{
            'breakpoint': 1025,
            'settings': {
                'slidesToShow': 4,
                'slidesToScroll': 1
            }
        }, {
            'breakpoint': 1000,
            'settings': {
                'slidesToShow': 3,
                'slidesToScroll': 1
            }
        }, {
            'breakpoint': 480,
            'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1
            }
        }]


        this.getImages = function() {
            return this.images
        }

        this.getBreakPoints = function(){
            return this.breakpoints
        }


    })
    .controller('home', function($scope, data, $uibModal) {
        $scope.images = data.getImages()
        $scope.breakpoints = data.getBreakPoints()

        $scope.open = function(data) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/components/modal/modal.html',
                controller: 'modal',
                size: 'md',
                resolve: {
                    data: function() {
                        return data;
                    }
                }
            });

            modalInstance.result.then(function() {
                bootbox.alert("Your Order is Being Processed!");
            });

        }



    })