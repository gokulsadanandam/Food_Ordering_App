angular.module('header', [])
    .controller('header', function($scope, login) {
        login.userIsloggedIn().then((data) => {
            if (data.data) {
                $scope.user = true
            } else {
                $scope.user = false
            }
        })

    })