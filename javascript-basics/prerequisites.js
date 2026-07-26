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


//await special behaviour ---

// greet = async()=>{
//     return 21;
// }
// main = async()=>{
//     const result =  await greet();
//     console.log(result); // i will get the value of promise which is 21 here 
// }
// main();


//Promise.all and Promise.setelled

// const result = await Promise.allSettled([
//     Promise.resolve("User"),
//     Promise.reject("Database Quer"),
//     Promise.resolve("Work done ")
// ])

// console.log(result);


// const result  = await Promise.race([
//     Promise.resolve("A"),
//      Promise.resolve("B"),
//       Promise.resolve("C"),
//        Promise.resolve("D"),
// ])
// console.log(result);


// what if the first promsie  rejects ?

// const result =  await Promise.race([
//     Promise.reject("Database Error"),
// ])
// console.log(result);

//Promise.any-----  first promise which get's fullfiled wins -- if no one get's fullfiled through a aggregate error which contains all the rejection reasons 
//  const result = await  Promise.any([
//     Promise.reject("A"),
//      Promise.resolve("B"),
//       Promise.reject("C"),
//  ])
//  console.log(result)
 
// Destructuring --- way to EXTRACT the value of arrays and objects into a seperate variable 
// before Destructuring ---------
// const obj = {
//     name : "Harsh",
//     age : 19,
//     id : 101,
// }
// const name = obj.name ;
// const age = obj.age;
// const id =  obj.id;
// console.log(name,age,id);
//after -------



// const obj = {
//     name : "Harsh",
//     age : 19,
//     id : 101,
//     salary : 200000,
    
// }

// const{name : fname,id , salary = 100000} = obj;   // renaming the property and setting the default value 
// console.log(fname,id, salary);

//nested object 

// const obj = {
//     name : "Harsh",
//     id : 101,
//     adress : {
//         name1: "gurugram",
//         time : 12,
//     }
// }
// const{name, adress : {name1}} = obj;
// console.log(name1, name)

//fumnction destructuring 
// const obj ={
//     name : "Harsh",
//     id : 1,
// }

// createusers = ({name,id})=>{
//     console.log(obj.name);
//     console.log(obj.id);
// }
// createusers(obj)

//array 

// const arr = [1,2,34,5,6];
// const[first , , , fourth, ,] = arr;
// console.log(first);
// console.log(fourth);

//swapping
// let a = 18;
// let b = 34;
// [a,b] = [b,a];
// console.log(a,b);


//spread 

// const Frontend = ["React" , "Next.js"];
// const Backend = ["Django", "Node.js"];
// const newrr = [...Frontend , ...Backend]
// console.log(newrr);


//map

// const input   =  [1,2,3,4,5];
// const ans = input.map( function(i){
//     return i*3;
// });
// console.log(ans);


// const arr =  [1,2,3,4,5];

// function transformaion(i){
//     console.log(i*3);
// }
// function mapp(arr,transformaion){
//   for(let i  = 0 ; i<arr.length ; i++){
//   transformaion(arr[i]);
//   }
// }
// mapp(arr,transformaion);

// const arr = [1,2,3,4,5,6];
// const newarr = [];
// for(let i = 0 ; i<arr.length; i++){
//     if (arr[i]%2==0){
//         newarr.push(arr[i]);
//     }
// }
// console.log(newarr)


// const arr = ["Harsh", "Madhav", "Piyush"];
// const ans = arr.filter(function(i){
//     if(i.startsWith("M")){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// const arr = [1,2,3,4,5]
// const newarr = [];
// transform = (i)=>{
// return i*3;
// }
// map = (arr,transform)=>{
//  for(let i  = 0 ; i<arr.length ; i++){
//     newarr.push(transform(arr[i]))

//  }
// }
// map(arr,transform)
// console.log(newarr);

// const safeuser = [1,2,3,4,5];

// const ans =  safeuser.map(num=>num*2);
// console.log(ans);



// const products = [
//     {
//         name: "Laptop",
//         price: 50000
//     },
//     {
//         name: "Phone",
//         price: 20000
//     }
// ];

// const ans = products.map(product=>({
//     ...product,
//     price : product.price*1.18,
// }))
// console.log(ans);

const numbers = [1, 2, 3];

const result = numbers.map(num => {
    console.log(num);
});

console.log(result);