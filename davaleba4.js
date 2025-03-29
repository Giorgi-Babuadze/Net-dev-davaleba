// 4. კიბეზე ასვლის გზები
function countWays(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}
console.log(countWays(4));
