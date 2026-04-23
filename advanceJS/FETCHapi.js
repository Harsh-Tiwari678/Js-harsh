// fetch('https://randomuser.me/api/?results=5')// fetch internet pe jayega air data nikal ke layega ..  phle then mein raw data aata hai jo ham use nhi kar sakte .. use json mein convert karenge 
// .then((raw) => raw.json())// iska matlab hai aapke data ko json bnake return kardo 
// .then((data)=> console.log(data.results)) // dusre then mein data print kar diya 


getUsers= ()=>{
// API se 5 random users fetch kar rahe hain
fetch("https://randomuser.me/api/?results=5")

  // raw response ko JSON format me convert kar rahe hain
  .then((raw) => raw.json())

  // ab hame actual data mil gaya
  .then((data) => {

    // HTML me jo container hai (.users), usko select kar rahe hain
    const container = document.querySelector(".users");

    // pehle se jo static cards the unko remove kar rahe hain (clean start)
    container.innerHTML = "";

    // data.results ek array hai → har user pe loop chala rahe hain
    data.results.forEach((val) => {

      // ek naya card (div) bana rahe hain
      const card = document.createElement("div");

      // us card ko Tailwind classes de rahe hain styling ke liye
      card.className = "flex items-center gap-4 bg-slate-800 px-5 py-4 rounded-xl shadow-md w-72";

      // ---------- IMAGE ----------
      // img element create kar rahe hain
      const img = document.createElement("img");

      // API se user ka image laga rahe hain
      img.src = val.picture.medium;

      // Tailwind classes (size + round)
      img.className = "w-12 h-12 rounded-full";


      // ---------- TEXT CONTAINER ----------
      // ek div jisme name, email, status ayega
      const textDiv = document.createElement("div");


      // ---------- NAME ----------
      const name = document.createElement("h2");

      // styling
      name.className = "text-white text-sm font-semibold";

      // API se first + last name combine karke show kar rahe hain
      name.textContent = `${val.name.first} ${val.name.last}`;


      // ---------- EMAIL ----------
      const email = document.createElement("p");

      // styling
      email.className = "text-gray-400 text-xs";

      // API se email set kar rahe hain
      email.textContent = val.email;


      // ---------- STATUS ----------
      const status = document.createElement("span");

      // styling (badge)
      status.className = "inline-block mt-1 text-[10px] px-2 py-0.5 bg-blue-600 text-white rounded-full";

      // static text (API me status nahi hota)
      status.textContent = "Active";


      // ---------- STRUCTURE BUILD ----------
      // textDiv ke andar name, email, status add kar rahe hain
      textDiv.append(name, email, status);

      // card ke andar image + textDiv add kar rahe hain
      card.append(img, textDiv);


      // final card ko DOM me container ke andar daal rahe hain
      container.appendChild(card);
    });
  })

  // agar fetch fail ho jaye to error console me dikhe
  .catch((err) => console.error(err));
}
getUsers();
let btn = document.querySelector(".refbutton");
btn.addEventListener("click",function(){
    getUsers();
})