// Budget calculator
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("How much is your total budget? (Ex: 2000)"));
  var accomodationCosts = Number(
    prompt("How much are your accomadtion costs? (Ex: 200)")
  );
  var tripDays = Number(prompt("How many days will your trip be? (Ex: 3)"));

  calcDailyBudget(totalBudget, accomodationCosts, tripDays);
};

var calcDailyBudget = function (totalBudget, accomodationCosts, tripDays) {
  var daily = ((totalBudget - accomodationCosts) / tripDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

// Budget display
tripInfoButton.addEventListener("click", tripInfo);
