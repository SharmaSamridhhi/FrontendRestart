// const JsUser = {
//     name : "Hitesh",
//     "full name" : "Hitesh Choudhary",
//     age : 18,
//     location : "Jaipur",
//     email : "hitesh@google.com",
//     isLoggedIn : false
// }
// JsUser.greetings = function(){
//     console.log("Hello from JsUser");
// }
// JsUser.greetingsTwo = function(){
//     console.log(`Hello to ${this["full name"]}`);
// }
// console.log(JsUser.greetingsTwo());
// const tinderUser = new Object();
// const tinderUser = {};
// tinderUser.Id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// const regularUser = {
//     email : "some@gmail.com",
//     fullName : {
//         userFullName : {
//             firstName : "Hitesh",
//             lastName : "Choudhary"
//         }
//     }
// }
// console.log(regularUser.fullName.userFullName.firstName , regularUser.fullName.userFullName.lastName);
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = Object.assign({} , obj1 , obj2)
console.log(obj3);







