// module pattern---------------

// let bank = (function(){  // iife ke andar jo bhi hai vo sab provate hai 
//    let  bankBalance = 12000;

//    function setbalance(val){
//    console.log("the balance is"+ val)
//    }

//    function withdraw (val){
//    if(val<=bankBalance){
//     bankBalance-=val;
//     console.log(bankBalance);
//    }
   
//    }
//    return{
//     setbalance,
//     withdraw
//    }
   
// })()
// bank.withdraw(1000);


// revealing modult pattern-------------------

// let bank = (function(){  // iife ke andar jo bhi hai vo sab provate hai 
//    let  bankBalance = 12000;

//    function setbalance(val){
//    console.log("the balance is"+ val)
//    }

//    function withdraw (val){
//    if(val<=bankBalance){
//     bankBalance-=val;
//     console.log(bankBalance);
//    }
   
//    }
//    return{
//    set: setbalance, // object bhejte naam name decide kar sakte hai 
//    with: withdraw
//    }
   
// })() 
// bank.with(1000); //1100

// factory functio pattern -------------------

// function CreateProduct(name, price){
//     let stock = 19
//     return{  // ye function ek object return kar rha hai 
//         name,
//         price,
//         show(){
//           console.log(`current stock is ${stock}`)
//         },
//         buy(qty){
//             if(qty<=stock){
//               stock -= qty;
//               console.log(` ${qty} sold and peices left ${stock}`);
//             }
//             else{
//                 console.error("we dont have have that much in the stock");
//             }
//         },
//         refill(qty){
//             stock+=qty;
//             console.log(`we have ${stock} left now`);
           
//         }
        
//     }
// }
//  let samsung = CreateProduct("samsung",80000) // object samsung naam ke variable mein aa chuka hai 
//   let dairymilk = CreateProduct("dairymilk",80)
//   dairymilk.buy(5);


// ----- observer pattern(pub,sub)---------------
// class Ytchannel{
//     constructor(){
//         this.subscribers = []; // subscribe krne pe isme ek user aayega in the form of object which have name and update meathod 
//     }  // this yha pe newly create dobject ko point krega 
//     subcribe(user){
//      this.subscribers.push(user); // list mein users ko push kardiya 
//      user.update(` you subscribed the channel`) // user ko notify karna hai thats why update 
//     }
//     unsubscribe(user){
//   this.subscribers = this.subscribers.filter((sub)=> sub!== user);
//   user.update(`unsubscribed the channel`);
//  }
//     notify(message){ // har subscriber ko update dena hai 
//     this.subscribers.forEach(sub=> sub.update(message))
//     }
// }
// class User{
//     constructor(name){
//    this.name = name;
//     }
//     update(data){  // yt chnannel ko kuch update bhejna ho toh 
//      console.log(`${this.name},${data}`);
//     }
// } 
// let channel = new Ytchannel();
// let user1 = new User("harsh");
// let user2 = new User("madhav")
// channel.subcribe(user1);
// channel.subcribe(user2);


// channel.notify("the video is live on the channel");

// channel.unsubscribe(user2)
