// console.log("he1y");
// console.log("he2y");
// setTimeout(()=>{     // so ye code thodi der baad chal rha hai 
//     console.log("he3y");
// },3000)
// console.log("he4y");

// callback pattern and callback hell ----

// kuchderbadchalunga = (fnc)=>{
//     setTimeout(fnc,Math.floor(Math.random()*20)*1000) //Math.random() value deta hai 0 se 1 ke beech mein // math.floor - round of kar deta hai value ko 
// } 
// kuchderbadchalunga(function(){ // ye jo function hai ise khta hai call back 
//     console.log("hey");
// });


// callback hell - 

function profile(username,cb){
  console.log("fetching profile data ..")
  setTimeout(()=>{
    console.log(`the username of ${username} is fetched`);
    cb({username , id:1020})
  },2000)  // ab profile to yha fetch hui hai cb mein bhejni padegi
}
  function sarepostnikalo(id,cb){
     console.log("fetching all posts...")
    setTimeout(()=>{
      cb({id:id, posts:["hey", "hiii", "hello"]})

    },3000)
  }
  function savedPostsnikalo(id,cb){
      console.log("fetching all saved posts...")
      setTimeout(()=>{
        cb({id:id , savedposts:["hiii", "heyy", "homlooo"]})
      },5000)

  }
   profile("harsh",function(profiledata){
    console.log(profiledata);
     sarepostnikalo(profiledata.id,function(posts){
        console.log(posts); // ab jab sare posts aa jaye to mujhe sare save dposts nikalne hai 
        savedPostsnikalo(profiledata.id,function(savedposts){
           console.log(savedposts)

        })
     })
   })
   
// }
// Profile("harsh",function(profiledata){ // ye function call back hai 
//    console.log(profiledata)  // ye neeche wala code ham chalate hai aur upar vala code khi likha hota hai ham bas use krte hai 
// })


// this is call back hell .. ek callback ke andar dusra call back .. fir susra call back ... then like that