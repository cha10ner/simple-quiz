const quizData = [
    {
        question: "Сколько будет 2+2?",
        a: "3",
        b: "4",
        c: "5",
        correct: "b",
    },
    {
        question: "Кем был Чингисхан?",
        a: "Монголом",
        b: "Мангалом",
        c: "Чортом",
        correct: "a",
    },
    {
        question: "В каком месте у Карлосона была кнопка?",
        a: "В чемодане",
        b: "На спине",
        c: "На животе",
        correct: "c",
    },
    {
        question: "Как иначе называют зубного врача?",
        a: "Артист",
        b: "Дантист",
        c: "Баптист",
        correct: "b",
    },
    {
        question: "Тайное эльтер-эго Брюса Уэйна?",
        a: "Бэтмен",
        b: "Жопмен",
        c: "Чилавек-малекуло!",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button3 onclick="location.reload()">Заново</button3>
            `;
        }
    }
});
