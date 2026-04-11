// let a  = 12;
// abcd =()=>{
//     console.log(a);
// }
// defg=()=>{
//     let a  = 10; // a is lexically present here 
//     abcd(); // then we call abcd 
// }
// defg(); // so the global value of  get printed 

// ----- closure example 1
// abcd = ()=>{
//     let a  = 12;
//     return()=>{
//         console.log(a);   // entire code from line 12 to 17 is closure 
//     }
// }
// abcd()(); // here we are calling the inner function which is returned by abcd and it has acces to a 

// ----- closure example 2

// abcd=()=>{
//     let a  = 10;
//     return()=>{
//         console.log(a);   
//     }
// }
// let fnc = abcd();
// fnc(); 

// ----- closure example 3(private counter)
// countForMe=()=>{
//     let count = 0;
//     return()=>{
//         count++;
//         console.log(count);
//     }
// }
//     let fnc =  countForMe();
//     fnc(); // 1
//     fnc();
//     fnc();

//     let fnc2  = countForMe(); // parent function jab bhi chalega ek apna c bnayega 
//     fnc2(); // 1
//     fnc2(); // 2    // har returning function pe apna c hai 


        
    // ----- closure example 3(Encalpsulation)
    
    clickLimiter = ()=>{
        let likes = 0; // this variable is private to clickLimiter function and can only be accessed by the inner function which is returned    
        return()=>{
            if(likes<5){
                likes++;
                console.log(`likes count is ${likes}`)
            }
            else{
                console.error("you have reached the limit")
            }
        }
    }
      let fnc = clickLimiter();
        fnc(); // 1
        fnc(); // 2
        fnc();// 3
        fnc(); //
        fnc(); // 5
        fnc(); // you have reached the limit
        fnc(); // you have reached the limit    
     

      