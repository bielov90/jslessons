"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    additionalIncome: "",
    savings: false
};
let i = 0;
// цикл - while 

while (i < 2) {
        let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
        howMuchExpense = +prompt("Во сколько обойдется?", "");
        console.log("yes 1");
        i++;
};

// цикл - do while 

// do    {  let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
//             howMuchExpense = +prompt("Во сколько обойдется?", "");
//             console.log("yes");
//             appData.expenses[mandatoryExpense] = howMuchExpense;  
//             i++;
// }   while (i < 2)
              
// цикл - for

// for (let i = 0; i < 2; i++){
//     let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
//         howMuchExpense = +prompt("Во сколько обойдется?", "");

//     if ((typeof(mandatoryExpense))=== 'string' && (typeof(mandatoryExpense)) != null && (typeof(howMuchExpense)) != null && mandatoryExpense != '' && 
//     mandatoryExpense != '' && mandatoryExpense.length < 50) {
//         appData.expenses[mandatoryExpense] = howMuchExpense;
//     } else if (i--) { 
//         alert("Вы не ввели данные про статью расходов в месяц"),
//         appData.expenses[mandatoryExpense] = howMuchExpense;
//     };
    
// };



appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень доставтка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень доставтка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Вредний уровень доставтка");
} else {
    console.log("Произошла ошибка");
}

