const display = document.getElementById("display");
const image = document.getElementById("secretImage");

const secrets = {
    "106":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWwfLDRT_8GOFrJ18N3cV-pfbz4zdfdCUk6L4bRNv9w&s=10"
    
}

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay(input) {
  display.value = "";
}
function calculate() {
  const display = document.getElementById("display");
  const overlay = document.getElementById("imageOverlay");
  const secretImage = document.getElementById("secretImage");

  if (secrets[display.value]) {
    secretImage.src = secrets[display.value];
    overlay.style.display = "flex";
  }

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}
