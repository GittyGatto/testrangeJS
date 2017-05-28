var app = angular.module('app', []);

app.controller('controllerOne', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){

    

    var Person = function(name, age){
        this.age = age;
        this.name = name;
    };

    var personList = [];
    var bob = new Person('bob', 37);
    var sam = new Person('sam', 42);
    var bill = new Person('bill', 26);
    personList.push(bob, sam, bill);
    
    $scope.myService = myService;
    $scope.myService.personList = personList;

    $scope.addPerson = addPerson;
    $scope.delPerson = delPerson;
    $scope.editPerson = editPerson;

    function editPerson(person){
       
        $scope.name = person.name;
        $scope.age = person.age;
        console.log($scope);
    }
    
    function delPerson(person){
        var index = personList.indexOf(person);
        personList.splice(index, 1);
    }
    
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