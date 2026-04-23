// -----------promise-------------------

// let p = new Promise(function(res,rej){  // there are only 2 states whether the promise os going to rejected or resolved 
//   setTimeout(()=>{
//     let randomno = Math.floor(Math.random()*10); // here we are generating a random number 
//     if(randomno>5){
//         res(`${randomno} is resolved `)
//     }
//     else{
//         rej(`${randomno} is rejected`)
//     }
//   },2000)
// })
//     p.then(function(val){
//         console.log(val)
//     }).catch(function(val){
//         console.log(val);
//     })


    // for the first 3 sec the promise will be in a pending state 
    // then it will gonna be resolved afte the 3 seconds 

let p = new Promise(function(res,rej){
    setTimeout(()=>{
      let rn =Math.floor( Math.random()*10);
      if(rn>5){
        res(rn+ " this is resolved ")
      }
      else{
        rej( rn +" this is rejected")
      }
    },1000)
})
  async function asynchrounoys(){
   try{
    let val =  await p  // agar res hota hai toh try kafi hai 
    console.log(val);
  }
  catch(err){
    console.log(err);  // but agar rej hota hai toh uske liye catch hai 
  }
}
asynchrounoys();