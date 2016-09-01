app.controller("AuthorList", [ '$scope', 'Author', function ($scope, Author) {
    Author.query(function (data) {
        $scope.authors = data;
    });
}]);

app.controller("AuthorDetail", [ '$scope', 'Author','$routeParams', function ($scope, Author, $routeParams) {
    Author.getAuthor({id: $routeParams.id}, function(data) {
        $scope.author = data;
    });
}]);

app.controller("AuthorCreate", [ '$scope', 'Author','$routeParams', function ($scope, Author, $routeParams) {
    Author.getAuthor(function(data) {
        $scope.book = data;
    });
}]);
