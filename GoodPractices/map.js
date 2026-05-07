let arr = [1,2,3,4,5,6];
function mymap(arr,callback){
let newarr=[]; // blank array bnaya 
for(let i = 0 ; i<arr.length;i++){
    newarr.push(callback(arr[i],i,arr));
}
return newarr;
}
 let ans = mymap(arr,function(val){
    return val+3;
})
console.log(ans)
