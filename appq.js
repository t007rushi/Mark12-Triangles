const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const scoreDiv = document.querySelector('#score');

const correctAnswers = ['90°', 'right angled', 'Isosceles'];

function calculateScore() {
    // e.preventDefault();
    const frmres = new FormData(quizForm);

    let index = 0;
    let score = 0;
    // console.log(frmres.values())
    for (let entry of frmres.values()) {
        console.log(entry)
        if (entry === correctAnswers[index]) {
            score += 1;
        }
        index += 1;
    }

    if (score == 3) {
        scoreDiv.innerText = "Great, Your score is " + score;
    }
    else {
        scoreDiv.innerText = "Lets try again, Your score is " + score;
    }
}

submitBtn.addEventListener('click', calculateScore);