app.controller('CheckoutController', ['checkoutService', '$scope', function (checkoutService, $scope) {
    var self = this
    self.list = checkoutService.get() ? JSON.parse(checkoutService.get()) : []
}])