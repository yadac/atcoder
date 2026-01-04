const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

// HappyNumber
async function main() {
    const input = await readLine();
    let n = parseInt(input, 10);
    let history = new Set();
    while (n !== 1 && !history.has(n)) {
        history.add(n);
        n = convert(n);
    }
    // console.log(`n = ${n}`);
    console.log(n === 1 ? 'Yes' : 'No');
    rl.close();
}

function convert(n) {
    let s = n.toString();
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        total += Number(s[i]) ** 2;
    }
    return total;
}

main()