const questions3 = [
  {
    question: "¿Qué función del sistema operativo se encarga de asignar espacio de memoria a procesos y gestionar el intercambio de datos entre la memoria principal y el almacenamiento secundario?",
    options: ["a) Gestión de Procesos.",
              "b) Gestión de Memoria.",
              "c) Gestión de Archivos.",
              "d) Servicios de Red."],
    answer: "b"
  }
];

const questionContainer3 = document.getElementById("question3");
const optionsContainer3 = document.getElementById("options3");

function displayQuestion3(index) {
  questionContainer3.textContent = questions3[index].question;
  optionsContainer3.innerHTML = "";
  
  questions3[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer3(option.charAt(0), index));
    optionsContainer3.appendChild(button);
  });
}

function checkAnswer3(selectedOption, index) {
  const correctOption = questions3[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer3.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion3(0);
