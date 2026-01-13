const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').split(/\s+/);

let ptr = 0;
const N = parseInt(input[ptr++], 10);
const Q = parseInt(input[ptr++], 10);
const sumGuests = new Int32Array(N + 1);

// 累積和
for (let i = 1; i <= N; i++) {
    const guests = parseInt(input[ptr++], 10);
    sumGuests[i] = sumGuests[i - 1] + guests;
}

// Q計算
const result = [];
for (let j = 0; j < Q; j++) {
    const L = parseInt(input[ptr++], 10);
    const R = parseInt(input[ptr++], 10);
    result.push(sumGuests[R] - sumGuests[L - 1]);
}

console.log(result.join('\n'));

