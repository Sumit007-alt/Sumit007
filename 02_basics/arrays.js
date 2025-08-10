const myArr = [0,1,2,5,4,2]
console.log(myArr);
console.log(myArr[2]);

myArr.push(6);
myArr.pop();
myArr.unshift(9);
console.log(myArr);


const newArray = myArr.join()
console.log(newArray);

const myn1 = myArr.slice(1,3)
const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log(myn2);




