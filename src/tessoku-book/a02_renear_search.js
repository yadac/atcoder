const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [N, X] = lines[0].split(' ').map(Number);
const arr = lines[1].split(' ').map(Number);

let ans = 'No';
for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
        ans = 'Yes';
        break;
    }
}

console.log(ans);
