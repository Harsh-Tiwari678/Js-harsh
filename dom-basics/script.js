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


let div = document.querySelector("#abcd");
div.addEventListener("mouseover",function(val){
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseout",function(val){
    div.style.backgroundColor = "yellow"
}) 



let form = document.querySelector("form");
form.addEventListener("submit", function(val){
    val.preventDefault();
}) // we want ki submit pe click hone pe valu wapas na jaaye .. 
\
let nav = document.querySelector("#nav");
nav.addEventListener("click",function(){
alert("clicked");
})  // event bubling checking code 


let ul = document.querySelector("ul");
ul.addEventListener("click",function(dets){
    dets.target.style.textDecoration = "line-through"; // if write ul .style at one click it will cross all the list items 
})
let ul = document.querySelector("ul");
ul.addEventListener("click",function(dets){
   dets.target.classList.toggle("lt"); // class lagi hogi to click karne se hat jayegi aur hati hogi to click karne se lag jayegi 
}) 

let a= document.querySelector(".a");
let b= document.querySelector(".b");
let c= document.querySelector(".c");
let btn= document.querySelector("button");

btn.addEventListener("click",function(dets){
    console.log(" button clicked");
});
 c.addEventListener("click",function(dets){
    console.log("c clicked")
 },
true); //capture phase turned on 
 b.addEventListener("click",function(dets){
    console.log("b clicked")
 });
    a.addEventListener("click",function(dets){
    console.log("a clicked")
     }); */

      let a = setInterval(function(){
     console.log("hii");
     },3000)
     clearInterval(a);
