// 1. ხმოვანთა რაოდენობა სტრიქონში
function countVowels(s, vowels = "აეიოუ") {
    if (s.length === 0) return 0;
    return (vowels.includes(s[0]) ? 1 : 0) + countVowels(s.slice(1));
}
console.log(countVowels("გამარჯობა"));