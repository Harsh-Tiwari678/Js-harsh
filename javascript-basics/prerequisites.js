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

// isValid = (roles)=>{
//       return  roles === "admin" 
// }
// const ans = isValid("user")
// console.log(ans)


// createuser  =  (name,email)=>{
//     return{
//         name,
//         email,
//     }
// }
// const ans = createuser("harsh","harshtiwari1806@gmail.com");
// console.log(ans)



// call stack 


// first = ()=>{
//     Second();
//     console.log("hey this is  first");
// }
  

// Second = () =>{
// console.log("hey this is second");
// }

// first();

//callback 


// greet = (name,callback)=>{
//  console.log(`hello ${name}`)
//  callback();
// }

// done = ()=>{
//     console.log("the callback is succesfully called");
// }
// greet("Harsh", done);


// getuser = (id,callback)=>{
// setTimeout(()=>{
// callback({
//     id,
//     name : "Harsh",
// })
// },5000)
// }
// getuser(1,(user)=>{
// console.log(user)
// })


// runjob = (jobname,callback)=>{
//     console.log("Runiing: Upload File")

//     callback();
// }

// end = ()=>{
//     console.log("the callback is now executed")
// }

// runjob('SWE',end)



// Promices 

// const promise = new Promise((resolve,reject)=>{
//     resolve({
//         user : "Harsh",
//         future : "Google fwinter fellowship winner",
//     })
// })   // here the promise state will go from pending to fullfiled 
//  promise.then((data)=>{
//     console.log(data.future)
//  })

// finduser = (id)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 name:"Harsh",
                
//             }
//             )
//         },5000)
//     })
// }
// finduser(1).then((data)=>{
// console.log(data)
// })

//.catch()

// const promise = new Promise((resolve,reject)=>{
//    reject("Database Crashed")
// })

// promise.catch((data)=>{
// console.log(data)
// })


// const login  = (email,password)=>{
//   return new Promise((resolve , reject)=>{
//    email === "admin@123" && password === "123456" ? resolve("Login Succesfull") : reject("Invalid Cridentials")
//   })

//   }
//   login("harshtiwari@123","123456").then((data)=>{
// console.log(data);
//   }).catch((err)=>{
// console.log(err)
//   })


//finally block in succes :

// Promise.resolve("the work is done")
// .then((data)=>{
// console.log(data)
// })
// .finally(()=>{
// console.log("finished ")
// })


// //finally block in error :

// Promise.reject("the promise is now rejected")
// .catch((err)=>{
//   console.log(err);
// }).finally(()=>{
//   console.log("the finally block runs anyhow")
// })



//await 
//   greet =  async (name)=>{
//   return `${name} Welcome`
//  }
//  const ans = greet('harsh')
//  console.log(ans)


// demo = async()=>{
//   console.log('A')
//   await Promise.resolve()
//   console.log('B')
// }
// console.log('C')
// demo();

