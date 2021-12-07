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


// Create emoji characters from a numeric value
const smile = String.fromCodePoint(0x1F600);
const str = `${smile} Please`
console.log(str);


// More Gist from Nick
https://gist.github.com/codemile
