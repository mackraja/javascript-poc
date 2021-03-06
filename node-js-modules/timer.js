/**
 * Timer Module
 * 
 */

// Example: setInterval()
setInterval(function() {  
    console.log("setInterval: 1 millisecond completed...");   
 }, 1000);  
 
 
 
 // Example: setTimeout()
 const recursive = function () {  
     console.log("Hey! 1000 millisecond completed!..");   
     setTimeout(recursive, 1000);  
 }  
 recursive();
 
 
 // Example: setInterval(), setTimeout() and clearInterval()
 function welcome () {  
     console.log("Welcome to JavaTpoint!");  
 }  
//  const id1 = setTimeout(welcome, 1010);  
 const id2 = setInterval(welcome, 1000);  
//  clearTimeout(id1);  
 clearInterval(id2);  