app.controller("BookList", [ '$scope', 'Book', '$http', '$window', 'localStorageService', 'Token', function ($scope, Book, $http, $window, localStorageService, Token) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");

    Book.query(function (data) {
        $scope.books = data;
        $scope.bookDelete = function(id) {
            $http.delete('/books/'+id)
            .then(function(res)  { localStorage.setItem('message', "Book successfully deleted."); $window.location.href = '#booksapp/'; })
            .catch(function(req) { $window.location.href = '#booksapp/create';  });
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
        // $scope.message = localStorage.getItem("message");
        // localStorage.setItem('message', "");
        $scope.allAuthors = Author.query();
        $scope.newBook = new Book();
        $scope.bookSave = function() {
            console.log($scope.newBook);
            $scope.newBook.$save()
            // .then(function(res)  { $scope.message = "Book successfuly created."; $window.location.href = '#booksapp'; })
            .then(function(res)  { localStorage.setItem('message', "Book successfully created."); $window.location.href = '#booksapp'; })
            .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields."); $window.location.href = '#booksapp/create';  });
            // console.log($scope.bookAuthors);
        };


}]);

app.controller("BookUpdateCtrl", [ '$scope', 'Author', 'Book', '$routeParams','$location', '$window', function ($scope, Author, Book, $routeParams, $location, $window) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");
    $scope.myBook = Book.getBook({ id:$routeParams.id });
    $scope.allAuthors = Author.query();

    $scope.bookUpdate = function() {
        Book.update({ id:$scope.myBook.pk }, $scope.myBook)
        // .then(function(res)  { localStorage.setItem('message', "Book successfully changed."); $window.location.href = '#authorsapp'; })
        // .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields."); $window.location.href = '#authorsapp/create';  })
        // $location.path('booksapp');
        localStorage.setItem('message', "Book successfully changed.");
        $window.location.href = '#booksapp';
        };
    }]);
