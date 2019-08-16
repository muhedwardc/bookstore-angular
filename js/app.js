var app = angular.module('Bookstore', ['ngRoute'])

app.directive('bookItem', function() {
    return {
        templateUrl: 'directives/book-item.html'
    }
})

app.directive('bookCheckout', function() {
    return {
        templateUrl: 'directives/book-checkout.html'
    }
})