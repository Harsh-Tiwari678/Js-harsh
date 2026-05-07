a=()=>{
    console.log("a");
}
b=()=>{
    a();
    console.log("b")
}
c=()=>{
    b();
    console.log("c")
}
c();
 //sabse phle a pop hoga stack se 
 // then b pop hoga 
 // at last c pop hoga call stack se 