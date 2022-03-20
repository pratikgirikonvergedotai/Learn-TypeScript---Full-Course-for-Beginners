// number, string, boolean, tuple, union
var numberVariable = 1;
var stringVariable = "typescript";
var booleanVariable = true;
var tupleVariable = [1, "1"];
var unionVariable = 1; // can hold both number and string
// array 
// 1st way
var fruits;
fruits = ['Apple', 'Orange', 'Banana'];
// 2nd way
var ids;
ids = [23, 34, 100, 124, 44];
// enum
// by default it starts with zero . 
// but we can make start from any number.
// we can assign any number to any enums
var enumVariable;
(function (enumVariable) {
    enumVariable[enumVariable["firstVariable"] = 0] = "firstVariable";
    enumVariable[enumVariable["secondVariable"] = 1] = "secondVariable"; // 1
})(enumVariable || (enumVariable = {}));
// any type
var something = "Hello World!";
// void type
function sayHi() {
    console.log('Hi!');
}
// never type
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// function
function Sum(x, y) {
    return x + y;
}
var user = {
    name: "typescript",
    age: 1
};
// class
// we can make variables and functions inside class private, public, protected. by default public
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
// generics
function newGenericType(Number) {
    return Number;
}
var new1 = newGenericType(1);
console.log(new1);
var new2 = newGenericType("1");
console.log(new2);
// setting up default generic type
function newObject(newobject) {
    return newobject;
}
// arrow function way to write generic 
var n = function (n1) {
    return n1;
};
// using generic after defing it . we have to pass the type in generic 
var W = {
    n: 1,
    d: "1"
};
var rollNumber = 1;
// changing type of variable
var n1 = "1";
var n2 = n1;
