let str = '0123';

console.log(str);
console.log(str.length);
console.log('0123'.length);//String.prototype.length
console.log(str.indexOf(2));
console.log(str.indexOf(4) !== -1);

str = 'Hello world!'

console.log(str.slice(str.indexOf('world'),11));

console.log(str.replace('world','js'));
console.log(str.replace(' world',''));

console.log(str.match());

str = 'thesecon@gmail.com'

console.log(str.match(/.+(?=@)/) [0])

str = '               Hello World            '


console.log(str.trim());