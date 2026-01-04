const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

// 整数 N が与えられるので、 2 N −2N の値を計算して出力してください。
async function main() {
    const input = await readLine();
    let n = parseInt(input, 10);
    const ans = (2 ** n) - (2 * n);
    console.log(ans);
    rl.close();
}

main()