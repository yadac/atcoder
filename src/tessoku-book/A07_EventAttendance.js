const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let ptr = 0;
const D = parseInt(input[ptr++], 10);
const N = parseInt(input[ptr++], 10);
const eventDays = new Int32Array(D + 2);

for (let i = 0; i < N; i++) {
    const L = parseInt(input[ptr++], 10);
    const R = parseInt(input[ptr++], 10);
    eventDays[L] += 1;
    eventDays[R + 1] -= 1;
}

const answer = [];
let sum = 0;
for (let i = 1; i < eventDays.length - 1; i++) {
    sum += eventDays[i];
    answer.push(sum);
}

console.log(answer.join('\n'));