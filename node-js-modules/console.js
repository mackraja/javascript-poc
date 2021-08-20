/**
 * Executing program in NodeJS
 * 
 * $ node 01_console.js
 */

//Example:  Simple Console 
console.log('Hello World!');   

// Example: Formatted Text
console.log('Hello \t', 'World!');   

// Example: Warning Console
const msg = 'Warning:';  
console.warn(`${msg} Something went wrong here.`);

// Example: Error Console
const err = 'Error:'; 
console.error(`${err} This is an example of error Message !`);   

// Example: Table Format
console.table({ firstName: 'Monty', lastName: 'Khanna' });
