const name = "RohitChaudhaary"
const repoCount = 59
console.log(`my name is ${name} and my repocount is ${repoCount}`)

const newGame = new String("rohit")
console.log(typeof newGame)
console.log(newGame[3])

console.log(newGame.charAt(3));
console.log(newGame.indexOf('o'));
const gameName = newGame.substring(0,4)
console.log(gameName);
const anotherName = newGame.slice(-1,5)
console.log(anotherName);

const freeGame = "    rohit   "
console.log(freeGame);
console.log(freeGame.trim());

const gmail = "rohit863060@%20gmail.com"
console.log(gmail.replace('%20' , '-'))
console.log(gmail.includes('rohit'))

