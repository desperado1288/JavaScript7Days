/**
* Using lambda func to filter even numbers
**/

function myFilter(my_array, callback){
    var arr = [];
    for(var i in my_array) {
        if(callback(my_array[i])) {
            arr.push(my_array[i]);
        }
    }
    return arr;
}

function processData(inputArray) {
    console.log(myFilter(inputArray, x => x % 2 == 0));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});
