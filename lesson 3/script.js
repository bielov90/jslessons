"use strict";
let money, time;

function start() {
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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
                howMuchExpense = +prompt("Во сколько обойдется?", "");
        
            if ((typeof(mandatoryExpense)) != null && (typeof(howMuchExpense)) != null && mandatoryExpense != '' && 
            mandatoryExpense != '' && mandatoryExpense.length < 50) {
                appData.expenses[mandatoryExpense] = howMuchExpense;
            } else  { 
                i = i - 1;
            };
            
        };
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень доставтка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень доставтка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Вредний уровень доставтка");
        } else {
            console.log("Произошла ошибка");
        };
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                per = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*per;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        };
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++){
            let nonBindingExpenses = prompt("Статья необязательных расходов?");
             appData.optionalExpenses[i] = nonBindingExpenses;
        };
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный доход? (перечислети через запятую)", "");
            
        while (!((typeof(items)) === 'string' && items != null && items != "")){
            items = prompt("Что принесёт дополнительный доход? (перечислети через запятую)", "");
        };
            appData.income = items.split(', ');
            let lol = prompt("Может что-то ещё?");
            while (!((typeof(lol)) === 'string' && lol != null && lol != "")){
                lol = prompt("Может что-то ещё?");
            };
            appData.income.push(lol)
            appData.income.sort();

        appData.income.forEach(function(item, i,){
            document.write('Способы доп. заработка ' + (i+1) + ' : ' + item + ' ;' + '</br>');
        });
        
    }
};
// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key)
// };
