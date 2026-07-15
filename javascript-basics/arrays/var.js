var a = 10 ;
hello = ()=>{
    var a = 20;
    console.log(a);
}
hello();
console.log(a);


// therefore var is functional scoped 


const obj  = {
    name : "John",
}
obj.name = "Harsh";
console.log(obj.name);   // Harsh 

const obj  = {}  // error 


// const can only change the properties of the object but prevnets the variable referance 