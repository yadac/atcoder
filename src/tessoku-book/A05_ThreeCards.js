const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [N, K] = lines[0].split(' ').map(Number);
let answer = 0;

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        const k = K - i - j;
        if (0 < k && k <= N) {
            answer++;
        }
    }
}
console.log(answer);