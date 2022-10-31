let rows = 4;
let char = "";

for (let i = 0; i < rows; i++) {
  for (let j = rows; j > i; j--) {
    char += "* ";
  }
  char += "\n";
}
console.log(char);