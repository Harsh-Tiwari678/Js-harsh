let form  = document.querySelector("form");
let username  = document.querySelector("#name");
let bio  = document.querySelector("#bio");
let role  = document.querySelector("#role");
let img  = document.querySelector("#photo");


const userManager = {
   user : [] ,// isme sare users aayenge 
   init : function(){   // kaam hai shuruwat mein chale 
     form.addEventListener("submit",this.submitform.bind(this)) // yha this ye pura object hai // jab bhi submit hoga this.submit form chal jayega // yha this bind mein isliye likha hai bcs this yha object haiham ..uermanagaer bhi likh sakte hai 
   },
    submitform: function(val){
   val.preventDefault();
      this.adduser();
    },
   adduser: function(){
       this.user.push({ // this.user mein push kardo ek naya object 
        id: Date.now() ,  // har user ko ek unique id de rhe hai based on current time 
        username : username.value,
        bio : bio.value,
        role : role.value,
        img : img.value,                 
    })
    form.reset();
    this.renderUi();
   },
   renderUi : function(){
      document.querySelector(".users").innerHTML = ""; // khali kiya html ko
    this.user.forEach((user)=> {// ek ek karke sare users aa rhe hai // use arrow fuction bcs i have to preserve this 
      const card = document.createElement("div"); // div create hua hai 
      card.addEventListener("click",()=>{  // har card pe click listerner laga hai .. jab click kare user ka id pass ho rha hai .. for remove user call ho rha hai 
        this.removeUser(user.id);       
      })
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img"); // img create hui 
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.img;
      img.alt = "User Photo";
      card.appendChild(img); // card mein append kar diya hai 

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);

    });

  },
   
   removeUser : function(id){
    this.user = this.user.filter(()=>u.id !== id); // this.user pura array hai , filter naya array deta hai // lop chala rha hai pure user araay pe // lets say card 2 pe click hua sp card2 ki id agar match kar gyi to remove ho jayega 
    this.renderUi(); // vapas render kar rhe hai to update the ui 
   }
}
 userManager.init(); // bydefault chla rha hai 