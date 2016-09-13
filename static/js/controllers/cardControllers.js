app.controller("CardListCtrl", ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cards/'
    })
    .then(function successCallback(response) {
        $scope.cards = response.data;
    }
    , function errorCallback(response) {
        console.log('error');
        console.log(response);

    });
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
    }
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

