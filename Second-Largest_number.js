//using sort function, get 2 largest numner from an array
const input = [442, 93, 3, 5, 30, 10];

function getNthLargest(list, n = 2) {
    return [...list.sort((a, b) => b - a)][n - 1];
}

console.log(getNthLargest(input, 2));





// Without sorting 
//let's declare a array
arr = [7, 10, 8, 55, 2, 4, 44, 90]

//function processData 
const f = function Data(arr) {
    firstLargestNumber = Math.max(...arr) // firstLargestNumber
    index = arr.indexOf(firstLargestNumber) // the index of firstLargestNumber
    arr.splice(index, 1) // Delete first largest number
    secondLargestNumber = Math.max(...arr) // firstlargestNumber got removed, lets find next largest number
    return (secondLargestNumber)  //return the value
}

console.log(f(arr));