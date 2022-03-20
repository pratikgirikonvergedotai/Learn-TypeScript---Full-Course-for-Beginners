// number, string, boolean, tuple, union
let numberVariable: number = 1
let stringVariable: string = "typescript"
let booleanVariable: boolean = true
let tupleVariable: [number, string] = [1, "1"]
let unionVariable: (number | string) = 1  // can hold both number and string


// array 
// 1st way
let fruits: string[]
fruits = ['Apple', 'Orange', 'Banana']

// 2nd way
let ids: Array<number>
ids = [23, 34, 100, 124, 44]



// enum
// by default it starts with zero . 
// but we can make start from any number.
// we can assign any number to any enums

enum enumVariable{
    firstVariable, // 0
    secondVariable // 1
}

// any type
let something: any = "Hello World!";


// void type
function sayHi(): void { 
    console.log('Hi!')
}

// never type
function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
}


// function
function Sum(x: number, y: number) : number {
    return x + y;
}


// interface
interface User{
    name : string,
    age : number
}

let user:User = {
    name : "typescript",
    age : 1
}




// class
// we can make variables and functions inside class private, public, protected. by default public
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}


// generics
function newGenericType<thisCanbeAnything>(Number: thisCanbeAnything):thisCanbeAnything{
    return Number;
}

let new1 = newGenericType(1)
console.log(new1)


let new2 = newGenericType("1")
console.log(new2)


// setting up default generic type
function newObject<defaultGenericType extends Object>(newobject: defaultGenericType):defaultGenericType{
    return newobject
}

// arrow function way to write generic 
let n = <T>(n1: T):T => {
    return n1
}


// interface of generic type. 
interface genericType<T>{
    n : number
    d : T
}



// using generic after defing it . we have to pass the type in generic 
let W: genericType<string> = {
    n: 1,
    d: "1"
}

// passing multiple data types in generic
interface u<T, V>{
    n : T,
    x : V
}

// define custom types

type ID = number

let rollNumber: ID = 1



// changing type of variable
let n1: any = "1"
let n2 = n1 as number



// Typescript doesn't know about mark up
const someElement = document.querySelector(".foo") as HTMLInputElement 
console.log('Some Element', someElement.value)




const someElement1 = document.querySelector(".foo") 

someElement1.addEventListener('blur', event => {
    const target = event.target as HTMLInputElement
    console.log("event", target.value)
})
