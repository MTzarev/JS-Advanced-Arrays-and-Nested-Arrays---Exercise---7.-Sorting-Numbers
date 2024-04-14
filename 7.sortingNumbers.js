function sortingNumbers(input) {
let finalArr=[];
let sorted = input.sort((a,b)=>a-b);
for (let i of sorted){
    let first = sorted.shift()
    finalArr.push(first)
    let second = sorted.pop()
    finalArr.push(second)
    if (sorted.length<=2){
        first =sorted[0]
        finalArr.push(first)
        second=sorted[1]
        finalArr.push(second)
    }
}
return finalArr
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));