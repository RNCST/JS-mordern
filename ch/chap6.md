### 콜백

```javascript

loadscript = (src) => {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadscript(src)는 <script src="...">를 동적으로 만들고 문서에 이를 추가하는데 
브라우저는 자동으로 태그에 있는 스크립트를 불러오고 로딩이 완료되면 스크립트를 실행한다..


loadScript('/,y/script./js'); => function newFunction() {} 를 가지고 있음.
이떄 loadScript 아래의 코드는 스크립트 로딩이 끝날떄까지 기다리지 않는다. 때문에 

newFunction(); 이 있을때 함수가 존재하지 않는다는 에러가 발생할 수 있다. 


loadScript의 두번쨰 인수로 스크립트 로딩이 끝난후 실행될 함수인 callback(나중에 호출할 함수)를 추가.

function loadScript(src, callback){

    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}


loadScript('/my/script.js', function(){
    // 콜백함수는 스크립트 로드가 끝나면 실행이 된다.
    newFunction(); // 이제 함수 호출이 제대로 동작.
    ...
})

----
function loadScript(Src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.appned(script);
}

loadSciprt('https://link.com', script => {
    alert(`${script.src}가 로드되었습니다.`);
    alert( _ ) // 스크립트에 정의된 함수.
});

==> 콜백기반 비동기 프로그래밍이라고 하며 무언가를 비동기적으로 수행하는 함수는 함수 내 동작이 모두 처리된 후 실행되어야 하는 함수가 들어갈 callback을 인수로 반드시 제공해야 한다.

```


### 콜백 속의 콜백

```javascript
loadScript('/my/script.js', function(script) {
    
    alert(`${script.src})로딩`);

    loadScript('/my/script2/js', function(Script) {
    alert(`두번째 스크립트 로딩`);

        loadScipt('/my/script3/js', function(script) {
            alert(`세번째 스크립트 로딩');
        });

    });

});


```


### 에러 핸들링

```javascript
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}불러오는중 에러`));
    
    document.head.append(Script);

    ==> 이코드에서 loadScript는 로그에 성공하면 callback(null, script); 실패하면 callback(Error)를 호출.. 

    loadScript('my/script.js', function(error, script) {})
    if(error) {
        //에러처리
    } else {
        //스크립트 로딩이 끝남.
    }

    ==> callback 의 첫번쨰 인수는 에러를 위해 남겨두고 에러가 발생하면 이 인수는 통해 callback(Err)이 호출 된다.

    두번째 인수는 에러가 발생하지 않았을 떄를 위하 남겨두며 원하는 동작이 성공하는 경우 callback(null, resul1,result2...)이 호출이 된다. 
}
```


