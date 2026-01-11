const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [N] = lines[0].split(' ').map(Number);

// const arr = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
// const answer = new Uint8Array(10);

// // n
// for (let i = 0; i < arr.length; i++) {
//     answer[i] = (N / arr[i]) % 2;
// }

// console.log(answer.join(''));

let s = '';
for (let i = 9; i >= 0; i--) {
    s += (N >> i) & 1;
}
console.log(s);