"use strict";
for(let i of my_array){
    if(isPalindrome(i)) console.log(i);
}
function isPalindrome(str){
    for(let i = 0, j = str.length - 1; i < j; i++, j--){
        if(str[i] != str[j])    return false;
    }
    return true;
}
