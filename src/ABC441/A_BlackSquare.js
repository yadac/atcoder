const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [P, Q] = lines[0].split(' ').map(Number);
const [X, Y] = lines[1].split(' ').map(Number);

let ans = 'No';

let p2 = P + 99;
let q2 = Q + 99;

// console.log(`P = ${P}, p2 = ${p2}, Q = ${Q}, q2 = ${q2},`);

if (P <= X && X <= p2 && Q <= Y && Y <= q2) {
    ans = 'Yes';
}

console.log(ans);
