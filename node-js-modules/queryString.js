/**
 * Query-String
 * 
 * The Node.js Query String provides methods to deal with query string. 
 * It can be used to convert query string into JSON object and vice-versa.
 * 
 */

/**
 * Query-String parse() 
 * 
 */
 querystring = require('querystring');  
 const obj = querystring.parse('name=Monty&address=India');  
 console.log(obj); 
 // Output:  
 // [Object: null prototype] { name: 'Monty', address: 'India' }
 
  
 /**
  * Query-String stringify()
  * 
  */
 querystring = require('querystring');  
 const qs = querystring.stringify({name:'Monty',address:'India'});  
 console.log(qs);  
 // Output
 // name=Monty&address=India