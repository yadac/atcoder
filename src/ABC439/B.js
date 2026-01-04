const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function readLine() {
    return new Promise((resolve) => rl.once("line", (line) => resolve(line.trim())));
}

const max = 30;
let cnt = 0;
let a = 0;

// HappyNumber
async function main() {
    const input = await readLine();
    let n = parseInt(input, 10);

    let ans = convert(n);
    // console.log(`ans = ${ans}`);
    console.log(ans === 1 ? 'Yes' : 'No');
    rl.close();
}

function convert(n) {
    while (a !== 1) {
        let s = n.toString();
        let l = s.length;
        a = 0;
        for (let i = 0; i < l; i++) {
            a += Number(s[i]) ** 2;
        }
        // console.log(`a = ${a}`);
        if (a === 1) {
            break;
        } else {
            if (cnt === max) break;
            cnt++;
            convert(a);
        }
    }
    return a;
}

main()