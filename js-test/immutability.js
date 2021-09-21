//데이터 불변성

// 원시데이터
// String Number Boolean undefined Null

// 참조형
// Object Array Function


// 
// 1.a=1    2.b=4    3.     4.
// 

let a = 1
let b = 4 
console.log(a,b, a===b);
// 
// 1.a=1    2.b=4    3.     4.
// 값이 다른것보다는 바라보는 메모리의 위치가 다르기 떄문에 false

b =a 
console.log(a,b, a ===b);
// a의 메모리 주소를 b에게 할당하는것이다.
// 1.a,b=1    2.    3.     4.
// 값이 같아서 true인것도 맞지만 데이터의 주소가 일치하기떄문에 true인것

a= 7 
console.log(a,b, a ===b);
// 
// 1.a=7    2.b=1    3.     4.
// 

let c = 1
console.log(b,c, b ===c);
// 
// 1.a=7    2.b, c=1    3.     4.
// 값은 같고 메모리주소도 같은곳을 바라보게된다.

// 원시형데이터들은 새로만들어지는것이 아니라 메모리에 한번만들어지면
// 그곳을 계속참조하게된다.


let a1 = { k: 1}
let b1 = { k: 1}

console.log(a1, b1, a1===b1);
// 
// 1.a1={k:1}    2.b1={k:1}    3.     4.
// 참조형은 새로운값을 만들떄마다 새로운 메모리를 할당하게된다.

a1.k = 7;
b1 = a1;
console.log(a1, b1, a1===b1);
// 
// 1.a1,b1={k:7}    2.    3.     4.
// = 할당 연산자로 인해 b1이 a1의 주소값을 바라보게된다. 
a1.k = 2
console.log(a1,b1, a1 === b1);
// 
// 1.a1,b1={k:2}    2.    3.     4.
// 이미 b1이 a1의 메모리를 바라보고 있기때문에 a1의 key value만 바꿔도
// b1에서의 key value값도 바뀐것처럼 보인다. 
let c1 = b1;
console.log(a1,b1,c1, a1===c1);
//
// 1.a1,b1 c1={k:2}    2.    3.     4.
// c1도 똑같이 b1을 바라보게되고 b1은 a1을 바라보게된다. 


