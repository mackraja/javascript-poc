// Example: Creating child process with exec() Module
const exec = require('child_process').exec;

exec('git version', function(err, stdout) {
  if (err) {
    throw err;
  }
  console.log('\n Git Version function executed. \n', stdout);
});