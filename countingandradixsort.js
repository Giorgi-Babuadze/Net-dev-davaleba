//counting sort
function countingSort(arr) {
    if (arr.length === 0) return [];

    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    for (let num of arr) {
        count[num]++;
    }

    // Rebuild the sorted array
    let sorted = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted.push(i);
            count[i]--;
        }
    }

    return sorted;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

//radix sort
function getMax(arr) {
    return Math.max(...arr);
}

function countingSortByDigit(arr, digitPlace) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    // Count occurrences of digits
    for (let i = 0; i < n; i++) {
        const digit = Math.floor((arr[i] / digitPlace) % 10);
        count[digit]++;
    }

    // Cumulative count
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output array (stable sort)
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor((arr[i] / digitPlace) % 10);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy to original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr);

    // Apply counting sort for each digit
    for (let digitPlace = 1; Math.floor(max / digitPlace) > 0; digitPlace *= 10) {
        countingSortByDigit(arr, digitPlace);
    }

    return arr;
}

// Example usage
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
