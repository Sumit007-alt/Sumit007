const user = {
    username: "Sumit",
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessege()
user.username = "Somasree"
user.welcomeMessege()



const chai = () => {
    let username = "Sumit Sahoo"
    console.log(this.username)
}

chai()

// const addTwo = (num1 ,num2) => num1 + num2
const addTwo = (num1 ,num2) => (num1 + num2)
console.log(addTwo(4,8));
