const numberLine = (x1, v1, x2, v2) => {
    // the obvious case
    if (x1 > x2 && v1 > v2) return "NO";
    if (x1 < x2 && v1 < v2) return "NO";

    let meet = "NO";
    for (let i = 0; i < 10000; i++) {
        if (x1 + v1 * i === x2 + v2 * i) {
            meet = "YES";
            break;
        }
    }
    return meet;
};
console.log(numberLine(4523, 8092, 9419, 8076));
