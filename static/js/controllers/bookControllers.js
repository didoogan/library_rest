app.controller("BookList", [ '$scope', 'Book', '$http', '$window', 'localStorageService', 'Token', function ($scope, Book, $http, $window, localStorageService, Token) {
    Book.query(function (data) {
        $scope.books = data;
        $scope.bookDelete = function(id) {
            $http.delete('/books/'+id);
            $window.location.reload();
        }
    });
    // $scope.token = localStorageService.get('token');
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
            .then(function(res)  { $window.location.href = '#booksapp'; })
            .catch(function(req) { $window.location.href = '#booksapp/create';  });
            // console.log($scope.bookAuthors);
        };
        $scope.bookDelete = function(id) {
            $http.delete('/book/'+id)
            .then(function(res)  { $window.location.href = '#auhtorsapp'; })
            .catch(function(req) { $window.location.href = '#booksapp/create';  });
        }


}]);

app.controller("BookUpdateCtrl", [ '$scope', 'Author', 'Book', '$routeParams','$location', '$window', function ($scope, Author, Book, $routeParams, $location, $window) {
    $scope.myBook = Book.getBook({ id:$routeParams.id });
    $scope.allAuthors = Author.query();

    $scope.bookUpdate = function() {
        Book.update({ id:$scope.myBook.pk }, $scope.myBook)
        .then(function(res)  {  $window.location.href = '#authorsapp'; })
        .catch(function(req) { $window.location.href = '#authorsapp/create';  })
        // $location.path('booksapp');
        $window.location.href = '#authorsapp';
        };
    }]);
