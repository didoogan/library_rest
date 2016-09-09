app.controller("CardListCtrl", ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cards/'
    })
    .then(function successCallback(response) {
        console.log('success');
        console.log(response);
        $scope.cards = response.data;
    }
    , function errorCallback(response) {
        console.log('error');
        console.log(response);

    });
}]);