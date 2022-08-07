const breakingRecord = (scores) => {
    let leastPointRecord = 0;
    let mostPointRecord = 0;

    let currentLowScore = scores[0];
    let currentHighScore = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > currentHighScore) {
            mostPointRecord++;

            currentHighScore = scores[i];
        } else if (scores[i] < currentLowScore) {
            currentLowScore = scores[i];
            leastPointRecord++;
        }
    }

    return [mostPointRecord, leastPointRecord];
};
console.log(breakingRecord([10, 5, 20, 20, 4, 5, 2, 25, 1]));
