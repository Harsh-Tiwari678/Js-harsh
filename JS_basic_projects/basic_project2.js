let btn = document.querySelector("#btn");// button ko select kiya 
let fileinp = document.querySelector("#inp");// inp file ko select kiya 
btn.addEventListener("click",function(){
fileinp.click();
});
fileinp.addEventListener("change",function(val){ // jab bhi koi change ho toh ye function chal jaye 
const file = val.target.files[0];//
if(file){
    btn.textContent = file.name ;
}
})