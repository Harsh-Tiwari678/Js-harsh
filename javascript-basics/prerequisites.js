// var a = 10 ;
// hello = ()=>{
//     var a = 20;
//     console.log(a);
// }
// hello();
// console.log(a);


// // therefore var is functional scoped 


// const obj  = {
//     name : "John",
// }
// obj.name = "Harsh";
// console.log(obj.name);   // Harsh 

// const obj  = {}  // error 


// const can only change the properties of the object but prevnets the variable referance 



//objects 

// user data objeects -> this tell us what proeprtie does the uer have and what data is stored in the object

//  let user  = {
//     name : "Harsh",
//     email :   "harshtiwari1806@gmail.com",
//     id : 101,
//     adress : "India",
// }
// console.log(user.name);
// console.log(user.email);


// const user = { 
//     name : "Harsh",
// }
// const anotheruser = user;  // here we just create another referace to the same object in the memory 
// anotheruser.name = "Piyush";
// console.log(user.name);

// const api_req = {
//     meathod  : "POST",
//     endpoint :  "/api/users",
//     autheticated : true,

// }



//arrays :

// arrays of objects :

// const users = [
//     {
//         name : "Harsh",
//         id : 1,
//     },
//     {
//         name : "Piyush",
//         id : 2,
//     },
//     {
//         name : "Madhav",
//         id : 3,
//     },
// ]
// console.log(users[0].name)


// const endpoints = [
//     "/login", "/register", "/produts"
// ]
// console.log(endpoints[0])

 

// functions :

// greet = (name)=>{
//     return `welcome ${name}`;
// }
// console.log(greet("harsh"))


// isvalid = (age)=>{
//     return age>=18 
// }
// console.log(isvalid(34))


// apiresponse = (success,data) =>{
//     return {
//         success,
//         data,
//     }
// }
// const responce = apiresponse( true,
//      {
//         id  : 101,
//         name : "Harsh",
//     },
// )
// console.log(responce)

isValid = (roles)=>{
      return  roles === "admin" 
}
const ans = isValid("user")
console.log(ans)


// createuser  =  (name,email)=>{
//     return{
//         name,
//         email,
//     }
// }
// const ans = createuser("harsh","harshtiwari1806@gmail.com");
// console.log(ans)