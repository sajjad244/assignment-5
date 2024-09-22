// !! Global
const cardSectionEl = document.getElementById("card-section");
const donationButtonEl = document.getElementById("donation-btn");
const historyButtonEl = document.getElementById("history-btn");

// !! donation 1st
donationButtonEl.addEventListener("click", function () {
  donationButtonEl.classList.add("bg-green-500");
  donationButtonEl.classList.add("text-white");
  historyButtonEl.classList.remove("bg-green-500");
  historyButtonEl.classList.remove("text-white");
  cardSectionEl.classList.remove("hidden");
});

// !! history 2nd
historyButtonEl.addEventListener("click", function () {
  historyButtonEl.classList.add("bg-green-500");
  historyButtonEl.classList.add("text-white");
  donationButtonEl.classList.remove("bg-green-500");
  donationButtonEl.classList.remove("text-white");
  cardSectionEl.classList.add("hidden");
});
