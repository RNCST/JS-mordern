const pi = 3.14159265345

console.log(pi);

let str = pi.toFixed(2)

console.log(str); 
console.log(typeof str);

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer); //3
console.log(typeof integer);
console.log(float); //3.14
console.log(typeof float);


console.log('abs ',Math.abs(-12));
console.log('min ',Math.min(2,8));
console.log('max ',Math.max(2,8));
console.log('ceil ',Math.ceil(3.14)); // 올림처리
console.log('floor ',Math.floor(3.14)); // 내림
console.log('round ',Math.round(3.14)); // 반올림
console.log('random ',Math.random());
