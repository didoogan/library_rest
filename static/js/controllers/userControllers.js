app.controller("SignupCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
    function ($scope, Author, $routeParams, $location, $window, $http, localStorageService) {

    $scope.signUp = function() {
        $http({
            method: 'POST',
            url: '/users/signup/',
            data: {
                username: $scope.login,
                password: $scope.password
            }
        })
        .then(function successCallback(response) {
            if(response.data.error) {
                $scope.error = response.data.error;
                return;
            }
            localStorageService.set('token', response.data.token);
            $scope.username = response.data.user;
            console.log(response.data.user);
            localStorageService.set('user', $scope.username);
            $window.location.href = '#authorsapp';
            $window.location.reload();
        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);

app.controller("NavbarCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
                      '$rootScope', function ($scope, Author, $routeParams, $location, $window, $http, localStorageService, $rootScope) {
    $rootScope.username = localStorageService.get('user');

    $scope.logOut = function() {
        localStorageService.clearAll();
        $window.location.reload();
        $scope.username = false;
        localStorage.setItem('message', "You successfully logged out.");
        $window.location.href = '#booksapp';
    };

    $scope.signIn = function() {
        $http({
            method: 'POST',
            url: '/users/signin/',
            data: {
                username: $scope.login,
                password: $scope.password
            }
        })
        .then(function successCallback(response) {
            if(response.data.error) {
                $scope.error = response.data.error;
                return;
            }
            localStorageService.set('token', response.data.token);
            $rootScope.username = response.data.user;
            console.log(response.data.user);
            localStorageService.set('user', $scope.username);
            $window.location.reload();
            localStorage.setItem('message', "You successfully logged in.");
            $window.location.href = '#cardsapp';
        }
        , function errorCallback(response) {
            console.log('error');

        });
    };
}]);
app.controller("ProfileCtrl", [ '$scope', 'Author','$routeParams','$location', '$window', '$http', 'localStorageService',
      'Upload', '$timeout','UserService', '$rootScope', function ($scope, Author, $routeParams, $location, $window, $http, localStorageService, Upload, $timeout, UserService, $rootScope) {
    // $scope.message = localStorage.getItem("message");
    // localStorage.setItem('message', "");
    // $scope
    $http({
            method: 'GET',
            url: '/users/profile/',
        })
        .then(function successCallback(response) {
            if(response.data.error) {
                $scope.error = response.data.error;
                return;
            }
            $scope.cards = response.data;
        }
        , function errorCallback(response) {
            console.log('error');

        });

        UserService.getMyUser()
        .then(function successCallback(response) {
            $scope.myUser = response.data;
            $scope.firstName = $scope.myUser.first_name;
            $scope.lastName = $scope.myUser.last_name;
            console.log($scope.myUser);
        }
        , function errorCallback(response) {
            console.log('error');
            console.log(response);

        });

    $scope.updateUser = function(file, errFiles) {
        var firstName = $scope.firstName;
        var lastName = $scope.lastName;
        var image  = $scope.image;
            Upload.upload({
                url: '/users/profile/change/',
                method: 'PUT',
                data: {
                    image: image,
                    first_name: firstName,
                    last_name: lastName
                }
            })
        .then(function(res)  { localStorage.setItem('message', "User successfully changed."); $window.location.href = '#cardsapp'; })
        .catch(function(req) { localStorage.setItem('message', "You should to fill out all fields"); $window.location.href = '#authorsapp/create';  })
        }


}]);

