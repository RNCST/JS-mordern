
요소들이 가까이 붙어있지 않다면 DOM 탐색 프로퍼티를 사용해 접근하기가 쉽지가 않다.

### document.getElementById

document.getElementId 혹은 id를 통해 요소를 검색 접근할 수 있다.

```javascript

<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // 요소 얻기

  let elem = document.getElementById('elem');

  // 배경색 변경하기
  elem.style.background = 'red';
</script>



<div id="elem">
  <div id="elem-content">Element</div>
</div>
<script>
  // 변수 elem은 id가 'elem'인 요소를 참조한다

  elem.style.background = 'red';

  // id가 elem-content인 요소는 중간에 하이픈(-)이 있기 때문에 변수 이름으로 쓸 수 없습니다.
  // 이럴 땐 대괄호(`[...]`)를 사용해서 window['elem-content']로 접근하면 된다.
</script>



<div id="elem"></div>

<script>
  let elem = 5; // elem은 더이상 <div id="elem">를 참조하지 않고 5가 된다.

  alert(elem); // 5
</script>

```

id는 유일무이해야하며 문서 내 요소의 id 속성값은 중복되어서는 안된다.

같은 id를 가진 요소가 여러개 있으면 document.getElementById와 같이 id를 이용해 검색하는 메서드의 동작이 예측이 불가능해진다. 검색된 여러 요소 중 어떤 요소를 반환할지 판단하지 못해 임의의 요소가 반환되는 것이기 때문.

getElementById는 document 객체를 대상으로 해당 id를 가진 요소노드를 찾아주며 문서 노드가 아닌 다른 노드엔 호출할 수가 없다. 


### querySelectorAll

elem.querySelectorAll(css)은 다재다능한 요소 검색 메서드이며 이 메서드는 elem의 자식 요소 중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다..

```javascript
<ul>
  <li>1-1</li>
  <li>1-2</li>
</ul>
<ul>
  <li>2-1</li>
  <li>2-2</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "1-2", "2-2"
  }
</script>

```
본 예시는 마지막 \<li\>의 요소 모두를 반환한다. 
querySelectorAll은 CSS 선택자를 활용할 수 있으며 
\:hover나 \:active같은 CSS 선택자의 가상 클래스도 사용할 수 있다.

document.querySelectorAll\(\'\:hover\'\)을 사용하면 마우스 포인터가 위에 있는 요소 모두를 담는 컬렉션이 반환이 되며 이떄 컬렉션은 DOM 트리 최상단에 위치한 \<HTML\>부터 가장 하단의 요소 순으로 채워진다. 

### querySelector

elem.querySelector는 주어진 CSS 선택자에 대응하는 요소 중 첫 번쨰 요소를 반환한다. 

``` javascript

elem.querySelectorAll(css)[0] === elem.querySelector(css) 이며
선택자에 해당하는 모든 요소를 검색해 첫 벉 ㅒ요소만은 반환하고 elem.querySelector는 해당하는 요소를 찾으면
검색을 멈춘다는 점에서 차이가 있다. elem.querySelector가 더 빠른 이유 ..


```


### matches

elem.matches\(css\)는 DOM을 검색하는 일이 아닌 elem이 주어진 CSS 선택자와 일치하는지 여부를 판단해주며 일치하면 true 아니라면 false를 반환한다. 


```javascript

<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // document.body.children가 아니더라도 컬렉션이라면 이 메서드를 적용할 수 있다.

  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("주어진 CSS 선택자와 일치하는 요소: " + elem.href );
    }
  }
</script>

```


### closest

부모요소, 부모의 부모요소 등 dom 트리에서 특정 요소의 상위에 있는 요소들은 조상\(ancestor\)요소라고 하며 메서드 elem.closest\(css\)는 elem 자기 자신을 포함하여 CSS 선택자와 일치하는 가장 가까운 조상 요소를 찾을 수 있게 도와준다.

closest메서드는 해당 요소부터 시작해 DOM 트리를 한 단계씩 거슬러 올라가며 원하는 요소를 찾는다. CSS 선택자와 일치하는 요소를 찾으면, 검색을 중단하고 해당 요소를 반환한다.

```javascript

<h1>목차</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">1장</li>
    <li class="chapter">2장</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null(h1은 li의 조상 요소가 아님)

</script>

```

```javascript

querySelector - CSS 선택자  - 호출 대상으로 요소가 될 수 있음
querySelectorAll - CSS 선택자 - 호출 대상으로 요소가 될 수 있음
getElementById - id  - 호출 대상으로 요소가 될 수 없음
getElementsByName - name - 호출 대상으로 요소가 될 수 없음 - 컬렉션 갱신
getElementsByTagName - 태그나 '&' - 호출 대상으로 요소가 될 수 있음 - 컬렉션 갱신
getElementsByClassName  - class - 호출 대상으로 요소가 될 수 있음 - 컬렉션 갱신




```
