const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

// 2026 良い数字
async function main() {
    const input = await readLine();
    let N = parseInt(input, 10);

    const cnt = new Uint8Array(N + 1);
    const limX = Math.floor(Math.sqrt(N / 2));

    for (let x = 1; x <= limX; x++) {
        const x2 = x * x;
        const maxY = Math.floor(Math.sqrt(N - x2));
        for (let y = x + 1; y <= maxY; y++) {
            const s = x2 + y * y;
            if (cnt[s] < 2) cnt[s]++;
        }
    }

    const ans = [];
    for (let i = 1; i <= N; i++) {
        if (cnt[i] === 1) ans.push(i);
    }

    console.log(ans.length);
    console.log(ans.join(" "));
    rl.close();
}

main()