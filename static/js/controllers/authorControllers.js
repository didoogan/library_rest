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

app.controller("AuthorCreateCtrl", [ '$scope', 'Author','$routeParams','$window', function ($scope, Author, $routeParams, $window) {
    $scope.saveAuthor = function() {
        var newAuthor = new Author();
        newAuthor.first_name = $scope.firstName;
        newAuthor.last_name = $scope.lastName;
        newAuthor.$save()
        .then(function(res)  {  $window.location.href = '#authorsapp'; })
        .catch(function(req) { console.log('FUCK error' ) })
    };

}]);


