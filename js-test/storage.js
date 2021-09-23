const user = {
  name: 'name1',
  age: 29,
  emails: [
    'rk51320@naver.com',
    'rk51320@gmail.com'
  ]
}

//browser 개발자모드 Application . Storage에서 스토리지확인가능..

//window.localStorage 

/*
https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 
객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다.
 localStorage는 sessionStorage와 비슷하지만, localStorage의 데이터는 만료되지 않고 
 sessionStorage의 데이터는 페이지 세션이 끝날 때, 
 즉 페이지를 닫을 때 사라지는 점이 다릅니다. 
*/

//localStorage => 반영구적
//SessionStorage => 닫으면 휘발

localStorage.setItem('user',JSON.stringify(user)); 
//문자데이터로 해야한다. (JSON.stringfy 형식)

const value =localStorage.getItem('user'); 
console.log(value);
console.log(typeof value);
console.log(JSON.parse(value));
console.log(typeof JSON.parse(value));
// JSON 형식의 문자데이터가 object로 변환

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22;
localStorage.setItem('user', JSON.stringify(obj));


// lowdb ==> JSON database Powered by Lodash
// https://github.com/typicode/lowdb
