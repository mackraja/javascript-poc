/**
 *  ------------------
 *    Global Objects
 *  ------------------
 * 
 *    __dirname()
 *    __filename()
 *    clearTimeout(timeoutObject)
 *    console()
 *    exports()
 *    global()
 *    module()
 *    Process()
 *    require()
 *    setTimeout(callback, delay[, ...args])
 *    TextDecoder()
 *    TextEncoder()
 *    URL()
 * 
 * */

// Displays current directory
console.log('Current directory: ', __dirname); 

// Displays filename with path
console.log('Current file: ', __filename); 
 

// Displays filename 
var path = require("path");
console.log(path.basename(__filename));