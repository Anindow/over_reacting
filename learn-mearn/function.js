// named function 

// function declation: 
 function function1(){
	console.log('anything')
}
function1() // called by the name 

const now = function(){
	console.log('anything 2nd time')
}
now() // variable function

const arrowFunction = () => { 
console.log('anything for the 3rd time ')
}
arrowFunction() // function call

////////// inline function 
const calculation = (num, fn) => {
  let result = 0;
  for (let index = 0; index < num; index++) {
    const temp = fn(index);
    result = result + temp;
  }
  return result;
};
const sum = calculation(10, (x) => {        // linline funciton
  return x + x;
}); 
console.log(sum);


const mul = calculation(10, (x) => {
  return x * x;
}); 

// minimal funciton : it could be decleared as ()() like this 

const square = (z) => {
    const fun = function () {
        return z* z;
    }
    return fun ;
}
console.log (   square(11)()   ); // minimal function `suare(20)()` console logging is for printing the value 

// (() => { return new Date(); }) () another one
