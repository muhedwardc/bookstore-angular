app.controller('BookController', ['bookService', function(bookService) {
    var self = this
    self.list = null
    self.error = null

    bookService.getBooks()
        .success(function(books) {
            return self.list = books
        })
        .catch(function(error) {
            return self.error = error
        })
}])