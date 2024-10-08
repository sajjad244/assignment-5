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
  document.getElementById("transaction-section").classList.add("hidden");
});

// !! history 2nd btn
historyButtonEl.addEventListener("click", function () {
  historyButtonEl.classList.add("bg-green-500", "text-white");
  donationButtonEl.classList.remove("bg-green-500", "text-white");
  cardSectionEl.classList.add("hidden");
  document.getElementById("transaction-section").classList.remove("hidden");
});

// !! Modal close btn
document.getElementById("modal-btn").addEventListener("click", function () {
  hidModalEl.classList.add("hidden");
});

// !! card btn 1

document.getElementById("btn-donate-1").addEventListener("click", function () {
  const inputValueNumber = getInputFieldValueById("donate-input-1");
  const textValueNumber = getTextFieldValueById("text-value-1");
  if (!isNaN(inputValueNumber) && inputValueNumber > 0) {
    const addBalance = inputValueNumber + textValueNumber;
    const newMainAmount = mainAmountEl - addBalance;
    document.getElementById("text-value-1").innerText = addBalance;
    document.getElementById("donate-input-1").value = "";
    document.getElementById("main-amount").innerText = newMainAmount;
    hidModalEl.classList.remove("hidden");

    //???-Add-to-Transaction-History-??// Dynamic

    const entryP = document.createElement("p");
    const date = new Date();
    entryP.innerHTML = `
      <h1 class="text-center  text-3xl font-black">Transaction</h1>
      <br/>
      <p class="text-lg">${addBalance} Tk. ${getInnerTextId("text1")}</p>
      <p class="text-sm">${date}</p>
      <br/>
    `;
    document.getElementById("transaction-container").appendChild(entryP);
    // ???
  } else {
    alert("Write a Positive number please :) ");
  }
});

// !! card btn 2

document.getElementById("btn-donate-2").addEventListener("click", function () {
  const inputValueNumber = getInputFieldValueById("donate-input-2");
  const textValueNumber = getTextFieldValueById("text-value-2");
  if (!isNaN(inputValueNumber) && inputValueNumber > 0) {
    const addBalance = inputValueNumber + textValueNumber;
    const newMainAmount = mainAmountEl - addBalance;
    document.getElementById("text-value-2").innerText = addBalance;
    document.getElementById("donate-input-2").value = "";
    document.getElementById("main-amount").innerText = newMainAmount;
    //???-Add-to-Transaction-History-??// Dynamic

    const entryP = document.createElement("p");
    const date = new Date();
    entryP.innerHTML = `
          <h1 class="text-center text-3xl font-black">Transaction</h1>
          <br/>
          <p class="text-lg">${addBalance} Tk. ${getInnerTextId("text2")}</p>
          <p class="text-sm">${date}</p>
          <br/>
        `;
    document.getElementById("transaction-container").appendChild(entryP);
    // ???
    hidModalEl.classList.remove("hidden");
  } else {
    alert("Write a Positive number please :) ");
  }
});

// !! card btn 3

document.getElementById("btn-donate-3").addEventListener("click", function () {
  const inputValueNumber = getInputFieldValueById("donate-input-3");
  const textValueNumber = getTextFieldValueById("text-value-3");
  if (!isNaN(inputValueNumber) && inputValueNumber > 0) {
    const addBalance = inputValueNumber + textValueNumber;
    const newMainAmount = mainAmountEl - addBalance;
    document.getElementById("text-value-3").innerText = addBalance;
    document.getElementById("donate-input-3").value = "";
    document.getElementById("main-amount").innerText = newMainAmount;
    hidModalEl.classList.remove("hidden");
    //???-Add-to-Transaction-History-??// Dynamic

    const entryP = document.createElement("p");
    const date = new Date();
    entryP.innerHTML = `
          <h1 class="text-center text-3xl font-black">Transaction</h1>
          <br/>
          <p class="text-lg">${addBalance} Tk. ${getInnerTextId("text3")}</p>
          <p class="text-sm">${date}</p>
          <br/>
        `;
    document.getElementById("transaction-container").appendChild(entryP);
    // ???
  } else {
    alert("Write a Positive number please :) ");
  }
});
