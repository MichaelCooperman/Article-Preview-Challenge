const popup = document.querySelector(".popup-bubble");
const btnShare = document.querySelector(".btn");

btnShare.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
