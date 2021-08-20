const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("prompt> ", function(data) {
  console.log('Output: ', data);
  rl.close();
});