const divisibleSumPairs = (arr, n, k) => {
    let possibleNumbers = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                possibleNumbers++;
            }
        }
    }
    return possibleNumbers;
};
console.log(divisibleSumPairs([1, 3, 2, 6, 1, 2], 6, 3));
