var app = angular.module('app', []);

app.controller('controllerOne', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){
    
                $scope.myService = myService;

}]);

app.controller('controllerTwo', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){

                   $scope.myService = myService;

}]);

app.service('myService', function(){
    
    this.xxx = "yyyy";

});