const repeatString = function(string, num) {
    let finalString = ""
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 1; i <= num; i++) {
            finalString += string
        }
    }
    return finalString
};

// given a string and a number
// return the string a given number of times
// 'hey', 3 = heyheyhey. if num is negative, return ERROR
// IF num < 0, return "ERROR"
// ELSE
    // concat the string X amount of times

/*
for (let i = 1; i <= num; i++) {
    console.log(num)
}

*/

// Do not edit below this line
module.exports = repeatString;
