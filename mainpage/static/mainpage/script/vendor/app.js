
// Declare app level module which depends on views, and components
var app=angular.module('myApp', ['ui.router','restangular','ngCookies','ngSanitize','vAccordion', 'angularUtils.directives.dirPagination']);
app.run(
  function($http, $cookies) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
        // Add the following two lines
        $http.defaults.xsrfCookieName = 'csrftoken';
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    });
app.config(function(RestangularProvider, $stateProvider, $urlRouterProvider,paginationTemplateProvider){
    $stateProvider
        .state('main',{
            url:"/",
            views:{
                '@':{
                   templateUrl:'/partials/main.html'
                },
                'left@main':{
                    templateUrl:'/views/afisha.html',
                    controller: afishaCtrl
                             },
                'centr@main':{
                    templateUrl:'/views/news.html',
                    controller: newsCtrl
                },
                'right@main':{
                    templateUrl:'/views/vk.html'}
            }
    })
    .state('discography', {
            url:"/discography",
            views:{
                '@':{
                   templateUrl:'/partials/main.html'
                },
                'left@discography':{
                    templateUrl:'/views/afisha.html',
                    controller: afishaCtrl
                },
                'centr@discography':{
                    templateUrl:'/partials/disco.html',
                    controller:albumsCtrl},

                'right@discography':{
                    templateUrl:'/views/vk.html'}
            }
        })
        .state('discodetail', {
            url:"/discography/:pk",
            views:{
                '@':{
                   templateUrl:'/partials/main.html'
                },
                'left@discodetail':{
                    templateUrl:'/views/afisha.html',
                    controller: afishaCtrl
                },
                'centr@discodetail':{
                    templateUrl:'/partials/disco_detail.html',
                    controller: function ($scope, Restangular,$sanitize,$stateParams, $sce) {
                        $scope.trustSource = function(source) {
                             return $sce.trustAsResourceUrl('/files/media/' + source)};
                    var slugy=$stateParams.pk;
                    console.log(slugy);
                    Restangular.all("audio/").getList().then(function(data){
                    $scope.tracks=_.filter(data,{'albums':slugy});
                        console.log($scope.tracks);
    });
                     Restangular.all("albums/").getList().then(function(data){
                    $scope.albums=_.filter(data,{'pk':slugy});
                        console.log($scope.albums);
    });
                    }
                },

                'right@discodetail':{
                    templateUrl:'/views/vk.html'}
            }
        })

    .state('biography', {
           url:"/biography",
           templateUrl:'/partials/bio.html'
    })
    .state('foto-video', {
           url:"/foto-video",
           templateUrl:'/partials/foto-video.html',
           controller:fvCtrl
    })

        .state('details',{
            url:'/foto-video/:pk',
            templateUrl:'/partials/fvdetails.html',
            controller: function ($scope, Restangular,$sanitize,$stateParams) {
                    var slugy=$stateParams.pk;
                    console.log(slugy);
                    Restangular.all("image/").getList().then(function(data){
                    $scope.fotos=_.filter(data,{'gallery':slugy});
                        console.log($scope.fotos);
    });}
        })

    .state('admin', {
           url:"/admin",
           templateUrl:'/partials/admin.html'
    });
$urlRouterProvider.otherwise("/");
    RestangularProvider.setBaseUrl('http://127.0.0.1:8000/crud/');
});

function afishaCtrl($scope, Restangular,$sanitize) {
  $scope.events=Restangular.all("afisha/").getList().$object;
}

function newsCtrl($scope, Restangular,$sanitize) {
    $scope.pageSize = 1;
    $scope.currentPage = 1;
    $scope.news = Restangular.all("news/").getList().$object;
}

function albumsCtrl($scope, Restangular,$sanitize) {
  $scope.albums = Restangular.all("albums/").getList().$object;}

function fvCtrl($scope, Restangular,$sanitize) {
    $scope.models = Restangular.all("gallery/").getList().$object;
    $scope.fotosq = Restangular.all("image").getList().$object;}
