// class Pencil{
//     constructor(name , company , price ,color){ // sabse phle consturctor function chalega  
//       this.name = name;
//       this.company = company;
//       this.price = price;
//       this.color = color;
//     }
//     write(text){  // thats how you create meathods in classs
//       let h1 = document.createElement("h1");
//       h1.textContent = text;
//       h1.style.color = this.color;
//       document.body.appendChild(h1);
//     }
//     erase(){
//         document.querySelectorAll("h1").forEach((elem)=>{
//            if(elem.style.color == this.color){ // current object ke color se match kar gaya to rewmove
//             elem.remove();
//            }
//         })
//     }
// }
//  let p1 = new Pencil("natraj", "natraj" , 10 , "blue");
//  let p2 = new Pencil("Doms", 'DOMS', 15 , "black");

// extend and super ---------------

// class User{
//    constructor(name, username, id , email){
//     this.name = name;
//     this.username = username;
//     this.id = id;
//     this.email = email;
//     this.role = "user"
//    }
//    write(text){
//     let h1 = document.createElement("h1");
//     h1.dataset.user = this.name; // h1 ke sath meta deta attach kar rhe hai taki baad mein identify kar sake ki element kisne create kiya hai // data set - data set ek object hai aur uska kaam- element ke andar custom data store karna, bina UI pe visible kiye.
//     h1.textContent  =` ${this.name} : ${text}` ;
//     document.body.appendChild(h1);
// }
//   checkrole(){
//     console.log(`you are ${this.role}`)
//   }
// }
//   class Admin extends User{
//     constructor(name, username, id , email){  // jitni cheeze bhejni hai upar vale constructoe mein  vo yha accept kri hai for ye jauengi super ke pass 
//         super(name, username, id , email) // jab super ko call kroge tab jisjo extend kar rhe ho uska constructoer phle chalega 
//         this.role = "Admin";  // fir jab lotega fir admin ki khudki cheeze 
//     }
//     remove(){
//         document.querySelectorAll("h1").forEach((elem)=>{
//             if(elem.dataset.user!== this.name){  // agar yha (elem.dataset.user== jis user ne vo h1 banaya) admin ke baraber nhi hua to remove (bcs remove to bss admin chala sakt hai )
//                 elem.remove();
//             }
            
//         })
//     }
//   }
// let u1 = new User("Harsh","abc123", 101, "harshtiwari1806@gmail.com");
// let u2 = new User("Harshita","abc1234", 1021, "harshitatiwari1806@gmail.com");
// let a1 = new Admin("admin01", "adminnnn", 404, "a@gmail.com");

// prototypal inheirtance 
//   let coffe = {
//     color : "black",
//     brand : function(){
//         console.log("brand is nescaffe");
//     }

//   }
//     let bru = Object.create(coffe) // object.create mein jo object pass kiya hai vo uske prototype ko bru ke prototype se jod dega 

// console.log(bru);

// bru.drink = "cold";
// bru.brand();

// encapsulation (#)-------------------

// class Account {
//     constructor(balance){
//         this.balance = balance;
//     }
// }
// let acc =  new Account(10000);
// acc.balance = -5000
// console.log(acc);  // so the data is beign changed thats the problem  


// with encapsulaton --
  class Account{
    #balance ; // here balace is the private feild    
    constructor(balance){
        this.#balance = balance;
    }  
    showBalance(){
      return this.#balance;
    } 
    deposit(money){
        if(money>0){
        return this.#balance += money;
        }
    } 
    withdraw(money){
        if(money>0 && money<=this.#balance){
        this.#balance -= money;
        }
    }       
  }
  let acc = new Account(10000);
  console.log(acc.showBalance());
    console.log(acc.deposit(500));
      acc.withdraw(600);
      console.log(acc.showBalance());

    // acc.#balance; // error '#balance' must be declared in an enclosing class
    // so the value of balance will only change by meathods like deposite showbalance , withdraw

    // # sirf classs mein use hoga 
    // bahar use nhi hoga (only through meathods)
    // inheritance mein bhi use nhi hoga 
  