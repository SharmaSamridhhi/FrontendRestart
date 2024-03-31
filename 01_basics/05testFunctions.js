// function addTwoNums(num1 , num2) {
//     return num1 + num2;
// }
// let result = addTwoNums(4,5);
// console.log("Result : " , result);
// function loginUserMessage(username = "Sam"){
    // return `${username} just logged in`;
// }
// console.log(loginUserMessage("Hari"));

//handling multiple values as arguments-----------------------------------
// function calculateCartPrice(...nums){
// return nums;
// }
// console.log(calculateCartPrice(200 , 300 , 4000 , 5));
    
//objects in function-----------------------------------------------------
// const user = {
//     username : "Hitesh",
//     price : 199
// }
// function handleObjects(anyobject){
//     return `Username is ${anyobject.username} and price is ${anyobject.price}`;
// }

// console.log(handleObjects(user))

//objects in array-----------------------------------------------------
const myArr = [200 , 300 , 400 , 500 , 600]
function handlingArray(getArray){
    return getArray[2]
}
console.log(handlingArray(myArr))
