app.service('bookService', ['$http', function($http) {
    this.getBooks = function() {
        return $http.get('http://192.168.123.233/intern-api/list.php')
    }

    this.getBookById = function(id) {
        return $http.get('http://192.168.123.233/intern-api/detail.php?id=' + id)
    }
}])