// !! Global
const cardSectionEl = document.getElementById("card-section");
const donationButtonEl = document.getElementById("donation-btn");
const historyButtonEl = document.getElementById("history-btn");

// !!! blog button for new window
document.getElementById("blogButton").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
// !!! Home button for new window
document.getElementById("homeButton").addEventListener("click", function () {
  //   window.location.href = "./index.html";
  console.log("ekjfbrkj");
});

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
