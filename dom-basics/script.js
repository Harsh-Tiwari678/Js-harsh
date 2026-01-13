/*let abcd= document.getElementById("abcd");
console.dir(abcd); // selection by id 



let abcd= document.getElementsByClassName("abcd");
console.dir(abcd); // selection by class name



let abcd = document.querySelectorAll("h1");
console.dir(abcd); // by query selector all 
  


let abcd= document.querySelector("h1");
 console.dir(abcd); // by query selector 



 let h1= document.querySelector("h1");
 h1.innerHTML="<i>hiii harsh kaise ho</>"
 console.dir(h1) // inner html changes the html code  



 let a = document.querySelector("a");
 a.href="https://www.google.com"; // one way to do the attribute maipulation 



let img = document.querySelector("img");
img.setAttribute("src","https://imgs.search.brave.com/EnJsVhXmIvL_CJ2ieoRe4iAeAkvRJ_yjm9BNbRhdwbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zb21l/LW15LW1vcm5pbmct/cGljdC0yNjI2NjA2/ODAuanBn");
// attribute manipulation by set attribute



let a = document.querySelector("a");
console.log(a.getAttribute("href")); // getting the value of href by using get attribute 



let a = document.querySelector("a");
a.removeAttribute("href"); // remove the href attribute from the a tag 
 


let h1 = document.createElement("h1");
h1.textContent= "hii there";
document.querySelector("body").prepend(h1);// creating element and displaying it to the screem 



let h1 = document.querySelector("h1");
h1.remove(); // remove the h1 



let h1 = document.querySelector("h1"); // empty h1
h1.textContent=" hiiii there5"; // gain the valu 
document.querySelector("div").append(h1) // display on the screen 



let h1 = document.querySelector("h1");
h1.style.color= "blue";
console.dir(h1);



let h1 = document.querySelector("h1");
h1.classList.add("color"); // by  java script we are adding the classs in the h1 .. so write the code in css and put the class here by js 



let button = document.querySelectorAll(".buy-now");
console.log(button);



let h1= document.querySelector("#abcd")
h1.textContent= "Welcome to Shreyians Coding School"
console.dir(h1); // task1 



let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
}) // task2 
 
let paragraph = document.querySelector("p");
paragraph.innerHTML= "<b>Updated </b> by java script " // task3



let div = document.querySelector("div");
div.setAttribute("title","hey there "); // task4



let btn = document.querySelector("button");
btn.removeAttribute("disabled"); // disabling button 


let ul = document.querySelector("ul");
let li= document.createElement("li");
li.textContent= "New Task";
ul.appendChild(li); // task 5 


let img= document.createElement("img");
img.src="https://imgs.search.brave.com/EnJsVhXmIvL_CJ2ieoRe4iAeAkvRJ_yjm9BNbRhdwbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zb21l/LW15LW1vcm5pbmct/cGljdC0yNjI2NjA2/ODAuanBn"
document.querySelector("div").prepend(img)// task 6


let ul = document.querySelector("ul");
let li= document.querySelector("li"); //slect the first li 
ul.removeChild(li); ;   // task7

let a = document.querySelectorAll("a");
a.forEach(function(val){
    val.href="https://www.google.com";
}) // whenevr quertselector all mein ek sath valu change larni toh for each use karna hai (copy mein nhi hai)

let abc = document.createElement("a");
abc.href= "https://www.google.com";
abc.innerText= "download now"
document.querySelector("body").prepend(abc); // adding an a tag using create element (copy mein nhi hai)
*/ 
let all = document.querySelectorAll("p");
all.forEach(function(val){
    val.classList.add("fontsize"); // practicing 
})



