const name = "NamanS"
const count = 50

console.log(name + count + " Good");

console.log(`Hello my name is ${name} and count is ${count}`);    // `````` is a different symbol used

const game = new String('Naman-Singh-Sapra')
console.log(game);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toLowerCase());
console.log(game.charAt(4));
console.log(game.indexOf('a'));

const newgame = game.substring(0, 3)
console.log(newgame);

const anothergame= game.slice(1, 5)
console.log(anothergame);

const something = "       Naman             "
console.log(something.trim());

const url = 'https://naman.com/general%20information'
console.log(url.replace('%20', '-'));

console.log(url.includes('://'));
console.log(url.includes('sapra'));
console.log(game.split('-'));