/*
By default, the sort method sorts elements alphabetically (lexicographic sort) 
To sort numerically just add a new method which handles numeric sorts
*/

// sorting an array of strings in asc order
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort();
console.log(animals); // ['ant', 'bee', 'cat', 'dog', 'elephant']


// sorting an array of strings in desc order
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort().reverse();
console.log(animals); // ['elephant', 'dog', 'cat', 'bee', 'ant']


// sorting an array of strings with mixed cases
let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'ant'];
mixedCaseAnimals.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
});
console.log(animals); // ['ant', 'bee', 'Cat', 'dog', 'Elephant']


// Sorting an array of strings with non-ASCII characters
let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort((a, b) => a.localeCompare(b));
console.log(animaux); // ['abeille', 'chat', 'écureuill', 'zèbree']


// Sorting an array of numbers in asc order
let scores = [9, 80, 10, 20, 5, 70];
scores.sort((a, b) => a - b);
console.log(scores); // [5, 9, 10, 20, 70, 80]


// Sorting an array of numbers in desc order
let scores = [9, 80, 10, 20, 5, 70];
scores.sort((a, b) => b - a);
console.log(scores); // [80, 70, 20, 10, 9, 5]


// Sorting an array of objects by a numeric property
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort((x, y) => x.salary - y.salary);
console.table(employees);
/*
[
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"},
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"}
];
*/


// Sorting an array of objects by a string property
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
});
console.table(employees);
/*
[
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},    
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"}
];
*/


// Sorting an array of objects by a date property
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
employees.sort(function (x, y) {
    let a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});
console.table(employees);
/*
[
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
*/