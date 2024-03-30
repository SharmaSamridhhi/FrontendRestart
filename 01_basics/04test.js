const mySym = Symbol("key1");
const mySym2 = Symbol("key1");
const JsUser = {
    name : "Hitesh",
    [mySym] : "mykey1",
    "full name" : "Hitesh Choudhary",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false
}

console.log(typeof JsUser[mySym]);
console.log(typeof mySym2);


