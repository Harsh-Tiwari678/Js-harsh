let count = 0;
let seconds = 10;
  let progress = document.querySelector(".progress-bar");
 let interval = setInterval(function(){
if(count<=99){ // 100 tak chalana hai 
    count ++;
    document.querySelector(".progress-bar");
    progress.style.width = `${count}%`
  let percent =   document.querySelector(".percent");
percent.textContent = `${count}%`; 
}
else{
  let h2 =   document.querySelector("h2");
h2.textContent = "Downloaded.."
clearInterval(interval);
}

},(seconds*1000)/100) // complete in 8 seconds 