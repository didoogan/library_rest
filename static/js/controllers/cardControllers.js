app.controller("CardListCtrl", ['$scope', '$http', '$rootScope', 'UserService', '$window', function($scope, $http, $rootScope, UserService, $window) {
    $scope.message = localStorage.getItem("message");
    localStorage.setItem('message', "");
    if ($rootScope.username === 'librarian') {
        $http({
            method: 'GET',
            url: '/users/'
        })
        .then(function successCallback(response) {
            $scope.users = response.data;
        }
        , function errorCallback(response) {
            console.log('error');
            console.log(response);

        });
    } else {
        $http({
            method: 'GET',
            url: '/cards/'
        })
        .then(function successCallback(response) {
            $scope.cards = response.data;
            UserService.getMyUser()
            .then(function successCallback(response) {
            $scope.myUser = response.data;
        }
        , function errorCallback(response) {
            console.log('error');
            console.log(response);

        });
        }
        , function errorCallback(response) {
            console.log(response);
        });


    }
    // $scope.userCard = function (id) {
    //     $http({
    //         method: 'POST',
    //         url: '/users/profile/',
    //         data: {
    //             userId: id
    //         }
    //     })
    //     .then(function successCallback(response) {
    //         console.log(response);
    //         }
    //     , function errorCallback(response) {
    //         console.log('error');
    //
    //     });
    // }
}]);

app.controller("IsNotTakenBooksCtrl", ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cards/isnottakenbooks/'

    })
    .then(function successCallback(response) {
        $scope.isNotTakenbooks = response.data;
        }
    , function errorCallback(response) {
        console.log('error');
        console.log(response);

    });

        $scope.createCard = function() {
            $http({
                method: 'POST',
                url: '/cards/create/',
                data: {
                    books: $scope.books
                }
            })
            .then(function successCallback(response) {
                console.log($scope.books);
                }
            , function errorCallback(response) {
                console.log('error');

            });
    };
        $scope.createCardWithBook = function() {
            $http({
                method: 'POST',
                url: '/cards/create/',
                data: {
                    books: $scope.books
                }
            })
            .then(function successCallback(response) {
                console.log($scope.books);
                }
            , function errorCallback(response) {
                console.log('error');

            });
    }
}]);

app.controller("CardUpdateCtrl", ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cards/update/'
    })
    .then(function successCallback(response) {
        console.log('success');
        console.log(response);
        $scope.userCards = response.data;
    }
    , function errorCallback(response) {
        console.log('error');
        console.log(response);

    });

    $scope.cardUpdate = function() {
        $http({
            method: 'POST',
            url: '/cards/update/',
            data: {
                books: $scope.books
            }
        })
        .then(function successCallback(response) {
            console.log($scope.books);
            }
        , function errorCallback(response) {
            console.log('error');

        });
    }
}]);


app.controller("LibrarianCtrl", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http({
        method: 'GET',
        url: '/users/profile/?user_id=' + $routeParams.id
    })
    .then(function successCallback(response) {
        $scope.cards = response.data;
    }
    , function errorCallback(response) {
        console.log('error');
        console.log(response);

    });

}]);



