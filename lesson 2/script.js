"use strict";
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    additionalIncome: "",
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
            howMuchExpense = +prompt("Во сколько обойдется?", "");
    
        if ((typeof(mandatoryExpense))=== 'string' && (typeof(mandatoryExpense)) != null && (typeof(howMuchExpense)) != null && mandatoryExpense != '' && 
        mandatoryExpense != '' && mandatoryExpense.length < 50) {
            appData.expenses[mandatoryExpense] = howMuchExpense;
        } else  { 
            i = i - 1;
        };
        
    };
};
chooseExpenses();

// функция расчёта дневного бюджета и вывод на экран его значения
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();
// функция достатка и вывод на экран его значения
function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень доставтка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень доставтка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Вредний уровень доставтка");
    } else {
        console.log("Произошла ошибка");
    };
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            per = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*per;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    };
};
checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i < 4; i++){
        let nonBindingExpenses = prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = nonBindingExpenses;
    };
 
};
chooseOptExpenses();
