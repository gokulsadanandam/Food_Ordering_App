/**
* Home Module
*
* Description
*/
angular.module('home', ['slickCarousel'])
		.service('data', function(){
			
			this.images = [{
        url: '/assets/images/image1.jpg',
        name: "Chai Kings",
        cuisine : "Indian,Vegetarian"
    }, {
        url: '/assets/images/image2.jpg',
        name: "Sangeetha Restaurant",
        cuisine : "Indian,Vegetarian"        
    }, {
        url: '/assets/images/image3.jpg',
        name: "Saravana Bhavan",
        cuisine : "Indian,Vegetarian"
    }, {
        url: '/assets/images/image4.jpg',
        name: "Dine In",
        cuisine : "Indian,Vegetarian"
    }, {
        url: '/assets/images/image5.jpg',
        name: "Eat Out",
        cuisine : "Indian,Vegetarian"
    }, {
        url: '/assets/images/image6.jpg',
        name: "Family Diner",
        cuisine : "Indian,Vegetarian"
    }]


			this.getImages = function(){
				return this.images
			}


		})
		.controller('home', function($scope,data){
			$scope.images = data.getImages()
		})