var check = document.querySelector('#check');
var box = document.querySelector('.box');
var ball = document.querySelector('.ball');

check.addEventListener('click', function() {
    if (this.checked === true) {
        ball.setAttribute('style', "background-color: white;")
        ball.style.transform = "translatex(100%)"
        document.body.setAttribute('style', "background-color: black; color: white")

    }

    if (this.checked == false) {
        ball.setAttribute('style', "background-color: grey;")
        ball.style.transform = "translatex(0%) "
        document.body.setAttribute('style', "background-color: white;color: black")
    }
})