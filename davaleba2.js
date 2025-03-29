// 2. ლუწი ციფრების ჯამი რიცხვში
function sumEvenDigits(n) {
    if (n === 0) return 0;
    let lastDigit = n % 10;
    return (lastDigit % 2 === 0 ? lastDigit : 0) + sumEvenDigits(Math.floor(n / 10));
}
console.log(sumEvenDigits(123456));