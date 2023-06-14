<<<<<<< HEAD
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
=======
// Function to shuffle the order of checkbox inputs
function shuffleValues() {
    const checkboxForm = document.getElementById("checkboxForm");
    const checkboxes = Array.from(checkboxForm.elements.checkbox);
  
    // Swap the order of the checkboxes
    for (let i = 0; i < checkboxes.length - 1; i++) {
      checkboxForm.insertBefore(checkboxes[i + 1].parentNode, checkboxes[i].parentNode);
    }
  }
  
  // Function to change the values of checkbox inputs
  function changeValues() {
    const checkboxes = document.getElementsByName("checkbox");
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.value = "New Value " + (index + 1);
    });
  }
  
  // Function to show the selected checkboxes
  function showSelectedValues() {
    const selectedValuesDiv = document.getElementById("selectedValues");
    const checkboxes = document.getElementsByName("checkbox");
    const selectedCheckboxes = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
    const selectedValues = selectedCheckboxes.map((checkbox) => checkbox.value);
  
    selectedValuesDiv.textContent = "Selected Values: " + selectedValues.join(", ");
  }
  
  // Add event listeners to the buttons
  const shuffleButton = document.getElementById("shuffleButton");
  shuffleButton.addEventListener("click", shuffleValues);
  
  const changeButton = document.getElementById("changeButton");
  changeButton.addEventListener("click", changeValues);
  
  const showButton = document.getElementById("showButton");
  showButton.addEventListener("click", showSelectedValues);
>>>>>>> 6bac40556e9665c832b8a10314a130796cbe712c
