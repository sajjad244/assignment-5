// !!! blog button for new window
document.getElementById("blogButton").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// !! Global
const cardSectionEl = document.getElementById("card-section");
const donationButtonEl = document.getElementById("donation-btn");
const historyButtonEl = document.getElementById("history-btn");
const hidModalEl = document.getElementById("modalHidden");
const mainAmount = document.getElementById("main-amount").innerText;
const mainAmountEl = parseFloat(mainAmount);

// !! donation 1st btn
donationButtonEl.addEventListener("click", function () {
  donationButtonEl.classList.add("bg-green-500", "text-white");
  historyButtonEl.classList.remove("bg-green-500", "text-white");
  cardSectionEl.classList.remove("hidden");
});

// !! history 2nd btn
historyButtonEl.addEventListener("click", function () {
  historyButtonEl.classList.add("bg-green-500", "text-white");
  donationButtonEl.classList.remove("bg-green-500", "text-white");
  cardSectionEl.classList.add("hidden");
});

// !! modal close btn
document.getElementById("modal-btn").addEventListener("click", function () {
  hidModalEl.classList.add("hidden");
});

// !!!  card-1

document.getElementById("card1").addEventListener("click", function () {
  const cardOne = document.getElementById("1st-card").innerText;
  const cardOneEl = parseFloat(cardOne);
  const inputOne = document.getElementById("1st-card-input").value;
  const inputOneEl = parseFloat(inputOne);
  const updateCardBalance1 = cardOneEl + inputOneEl;
  const updateMainBalance = mainAmountEl - updateCardBalance1;

  if (!isNaN(inputOneEl) && inputOneEl > 0) {
    document.getElementById("1st-card").innerText = updateCardBalance1;
    document.getElementById("main-amount").innerText = updateMainBalance;
    document.getElementById("1st-card-input").value = "";
    hidModalEl.classList.remove("hidden");
  } else {
    alert("Write a Positive number please :) ");
  }
});
