import _ from 'lodash'

const user = {
  name : 'osh',
  age: 27,
  emails: ['rk51320@naver.com']
}

const copyUser = user
console.log(copyUser === user); //==> 같은 메모리주소를 보고있다.
console.log('user', user);
user.age = 29
console.log('user', user);
console.log('copyUser', copyUser);
//==> 같은 메모리주소를 보고있기에 user만 바꿔도 copyUser도 바뀐다.



const copyUser2 = Object.assign({}, user) // 새로운 메모리에 복사
console.log(user ===copyUser2);
console.log(copyUser === copyUser2);

const copyUser3 = {...user}; // 새로운 메모리에 복사, 얕은복사
console.log(user === copyUser3);
console.log(copyUser === copyUser3);

//=== 얕은복사 ====



const copyUser4 = _.cloneDeep(user); //==> 깊은복사
console.log(user === copyUser4);
console.log(copyUser4);

user.emails.push('rk51320@gmail.com')
console.log(user.emails === copyUser4.emails);

// +) 
let objects = [{ 'a': 1 }, { 'b': 2 }];
 
let deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false