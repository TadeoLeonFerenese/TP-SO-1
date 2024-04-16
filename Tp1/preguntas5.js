const questions5 = [
  {
    question: "¿Cuál es un ejemplo de sistema operativo distribuido ampliamente utilizado para el procesamiento distribuido de grandes conjuntos de datos en entornos distribuidos?",
    options: ["a) Apache Kafka.",
              "b) Apache Spark.",
              "c) Apache Hadoop.",
              "d) Apache Tomcat."],
    answer: "c"
  }
];

const questionContainer5 = document.getElementById("question5");
const optionsContainer5 = document.getElementById("options5");

function displayQuestion5(index) {
  questionContainer5.textContent = questions5[index].question;
  optionsContainer5.innerHTML = "";
  
  questions5[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer5(option.charAt(0), index));
    optionsContainer5.appendChild(button);
  });
}

function checkAnswer5(selectedOption, index) {
  const correctOption = questions5[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer5.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion5(0);
