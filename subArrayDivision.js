const birthday = (s, d, m) => {
    let bars = 0;
    for (let i = 0; i < s.length; i++) {
        const arr = s.slice(i, i + m);
        if (arr.reduce((x, y) => x + y) == d) {
            bars++;
        }
    }
    return bars;
};
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
