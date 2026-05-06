const btn = document.querySelector("#btn");
btn.addEventListener("click",async()=>{
 let h =  await import("./heavy.js");
 h.heavy();
})