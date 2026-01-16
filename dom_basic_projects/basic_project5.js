let inp = document.querySelector("input");
let span  = document.querySelector("span");
inp.addEventListener("input",function(dets){
    let left = 20 - inp.value.length; // left ka count mil gaya ki kitne character bache hai  input.value.length bta rhi hai ki total kitne character hai aur use 20 mein se minus kar rhi hai vo jake aage orint ho rha hai 
    span.textContent = left;  // live upadate user ne agar h likha to upar wali line se 20-2 compute hoga and ye 18 show karega 
    if(left<0){ 
        span.style.color = "red"; 
    }
    else{
        span.style.color = "white";
    }
})