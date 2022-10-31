let n = 8;
let res = "";

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        res += " ";
    }
    for (let k = 0; k < i; k++) {
        res += "* ";
    }
    res += "\n"

}

console.log(res);