// invalid parenthesis
const isValid = (s) => {
    const mappedBrackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        let perenthesis = s.charAt(i);
        switch (perenthesis) {
            case "(":
            case "{":
            case "[":
                arr.push(mappedBrackets[perenthesis]);
                console.log(arr);
                break;

            case ")":
            case "}":
            case "]":
                if (perenthesis !== arr.pop()) console.log("opps");
                console.log(arr);
                break;
            default:
                break;
        }
    }
    return arr.length === 0;
};
isValid("{()[]}");
