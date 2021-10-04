// async await.. ES8(2017),
// Promise ES6(2015)

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('A');
      resolve()
    }, 1000)
  })
}
function a_reject(input) {
  return new Promise((resolve, reject) => {
    if (input > 4) {
      reject()
      return 
    }
    setTimeout(() => {
      console.log('A');
      resolve()
    }, 1000)
  })
}
function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('B');
      resolve()
    }, 1000)
  })
}
function c() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('C');
      resolve()
    }, 1000)
  })
}
function d() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('D');
      resolve()
    }, 1000)
  })
}

async function test() {
  await a()
  console.log('B');
}


function test_then() {
  a().then(() => {
    b().then(() => {
      c().then(()=> {
        d().then(() => {
          console.log('done');
        })
      })
    })
  })
}

function test_thenChaining() {
  a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => {
    console.log('done');
  })
}

function test_catch(input) {
  a_reject(input)
  .then(() => {
    console.log('resolve')
  })
  .catch(() => {
    console.log('reject');
  })
  .finally(() => {
    console.log('finally done');
  })
}




async function test_async_await(input) {
    await a_reject(input)
    console.log('resolve')
}

async function test_async_await_catch(input) {
  
  try {
    await a_reject(input)
    console.log('resolve');
  }catch(e) {
    console.error(e)
    console.log('reject');
  }finally {
    console.log('finally done');
  }
}


// test()
// test_then()
// test_thenChaining()
// test_catch(2) //resolve, // finally는 무조건 실행
// test_catch(5) // reject, // finally는 무조건 실행
// test_async_await(1) // ok
// test_async_await(5) // promise error.
test_async_await_catch(1) //catch
test_async_await_catch(5) //catch


// a()
// b()
// c()




