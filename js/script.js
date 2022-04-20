let randomInput = document.getElementById("random-input");

const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  let generateCode = Math.floor(1000 + Math.random() * 9000);

  randomInput.value = generateCode;
});

const keyButtons = document.getElementById("key-pad");
let displayInput = document.getElementById("displayInput");

keyButtons.addEventListener("click", function (event) {
  const keys = event.target.innerText;
  if (isNaN(keys)) {
    if (keys == "C") {
      displayInput.value = "";
    }
  } else {
    const previousNumber = displayInput.value;
    let newNumber = previousNumber + keys;
    displayInput.value = newNumber;
  }
});

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
  const randomPin = document.getElementById("random-input").value;
  const typedPin = document.getElementById("displayInput").value;

  const notifySuccess = document.getElementById("notify-success");
  const notifyError = document.getElementById("notify-error");
  if (randomPin == typedPin) {
    notifySuccess.style.display = "block";
    notifyError.style.display = "none";
  } else {
    notifySuccess.style.display = "none";
    notifyError.style.display = "block";
  }
});
