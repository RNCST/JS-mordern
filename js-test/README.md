정규표현식(정규식)은 문자열을 검색하고 대체하는데 사용가능한 일종의 형식 언어이며

복잡한 문자 등을 패턴으로 빠르게 수행할 수 있다. 

- 문자 검색 search
- 문자 대체 replace
- 문자 추출 extract

[REGeXGtest](https://regexr.com//)

```javascript
const regexp1 = new RegExp("^abc");
const regexp2 = new RegExp("[a-z]", "gi");
// 생성자 방식
RegExp('표현','옵션')

const regexp1 = /^abc/;
const regexp2 = /[a-c]/gi;
// 리터럴방식
/표현/옵션


```