let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let mandatoryExpense = prompt("Введите обязательную статью расходов в этом месяце",""),
    howMuchExpense = prompt("Во сколько обойдется?", "");
//получаем непредвиденные траты и сумму трат
let expenses = {
        mandatoryExpense: howMuchExpense
    };
//получаем масив доп. доходов
let additionalIncome = [];

let appData = {
    budget: money,
    timeData: time,
    consumption: expenses,
    optionalExpenses: "",
    additionalIncome: "",
    savings: false
};
// выводим бюджет на день, без учёта расходов
alert(money / 30);

