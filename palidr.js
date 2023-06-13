function isPalindrome(x){
  if(typeof x !== 'number'){
    return '${x} is not a number';
  }
   
 x=x.toString().split('');

 for(var i=0; i<(x.length/2); i++){
   if(x[i] !== x[x.length-1-i])
     return false;
 }
}return true;

let answer = 0;
for (let x = 999; x >= 100; x--)
  for (let y = x; y >= 100; y--) {
    let product = x * y;
    if(isPalindrome(product) && product>answer){
      answer=product;
    }
    return answer;
  }
  