app.controller("BookList", [ '$scope', 'Book', '$http', '$window', function ($scope, Book, $http, $window) {
    Book.query(function (data) {
        $scope.books = data;
        console.log(data);
        $scope.bookDelete = function(id) {
            $http.delete('/books/'+id);
            $window.location.reload();
        }
    });
}]);

app.controller("BookDetail", [ '$scope', 'Book','$routeParams', function ($scope, Book, $routeParams) {
    Book.getBook({id: $routeParams.id}, function(data) {
        $scope.book = data;
    });
}]);

app.controller("BookCreateCtrl", [ '$scope', 'Author', 'Book', '$routeParams','$window', function ($scope, Author, Book, $routeParams, $window) {
        $scope.allAuthors = Author.query();
        $scope.newBook = new Book();
        $scope.bookSave = function() {
            console.log($scope.newBook);
            $scope.newBook.$save()
            .then(function(res)  {  $window.location.href = '#booksapp'; })
            .catch(function(req) { $window.location.href = '#booksapp/create';  })
            // console.log($scope.bookAuthors);
        };
        $scope.bookDelete = function(id) {
            $http.delete('/book/'+id);
            $window.location.reload();
        }


}]);