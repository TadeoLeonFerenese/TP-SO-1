const questions2 = [
  {
    question: "¿Qué tecnología permite a las aplicaciones interactuar con funciones y servicios estandarizados sin necesidad de conocer los detalles específicos del hardware subyacente?",
    options: ["a) Interfaces de Programación de Aplicaciones (API).",
              "b) Máquinas Virtuales (VM).",
              "c) Bibliotecas de Abstracción de Hardware (HAL).",
              "d) Ninguna de las anteriores."],
    answer: "a"
  }
];

const questionContainer2 = document.getElementById("question2");
const optionsContainer2 = document.getElementById("options2");

function displayQuestion2(index) {
  questionContainer2.textContent = questions2[index].question;
  optionsContainer2.innerHTML = "";
  
  questions2[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer2(option.charAt(0), index));
    optionsContainer2.appendChild(button);
  });
}

function checkAnswer2(selectedOption, index) {
  const correctOption = questions2[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer2.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion2(0);
