let arr = [12, 45, 76, 1, 2,23,45,67,89,89, 2, 67];

// let l = 0;
// let sl = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > l) {
//         sl = l
//         l = arr[i]
//     }
// }
// console.log(l ,sl);

// console.log(arr.join().sort());

function removeDuplicate(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
// console.log(removeDuplicate(arr))

let newarrr = removeDuplicate(arr)
console.log(arr)
for (let i = 0; i < newarrr.length; i++) {
    for (let j = i + 1; j < newarrr.length; j++) {
        if (newarrr[i] > newarrr[j]) {
            let temp = newarrr[j];
            newarrr[j] = newarrr[i];
            newarrr[i] = temp;
        }
    }
}

console.log(newarrr);
// console.log( arr.toString() );

// console.log(arr)

// console.log(newarrr[newarrr.length - 2]);

// let newArray = removeDuplicate(arr);
// console.log(newArray.sort());
// console.log(newArray);
// let newarr = newArray.sort()
// console.log(newarr);

// console.log("2nd largest element is ",newArray[newArray.length - 2]);