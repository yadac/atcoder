const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

let Q = 0;
let used = 0;
const memo = new Map(); // "A|B" -> -1 or 1

async function compare(a, b) {
    const k = `${a}|${b}`;
    if (memo.has(k)) return memo.get(k);

    if (used >= Q) process.exit(0);
    used++;

    console.log(`? ${a} ${b}`);
    const ans = await readLine();
    if (ans === "-1") process.exit(0);

    const res = ans === "<" ? -1 : 1;
    memo.set(`${a}|${b}`, res);
    memo.set(`${b}|${a}`, -res);
    return res;
}

async function binaryInsert(sorted, x) {
    let L = 0, R = sorted.length;
    while (L < R) {
        const mid = Math.floor((L + R) / 2);
        if ((await compare(x, sorted[mid])) < 0) R = mid;
        else L = mid + 1;
    }
    sorted.splice(L, 0, x);
}

// N=5, Q=7 を必ず7回以内で解く定番（3比較 + 2比較 + 2比較）
// 参考: (x1,x2),(y1,y2),e に分けて、e と x2 を二分挿入で位置決めする :contentReference[oaicite:1]{index=1}
async function solveN5() {
    let x1 = "A", x2 = "B";
    if ((await compare(x2, x1)) < 0) [x1, x2] = [x2, x1]; // x1 < x2

    let y1 = "C", y2 = "D";
    if ((await compare(y2, y1)) < 0) [y1, y2] = [y2, y1]; // y1 < y2

    // x1 < y1 を作る（3回目）
    if ((await compare(y1, x1)) < 0) {
        // swap (x1,x2) と (y1,y2)
        [x1, y1] = [y1, x1];
        [x2, y2] = [y2, x2];
    }
    // ここまでで: x1 < x2, y1 < y2, x1 < y1 が確定
    // よって x1 < y1 < y2 まではわかる（x2 の位置は未確定）

    const base = [x1, y1, y2];

    // e の位置を base に二分挿入（最大2回）
    const e = "E";
    await binaryInsert(base, e);

    // x2 の位置を、x1 より後ろの部分に二分挿入（最大2回）
    // x1 < x2 は確定なので、x1 より左は見なくて良い
    const tail = base.slice(1); // [?, ?, ?] (長さ3)
    await binaryInsert(tail, x2);

    const ans = [base[0], ...tail]; // base[0] は x1
    console.log(`! ${ans.join("")}`);
    rl.close();
}

async function Main() {
    const first = await readLine();
    const [n, q] = first.split(" ").map(Number);
    Q = q;

    if (n === 5) {
        await solveN5();
        return;
    }

    const arr = [];
    for (let i = 0; i < n; i++) arr.push(String.fromCharCode(65 + i));

    const sorted = [];
    for (const x of arr) await binaryInsert(sorted, x);

    console.log(`! ${sorted.join("")}`);
    rl.close();
}

Main();
