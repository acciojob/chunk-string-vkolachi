function stringChop(str, size) {
 let i=0,arr=[];
while(i<=str.length){
  arr.push(str.slice(i,i+size));
  i=i+size;
}
console.log(arr);
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
