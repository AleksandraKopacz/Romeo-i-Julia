document.addEventListener("DOMContentLoaded", () => {
  nextButton.classList.add("hide");
});

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const quizAppElement = document.getElementById("quiz-app");
const resultsElement = document.createElement("div");
resultsElement.setAttribute("id", "results");
resultsElement.classList.add("results", "hide");
quizAppElement.appendChild(resultsElement);

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort();
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  switchAct(currentQuestionIndex);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.classList.add("btn-choice");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => selectAnswer(button));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
    setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  setStatusClass(selectedButton, correct);

  setTimeout(() => {
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      concludeQuiz();
    }
  }, 1000); // Adjust delay as needed
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.remove("btn-choice");
    element.classList.add("btn-success");
  } else {
    element.classList.remove("btn-choice");
    element.classList.add("btn-danger");
  }
}

function clearStatusClass(element) {
  element.classList.remove("btn-success");
  element.classList.remove("btn-danger");
}

function concludeQuiz() {
  questionContainerElement.classList.add("hide");
  nextButton.classList.add("hide");

  resultsElement.classList.remove("hide");
  resultsElement.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} out of ${shuffledQuestions.length}</p>
      <button class="btn btn-navi" onclick="restartQuiz()">Restart Quiz</button>
  `;

  switchAct(-1);

  quizAppElement.appendChild(resultsElement);
}

function restartQuiz() {
  resultsElement.classList.add("hide");
  score = 0;
  currentQuestionIndex = 0;
  startGame();
}

const questions = [
  {
    question:
      "Jak reaguje Tybalt, zorientowawszy się w obecności Romea na balu u Kapuletów?",
    answers: [
      { text: "Wyzywa go na pojedynek", correct: false },
      { text: "Natychmiast sięga po rapier", correct: true },
      { text: "Publicznie obrzuca go inwektywami", correct: false },
      {
        text: "Podnosi larum, wzywając innych do wyrzucenia niechcianego gościa",
        correct: false,
      },
    ],
  },
  {
    question: "Gdzie dochodzi do potajemnego ślubu kochanków?",
    answers: [
      { text: "W ogrodowej altanie domu Montekich", correct: false },
      { text: "W ogrodzie Kapuletów", correct: false },
      { text: "Na cmentarzu", correct: false },
      { text: "W celi ojca Laurentego", correct: true },
    ],
  },
  {
    question: "Kto ginie od ciosu Tybalta?",
    answers: [
      { text: "Piotr", correct: false },
      { text: "Benwolio", correct: false },
      { text: "Merkucjo", correct: true },
      { text: "Romeo", correct: false },
    ],
  },
  {
    question: "Kto znajduje Julię pogrążoną w śnie?",
    answers: [
      { text: "Pani Kapulet", correct: false },
      {
        text: "Marta",
        correct: true,
      },
      { text: "Parys", correct: false },
      { text: "Ojciec Laurenty", correct: false },
    ],
  },
  {
    question: "Jak Kapuleci i Montekowie reagują na śmierć swoich dzieci?",
    answers: [
      { text: "Obwiniają się nawzajem", correct: false },
      { text: "Zgadzają się zakończyć waśń", correct: true },
      { text: "Oboje umierają z żalu", correct: false },
      { text: "Chcą ukarać ojca Laurentego", correct: false },
    ],
  },
];
