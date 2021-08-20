/**
 * Child Process
 * 
 * This module provides the ability to spawn child processes in a similar manner to popen(3).
 * 
 */


 /**
  * 1. child_process.exec()
  * 
  * This method runs a command in a console and buffers the output.
  */


// Example: It will execute two commands dir and mkdir child. 
// The dir command will display list of current directory and mkdir command will create a new directory.
const exec = require('child_process').exec;  
exec('createDir.bat', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  



/**
 * 2. child_process.spawn()
 *  
 * This method returns streams (stdout & stderr) and it is generally used when the 
 * process returns large amount of data.
 *
 */
 
const s_child_process = require('child_process');  
 for(var i = 0; i < 5; i++) {  
   var workerProcess = s_child_process.spawn('node', ['childProcessSupport.js', i]);  
  workerProcess.stdout.on('data', function (data) {  
      console.log('stdout: ' + data);  
   });  
 workerProcess.stderr.on('data', function (data) {  
      console.log('stderr: ' + data);  
   });  
 workerProcess.on('close', function (code) {  
      console.log('child process exited with code ' + code);  
   });  
} 


/**
 * 3. child_process.fork()
 * 
 * This method is a special case of the spawn() to create Node processes. 
 * This method returns object with a built-in communication channel in addition 
 * to having all the methods in a normal ChildProcess instance.
 * 
 */
  
const f_child_process = require('child_process');  
 for(var i = 0; i < 5; i++) {  
   var worker_process = f_child_process.fork("childProcessSupport.js", [i]);    
  worker_process.on('close', function (code) {  
      console.log('child process exited with code ' + code);  
   });  
}  