import _ from 'lodash'
import getType from './getType'
import getRandom from './getRandom'


console.log(_.camelCase('Hello World'));

// export 와 import를 이용해 가져오거나 내보낼 수 있다. 

// import를 통해 가져올 수있는 문법을 작성한다.

// default dexport 이름을 지정하지않아도 된다, 
// named export 이름을 지정해야한다
// named export 를 하는 경우에는 improt 하는경우 
// import { getRandom }로 해야한다. 또는
// import { user as asdf } => console.log(asdf)로 불러올 수 잇다. 또는
// import * as R from './getRandom' console.log(R) 처럼 모든 export 데이터를 한꺼번에 
// R에 담을 수 있다.




// lodash //

_.uniq([2,1,2]) // => [2,1]

const usersA = [
  {userId: '1', name: 'name1'},
  {userId: '2', name: 'name2'}
]

const usersB = [
  {userId: '1', name: 'name1'},
  {userId: '3', name: 'name3'}
]

const usersC = usersA.concat(usersB) // 배열 일반 병합

console.log('concat',usersC);
console.log('uniqBy',_.uniqBy(usersC, 'userId')); 
// userId 을 고유값으로 하여 새로운 배열을 만듬
const usersD = _.unionBy(usersA, usersB, 'userId')
// userId를 고유값으로 하여 배열을 병합하여 새로운 배열을 만듬.
// 고유값의 value값이 서로 다를떄는 앞쪽에 있는 배열의 value값을 씀
console.log('unionBy',usersD);

const users = [
  { userId: '1', name: 'name1'},
  { userId: '2', name: 'name2'},
  { userId: '3', name: 'name3'},
  { userId: '4', name: 'name4'},
  { userId: '5', name: 'name5'},
]

const foundUser = _.find(users, {
  name: 'name3'
})
const foundUserIndex = _.findIndex(users, {
  name: 'name3'
});
console.log(foundUser); // => {userId: '3', name:'name3'}
console.log(foundUserIndex); // => 2

console.log(users);
_.remove(users, {name:'name3'})
console.log(users);



// JSON // 
// JavaScript Object Notation 
// media type => application/json
// Number , String(""만 허용) , Boolean , Array, Object , null

const user = {
  name:'name',
  age: 29,
  emails: [
    'rk51320@naver.com',
    'rk51320928@gmail.com'
  ]
}

console.log('user', user);

const str = JSON.stringify(user) // 모든 데이터를 문자데이터화
console.log('str', str);
console.log(typeof str);

import myData from './myData.json';
console.log(myData); 
console.log(typeof myData);

// json 이라는 포맷은 문자데이터이지만 import 를 통해 가져오면 object로 인식이된다.


