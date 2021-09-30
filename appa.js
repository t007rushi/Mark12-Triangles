var a = document.querySelector('#s1')
var b = document.querySelector('#s2')
var btner = document.querySelector('.clickH')
var op = document.querySelector('#op')

function CalCulteA() {
    op.innerText = 0.5 * (parseInt(a.value) * parseInt(b.value));
    console.log(0.5 * (parseInt(a.value) * parseInt(b.value)))
}


btner.addEventListener("click", CalCulteA)