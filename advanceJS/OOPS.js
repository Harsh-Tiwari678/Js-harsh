// function Pencil(name , company, price , color){
//   this.name = name;  // this yha pe abhi ek blank object maan lo 
//   this.company = company;
//   this.price = price;
//   this.color  = color;
// }
//   let Pencil1 = new Pencil("Natrajan", "Doms", 100, "blue"); // new ke lagne se this is the blank object 
//   let Pencil2 = new Pencil("DOMS", "DOMS",12,"black")


function Pencil(name , company, price , color){
  this.name = name;  // this yha pe abhi ek blank object maan lo 
  this.company = company;
  this.price = price;
  this.color  = color;
  this.write = function(text){
  let h1 =   document.createElement("h1");
  h1.textContent = text;
  h1.style.color = color;
  document.body.appendChild(h1);

  }
}
  let Pencil1 = new Pencil("Natrajan", "Doms", 100, "blue"); // new ke lagne se this is the blank object 
  let Pencil2 = new Pencil("DOMS", "DOMS",12,"black")