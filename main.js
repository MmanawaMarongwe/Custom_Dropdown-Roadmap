const selectBtn = document.getElementById("select-btn");
const optionList = document.getElementById("option-li");

selectBtn.addEventListener("click", () => {
  if (getComputedStyle(optionList).display == "none") {
    optionList.style.display = "block";
  } else {
    optionList.style.display = "none";
  }
});
