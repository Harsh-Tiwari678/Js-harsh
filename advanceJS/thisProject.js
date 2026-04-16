let form  = document.querySelector("form");

const userManager = {
   user : [] ,// isme sare users aayenge 
   init : function(){
     form.addEventListener("submit",function(val){
        val.preventDefault();
        console.log(this); // here this is the form 
     })
   }, // kaam hai shuruwat mein chale 
   adduser: function(){},
   removeUser : function(){}
}
 userManager.init(); // bydefault chla rha hai 