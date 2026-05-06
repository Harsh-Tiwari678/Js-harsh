const ul = document.querySelector("ul")
let space = document.createDocumentFragment();  // document fragment ek temporary container hai jisme hum elements ko add kar sakte hain bina DOM ko baar baar update kiye.
for(let  i = 1 ; i<=100 ; i++){
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);  // space mein append kar diya hai 
}
ul.appendChild(space); // finallly ul mein append kar diye 

// isee hamare dom mein continous changes nhi honge vo phle space mein honge then ek baar mein ul mein 