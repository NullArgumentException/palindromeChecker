const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanString(str) {
  const regex = /[\W_\s]/g;
  return str.replace(regex, "").toLowerCase();
}

function checkString(e) {
  e.preventDefault();
  result.style.display = "none";

  if (textInput.value === "") {
    setTimeout(() => {
      alert("Please input a value");
    }, 0);
  } else {
    let resultHTML;
    const inputString = textInput.value;
    const cleanedString = cleanString(inputString);
    const reversedString = cleanedString.split("").reverse().join("");

    if (reversedString === cleanedString) {
      resultHTML = `<p><b>${inputString}</b> is a palindrome</p>`;
    } else {
      resultHTML = `<p><b>${inputString}</b> is not a palindrome</p>`;
    }

    result.style.display = "block";
    result.innerHTML = resultHTML;
    textInput.value = "";
  }
}

checkButton.addEventListener("click", checkString);
