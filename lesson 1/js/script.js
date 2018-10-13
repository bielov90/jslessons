"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuchExpense = +prompt("Во сколько обойдется?", ""),
    mandatoryExpenseTwo = prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuchExpenseTwo = +prompt("Во сколько обойдется?", "");
    
appData.expenses[mandatoryExpense] = howMuchExpense;
appData.expenses[mandatoryExpenseTwo] = howMuchExpenseTwo;
// выводим бюджет на день, без учёта расходов
console.log(appData)
alert(money / 30);

