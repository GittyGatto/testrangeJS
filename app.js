//example custom attributes
//console.log($("h1").attr("reply"));

//global namespace
/*var person = 'Max';
nikitasApp.person = person;
nikitasApp.logPerson();*/


//dependency injection

//not good, if person changes, methode has to change
/*var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;   
}

function logPerson (){
    var nils = new Person('nils', 'pukno');
    console.log(nils);
}

logPerson();*/


//better, dependency injection - german: parameterübergabe
/*
var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;   
}

function logPerson (person){
    console.log(person);
}

var nils = new Person('nils', 'pukno');
logPerson(nils);
*/




var app = angular.module('app', []);

app.controller('basicController', function() {
    
});

app.controller('playController', function($scope){
    
    //adding values to $scope    
    $scope.someValue = 'controller scope value';    
    $scope.anotherValue = 'barny';    
    $scope.getValues = function () {
        return 'return stuff';
    }    
    $scope.getValues();
    console.log($scope);    
});