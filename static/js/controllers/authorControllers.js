app.controller("AuthorList", [ '$scope', 'Author', function ($scope, Author) {
    Author.query(function (data) {
        $scope.authors = data;
    });
}]);

app.controller("AuthorDetail", [ '$scope', 'Author','$routeParams', 'Book', function ($scope, Author, $routeParams, Book) {
    Author.getAuthor({id: $routeParams.id}, function(data) {
        $scope.author = data;
        $scope.list = [];
        console.log(data.book);
        for (var index of data.book) {
            Book.getBook({'id': index}, function (book) {
            $scope.list.push(book);

            });
        }

    });
}]);

app.controller("AuthorCreate", [ '$scope', 'Author','$routeParams', function ($scope, Author, $routeParams) {
    Author.getAuthor(function(data) {
        $scope.book = data;
    });
}]);
