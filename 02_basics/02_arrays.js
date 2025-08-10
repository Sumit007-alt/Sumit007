const marvelHeroes = ["thor", "Ironman", "Spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);

allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

