// 코드를 작성한순서대로 진행되는것을 동기방식이라고한다.
function a(callback){
  setTimeout(()=> {
    console.log('A')
    callback()
  }, 1000)
}
function b(callback){
  setTimeout(()=> {
    console.log('B')
    callback()
  }, 1000)
}
function c(callback){
  setTimeout(()=> {
    console.log('C')
    callback()
  }, 1000)
}
function d(callback){
  setTimeout(()=> {
    console.log('D')
    callback()
  }, 1000)
}
function e(callback){
  setTimeout(()=> {
    console.log('E')
    callback()
  }, 1000)
}

// a(function (){
//   b(function () {
//     c(function() {
//       d(function() {
//         console.log('Done');
//       })
//     })
//   })
// }) 

// 기본적으로 처리가 지연되는 환경에서는 비동기라는 개념을 도입하여서 A가 동작하고 
// B가 동작하도록 보장할 수 있다.
// callback 하나의 데이터처럼 사용되는 함수, a라는 함수의 로직이 끝난 뒤에 호출을 보장하는 용도
function ap() {
  return new Promise(
    function (resolve) {
    setTimeout(()=> {
      console.log('AP');
      resolve('Hello resolve')
    }, 1000)
  })
  // 약속의 객체.
}
function bp(){
  console.log('BP')
}
async function test() {
  await ap() 
  const res = await ap()
  console.log('res:', res);
  // promise 객체앞에 await를 쓰게되면 resolve()라는 매개변수가 호출되기전까지 기다렸다가 resolve를 만나면
  // 그다음으로 넘어가준다.
  // resolve의 인수를 통해 return값으로 다른 인수로 넘겨줄 수 있다. 
  bp()
}

test()





