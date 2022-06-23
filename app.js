//   data of object with day and amount spent
const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const monthAmount = document.querySelector(".month-amount");
const chart = document.querySelector(".chart");

let total = data.reduce((sum, value) => sum + value.amount, 0);

const totalSum = [];

monthAmount.textContent = `$${total}`;
// ==========when page load we want all the data to be displayed=====================

window.addEventListener("DOMContentLoaded", function () {
  createBars();
});

// =======creating the bars==============
function createBars() {
  let listItems = " ";
  for (let i = 0; i < data.length; i++) {
    let mainDay = data[i];

    listItems += `<div class="bar-info">
   <article class="amount-info">
     $${mainDay.amount}
   </article>
   <span class="bar" id = "${mainDay.day}"></span>
   <p class="day">${mainDay.day}</p>
 </div>`;
  }
  chart.innerHTML = listItems;

  // getting the index of each bar and then setting the amount * 3 for each of them depends which index they are
  const bars = document.querySelectorAll(".bar");
  bars.forEach(function (bar) {
    console.log(bar.id);
    const index = data.findIndex((Object) => {
      return Object.day === bar.id;
    });

    bar.style.height = `${data[index].amount * 3}px`;
  });

  // ===========current day ==============
  let date = new Date().getDay();
  currentDay = data[date - 1];

  let multiple = currentDay.amount * 3;

  let highlightedDay = document.getElementById(currentDay.day);
  highlightedDay.classList.add("mainDay-bar");
  highlightedDay.style.height = `${multiple}px `;
}
