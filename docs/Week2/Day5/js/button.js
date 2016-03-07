function clickBtn() {
    var b = document.getElementById('btn');
    var number = b.innerHTML;
    number = parseInt(number);
    b.innerHTML = number + 1;
}
