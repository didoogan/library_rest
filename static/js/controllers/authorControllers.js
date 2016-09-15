app.controller("AuthorList", [ '$scope', 'Author', '$http', '$window', function ($scope, Author, $http, $window) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");
    Author.query(function (data) {
        $scope.authors = data;


    });
    $scope.deleteAuthor = function(id) {
            $http.delete('/authors/'+id)
            .then(function(res)  { localStorage.setItem('message', "Author successfully deleted."); $window.location.href = '#authorsapp/'; })
            .catch(function(req) { localStorage.setItem('message', "Something really wrong."); $window.location.href = '#authorsapp/create';  });
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

app.controller("AuthorCreateCtrl", [ '$scope', 'Author', 'Book', '$routeParams','$window', function ($scope, Author, Book, $routeParams, $window) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");

    $scope.needBook = false;
    $scope.counter = 0;
    $scope.modelsNames = [];
    var modelName;
    var titles = [];
    // $scope.trigger = function() {
    //     $scope.needBook = true;
    //     $scope.needBook = !$scope.needBook;
    //     console.log($scope.needBook);
    // };
    $scope.addInput = function() {
      if(!$scope.needBook) {
          $scope.needBook = true;
      }
      $scope.counter++;
      modelName = $scope.counter + "model";
      $scope.modelsNames.push(modelName);
      console.log($scope.modelsNames);
    };

    $scope.saveAuthor = function() {
        var newAuthor = new Author();
        newAuthor.first_name = $scope.firstName;
        newAuthor.last_name = $scope.lastName;
        newAuthor.$save()
        .then(function(res)  { localStorage.setItem('message', "Author successfully created."); $window.location.href = '#authorsapp'; })
        .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields"); $window.location.href = '#authorsapp/create';  })
    };
    // $scope.saveAuthorWithBook = function() {
    //         var newAuthor = new Author();
    //         newAuthor.first_name = $scope.firstName;
    //         newAuthor.last_name = $scope.lastName;
    //         newAuthor.needBook = true;
    //         newAuthor.bookTitle = $scope.title;
    //         newAuthor.$save()
    //         .then(function(res)  {  $window.location.href = '#authorsapp'; })
    //         .catch(function(req) { $window.location.href = '#authorsapp/create';  })
    //     };
    $scope.saveAuthorWithBook = function() {
        var inputs = angular.element('.grab-input');
        for(var i=0; i < inputs.length; i++) {
            titles.push(inputs[i].value)
        }

        var newAuthor = new Author();
        newAuthor.first_name = $scope.firstName;
        newAuthor.last_name = $scope.lastName;
        newAuthor.needBook = true;
        newAuthor.bookTitles = titles;
        newAuthor.$save()
        .then(function(res)  { localStorage.setItem('message', "Author successfully created."); $window.location.href = '#authorsapp'; })
        .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields"); $window.location.href = '#authorsapp/create';  })

     };

}]);

app.controller("AuthorUpdateCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', function ($scope, Author, $routeParams, $location, $window) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");

    $scope.author = Author.getAuthor({ id:$routeParams.id });

    $scope.authorUpdate = function() {
        Author.update({ id:$scope.author.pk }, $scope.author)
        // .then(function(res)  { localStorage.setItem('message', "Author successfully created."); $window.location.href = '#authorsapp'; })
        // .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields"); $window.location.href = '#authorsapp/create';  })
        localStorage.setItem('message', "Author successfully changed.");
        $location.path('authorsapp');
        };
    }]);





