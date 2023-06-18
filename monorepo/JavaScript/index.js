function shuffleValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  checkboxes.sort(() => Math.random() - 0.5); // Shuffle the array randomly
  checkboxes.forEach((checkbox) => {
    form.appendChild(checkbox.parentNode); // Append the label element (parent) instead of the checkbox itself
  });
}

function changeValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  checkboxes.forEach((checkbox) => {
    checkbox.value = "Vlera e re"; // Change the value of each checkbox
  });
}

function showSelectedValues() {
  const form = document.getElementById("myForm");
  const checkboxes = Array.from(form.elements.option);
  const selectedValues = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  document.getElementById("selectedValues").textContent = "Selected Values: " + selectedValues.join(", ");
}