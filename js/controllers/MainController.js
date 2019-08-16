app.controller('MainController', ['checkoutService', '$scope', function(checkoutService, $scope) {
    var self = this
    var count = checkoutService.get() ? JSON.parse(checkoutService.get()).length : 0
    $scope.cart_count = count
    self.checkouted = false
    self.addToCart = function(item) {
        var newItem = checkoutService.addToCart(item)
        newItem ? $scope.cart_count += 1 : null
    }
    self.checkout = function() {
        checkoutService.remove()
        self.checkouted = true
        $scope.cart_count = 0
    }
}])