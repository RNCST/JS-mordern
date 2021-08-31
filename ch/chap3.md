# DOM 탐색

DOM을 이용하여 요소와 요소의 콘텐츠에 무엇이든 할 수 있지만 무언가를 하기전에는 조작하고자 하는 DOM Object 에 접근하는 것이 선행 되어야 한다.

DOM을 수행하는 모든 연산은 document 객체에서 시작을 하며 document 객체는 DOM에 접근하기 위한 '진입점'이며 진입점을 통과하면 어떤 노드에도 접근할 수 있다.


```javascript

 previousSibling, nextSibling, firstChlid, lastChlid <==childNodes <== <div> ==>parentNode =...==> document.body ==>document.documentElement(<HTML>) 


```

\<html\> \= document.documentElement

document를 제외하고 DOM 트리 꼭대기에 있는 문서 노드는 \<html\> 태그에 해당하는 document.documentElement이다.


\<body\> \= document.body

document.body는 \<body\> 요소에 해당하는 DOM 노드로, 자주 쓰이는 노드 중 하나이다.
document.body는 null일 수 있으며 DOM에서 null은 '존재하지 않음'이나 '해당하는 노드가 없음'


\<head\> \= document.head

\<head\>는 document.head로 접근 할 수 있다.



### childNodes, firstChild, lastChild로 자식 노드를 탐색하기.

- 자식 노드 child node 는 바로 아래의 자식 요소를 나타냅니다. 자식 노드는 부모 노드의 바로 아래에서 중첩 관계를 만들으며, \<head\>와 \<body\>는 \<html\>요소의 자식 노드이다.

- 후손 노드 descendants 는 중첩 관계에 있는 모든 요소를 의미하며, 자식노드, 자식노드의 모든 자식노드 등이 후손 노드가 된다. 

```javascript

<html>
<body>
    <div>시작</div>

    <ul>
        <li>
            <b>항목</b>
        </li>
    </ul>
</body>
</html>

```

\<div\> \<ul\>같은 \<body\>의 자식 요소뿐만 아니라\<ul\>의 자식 노드는 \<li\>와 \<b\> 같이 더 깊은 곳에 있는 중첩 요소도 \<body\>의 후손 노드가 된다. 

\childNodes 컬렉션은 텍스트 노드를 포함한 모든 자식 노드를 담고 있다. 


```javascript
<html>
<body>
    <div>시작</div>

    <ul>
        <li>항목</li>
    </ul>

    <div>끝</div>

    <script>
    for (let i =0; i <document.body.childNodes.length; i++ ){
        alert(document.body.childNodes[i]);
        //Text, DIV, Text, UL, ... , SCRIPT 
    }
    </script>

</body>
</html>

```

\<script\> 아래 더 많은 내용이 있지만 script 실행 시점엔 browser가 추가 내용은 읽지 못한 상태이기 떄문에 스크립트 역시 추가 내용을 보지못해 alert에는 script만 뜨게 된다.

firstChild와 lastChild 프로퍼티를 이용하면 첫 번째, 마지막 자식 노드에 빠르게 접근 할 수 있다.

```javascript

elem.childNodes[0] === elem.firstChild
elem.childNodes[ele.childNodes.length-1] === elem.lastChild

```

자식의 노드의 존재 여부를 검사할때는 함수 ele.hasChildNodes\(\)를 사용할 수도 있다. 


### DOM 컬렉션

childNodes는 배열같아보이지만 배열이 아닌 반복가능한(iterable) 유사 배열 객체인 Collection이다.

childNodes는 컬렉션이기 떄문에 for..of 를 쓸 수 있으며 배열이 아니기떄문에 배열 메서드를 쓸수 없다..

```javascript
for(let node of document.body.childNodes){
    alert(node); //collection 내의 모든 node를 보여준다.
}

childNodes는 iterable이기 떄문에 Symbol.iterator 프로퍼티가 구현이 되어 있어서 for..of 사용이 가능하다..

alert(document.body.childNodes.filter); //undefined , filter 메서드가 없습니다.

Array.from 을 이용해 배열화 할 수 있다.

alert(Array.from(document.body.childNodes).filter);
```

DOM 컬렉션은 읽기 전용이며, 참조하고 있는 도중에 DOM에 새로운 노드가 추가되거나 삭제가되면 변경사항이 컬렉션에도 자동으로 반영이 된다..

Collection은 for...of을 이용해 순회할 수 있으며, for..in은 사용해서는 안된다,

for..in반복문은 객체의 모든 열거 가능한 프로퍼티를 순회하게된다.

```javascript

for (let prop in document.body.childNodes) alert(prop);
   //0, 1, length, item, values 등 불필요한 프로퍼티까지도 출력이 된다. 

```


### 형제와 부모 노드 

같은 부모를 가진 노드는 형제\(sibling\) 노드라고 부른다. 

\<head\>와 \<body\>는 대표적인 형제 노드인데 \<head\>는 \<body\>의 이전previous 혹은 좌측left에 있는 형제 노드이다.

다음 노드에 대한 정보는 nextSibling, 이전 노드에 대한 정보를 previousSibling 프로퍼티에서 찾을 수 있으며

부모노드에 대한 정보는 parentNode 프로퍼티를 이용해 참조할 수 있다.


```javascript
// <body>의 부모 노드는 <html>
alert (document.body.parent === document.documentElement) ; //true

// <head>의 다음 형제 노드는 <body>
alert (document.head.nextSibling); //HTMLBodyElement

// <body>의 이전 형제 노드는 <head>
alert (document.body.previousSibling); //HTMLHeadElement

```

### 요소간 이동

지금까지의탐색 관련 프로퍼티는 모든 종류의 노드를 참조하며 childNodes를 이용하면 텍스트 노드, 요소 노드. 주석 노드까지 참조할 수 있다. 하지만 실무에서 텍스트 노드나 주석 노드는 잘 다루지 않고 웹페이지를 구성하는 요소노드를 조작하는 작업이 대다수이다. 

- children 프로퍼티는 해당 요소의 자식 노드 중 요소 노드만을 가리킨다. 

- firstElementChild와 lastElementChild 프로퍼티는 각각 첫 번째 자식 요소 노드와 마지막 자식 요소 노드를 가리킨다.

- previousElementSibling과 nextElementSibling은 형제 요소 노드를 가리킨다.

- parentElemt는 부모 요소노드를 가리킨다. 

```javascript
paretnElement 프로퍼티는 부모 요소 노드를 반환하는 반면 
parentNode 프로퍼티는 종류에 상관없이 부모 노드를 반환한다. 
대개 두 프로퍼티는 같은 노드를 반환한다.

하지만 

alert(document.documentElement.parentNode); // document
alert(document.documentElement.parentElement); //null

document.documentElement의 부모는 document인데 
document 노드는 요소노드가 아니기 떄문에 parentNode는 의도한대로 document를 반환하지만 parentElement는 null을 반환한다. 

이런 차이를 이용해 임의의 element에서 시작해 <html>까지만 가고 document까지 가고싶지 않을때 유용하게 사용할 수 있다.

while(element = element.parentElement){
    alert(element);
}

```

```javascript
<html>
<body>
  <div>시작</div>

  <ul>
    <li>항목</li>
  </ul>

  <div>끝</div>

  <script>
    for (let elem of document.body.children) {
      alert(elem); // DIV, UL, DIV, SCRIPT
    }
  </script>
  ...
</body>
</html>
```

### 테이블 탐색

DOM 요소 노드는 편의를 위해 기본 프로퍼티 외에 추가적인 프로퍼티를 지원하며 테이블이 대표적이다 .

- table.rows는 \<tr\> 요소를 담은 컬렉션을 참조한다.

- table.caption/tHead/tFoot은 각각 \<caption\>, \<thead\>, \<tfoot\> 

- table.tBodies는 \<tbody\> 요소를 담은 컬렉션을 참조합니다. 표준에 따르면, 테이블 내에 여러 개의 \<tbody\>가 존재하는게 가능한데, 최소한 하나는 무조건 있어야 하며, HTML 문서에는 \<tbody\>가 없더라도 브라우저는 \<tbody\> 노드를 DOM에 자동으로 추가한다.

- tbody.rows tbody 내 \<tr\> 요소 컬렉션을 참조한다. 

- tr.cells는 주어진 \<tr\>안의 모든 \<td\>, \<th\> 을 담은 컬렉션을 반환한다.

- tr.sectionRowIndex는 주어진 \<tr\>이 \<thead\> \<tbody\> \<tfoot\> 안쪽에서 몇 번째 줄에 위치하는지를 나타내는 인덱스를 반환한다.

- tr.rowIndex는 \<table\>내에서 해당 \<tr\>이 몇 번쨰 줄인 지를 나타내는 숫자를 반환한다.

- td.cellIndex는 \<td\> \<th\>가 속한  \<tr\>에서 해당 셀이 몇 번째 인지를 나타내는 숫자를 반환한다..

```javascript
<table id="table">
  <tr>
    <td>일</td><td>이</td>
  </tr>
  <tr>
    <td>삼</td><td>사</td>
  </tr>
</table>

<script>
  // '이'가 적힌 td를 가져옴(첫 번째 줄, 두 번째 칸)
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = "red"; // 강조
</script>

```




