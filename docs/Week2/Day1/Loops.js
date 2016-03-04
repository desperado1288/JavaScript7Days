/**
* Separate vowels and consonants
**/
function vowelsAndConsonants(s) {
    var vowel = [];
    var consonant = [];
    for(var i in s){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            vowel.push(s[i]);
        } else {
            consonant.push(s[i]);
        }
    }
    for(var v in vowel) {
        console.log(vowel[v]);
    }
    for(var c in consonant) {
        console.log(consonant[c]);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
     vowelsAndConsonants(input);
});
