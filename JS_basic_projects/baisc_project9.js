const user = [
    {
        name: "harsh",
        pic: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=600&auto=format&fit=crop&q=60",
        bio: "always learning new things"
    },
    {
        name: "aisha",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
        bio: "frontend developer who loves clean UI"
    },
    {
        name: "rohan",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
        bio: "fitness enthusiast and part-time coder"
    },
    {
        name: "meera",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
        bio: "digital artist and creative thinker"
    },
    {
        name: "kabir",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
        bio: "data science student exploring AI"
    },
    {
        name: "riya",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
        bio: "book lover and aspiring writer"
    },
    {
        name: "arjun",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
        bio: "startup enthusiast building SaaS products"
    },
    {
        name: "sanya",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
        bio: "UI/UX designer passionate about user research"
    }
];
const container = document.querySelector(".cards-wrapper");
 // array of objects with sample data of users ..

  
const showusers = (arr) => { 
     container.innerHTML = "";  // first clear the container so that we can show the new users after filtering and avoid appending the new users to the old users                 
   
    if(arr.length ===0){
    const message = document.createElement("h2");
    message.textContent = "No user found !";
    message.style.textAlign = "center";
    message.style.color = "red";
    container.appendChild(message);
    return;
     // return is used to stop the function from executing further and showing the message only when there are no users to show
  } // a function which accepts an array which has all the users we want to see 
  
  arr.forEach(function(user){   // array ke har object ke liye function chalege 
    // now we use document.create element bcs we have to crete new cards dynamically 
// Create card div
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = user.pic;
img.classList.add("bg-img");

// Create blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.classList.add("blurred-layer");
blurredLayer.style.backgroundImage = `url(${user.pic})`; // Set the background image of the blurred layer to the user's picture

// Create content div
const content = document.createElement("div");
content.classList.add("content");

// Create heading
const heading = document.createElement("h3");
heading.textContent = user.name;

// Create paragraph
const para = document.createElement("p");
para.textContent = user.bio;

// Structure build karna (append children properly)
content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

container.appendChild(card); // append the card to the container instead of body  
  });     // matlab isne bas use structure kiya hai ki vo kaise dikehga and ye flexible hai kitne bhi users ho code same rhega bss array of objects mein users add krne honge
} // We don’t use the users array... directly because passing arr makes the function flexible. It will show whatever data we pass to it. If we hardcode users, then the function will always work only with that users array and remain fixed to it.
showusers(user); // phli baar chalaya aur sare suers bhej diye 

// userms mein se vo value nikalo jo input se match ho
let inp = document.querySelector(".search-input");
inp.addEventListener("input", function(){
let newusers = user.filter((user) =>{ 
   return user.name.toLowerCase().startsWith(inp.value.toLowerCase())

})
showusers(newusers);  

})