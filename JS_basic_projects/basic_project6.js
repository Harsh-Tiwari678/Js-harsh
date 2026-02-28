let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit", function(dets){     // now we have to check for the details are correct or not 
     dets.preventDefault();
     document.querySelector("#emailError").textContent = ""
     document.querySelector("#passwordError").textContent = ""  // kepping them blank initially assuming ki phle koi error nhi tha completly blank the .. pichla kuch dikh rha hoga to hat jayega 
     const emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

     let isValid = true;
      let emailans = emailregx.test(email.value);
      let passwordans = passregex.test(password.value);
      if (!emailans){  // agar email ans fail hogaya 
       document.querySelector("#emailError").textContent  = "Email is incorrect"; // yhi pe id ko text content de diya 
       document.querySelector("#emailError").style.display = "initial"; 
       isValid = false;
      }
        if(!passwordans){
            document.querySelector("#passwordError").textContent = "Password is incorrect"
            document.querySelector("#passwordError").style.display = "initial";
            isValid = false;
        }
      
      if(isValid){
        document.querySelector("#resultmessage").textContent = "Every thingh is Correct";
        document.querySelector("#resultmessage").style.display = "block";
         document.querySelector("#resultmessage").style.color = "green";
      }
      
});

