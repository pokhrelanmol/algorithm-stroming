const appleOrange = (s, t, a, b, apples, oranges) => {
    let noOfApplesFalls = 0;
    let noOfOrangesFalls = 0;

    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) {
            noOfApplesFalls += 1;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] + b >= s && oranges[i] + b <= t) {
            noOfOrangesFalls += 1;
        }
    }

    console.log(noOfApplesFalls);
    console.log(noOfOrangesFalls);
};
appleOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
