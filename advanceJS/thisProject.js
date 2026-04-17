let form  = document.querySelector("form");
let username  = document.querySelector("#name");
let bio  = document.querySelector("#bio");
let role  = document.querySelector("#role");
let img  = document.querySelector("#photo");

const userManager = {
   user : [] ,// isme sare users aayenge 
   init : function(){   // kaam hai shuruwat mein chale 
     form.addEventListener("submit",this.submitform.bind(this)) // yha this ye pura object hai // jab bhi submit hoga this.submit form chal jayega // yha this bind mein isliye likha hai bcs this yha object haiham suermanagaer bhi likh sakte hai 
   },
    submitform: function(val){
   val.preventDefault();
      this.adduser();
    },
   adduser: function(){
       this.user.push({ // this.user mein push kardo ek naya object 
        username : username.value,
        bio : bio.value,
        role : role.value,
        img : img.value,                 
    })
    form.reset();
   },
   removeUser : function(){}
}
 userManager.init(); // bydefault chla rha hai 