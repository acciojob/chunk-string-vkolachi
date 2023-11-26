function stringChop(str, size) {
	if(str===null) return [];
 let i=0,arr=[];
while(i <=str.length-1){
  arr.push( str.slice(i , i+size));
  i=i+size;
}        

return arr;
	 
	  
} 

Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
