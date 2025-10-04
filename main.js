const selectBtn = document.getElementById("select-btn");
const optionList = document.getElementById("option-li");

selectBtn.addEventListener("click", showDropdown);

function showDropdown() {
  if ((optionList.style.display = "none")) {
    optionList.style.display = "block";
  } else {
    optionList.style.display = "none";
  }
}
