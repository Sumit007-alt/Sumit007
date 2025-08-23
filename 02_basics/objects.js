const jsUser = {
    name: "Sumit",
    "full name" : "Sumit Sahoo",
    age : 20,
    location : "Kolkata",
    email : "sahoosumit811@gmail.com",

}
console.log(jsUser.email)
console.log(jsUser["full name"]);

jsUser.age=25

// Object.freeze(jsUser)
jsUser.age=30
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.age}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




