app.factory('Book', ['$http', '$resource', function($http, $resource) {
    return $resource('/books/:id/',
        {id: '@id'},
        {
            'update': {
                method: 'PUT'
            },

            'query': {
                method: 'GET', isArray: true
            },
            'getBook': {
                method: 'GET', isArray: false
            },

            save: {
                method: "POST"
            }
        })
    }]);
