app.controller("BookList", [ '$scope', 'Book', function ($scope, Book) {
    Book.query(function (data) {
        $scope.books = data;
        console.log(data);
    });
}]);

app.controller("BookDetail", [ '$scope', 'Book','$routeParams', function ($scope, Book, $routeParams) {
    Book.getBook({id: $routeParams.id}, function(data) {
        $scope.book = data;
    });
}]);

app.controller("BookCreate", [ '$scope', 'Book','$routeParams', function ($scope, Book, $routeParams) {
    Book.getBook(function(data) {
        $scope.book = data;
    });
}]);
