/*let num = 20;
function showFirstMessage(text) {
  alert(text);
  let num = 22;
  console.log(num);
}
showFirstMessage("Hello World");
console.log(num);*/

let daymoney;
function detectDayBudget() {
  daymoney = +prompt("Ваш дневной бюджет?","");
  while (isNaN(daymoney) || daymoney == "" || daymoney == null) {
  daymoney = +prompt("Ваш дневной бюджет?","");
  }
}
detectDayBudget();


let othersExpenses;
function chooseOptExpenses() {
  othersExpenses = +prompt("Статья необязательных расходов?","");
  while (isNaN(othersExpenses) || othersExpenses == "" || othersExpenses == null) {
  othersExpenses = +prompt("Статья необязательных расходов?",""); 
  }
}
chooseOptExpenses();