app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/book.html'
        })
        .when('/book/:id', {
            templateUrl: 'pages/view.html'
        })
        .when('/checkout', {
            templateUrl: 'pages/checkout.html'
        })
        .otherwise({
            redirectTo : '/'
        })
})  