const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

// First Contest of the Year
async function main() {
    const input = await readLine();
    const tmp = input.split(' ');
    const D = parseInt(tmp[0], 10);
    const F = parseInt(tmp[1], 10);

    const ans = 7 - ((D - F) % 7);
    console.log(ans);

    rl.close();
}

main()