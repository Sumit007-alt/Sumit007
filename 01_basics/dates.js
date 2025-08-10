let myDate = new Date()
console.log(myDate);
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toString());
console.log(typeof(myDate));

let newDate = new Date(2020,  3, 23)
console.log(newDate);
console.log(newDate.toDateString());

console.log(newDate.toLocaleString('default' , {
    weekday: "long"
}))







