const userAge = {
  name: 'osh',
  age: 29
}

const userEmail = {
  name: 'osh',
  email: 'rk51320@naver.com',
}

console.log(userAge);
const target = Object.assign(userAge, userEmail)
console.log(target);
console.log(userAge);
console.log(target === userAge);
// 같은 메모리주소를 보고 있음.

const target2 = Object.assign({}, userAge, userEmail)
// 원본을 수정하지않고 새로운 객체를 만든다.
console.log(target2);
console.log(target===target2);

const a = {k:123}
const b = {k:123}
console.log(a === b); 
// => 생긴것은 똑같지만 서로 다른 객체이다. 
// 메모리 주소값이 다름.. 




const keys = Object.keys(userAge)
console.log(keys);

console.log(userAge['email']);
console.log(userAge.email);

const values = keys.map(key => userAge[key])
console.log(values);