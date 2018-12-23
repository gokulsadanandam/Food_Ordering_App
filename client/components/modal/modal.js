/**
* modal Module
*
* Description
*/
angular.module('modal', ['ngAnimate', 'ui.bootstrap'])
		.controller('modal', function($scope,summary ,$uibModalInstance,data){

			$scope.modaldata = data
			$scope.count = new Object()

			$scope.add = function(data){
			$scope.count[data.key] = ($scope.count[data.key] || 0) + 1
			$scope.cost = ($scope.cost || 0 ) + data.value
			}

			$scope.remove = function(data){
				if($scope.count[data.key]>0){
					$scope.count[data.key] = ($scope.count[data.key]) - 1
					$scope.cost = $scope.cost - data.value

				}
			}

			$scope.order = function(data){
				if(!angular.equals({}, $scope.count)){
				let order = new Object()
				order.name = data.Name
				order.status = "live"
				order.url = data.url
				order.cost = $scope.cost
				order.summary = new Array()
				for(items in data.items){
					if($scope.count[items]){
						order.summary.push([items,data.items[items],$scope.count[items]])
					}
				}
				summary.setOrderSummary(order)
			 	$uibModalInstance.close();
			}else{
                bootbox.alert("Select a Item");
			}
		}



		})