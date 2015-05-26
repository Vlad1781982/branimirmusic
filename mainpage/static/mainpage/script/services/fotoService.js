
app.factory('Gallery', ['$resource', function($resource) {
    return $resource('/crud/gallery/',{}
    )
}] );
app.factory('Images', ['$resource', function($resource) {
    return $resource('/crud/image/', {})
}] );