const selectBtn = document.getElementById("select-btn");
const optionList = document.getElementById("option-li");
const options = document.querySelectorAll("li");
const selectIcon = document.createElement("span");

selectBtn.addEventListener("click", () => {
  if (getComputedStyle(optionList).display == "none") {
    optionList.style.display = "block";
  } else {
    optionList.style.display = "none";
  }
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectIcon.textContent = "✓";
      option.prepend(selectIcon);
      selectBtn.innerHTML = option.textContent;
    });
  });
});
