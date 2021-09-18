### nodeType

요소의 type을 알고 싶을때 사용한다 요소노드라면 1 텍스트노드라면 3을 반환한다.. 


### nodeName/tagName

요소 노드의 태그이름을 알아낼 떄 사용이 된다. XML모드일떄를 제외하고 항상 대문자로 변환이 되며 요소 노드가 아닌 노드에는 nodeNamd을 사용하면 된다. 


### innerHTML

요소 안의 HTML을 알아낼 수 있다. 이 프로퍼티를 사용하면 요소 안의 HTML을 수정할 수도 있다. 

### outerHTML

요소 전체 HTML을 알아낼 수 있다. elem.outerHTML에 무언가를 할당해도 elem 자체는 바뀌지 않지만 대신 새로운 HTML이 외부 컨텍스트에서 만들어지고 elem이 삭제된 자리를 채운다. 

### nodeValue/data

요소가 아닌 노드의 내용을 읽을 떄 쓰인다. 두 프로퍼티는 거의 동일하게 동작하며 주로 data를 많이 사용하는 편이며 내용을 수정할 떄도 이 프로퍼티를 쓸 수 있다.

### textContent

HTML에서 모든 TAG를 제외한 텍스트만 읽을 떄 사용한다 할당 연산을 통해 무언가를 쓸 수도 있는데 이떄 태그를 포함한 모든 특수문자는 문자열로 처리되기 떄문에 원치 않는 HTML이 사이트에 삽입되는 것을 예방할 수 있다.




### 후손 노드 개수 새기

li 노드 안에 있는 텍스트를 출력한다
li 노드 아래에 있는 모든 \<li\> 태그의 개수를 출력

```javascript
<body>

  <ul>
    <li>육상 동물
      <ul>
        <li>포유류
          <ul>
            <li>소</li>
            <li>당나귀</li>
            <li>개</li>
            <li>호랑이</li>
          </ul>
        </li>
        <li>비 포유류
          <ul>
            <li>뱀</li>
            <li>새</li>
            <li>도마뱀</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>수생 동물
      <ul>
        <li>담수 동물
          <ul>
            <li>붕어</li>
            <li>메기</li>
          </ul>
        </li>
        <li>해양 동물
          <ul>
            <li>해마</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

    <script>
        for(let li of document.querySelectorAll('li')){
            
            let title = li.firstChild.data;
            // text 노드를 사용해 원하는 글자를 얻는다. 

            title = title.trim();

            let count = li.getElementsByTagName('li').length;

            alert(`${title} : ${count});`)
        }
    </script>

    => 육상동물 : 9  포유류 :4  소:0 .....
```


### 노드 타입 맞추기 

```javascript
<html>

<body>
    <script>
        alert(document.body.lastChild.nodeType);
    </script>
</body>

</html>

=> script가 실행되는 시점엔 브라우저가 script아래에 잇는 문서를 처리하지 못했기 떄문에 가장 마지막 DOM 노드는 <script> 자기자신이다. alert창에는 1 이 출력된다. 
```

### 주석 안의 태그

```javascript
<script>
    let body = document.body;
    
    body.innterHTML = "<!--" + body.tagName + "-->";

    alert(body.firstChild.date);
</script>

=> alert으로 BODY 출력.. 
1. <body>의 컨텐츠가 <!--BODY--!>로 대체가 된다 body.tagName은 "BODY"이기 떄문

2. <body> 의 콘텐츠가 교체되면서 주석이 유일한 자식 노드가 됩니다 따라서 body.firstChild을 사용해 주석을 얻을 수 있게 된다.

3. 주석 노드의 data 프로퍼티엔 주석 내용 <!-- ... --> 안쪽의 내용이 저장이 된다.. 따라서 data 프로퍼티의 값은 "BODY" 이다. 

```


### DOM 계층 구조와 'document'

document는 어떤 class에 속하는가?

DOM 계층 구조에서 document가 속한 클래스는 어디에 위치해 있는가?

이 클래스는 Node Element HTMLElement중 어떤 클래스를 상속받는가? 

```javascript

alert(document) => object HTMLDocument

alert(document.constructor.name);  => HTMLDocument

document는 HTMLDocument 클래스의 인스턴스이다.

alert(HTMLDocument.prototype.constructor === HTMLDocument) => true

alert(HTMLDocument.prototype.constructor.name); ==> HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); ==> Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name) ==> Node

```


### prototype

JAVA C++ 과 같이 class 기반의 언어를 사용 해보면 javascript같은 동적인 언어에서 class가 없다는것에 혼란스러움을 느낄 수 있다. ES5 부터 class 키워드를 지원하기 시작했지만 문법적인 양념일뿐 여전히 프로토 타입 기반으 ㅣ언어이다. 

상속 관점에서 javascript의 유일한 생성자는 객체뿐이다 각각의 객체는 \[\[Prototype\]\] 이라는 은닉 속성을 가지는데 자신의 프로토타입이 되는 다른 객체를 가리킨다. 그 객체의 프로토타입 또한 프로토타입을 가지고있고 이것이 결국 되다, null을 프로토타입으로 가지는 오브젝트에서 끝난다. null은 더 이상으 ㅣ프로토타입이 없다고 정의되며 프로토타입 체인의 종점 역할을 한다. 

ECMAScript는 someObject.\[\[Prototype\]\]을 객체  someObject의 프로토타입을 지시하도록 명시하였다. ECMAScript2015부터 \[\[Prototype\]\]에 조상 Object.getPrototypeOf와 Object.setPrototypeOf method을 이용하여 접근하기 떄문, 

### \_\_proto\_\_

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object


console.log( doSomeInstancing ); ==> 

{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}


와 같이 doSomeInstancing 객체의 __proto__ 는 doSomething.prototype 이다.

우리가 doSomeInstancing의 속성에 접근할떄 브라우저는 우선 doSomeInstancing이 그 속성을 가지고 있는지 확인한다. 만약 doSomeInstancing이 속성을 가지고 있지 않다면, 브라우저는 doSomeInstancing의 __proto__(doSomething.prototype)가 그 속성을 갖고 있는지 확인한다.
만약 doSomeInstancing의 __proto__가 브라우저가 찾던 속성을 갖고 있다면, doSomething의 __proto__가 가지고 있는 그 속성을 사용한다. 

그렇지 않고, doSomeInstancing의 __proto__가 그 속성을 갖고있지 않을때에는 doSomeInstancing의 __proto__의 __proto__가 그 속성을 가지는지 확인한다.. 

기본적으로 어떠한 함수던지 그 함수의 prototype 속성의 __proto__는 window.Object.prototype이다.




```