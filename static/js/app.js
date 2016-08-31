var app = angular.module('myApp', ['ngRoute', 'ngResource']);
console.log('it\'s work');

// ROUTES
app.config(function($routeProvider) {
    $routeProvider

    .when('/booksapp', {
        templateUrl: 'static/pages/books.html',
        controller: 'bookController'
    })
});

// SERVICES
app.factory('booksList', ['$http', '$resource', function($http, $resource) {
    return $resource('/books/:id/',
        {id: '@id'},
        {
            'update': {
                method: 'PUT'
            },

            'query': {
                method: 'GET', isArray: true
            },

            save: {
                method: "POST"
            }
        })
    }]);


// CONTROLLERS
app.controller("bookController", [ '$scope', 'booksList', function ($scope, booksList) {
    booksList.query(function (data) {
        $scope.books = data;
        console.log(data);
    }),
        function(errors) {
            console.log(errors);
        }
}]);
