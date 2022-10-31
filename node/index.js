const arr = [12,23,2,43,1,29,43];
// const emptyArray = [];

// for (let i = 0; i<arr.length ; i++){
//     for (let j = i+1 ; j<arr.length ; j++){
//         if (arr[i] < arr[j]){
//         emptyArray.push(arr[i])
//     }

// }
// }''
const emptyArray = arr.sort();
console.log(emptyArray);


// for (let i = emptyArray.length - 1; i < emptyArray.length; i--) {
//     let element = emptyArray.length;
//     if (emptyArray[i] === emptyArray[i-1]) {
//         element = emptyArray.length - 1
//     }    
// }
// console.log(arr.sort(),emptyArray);

// console.log(emptyArray[emptyArray.length-3])



for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                        let temp = arr[j];
                        arr[j] = arr[i];
                        arr[i] = temp;
                    }
            
                }
            
            
            }
            
            console.log(arr[arr.length - 2], arr.length - 2)
            
// const arr = [23,34,56,12,37];
const emp = [];
for (let i = 0; i < arr.length; i++) {
    for (let j=0 ; j < emp.length ; j++) {
        if (arr[i] = emp ) {
            emp.push(arr[i])
        }
    } 
    
}

console.log(arr , emp)