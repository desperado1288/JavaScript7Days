/**
* Reverse an input my_string using string.reverse() method, to catch error.
**/

function processData(my_string) {
    //Enter your code here
    try {
        var rev = my_string.split('').reverse().join('');
        console.log('Reversed string is : ' + rev);
    } catch (err) {
        console.log('Error : ' + err.message);
    } finally {
        console.log('Type of my_string is : ' + typeof my_string)
    }
} 


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(eval(_input));
});
