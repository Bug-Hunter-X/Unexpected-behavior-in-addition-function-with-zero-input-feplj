function foo(a, b) {
  //Explicitly handle the case where either a or b is 0
  if (a === 0) return b; 
  if (b === 0) return a;
  return a + b; 
}

console.log(foo(0,1)); //Output: 1
console.log(foo(1,0)); //Output: 1
console.log(foo(1,1)); //Output: 2