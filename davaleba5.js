// 5. დალაგებული ფრჩხილები
function isBalanced(s, count = 0) {
    if (count < 0) return false;
    if (s.length === 0) return count === 0;
    return isBalanced(s.slice(1), count + (s[0] === "(" ? 1 : s[0] === ")" ? -1 : 0));
}
console.log(isBalanced("()"));
console.log(isBalanced(")("));