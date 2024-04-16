const questions = [
  {
    question: "¿Cómo utiliza un sistema operativo la abstracción del hardware para gestionar recursos como la memoria y el procesador?",
    options: ["a) Creando una copia exacta de cada componente de hardware para su uso exclusivo.",
              "b) Implementando interfaces de programación de aplicaciones (API) específicas para cada dispositivo.",
              "c) Mediante la creación de capas de abstracción entre las aplicaciones y el hardware físico.",
              "d) Optimizando directamente el rendimiento del hardware para cada tarea individual."],
    answer: "c"
  }
];

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");

function displayQuestion(index) {
  questionContainer.textContent = questions[index].question;
  optionsContainer.innerHTML = "";
  
  questions[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(option.charAt(0), index));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption, index) {
  const correctOption = questions[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion(0);
