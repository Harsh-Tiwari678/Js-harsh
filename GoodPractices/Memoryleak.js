let counter = 0;
let int = setInterval(()=>{
    if(counter<10){
        counter++;
        console.log(counter);
    }
    else{
        clearInterval(int);
    }
},500);