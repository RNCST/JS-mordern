## browser environment 

js가 돌아가는 플랫폼 => host


host 는 browser webserver 등등이 될 수 있으며 각 플랫폼(host)은 플랫폼에 특정되는 기능을 제공하는데

이를 host environment라 부른다.


host environment 는 랭퀴지 코어(ECMASCRIPT)에 더하여 플랫폼에 특정되는 obj 와 function을 제공한다.

웹 브라우저는 웹 페이지를 제공하기위한 수단을 제공하고, Node.js는 서버사이드의 기능을 제공해준다.



window => DOM (document .....)
          BOM (navigator screen location frames history XMLHttpRequest)
          JavaScript (Object, Array, Function ...)

host 환경이 web browser일때.. 

최상단에는 window 불리는 root object가 있으며 window 객체는

1. javascript 코드의 전역 객체이며
2. browser window를 대변하고 이를 제어할 수 있는 method를 제공한다.. 

```javascript

funciont sayHi() {
    alert("안녕하세요")
}

window.sayHi();
```

```javascript
alert(window.innerHeight); // 창 내부(inner window)의 높이.. 
```

window 객체엔 다양한 method와 property가 있다. 



## Document Object Model.

DOM은 Web page 내의 모든 컨텐츠를 object로 나타내주며 이 object는 수정이 가능하다.

document object는 페이지의 기본 '진입점' 역할을 하며 document object를 통해 페이지 내 그 무엇이든 변경할 수

있고 원하는것을 만들 수 있다. 

```javascript 
document.body.style.background = "red";
// 배경을 붉은색으로 변경

setTimeout(() => document.body.style.background = "", 1000);
// 1초 후 원상태로 복구하기.


```

DOM은 document.body.style외에도 수많은 기능을 제공한다.. 

## Browser Object Model, BOM

BOM 은 document 이외의 모든 것을 제어하기 위해 browser(host enviornment)가 제공하는 추가 object를 나타낸다. 

ex) 
navigator 객체는 브라우저와 운영체제에 대한 정보를 제공한다. object엔 다양한 프로퍼티가 있는데, 가장 잘 알려진 property는 현재 사용중인 브라우저 정보를 알려주는 navigator.userAgent와 실행중인 운영체제의 정보를 알려주는 navigator.playform이다.

location 객체는 현재 URL을 읽을 수 있게 해주고 새로운 URL로 변경(redirect)할 수 있게 해준다. 

```javascript
    alert(location.href); // 현재 URL을 보여줌
    if(confirm("go to wikipedia?")){
        location.href = "https://wikipedia.org"; // 새로운 페이지로 넘어감. 
    }

```


