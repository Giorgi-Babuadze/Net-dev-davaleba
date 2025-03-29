// 3. მასივის მაქსიმალური ელემენტი
function findMax(arr) {
    if (arr.length === 1) return arr[0];
    let maxRest = findMax(arr.slice(1));
    return arr[0] > maxRest ? arr[0] : maxRest;
}
console.log(findMax([1, 2, 3, 4, 5]));