// function Pencil(name , company, price , color){
//   this.name = name;  // this yha pe abhi ek blank object maan lo 
//   this.company = company;
//   this.price = price;
//   this.color  = color;
// }
//   let Pencil1 = new Pencil("Natrajan", "Doms", 100, "blue"); // new ke lagne se this is the blank object 
//   let Pencil2 = new Pencil("DOMS", "DOMS",12,"black")

// prototype-------------------------------


function Pencil(name , price , color){
  this.name = name;  // this yha pe abhi ek blank object maan lo 
  this.price = price;
  this.color  = color;
  
}
   Pencil.prototype.write = this.write = function(text){
  let h1 =   document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  document.body.appendChild(h1);   // yha pe ab ye write function shared memory ein chala jaeyga  dono instances ki .. thus we save memory 

  }
  
  let Pencil1 = new Pencil("Natrajan", 100, "blue"); // new ke lagne se this is the blank object 
  let Pencil2 = new Pencil("DOMS",12,"black")