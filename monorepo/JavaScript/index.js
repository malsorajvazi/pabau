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