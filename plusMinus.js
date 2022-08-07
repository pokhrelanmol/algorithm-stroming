function plusMinus(arr) {
    // Write your code here
    let negativeNumber = 0;
    let positiveNumber = 0;
    let zero = 0;

    arr.forEach((num) => {
        if (Math.sign(num) === 1) {
            positiveNumber += 1;
        } else if (Math.sign(num) === -1) {
            negativeNumber += 1;
        } else if (Math.sign(num) === 0) {
            zero += 1;
        } else {
            return;
        }
    });
    console.log((positiveNumber / arr.length).toFixed(6));
    console.log((negativeNumber / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
