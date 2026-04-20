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

// function Profile(username, bc){
//     setTimeout(()=>{
//         console.log(`the profile of ${username}is fetched`);
//          bc({username,adress:"sec15",email:"yuiyui@gmail.com"})
//     },2000)
   
// }
// Profile("harsh",function(profiledata){ // ye fimction call back hai 
//    console.log(profiledata)  // ye neeche wala code ham chalate hai aur upar vala code khi likha hota hai ham bas use krte hai 
// })


// ab mujhe chaiye id ke basis pe sare prompt nikalo ---

function Profile(username, bc){
    setTimeout(()=>{
        console.log(`the profile of ${username}is fetched`);
         bc({username,_id:1231,adress:"sec15",email:"yuiyui@gmail.com"})
    },2000)
   
}
  function sarepostnikalo(id , bc){
     console.log("user details are loading");
   bc({_id : id , posts: ["harsh", "hello" ,"hiii"]})
  }
Profile("harsh",function(profiledata){ 
    console.log("posts are loading");
   sarepostnikalo(profiledata._id,function(posts){
     console.log(posts)
   })// ye neeche wala code ham chalate hai aur upar vala code khi likha hota hai ham bas use krte hai 
})