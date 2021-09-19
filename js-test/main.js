import random from "./getRandom";

const ulEl = document.querySelector("ul");

console.log(ulEl);

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list - ${i + 1}`;
  if ((i+1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
}


// Truthy true {} [] 1 2 'fase' -12 '3.14

//  Falsy false '' null undefined 0 -0 NaN



//arrow function
const double = function (x) {
  return x *2
}

const doubleArrow  = (x) => {return x * 2}
const doubleArrow2  = (x) => x * 2
const doubleArrow3  = (x) => {( objName = 'object ')};

console.log(double(7),'__',doubleArrow(7),'___',doubleArrow2(7));




// IIFE 즉시 실행 함수 

const c = 9 ;

(function() {
  console.log(c*2);
})();

(function() {
  console.log(c*2);
}());


// Hoisting 
// 함수 선언부가 유효범위 최상단으로 올라가는 현상
// 익명 함수는 되지않고 기명함수만 작동

const d = 7;


// Timer function 
// setTimeout(func, time) 일정 시간후 함수 실행
// setInterval(func, time) 시간 간격마다 함수 실행 
// clearTimeout() Timeout ㅅ종료
// clearInterval() Interval 종료

const timer = setTimeout(() => {
  console.log('Timeout');
}, 3000)

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer);
  clearInterval(Interval);
})

const Interval = setInterval(() => {
  console.log('interval');
}, 500)


//callback
//함수의 인수로 사용되는 또 다른 함수 
//ex ) setTimeout(func , time) setTimeout이라는 함수가 실행될 떄
//func함수가 사용되는데 이떄 func를 콜백 함수라고한다. 

function timeout(cbFunc) {
  setTimeout(() => {
    console.log('timeout()');
    cbFunc()
  }, 3000)
}
// 특정한 실행 위치를 보장해주는 방법으로 사용 할 수 있다. 
timeout( () => {
  console.log('done');
})


