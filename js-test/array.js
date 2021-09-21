const numbers = [1, 2, 3, 4];
const fruits = ["Apple", "Banana", "Cherry"];

console.log(numbers[1]);
console.log(fruits[2]);

console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

console.log(numbers.concat(fruits)); //배열 병합 원본수정안됨

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
numbers.forEach(function (number, i) {
  console.log(number, i);
});
// 배열데이터의 item 갯수만큼 실행

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`);
});
const c = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`);
});
console.log(a);
// return 값이 없고 {} 안의 내용만 수행한다
const b = fruits.map(function (fruit, index) {
  // return `${fruit}-${index}`
  return {
    id: index,
    name: fruit,
  };
});
const d = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}));
console.log(b);
// 반환된값으로 새로운 배열이나 객체데이터를 만들어준다.




const e = numbers.map(number => number < 3)
console.log(e);

const f = numbers.filter(number => number <3)
  // callback에서 반환되는값이 true인경우에만 배열에 넣어준다.

console.log(f);


const g = fruits.find(fruit =>  /^B/.test(fruit));
  // B로시작하는것을 찾는다
  // find의 callback함수에서 true라는 데이터가 반환이되면 반복을 멈춘다.
console.log(g);


const h = fruits.findIndex(fruit => /^C/.test(fruit));
  // 특정한 item의 index번호를 찾는다.
console.log(h);


const i = numbers.includes(3);
console.log(i);
const j = numbers.includes(5);
console.log(j);
// 인수의 데이터가 배열에 들어있는지 확인


numbers.push(5)
console.log(numbers);
// 가장 뒤쪽에 데이터를 삽입
numbers.unshift(0)
console.log(numbers);
// 가장 앞쪽에 데이터를 삽입

numbers.reverse()
console.log(numbers);
numbers.reverse()
console.log(numbers);



numbers.splice(2,0,999)
// 2 => 배열의 index번호 , 0 => 0개를 지운다. , 그자리에 999를 끼워넣는다.

console.log(numbers);