const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const lines2 = lines.slice(2);
const D = parseInt(lines[0], 10);
const N = parseInt(lines[1], 10);
const eventDays = new Int32Array(D + 1);

for (let i = 0; i < N; i++) {
    const [L, R] = lines2[i].split(' ').map(Number);
    eventDays[L] += 1;
    if (R + 1 !== eventDays.length) {
        eventDays[R + 1] -= 1;
    }
}

const answer = [];
let sum = 0;
for (let i = 1; i < eventDays.length; i++) {
    sum += eventDays[i];
    answer.push(sum);
}

console.log(answer.join('\n'));