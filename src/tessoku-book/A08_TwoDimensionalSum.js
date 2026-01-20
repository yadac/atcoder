const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let ptr = 0;
const H = parseInt(input[ptr++], 10);
const W = parseInt(input[ptr++], 10);

let val = 0;

// 累積和格納用の二次元配列
const arr = new Array(H + 1);
for (let i = 0; i <= H; i++) {
    arr[i] = new Int32Array(W + 1);
}

// 横の累積和
for (let i = 1; i <= H; i++) {
    val = 0;
    for (let j = 1; j <= W; j++) {
        val += parseInt(input[ptr++], 10);
        arr[i][j] = val;
        // console.log(`prev = ${val}, arr[i][j] = ${arr[i][j]}`);
    }
}

// 縦の累積和
val = 0;
for (let i = 1; i <= W; i++) {
    val = 0;
    for (let j = 1; j <= H; j++) {
        val += arr[j][i];
        arr[j][i] = val;
        // console.log(`prev = ${val}, arr[i][i] = ${arr[j][i]}`);
    }
}

const Q = parseInt(input[ptr++], 10);
let answer = [];
for (let i = 0; i < Q; i++) {
    const U = parseInt(input[ptr++], 10);
    const L = parseInt(input[ptr++], 10);
    const B = parseInt(input[ptr++], 10);
    const R = parseInt(input[ptr++], 10);
    // console.log(`s1 = ${U}, s2 = ${L}, e1 = ${B}, e2 = ${R}`);
    if (U - 1 > 0 && L - 1 > 0) {
        answer.push(arr[B][R] + arr[U - 1][L - 1] - arr[B][L - 1] - arr[U - 1][R]);
        // console.log(`arr[e1][e2] = ${arr[B][R]}, arr[s1 - 1][s2 - 1] = ${arr[U - 1][L - 1]}, arr[e1][s2 - 1] = ${arr[B][L - 1]}, arr[s1 - 1][e2] = ${arr[U - 1][R]}`);
    } else if (U - 1 > 0 && L - 1 == 0) {
        answer.push(arr[B][R] - arr[U - 1][R]);
    } else if (U - 1 == 0 && L - 1 > 0) {
        answer.push(arr[B][R] - arr[B][L - 1]);
    } else {
        answer.push(arr[B][R]);
    }
}

console.log(answer.join('\n'));