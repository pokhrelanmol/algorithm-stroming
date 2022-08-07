const studentGrade = (grades) => {
    let finalGrades = [];
    grades.forEach((grade) => {
        if (grade < 38) {
            finalGrades.push(grade);
            return;
        }
        const multipleOfFive = Math.ceil(grade / 5) * 5;
        console.log(multipleOfFive);
        if (multipleOfFive - grade !== 0 && multipleOfFive - grade < 3) {
            if (grade >= 99.5) {
                finalGrades.push(Math.round(grade));
                return;
            }
            finalGrades.push(Math.round(Math.ceil(grade / 5) * 5));
        } else finalGrades.push(grade);
    });
    return finalGrades;
};
console.log(
    studentGrade([
        44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0, 43, 2, 29, 53, 61,
        40, 14,
    ])
);
