// in global scope the value of this is window object 
console.log(this); // window object will be printed


// in function scope the value of this is also window object
// abcd = ()=>{
//     console.log(this); // window object will be printed
// }
// abcd();

// in MEATHODS 


// let obj = {
//     name: "harsh",
//     age : 18,
//     gender : function(){
//        console.log(this.name); // here this referst to the whole object and so this is the whole object so we can also print properties of object
//     }
// }

// obj.gender();

// in event handler 

// document.querySelector("h1").addEventListener("click",function(){
// console.log(this.style.color = "red"); // here this will refer to the element on which the event listenr is applied ... in short addeventlister se phle ka sab this hai 
// })

// in class 

// class Person{
//     a =12;
//     constructor(){
//         console.log(this.a); // here this will refer to the blank object
//     }
// }
// let rty = new Person();
   
// let obj = {
//     name : "harsh",
//     age: ()=>{
//         console.log(this.name); // here this will refer to the window object as arrow function does not have its own this and it will take the this from its parent scope which is global scope in this case
//     }
// }

 //whren to use arrow functions in meathods
// let obj = {
//     name : "harsh",
//     sayname: function(){
//         let inner = ()=>{
//             console.log(this.name)
            
// }
// inner();
//     }
// }
// obj.sayname();

// -------------------- call apply bing ------------------
// call-----------------------
//  let obj = {
//     name : "harsh",
//         age : 18,
//  };
//  function add(){
//     console.log(this.age); // here this will refer to the object on which the function is called
// }
// add.call(obj);// here now this  = obj 
 
// call 2-------------------
//  let obj = {
//       name : "harsh",
//        age : 18,
// };
//apply-------------
// function add(a,b,c){
//  console.log(this.age,a,b,c); // here this will refer to the object on which the function is called
// }
// add.apply(obj,[1,2,3]);

//bind-------------
// let obj = {
//       name : "harsh",
//        age : 18,
// };
// function add(a,b,c){
//  console.log(this.age,a,b,c); // here this will refer to the object on which the function is called
// }
// let fnc = add.bind(obj,1,2,3); 
// fnc();
  


