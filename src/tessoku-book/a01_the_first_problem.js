const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

async function main() {
    const input = await readLine();
    const N = parseInt(input, 10);
    const answer = N * N;
    console.log(answer);
    rl.close();
}

main();