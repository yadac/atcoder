const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');
const [N, Q] = lines[0].split(' ').map(Number);
const guests = lines[1].split(' ').map(Number);
const sumGuests = new Int32Array(N + 1);

// 累積和
for (let i = 1; i < guests.length; i++) {
    sumGuests[i] = guests[i - 1] + guests[i];
}

// console.log(sumGuests);

for (let j = 0; j < Q; j++) {
    const [L, R] = lines[2 + j].split(' ').map(Number);
    const end = sumGuests[R - 1];
    const start = L - 2 >= 0 ? sumGuests[L - 2] : 0;
    console.log(end - start);
}

