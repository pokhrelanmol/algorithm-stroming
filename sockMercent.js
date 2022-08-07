const sockMercent = (n, ar) => {
    const mapColorWithCount = {};
    ar.forEach((color) => {
        if (color in mapColorWithCount) {
            mapColorWithCount[color] = mapColorWithCount[color] + 1;
        } else {
            mapColorWithCount[color] = 1;
        }
    });
    let noOfPairs = 0;
    for (const [shock, count] of Object.entries(mapColorWithCount)) {
        if (count > 1) {
            if (Math.floor(count / 2) >= 1) {
                noOfPairs += Math.floor(count / 2);
            }
        }
    }
    console.log(noOfPairs);
};
sockMercent(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
