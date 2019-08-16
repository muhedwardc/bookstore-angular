app.controller('ViewController', ['bookService', '$routeParams', function(bookService, $routeParams) {
    var self = this
    self.id = $routeParams.id
    self.book = null
    self.error = null
    bookService.getBookById(self.id)
        .success(function(book) {
            return self.book = book
        })
        .catch(function(error) {
            return self.error = error
        })
}])