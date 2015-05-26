app.controller('testController', ['$scope', 'Restangular', function($scope, $state, $stateParams, Restangular){
     $scope.models=Restangular.all('https://api.worldoftanks.ru/wot/clan/info/?application_id=demo&clan_id=27603').getList().$object;
    console.log($scope.models);
    $scope.images=Restangular.all('https://api.worldoftanks.ru/wot/clan/info/?application_id=demo&clan_id=27603').getList().$object;
    //$scope.id= $stateParams.slug
}]);
//app.controller('imgCtrl', ['$scope', function($scope, $state, $stateParams){
    //$scope.id= $stateParams.slug
//}]);
