//Regular Expression 정규 표현식
console.log('regExp');

const str = `
010-1234-5678
therk51320@naver.com
https://www.omdbapi.com/?apikley=1234&s=forest
The quick brown fox jumps over the lazy dog.
abbcccdddd
http
동해물과 백두산이 마르고 닳도록
`

// method
// const regexp = new RegExp('the','gi')
const regexp = /the/gi;
//g => 옵션에 해당하는것을 모두 검색
//i => 대소문자 구분 x
console.log(str.match(regexp));
//일치하는 문자의 배열데이터 반환
console.log(/the/gi.test(str));
//정규식에 해당하는 내용이 있는지 확인
console.log(str.replace(/the/gi,'The'));
// 정규식에 해당하는 부분을 변환. 원본데이터를 변경하지는 않음.



// flag

//g 모든문자 일치 global
//i 영어 대소문자를 구분 안하고 일치 ignore case
//m multi line 여러 줄 일치

let regexp2 = /the/
console.log(str.match(regexp2));
regexp2 = /the/g
console.log(str.match(regexp2));
regexp2 = /the/gi
console.log(str.match(regexp2));

// \. => ' . ' 그대로 문자로 검색되게    
//  . =>  
console.log(str.match(/\.$/gi)); // null
// $앞의 문자데이터로 끝나는지?
console.log(str.match(/\.$/gim)); // {"."}
// m을 붙이지 않으면 enter로 줄바꿈한 하나의 줄을 인식하지 못하기 때문에 붙여준다.


//pattern

//^ab 줄 시작에 있는 ab와 일치
//ab& 줄 끝에 있는 ab와 일치

console.log(str.match(/d$/g)); 
// null . 한줄로 인식하기떄문에 `바로 앞의 공백이 한줄의 끝으로 인식된다.
console.log(str.match(/d$/gm));
// [ 'd' ]
console.log(str.match(/^t/gim));
// ['t', 'T'] ,


//. 임의의 한 문자와 일치
//a|b a 또는 b와 일치
//ab? b가 없거나 b와 일치

console.log(str.match(/.a/gm));
// ['na', 'ba', '?a' , '=a', 'la']
console.log(str.match(/h..p/gm));
// ['http']
console.log(str.match(/r.....0/gm));
// ['rk51320']
console.log(str.match(/fox|dog/gm));
// ['fox','dog']
console.log(str.match(/https?/gm));
/// ['https', 'http']


//{3}  3개 연속 일치
//{3,} 3개 이상 연속 일치
//{3.5} 3개 이상 5개 이하 연속 일치 

console.log(str.match(/d{2}/));
// {'dd', index:136, input : ~~}
console.log(str.match(/d{2}/g));
// {'dd' , 'dd'} 
console.log(str.match(/d{2,}/g));
// {'dddd'}
console.log(str.match(/d{2,3}/g));
// {'ddd'}
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/\w{2,3}/g));
// 숫자를 포함한 영어 알파벳이 2개이상 3개이하인것.
// \w =>영문대소문자나 숫자 인것들을 검색할때 
// \b ~~ \b 로 감싸주지 않으면 2~3자인 단어로 검색하는게 아니라 그냥 3개단위로 쪼개서
// 모든값을 검색한다.
// ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']


//[abc] a 또는 b 또는 c
//[a-z] a 부터 z 사이 문자 일치
//[A-Z] A 부터 Z 사이 문자 일치
//[0-9] 0부터 9사이 문자 일지
//[가-힣] 가부터 힣 사이의 문자 일치

console.log(str.match(/[fox]/g));
// ['o', 'o', 'o', 'o', 'f', 'o', 'x', 'o', 'o']
// f o x 를 전부다 찾는다.
console.log(str.match(/[0-9]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));


// \w word   63개문자 (대소문자52개 + 숫자10 +_) 일치
// \b boundary   63개 문자에 일치하지 않는 문자 경계(글자와 글자사이의 구분),특수기호
// \d digit  숫자
// \s space, tab  들여쓰기, 공백

console.log(str.match(/\b/g))
// 사이사이 경계의 갯수
console.log(str.match(/\bf\w{1,}\b/g))
// 특수문자 사이의 f로시작하는 모든 영단어
// {'forest', 'fox'}
console.log(str.match(/\d/g));
// 숫자만 검색
console.log(str.match(/\d{1,}/g));
// 1개이상의 연속된 숫자
console.log(str.match(/\s/g));
// 줄바꿈 문자 \n 나 띄어쓰기.

const h = `     the hello   world      

!`
console.log(h.replace(/\s/g,''));
// thehelloworld


// (?=) 앞쪽 일치
// (?<=) 뒤쪽 일치

console.log(str.match(/.{1,}(?=@)/g));
// therk51320 @ 앞쪽에 1자이상의 문자
console.log(str.match(/(?<=@).{1,}/g));
// naver.com




