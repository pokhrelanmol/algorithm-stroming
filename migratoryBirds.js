const migratoryBirds = (n, arr) => {
    const mapIdWithMigrationCount = {};
    arr.forEach((id) => {
        if (id in mapIdWithMigrationCount) {
            mapIdWithMigrationCount[id] = mapIdWithMigrationCount[id] + 1;
        } else {
            mapIdWithMigrationCount[id] = 1;
        }
    });
    console.log(mapIdWithMigrationCount);
    let max = 0;
    let id = 0;
    for (const [key, value] of Object.entries(mapIdWithMigrationCount)) {
        if (value > max) {
            max = value;
            id = key;
        }
    }
    console.log(id);
    return id;
};
migratoryBirds(4, [2, 2, 2, 1, 1, 1]);
