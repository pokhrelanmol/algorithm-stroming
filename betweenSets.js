function smallestCommons(arr) {
    var gcm = arr.reduce(function (a, b) {
        let minNum = Math.min(a, b);
        let maxNum = Math.max(a, b);
        var placeHolder = 0;

        while (minNum !== 0) {
            placeHolder = maxNum;
            maxNum = minNum;
            minNum = placeHolder % minNum;
        }

        return (a * b) / minNum;
    }, 1);

    return gcm;
}

console.log(smallestCommons([2, 6]));
