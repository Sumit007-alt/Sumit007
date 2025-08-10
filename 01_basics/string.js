// const name = "Sumit sahoo"
// const repoCount = 50
// // console.log(name + repoCount+ "value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("Sumit Sahoo")
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);
const anotherString = gameName.slice(-6,4)
console.log(anotherString);
const newstringOne = "        Sumit       "
console.log(newstringOne.trim());
const newStringTwo = "https//google.com%20"
console.log(newStringTwo.replace("%20",".in"));








