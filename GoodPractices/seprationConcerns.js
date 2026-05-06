// let btn = document.querySelector("#btn")
// let ul = document.querySelector("ul")
// btn.addEventListener("click",()=>{
//     let num1 = Math.floor(Math.random()*10)
//     let num2 = Math.floor(Math.random()*10)
//     let add = num1+num2;
//     let li = document.createElement("li")
//     li.textContent = add;
//     ul.appendChild(li);
// })  // ye kharab code hai bcs aapne addition joki ek logic hai use aapne dom ke sath mix kar rakha hai 

let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");
 add = (n1,n2)=>{
   return n1+n2;
}
btn.addEventListener("click",()=>{
    let num1 = Math.floor(Math.random()*10)
    let num2 = Math.floor(Math.random()*10)
    let addf = add(num1,num2);
    let li = document.createElement("li")
    li.textContent = addf;
    ul.appendChild(li);
}) // here the logic is alag and the dom is alag so it is a good code 