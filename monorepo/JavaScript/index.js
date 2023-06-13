//Shuffle Values 
function shuffleValues() {
  const myForm = document.getElementById("myForm");
  const checkboxes = Array.from(myForm.elements.checkbox);


  for (let i = checkboxes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [checkboxes[i], checkboxes[j]] = [checkboxes[j], checkboxes[i]];
  }

  checkboxes.forEach((checkbox) => {
    myForm.appendChild(checkbox.parentNode);
  });
}


const shuffleButton = document.getElementById("shuffleButton");
shuffleButton.addEventListener("click", shuffleValues);





//Change values

function changeValues() {
  const checkbox = document.getElementsByName("checkbox");

  checkbox.forEach((checkbox) => {
    checkbox.value = "vleraERe";
  });

}

const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeValues);




//Show selected values

function showSelectedValues() {
  const selectedValuesDiv = document.getElementById("selectedValues");
  const checkboxes = document.getElementsByName("checkbox");
  const selectedCheckboxes = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
  const selectedValues = selectedCheckboxes.map((checkbox) => checkbox.value);

  selectedValuesDiv.textContent = "Selected Values: " + selectedValues.join(", ");
}

const showButton = document.getElementById("showButton");
showButton.addEventListener("click", showSelectedValues);