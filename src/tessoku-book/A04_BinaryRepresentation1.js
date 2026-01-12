const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [N] = lines[0].split(' ').map(Number);

// 10 > 2
let s = '';
// for (let i = 9; i >= 0; i--) {
//     s += (N >> i) & 1;
// }
for (let i = 9; i >= 0; i--) {
    s += Math.floor((N / (2 ** i))) % 2;
}
// console.log(s);

let s2 = '';
let syo = N;
let amari = 0;
while (syo !== 0) {
    amari = Math.floor(syo % 2);
    syo = Math.floor(syo / 2);
    s2 = amari + s2;
    // console.log(`syo = ${syo}, amari = ${amari}`);
}
// console.log(s2.padStart(10, '0'));

// 2 > 10
let sum = 0;
for (let i = 9; i >= 0; i--) {
    sum += s[s.length - 1 - i] * (2 ** i);
    // console.log(`s[s.length - 1 - i] = ${s[s.length - 1 - i]}, 2 ** i = ${(2 ** i)}, sum = ${sum.toString()}`);
}

console.log(s);