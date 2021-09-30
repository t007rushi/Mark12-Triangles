//For Hypotenuse

var a = document.querySelector('#s1')
var b = document.querySelector('#s2')
var btner = document.querySelector('.clickH')
var op = document.querySelector('#op')

function CalCulte() {
    op.innerText = Math.sqrt(parseInt(a.value) ** 2 + parseInt(b.value) ** 2);
    console.log(a.value)
}


btner.addEventListener("click", CalCulte)