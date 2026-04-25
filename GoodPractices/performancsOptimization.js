// debouncing ----------------
// let inp = document.querySelector(".input") // yha input selectv kiya hai 
// function debounce(fnc,delay){
//     let timer ;
//     return(...args)=>{  // args yha pe input se related sari values hai ..// ye function return hone ke baad debounce ki jagah aake run hoga 
//           clearTimeout(timer); // yha pe purana timer clr hua 
//           timer = setTimeout(()=>{ // yha ek naya timer ban rha hai 
//             fnc(...args) // ab ye jo fnc hamne diya tha debounce mein vo chal rha hai 
//           },delay) // itne delay ke baad 

//     }
// }


// inp.addEventListener("input",debounce(function(){
//     console.log("harsh")
// },1000)) // 1 sec tak jab kuch action nhi hoga tab ye fuction chal jayega .. 

//-----------Throttling -------------------------

let inp = document.querySelector(".input") // yha input selectv kiya hai 
function debounce(fnc,delay){
 let timer ;
    return(...args)=>{  // args yha pe input se related sari values hai ..// ye function return hone ke baad debounce ki jagah aake run hoga 
          clearTimeout(timer); // yha pe purana timer clr hua 
          timer = setTimeout(()=>{ // yha ek naya timer ban rha hai 
            fnc(...args) // ab ye jo fnc hamne diya tha debounce mein vo chal rha hai 
          },delay)
} 
}
function throotling(fnc,delay){
  let timer = 0 ;
    return(...args)=>{  // args yha pe input se related sari values hai ..// ye function return hone ke baad debounce ki jagah aake run hoga 
         let now  = Date.now() // current ke ms aaye 
         if(now-timer>=delay){ // ab current ke ms -timer (0 hai abhi to ye code chalega aur harsh print hoga )
            timer = now; // now timer ki new vakue now set ho gyi hai 
            fnc(...args); 
         }

    }
}



inp.addEventListener("input",throotling(function(){
    console.log("harsh")
},1000)) // 1 sec tak jab kuch action nhi hoga tab ye fuction chal jayega .. 