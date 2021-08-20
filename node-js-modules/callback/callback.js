/**
 * Callback
 * 
 * Callback is an asynchronous equivalent for a function. 
 * It is called at the completion of each task. 
 * 
 */


//-----------------
// Blocking Code
//-----------------
const b_fs = require("fs");  
const data = b_fs.readFileSync('input.txt');  
console.log(data.toString());  
console.log("Program Ended!");   

//---------------------
// Non Blocking Code
//---------------------
const nb_fs = require("fs");  
nb_fs.readFile('input.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("Program Ended!!");  