# DOM TREE

HTML을 지탱하는 것은 tagㅇ고 

DOM에 다르면 모든 HTML 태그는 object이며, tag 하나가 감싸고 있는 자식 tag는 중첩태그라 부르며 태그내의 문자역시

object 이다..


모든 object는 javascript를 통해 접근할 수 있고 페이지를 조작할댸 이 object를 사용한다. 


document.body 는 \<body\> 태그를 객체로 나타낸 것.. 

```javascript

document.body.style.background = 'red';

setTimeout(() => docuyment.body.style.background = '', 3000); 

//3초간 body가 붉은색이 된다.
```

document.body의 style.background 외에도 innterHTML(해당 노드의 HTML 컨텐츠), offsetWidth(해당노드의 픽셀너비) 등등의 다양한 property가 존재한다. 


```javascript
<!DOCTYPE HTML>
<html>
    <head>
        <title>title</title>
    </head>
<body>
    body
</body>
</html>

```

\=\=\> 태그트리 구조로 보면

```javascript
html 
  ->head
      ->#text ↵␣␣␣␣
      ->title
           ->#text title
      ->#text ↵␣␣
  ->#text ↵␣␣
  ->body
      ->#text body
```

트리에 있는 노드는 모두 object이며 

tag는 element node이고 트리구조를 구성하며

\<html\>은 root node가 되고,

\<head\> 와 \<body\>는 root node의 자식이 된다.

요소 내의 문자는 text node가 되며 text node는 문자열만 담는다. 자식 노드를 가질 수 없고 트리의 끝에서 leaf node가 된다.

\<title\> 태그는 "title" 이라는 text node를 자식으로 가지며 

새 줄\(newline\) - ↵ , 공백 \(space\) - ␣ 

새 줄과 공백은 유효한 문자로 취급되어 이 특수문자는 text node가 되고 DOM의 일부가 된다.

head 태그와 title 태그 사이의 새줄과 약간의 공백이 잇는데 이런 특수문자 역시 text node가 된다. 

기형적인 HTML을 만나면 Browser는 DOM 생성과정에서 HTML을 자동으로 교정을 한다. 

개발자 도구에서 DOM TREE에 대해서 볼 수 있는데 CONSOLE을 통해 요소를 변경할 수 있다. 

\$0 은 가장 마지막에 선택했떤 요소 그이전요소는 \$1로 접근 할 수 있다.

```javascript

$0.style.background = 'red';
$1.style.background = 'blue;;
```

