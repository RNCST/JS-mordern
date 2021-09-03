### 제작코드

원격에서 스크립트를 불러온느 것 같이 시작이 걸리는 일을 수행한다.

### 소비코드 

제작 코드의 결과를 기다렸다가 이를 소비한다. 이떄 소비 주체\(함수\)는 여럿이 될 수 있다.

### 프라미스

제작코드와 소비코드를 연결해 주는 특별한 자바스크립트 객체이며, 프라미스는 시간이 얼마나 걸리든 상관없이 약속한 결과를 만들어 내는 제작코드가 준비되었을떄 모든 소비코드가 결과를 사용할 수 있도록 해준다.


```javascript
let promise = new Promis(function(resolve, reject) {
    //executor
});

new Promise에 전달되는 함수는 executor(실행자)라고 부르며 executor는 new pROMISE가 만들어질 떄 자동으로 실행이 되며 ,결과적으로 최종적으로 만들어내는 제작 코드를 포함한다. 


EXECUTOR의 인수 RESOLVE와 REJECT는 자바스크립트에서 자체 제공하는 콜백이며 개발자는 resolve와 reject를 신경 쓰지 않고 executor 안 코드만 작성하면 된다.

대신 executor에선 결과를 즉시 얻든 늦게 얻든 상관없이 상황에 따라 인수로 넘겨주는 콜백 중 하나를 반드시 호출해야 하는데 

resolve - 일이 성공적으로 끝낸 경우 그 결과를 나타내는 value 와 함계 호출 
reject - 에러 발생시 에러객체를 나타내는 error와 함계 호출이 된다.


executor는 자동으로 실행이 되는데 원하는일이 처리가 최고 처리가 끝나면 executor는 처리 성공 여부에 따라 resolve 나 reject를 호출한다.

한편 new Pormise 생성자가 반환하는 promise 객체는 다음과 같은 프로퍼티를 가진다.
state - 처음엔 pending(보류)이다가 resolve가 호출되면 fulfilled, reject가 호출되면 rejected로 변한다.

result - 처음엔 undefined 이었다가 resolve가 호출되면 value로 reject가 호출되면 error로 변한다.
```


```javascript

let promise = new Promise(function(resolve, reject) {

    //promise가 만들어지면 executor함수는 자동으로 실행이 된다.  
    //1초 뒤에 일이 성공적으로 끝났다는 신호가 전달이 되면서 result는 done이 된다. 
    setTimeout(() => resolve("done"), 1000);
});

==> 
executor는 new Pormise에 의해 자동으로 그리고 즉각적으로 호출이 된다.
executor는 인자로 resolve와 reject 함수를 받는다. 두개중 하나는 반드시 호출해야 한다. 
executor 처리가 시작된지 1초후 resolve("done")이 호출이 되고 결과가 만들어진다. 이떄 rpomise 객체의 상태는 { state: "pending" , result: "undefined"}에서 {state : "fulfilled", result : "done"}으로 변한다.

let promise = new Promise(function(resolve, reject) {
    

    setTimeout(() => reject(new Error("에러발생")), 1000);
})

상태는 { state: "pending" , result: "undefined"}에서 {state : "rejected", result : "error"}으로 변한다.


executor는 보통 시간이 걸리는 일이 수행하며 resolve나 reject를 호출하며 이떄 프라미스 객체의 상태가 변화된다.  resolved 나 rejected 상태의 프라미스는 처리된(settled) 프라미스라고 부르며 반대되는것으로는 대기중인(pending) 프라미스가 있다. 
```


```javascript
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new ERROR(`${src}로드중 에러`))

    document.head.appned(script);
}

==>

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`${src}로드중 에러 `));

        document. head.append(script;)
    });
}


let promise = loadSciprt("url")

promise.then(
    script => alert(`${script.src} 로드 성공`);
    error => alert(`Error: ${error.message}`);
)

promise.then(script => alert('또다른 핸들러'));

```


### async와 await

```javascript

async는 function 앞에 위치한다.

async function f() {
    return 1;
}
function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다.. 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 한다. 


async function f() {
    return 1;
}
f().then(alert); // ==> 1

async function f() {
    return Promise.resolve(1);
}
f().then(alert); // ==> 1

async가 붙은 함수는 반드시 프라미스를 반환하고 프라미스가 아닌 것은 프라미스로 감싸 반환을 한다.

```

```javascript

let value = await promise;

자바스크립트는 await 키워드를 만나면 프라미스가 처리(settled)될 떄까지 기다린다. 결과는 그 이후 반환이 된다.

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("finish"), 1000)
    });

    let result = await promise; ==> 프라미스가 실행될떄까지 기다림

    alert(result); // 완료 
}

f();


함수가 호출이 되고 함수 본문이 실행되는 도중에 await이 쓰이는 줄에서 실행이 잠시 중단되었다가 프라미스가 처리되면 실행이 재개가 된다 이떄 프라미스 객체의 '결과' 값이 변수 result에 할당이 되고 따라서 위 예시의 경우 실행하면 1초후 'finish'가 출력이 된다. 

await은 프라미스가 처리될댸까지 함수 실행을 기다리게 만들며 처리되길 기다리는 동안엔 엔진이 다른 일ㅇ르 할 수 있기 때문에 CPU 리소스가 낭비 되지 않는다. 

await 은 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법이다. 
```

```javascript 

async function showAvatar() {

    // JSON 읽기
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    //github 사용자 정보 읽기
    let githubResponse = await fetch(`https://api.gethub.com/users/${user.name}`);
    let githubUser = await guthubResponse.json();

    //아바타 보여주기 
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();
    return githubUser;

}
showAvatar();
```

```javascript
function 앞에 async 키워드를 추가하면 
1. 함수는 언제나 프라미스를 반환한다.
2. 함수 안에서 await을 사용할 수 있다.

프라미스 앞에 await 키워드를 붙이면 자바스크립트는 프라미스가 처리될 떄까지 대기한다, 처리가 완료되면 조건에 따라 에러발생(예외 생성,)에러미발생(프라미스객체의 result 값을 반환)한다.


```