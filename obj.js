'use strict';

// Object Destructuring
const obj5 = {first: 'kishore', last: 'kunapareddy', age: 28};

function getObj() {
  return obj5;
}

const {first, last} = getObj();

console.log(first);
console.log(last);

// Array Destructuring
const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x);
console.log(y);
function func({x = 1}) {
  console.log(x);
}
func({});
/////////Arrow function
'use strict';
var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10; 
  }
});