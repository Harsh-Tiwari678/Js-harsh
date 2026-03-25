// new cards create krne hai , data local storage mein save karna hai 
// local storage  se hi cards ko show karna hai 
// buttons ko handle karna hai 
// filters ko handle karna hai
// ALL VARIABLES AND DOC SELECTIONS

//---- selecting elements from the DOM

  let addnote =   document.querySelector("#add-note"); // ADD BUTTON SELECTED 
   let formContainer = document.querySelector(".form-container"); // selectiing the from 
   let closebtn = document.querySelector(".closeForm");  // selecting the close button 
     const form  = document.querySelector("form")//selectiing the from 
     // Select inputs
  const imageUrl = document.querySelector("input[placeholder='https://example.com/photo.jpg']");
  const fullName = document.querySelector("input[placeholder='Enter full name']");
  const homeTown = document.querySelector("input[placeholder='Enter home town']");
  const purpose = document.querySelector("input[placeholder='e.g., Quick appointment note']"); 

  // Select checked radio button
  const category = document.querySelectorAll("input[name='category']");
  const submitBtn = document.querySelector(".submit-btn"); // submit btn selected 


//--- code starts here 
  addnote.addEventListener("click", function(){
   formContainer.style.display = "block"; // showing form   
  })
  closebtn.addEventListener("click", function(){
    formContainer.style.display = "none"; // when click on the close btn form  off 
  })
  form.addEventListener("submit", function(evt){
    evt.preventDefault(); //preventing so that page will not reload when submit button is clicked
    const imageurl = imageUrl.value.trim();    // getting the value of the input and trimming it(removing extra spaces)
    const fullname = fullName.value.trim();
    const hometown = homeTown.value.trim();
    const purposeValue = purpose.value.trim();

    if(!imageurl || !fullname || !hometown || !purposeValue){ 
      alert("Details bhrle "); // checking if all the fields are filled
      return;
    }
  })
