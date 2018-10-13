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
 
    
    for (let i = 0; i < 2; i++){
        let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
            howMuchExpense = +prompt("Во сколько обойдется?", "");
    
        if ((typeof(mandatoryExpense)) != null && (typeof(howMuchExpense)) != null && mandatoryExpense != '' && 
        mandatoryExpense != '' && mandatoryExpense.length < 50) {
            appData.expenses[mandatoryExpense] = howMuchExpense;
        } else  { 
            i = i - 1;
        };
// выводим бюджет на день, без учёта расходов
// appData.moneyPerDay = (appData.budget / 30).toFixed();
// alert("Ежедневный бюджет: " + appData.moneyPerDay);