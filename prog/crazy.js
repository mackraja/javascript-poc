// Speech Example
const speak = (msg) => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
};
speak('Hello, my name is Robo, How are you Monty'); // System will speak this string

// Javascript destructuring
const data = ["Monty", 32, "Khanna"];
const { 1: age } = data;
console.log(age); // 32


// First char of string capitalize
const firstCharCapitalize = ([first, ...str]) => [first?.toUpperCase(), ...str].join('');  
console.log(firstCharCapitalize('monty')); // Monty


// Shuffle array of 10
[...Array(10).keys()].sort(() => 0.5 - Math.random())


// Fastest way to removes duplicate numbers of array
const arr = Array.from(new Set([2,3,4,2,3,5,6,8,9,8]));
// OR
const arr = [...new Set([2,3,4,2,3,5,6,8,9,8])];
console.log(arr);


// Easiest way to remove duplicate objects from an Array
const keyValue = (x) => ([JSON.stringify(x), x]);
const unique = (x) => [...new Map(x.map(keyValue)).values()];
const arr = [{a:1}, {b:2}, {a:1}];
console.log(unique(arr));


// Create emoji characters from a numeric value
const smile = String.fromCodePoint(0x1F600);
const str = `${smile} Please`
console.log(str);


// More Gist from Nick
https://gist.github.com/codemile

// Javascript Cheat Sheet
https://files.suhailkakar.com/javascript.png

// More about this keyword in javascript
https://faheemkhan97.hashnode.dev/the-mysterious-this-keyword-lets-demystify-it
