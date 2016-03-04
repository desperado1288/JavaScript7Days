/**
* Use regex to find whether the input matches the pattern where the first char has the same vowel with the last char.
**/

var re = /^([aeiou]).*\1$/;
process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
    console.log(re.test(input));
});
