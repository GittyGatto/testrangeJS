var app = angular.module('app', []);

app.controller('controllerOne', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){

    $scope.myService = myService;
    $scope.myService.personList = personList;

    var Person = function(name, age){
        this.age = age;
        this.name = name;
    };

    var personList = [];

    var bob = new Person('bob', 32);
    var sam = new Person('sam', 42);

    personList.push(bob);
    personList.push(sam);

    $scope.addPerson = addPerson;

    function addPerson(){
        newPerson = new Person($scope.name, $scope.age);
        personList.push(newPerson);
    }
}]);

app.controller('controllerTwo', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){

    $scope.myService = myService;

}]);

app.service('myService', function(){

    this.xxx = "yyyy";

});