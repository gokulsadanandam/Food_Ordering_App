/**
* Search Module
*
* Description
*/
angular.module('search', ['ngAnimate'])
		.filter('sort',function(){
			return function(data,param){
			if(param=="rating"){
				return data.sort(function(a,b){
					if(a.Rating>b.Rating){
						return -1
					}else{
						return 1
					}
					return 1
				})
			}else{
				return data.sort(function(a,b){
					if(a.Name>b.Name){
						return 1
					}else{
						return -1
					}
					return 1
				})
			}	
			}
		})
	.controller('search', function($scope,hoteldata,$filter){

		$scope.details = hoteldata.getHotelData()
		$scope.query = ''
		$scope.flag = false
		$scope.option = "rating"

		$scope.sort = function(){
			$scope.searchdata = $filter('sort')($scope.searchdata,$scope.option)
		}


		$scope.search = function(){
		$scope.searchdata = []
			if($scope.query.length>2){
				$scope.details.forEach((values)=>{
					if(values.Name.toLowerCase().includes($scope.query.toLowerCase())){
							$scope.searchdata.push(values)
					}
					else{
					for(keys in values.items){
						if(keys.toLowerCase().includes($scope.query.toLowerCase())){
							$scope.searchdata.push(values)
						}
					}
					}

				})
				$scope.searchdata = $filter('sort')($scope.searchdata,$scope.option)
			}
		}



	})