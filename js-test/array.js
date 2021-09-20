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




const e = numbers.map(number => {
  return number < 3
})
console.log(e);

f = numbers.filter(number => {
  return number <3
})
console.log(f);