/*
let abc = document.createElement("a");
abc.href= "https://www.google.com";
abc.innerText= "download now"
document.querySelector("body").prepend(abc); // adding an a tag using create element (copy mein nhi hai)
 
let paragraph = document.querySelector("p");
paragraph.addEventListener("dblclick",function(){
    paragraph.style.color="purple"; //changing color with eventslistners.. 
})
  
   let p = document.querySelector("p");
function dblclick(){
    p.style.color= "yellow";
}
 p.addEventListener("dblclick",dblclick); 
 p.removeEventListener("dblclick",dblclick); // removing event listner

  
let abc= document.querySelector("input");
abc.addEventListener("input",function(val){
     if(val.data!==null){
        console.log(val.data);
     }
}); // adding input event listner 

let sel = document.querySelector("select");
let h3 = document.querySelector("h3");
sel.addEventListener("change",function(val){
h3.textContent= `${val.target.value} Device Selected`
}); // when we select any device it will get the text of h3 gets change 
*/

