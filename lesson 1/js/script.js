"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuchExpense = +prompt("Во сколько обойдется?", ""),
    mandatoryExpenseTwo = prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuchExpenseTwo = +prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [mandatoryExpense]: howMuchExpense,
        [mandatoryExpenseTwo]: howMuchExpenseTwo,
    },
    optionalExpenses: {},
    income: [],
    additionalIncome: "",
    savings: false
};

// выводим бюджет на день, без учёта расходов
console.log(appData)
alert(money / 30);

