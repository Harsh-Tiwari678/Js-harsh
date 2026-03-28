let addNote = document.querySelector("#add-note"); 
// ye "add note" button ko select kar raha hai DOM se

let formContainer = document.querySelector(".form-container"); 
// ye pura form ka outer container (popup box) select kar raha hai

let closeForm = document.querySelector(".closeForm"); 
// ye close button ko select kar raha hai jo form band karega

const stack = document.querySelector(".stack"); 
// jaha cards show honge us container ko select kar rahe hai

const upBtn = document.querySelector("#upBtn"); 
// up button select (abhi use nahi ho raha)

const downBtn = document.querySelector("#downBtn"); 
// down button select (abhi use nahi ho raha)

const form = document.querySelector("form"); 
// pura form select kar liya

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
); 
// form ke andar se image URL wala input select kar rahe hai

const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']"
); 
// full name input select

const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']"
); 
// home town input select

const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']"
); 
// purpose input select

const categoryRadios = form.querySelectorAll("input[name='category']"); 
// saare radio buttons (category wale) select kar liye (NodeList milta hai)

const submitButton = form.querySelector(".submit-btn"); 
// submit button select (direct use nahi ho raha abhi)

// CODE STARTS HERE

function saveToLocalStorage(obj) { 
  // ye function ek object ko localStorage me save karega

  if (localStorage.getItem("tasks") === null) { 
    // agar pehle se koi data nahi hai localStorage me

    let oldTasks = []; 
    // ek empty array banaya

    oldTasks.push(obj); 
    // naye object ko array me daal diya

    localStorage.setItem("tasks", JSON.stringify(oldTasks)); 
    // array ko string me convert karke localStorage me save kar diya
  } else {
    let oldTasks = localStorage.getItem("tasks"); 
    // purana data nikala localStorage se

    oldTasks = JSON.parse(oldTasks); 
    // string ko dubara array me convert kiya

    oldTasks.push(obj); 
    // naye object ko add kiya

    localStorage.setItem("tasks", JSON.stringify(oldTasks)); 
    // updated array ko dubara save kar diya
  }
}

addNote.addEventListener("click", function () {
  formContainer.style.display = "initial"; 
  // jab add button click hoga tab form dikhega
});

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none"; 
  // close button click par form hide ho jayega
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault(); 
  // form submit hone par page reload hone se rokta hai

  const imageUrl = imageUrlInput.value.trim(); 
  // input ka value liya aur extra spaces hata diye

  const fullName = fullNameInput.value.trim(); 
  // full name input ka value liya

  const homeTown = homeTownInput.value.trim(); 
  // home town value liya

  const purpose = purposeInput.value.trim(); 
  // purpose value liya

  let selected = false; 
  // initially category select nahi hai

  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value; 
      // jo radio selected hai uski value store kar li
    }
  });

  if (imageUrl === "") {
    alert("Please enter an Image URL.");
    return; 
    // agar empty hai to aage ka code nahi chalega
  }

  if (fullName === "") {
    alert("Please enter your Full Name.");
    return;
  }

  if (homeTown === "") {
    alert("Please enter your Home Town.");
    return;
  }

  if (purpose === "") {
    alert("Please enter the Purpose.");
    return;
  }

  if (!selected) {  //!laga hai to ye true to jayega then it will run 
    alert("Please select a category");
    return;
  }

  saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  }); 
  // form ka data ek object bana ke localStorage me save kiya

  form.reset(); 
  // form ke saare inputs clear kar diye

  formContainer.style.display = "none"; 
  // form close kar diya

  showCards(); // doubt 
  // naye data ko UI me turant show karne ke liye function call kiya
});

function showCards() {
  stack.innerHTML = ""; //clear the previous cards 
  // pehle purane cards hata diye taki duplicate na bane

  let allTasks = JSON.parse(localStorage.getItem("tasks")); 
  // localStorage se data nikala aur array me convert kiya

  allTasks.forEach(function (task) {
    // har ek task ke liye ek card banega

    const card = document.createElement("div");
    card.classList.add("card");
    // card ka container banaya

    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);
    // image element banaya aur card me add kiya

    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);
    // name add kiya card me

    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");
    // hometown section ka container banaya

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";

    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);
    // hometown info card me add kiya

    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");
    // purpose section ka container

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";

    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);
    // purpose info add kiya

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
    // buttons ke liye container banaya

    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';
    // call button banaya

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";
    // message button banaya

    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);
    // buttons ko div me add kiya

    card.appendChild(buttonsDiv);
    // buttons ko card me add kiya

    document.querySelector(".stack").appendChild(card); 
    // final card ko UI me show kar diya
  });
}

showCards(); 
// page load hote hi jo bhi data localStorage me hai wo display ho jayega
function updateStack(){  // function bnaya jiska naam hai update stack 
 const cards =  document.querySelectorAll(".stack .cards"); // .stack ke andar jitne bhi .cards hai sabko select kiya ye ek node list jaisa structure return krega 
 for(let i =0 ; i<cards.length ; i++ ){
  const card = cards[i]; // ek ek karke cards nikal ke card vairable mein store kare rhe hai
 card.style.zindex = 3-index; //zIndex decide karta hai kaunsa card upar hoga   sabse bada sabse upar 
 card.style.transform = `translateY(${i*10}px) scale(${1-i*0.02})` // explanation in notebook 
 card.style.opacity  = `${i-i*0.02}`; //transparency control
// i = 0 → 1 (fully visible)
// i = 1 → 0.9
// i = 2 → 0.8
 }
 
 
}
 
upBtn.addEventListener("click", function(){
 let lastChild = stack.lastElementChild // we got the last child 
 if(lastChild){
  stack.insertBefore(lastChild,stack.firstElementChild)
  // update krna hai code upar hai
  updateStack(); 
 }
}); 
 downBtn.addEventListener("click",function(){
  const firstChild  = stack.firstElementChild;// we got the first child 
  if(firstChild){
    stack.appendChild(firstChild);
    // update krna hai code upar hai 
    updateStack();
  }
 });
