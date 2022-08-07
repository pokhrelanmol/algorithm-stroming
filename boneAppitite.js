const bonAppetit = (bill, k, b) => {
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            total += bill[i];
        }
    }
    if (total / 2 == b) {
        return "Bon Appetit";
    } else {
        return b - total / 2;
    }
};
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
