/**
 * orders Module
 *
 * Description
 */
angular.module('orders', [])
    .service('pagination', function() {
        this.items = Array()
        this.itemsinpage = Array()
        this.index = Number

        this.pagination = (number, data) => {
            this.itemsinpage = []
            this.items = []
            this.itemsperpage = number
            this.index = data.length
            this.residue = data.slice(this.index - (this.index % number), this.index)

            data.forEach((values) => {
                number = number - 1;
                this.items.push(values)

                if (number == 0) {
                    this.itemsinpage.push(this.items)
                    this.items = []
                    number = this.itemsperpage
                }
            })
            if (this.residue.length > 0) {
                this.itemsinpage.push(this.residue)
            }
            return this.itemsinpage
        }
    })
    .controller('orders', function($scope, summary, pagination) {
        $scope.currentpage = 0
        $scope.number = 3
        $scope.orders = summary.getOrderSummary()
        $scope.itemsinpage = pagination.pagination($scope.number, $scope.orders)
        $scope.updatepage = function(page) {
            $scope.currentpage = page
        }

    })