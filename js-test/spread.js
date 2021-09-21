//전개연산자

const fruits = ["Apple", "Banana ", "Cherry", "Orange"];

console.log(fruits);
console.log(...fruits);
// ... 가 전개연산자 기호이다.
// , 로 구분된 배열데이터가 전개되어서 만들어진다.
// Apple Banana Cherry가 출력

function toObject(a, b, ...c) {
  // Apple 은 a로 Banana는 b로 나머지는 c에 다 들어간다.
  return {
    a,  //a : a,
    b,  //b : b,
    c,  // c : c,
  };
}

const toObject2 = (a,b,...c) => ({a,b,c});

console.log(toObject(...fruits));
// ==
console.log(toObject(fruits[0], fruits[1], fruits[2]));
