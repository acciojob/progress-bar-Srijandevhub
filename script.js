//your JS code here. If required.
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const noofCircles = document.querySelectorAll(".circle").length;
let counter = 1;
nextBtn.addEventListener("click", () => {
  if (counter <= noofCircles) {
    counter++;
    document.getElementById(`circle-${counter}`).classList.add("active");
    if (counter === noofCircles) {
      nextBtn.setAttribute("disabled", true);
    }
    if (counter > 1) {
      prevBtn.removeAttribute("disabled");
    }
  }
});
prevBtn.addEventListener("click", () => {
  if (counter >= 1) {
    document.getElementById(`circle-${counter}`).classList.remove("active");
    if (counter === 2) {
      prevBtn.setAttribute("disabled", true);
    }
    if (counter > 1) {
      nextBtn.removeAttribute("disabled");
    }
    counter--;
  }
})