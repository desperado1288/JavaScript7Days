var captcha_check = (function(){
    var actual_captcha = Math.floor(Math.random(100)*Math.pow(10, 5));
    
    return {
        check: function(guess){
            if(guess === actual_captcha){
                console.log("You have written it correctly.");
            } else {
                console.log("You have written it incorrectly.");
            }
        }
    }
})();



var bot = captcha_check.actual_captcha;//should be undefined
captcha_check.check(bot);
console.log(bot);
