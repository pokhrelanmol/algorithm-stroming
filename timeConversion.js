const timeConversion = (str) => {
    const ampm = str.slice(-2);
    let timeArr = str.slice(0, -2).split(":");
    if (ampm === "AM" && timeArr[0] === "12") {
        timeArr[0] = "00";
    } else if (ampm === "PM") {
        timeArr[0] = (timeArr[0] % 12) + 12;
    }
    return timeArr.join(":");
};
console.log(timeConversion("07:01:00PM"));
