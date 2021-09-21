//구조분해 할당
const user = {
  name: 'osh',
  age: 29,
  email: 'rk51320@naver.com'
}

const { name, age, email, address='Korea' } = user
// obj 안에 있는 key 값을 그대로 변수로 할당하여 쓸 수 있다.
// address는 obj 안에는 안들어있지만 변수 선언을 할때 default 값이 출력이 된다. 

console.log(`이름은 ${name}`);
console.log(`${name}의 나이는 ${age}`);
console.log(`${name}의 이메일 주소는 ${email}`);
console.log(address);


const fruits = ['Apple','Banana','Cheery']
const [a,b,c,d] = fruits
console.log(a,b,c,d);
// array 데이터는 key value가 없는 indexing data이기 떄문에
// 순차적으로 a b c d 에 들어간다. 
const [, e, f, g] = fruits
console.log(e,f,g);
// 순차적으로 값들을 할당하기떄문에 필요가 없는 값은 공란으로두되
// , 으로 구분을 해준다., 