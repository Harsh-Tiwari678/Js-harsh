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


        
