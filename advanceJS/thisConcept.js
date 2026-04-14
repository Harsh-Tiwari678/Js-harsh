// in global scope the value of this is window object 
console.log(this); // window object will be printed

// in function scope the value of this is also window object
abcd = ()=>{
    console.log(this); // window object will be printed
}
abcd();