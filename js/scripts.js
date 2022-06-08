const question       = document.querySelector("#question");
const answersBox     = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters        = ["a", "b", "c", "d", "e"];
let points           = 0;
let actualQuestion   = 0;

const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
        {
            "answer": "Cloud computing",
            "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
        {
            "answer": "%const",
            "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
        {
            "answer": "&",
            "correct": false
        },
      ]
    },
  ]

function init(){
    createQuestion(0);
}

function createQuestion(i){
    const oldButtons = answersBox.querySelectorAll("button");
    oldButtons.forEach(function(btn){
        btn.remove();
    });

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    questions[i].answers.forEach(function(answer, i){
       const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
       const letterBtn = answerTemplate.querySelector(".btn-letter");
       const answerText = answerTemplate.querySelector(".question-answer");
       letterBtn.textContent = letters[i];
       answerText.textContent = answer["answer"];

       answerTemplate.setAttribute("correct-answer", answer["correct"]);
       answerTemplate.classList.remove("hide");
       answerTemplate.classList.remove("answer-template");

       answersBox.appendChild(answerTemplate);

       answerTemplate.addEventListener("click", function(){
           alert(this);
       });
    });

    actualQuestion++;
}

init();
