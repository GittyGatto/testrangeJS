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

    $scope.inputField = false;
    $scope.newPerson = newPerson;
    $scope.addPerson = addPerson;
    $scope.delPerson = delPerson;
    $scope.editPerson = editPerson;

    function editPerson(person){ 
        $scope.name = person.person.name;
        $scope.age = person.person.age;
        $scope.inputField = true;
    }

    function delPerson(person){
        var index = personList.indexOf(person);
        personList.splice(index, 1);
    }

    function addPerson(){
        newPerson = new Person($scope.name, $scope.age);
        personList.push(newPerson);
        $scope.inputField = false;
    }

    function newPerson(){
        clearInputField();
        $scope.inputField = true;        
    }

    function clearInputField(){
        $scope.name = '';
        $scope.age = '';
    }

}]);

app.controller('controllerTwo', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService){

    $scope.myService = myService;

}]);

app.service('myService', function(){

    this.xxx = "yyyy";

});