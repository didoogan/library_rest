app.controller("AuthorList", [ '$scope', 'Author', '$http', '$window', function ($scope, Author, $http, $window) {
    Author.query(function (data) {
        $scope.authors = data;
        console.log(data);


    });
    $scope.deleteAuthor = function(id) {
            $http.delete('/authors/'+id);
             $window.location.reload();
        }
}]);

app.controller("AuthorDetail", [ '$scope', 'Author','$routeParams', 'Book', function ($scope, Author, $routeParams, Book) {
    Author.getAuthor({id: $routeParams.id}, function(data) {
        $scope.author = data;
        $scope.list = [];
        console.log(data.book);
        for (var value of data.book) {
            Book.getBook({'id': value}, function (book) {
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
        .catch(function(req) { $window.location.href = '#authorsapp/create';  })
    };

}]);

app.controller("AuthorUpdateCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', function ($scope, Author, $routeParams, $location, $window) {
    $scope.author = Author.getAuthor({ id:$routeParams.id });

    $scope.authorUpdate = function() {
        Author.update({ id:$scope.author.pk }, $scope.author);
        // $scope.author.$update()
        // .then(function(res)  {  $window.location.href = '#authorsapp'; })
        // .catch(function(req) { $window.location.href = '#authorsapp/create';  })
        $location.path('authorsapp');
        $window.location.reload();
        };
    }]);





