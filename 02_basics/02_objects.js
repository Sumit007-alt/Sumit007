const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"Sumit",
            lastname:"Sahoo",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);




const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign(obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);
