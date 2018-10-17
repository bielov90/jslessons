let startСalculating = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    incomtValue = document.getElementsByClassName('income-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
    let money, time;
    
    for (let i = 0; i < expensesItem.length; i++)
    if (expensesItem[i].value == 0){
        expensesItemBtn.disabled = true;
    }
    for (let i = 0; i < optionalexpensesItem.length; i++)
    if (expensesItem[i].value == 0){
        expensesItemBtn.disabled = true;
    }
    countBudgetBtn.disabled = "true";

   

    startСalculating.addEventListener('click', function(){
        
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?", "");
        
        while(isNaN(money) || money == "" || money == null){
            money = +prompt("Ваш бюджет на месяц?", "");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        countBudgetBtn.disabled = false;
    });

    expensesItem[1].addEventListener('change', function(){
        expensesItemBtn.disabled = false;
    });
    optionalexpensesItem[0].addEventListener('change', function(){
        optionalExpensesBtn.disabled = false;
    });
    expensesItemBtn.addEventListener('click', function(){
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++){
            let mandatoryExpense = expensesItem[i].value,
                howMuchExpense = expensesItem[++i].value;
        
            if ((typeof(mandatoryExpense)) != null && (typeof(howMuchExpense)) != null && mandatoryExpense != '' && 
            mandatoryExpense != '' && mandatoryExpense.length < 50) {
                appData.expenses[mandatoryExpense] = howMuchExpense;
                sum += +howMuchExpense;
            } else  { 
                i = i - 1;
            };
            
        };
        appData.sum = sum;
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function(){
        for (let i = 0; i < optionalexpensesItem.length; i++){
            let opt = optionalexpensesItem[i].value;
             appData.optionalExpenses[i] = opt;
             optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }

    });

    countBudgetBtn.addEventListener('click', function(){

        if (appData.budget != undefined){
            appData.moneyPerDay = ((appData.budget / 30 ) - (appData.sum / 30 )).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
            if (dayBudgetValue.textContent == "NaN"){
                dayBudgetValue.textContent = "Введите обязательные траты"
            }


            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень доставтка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень доставка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Вредний уровень доставтка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            dayBudgetValue.textContent = "Произошла ошибка";
        }

    });

    
    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
            appData.income = items.split(', ');
            incomtValue.textContent = appData.income;

    });

    checkSavings.addEventListener('click', function(){
        if (appData.savings == true){
            appData.savings = false; 
        } else {
            appData.savings = true; 
        }

    });

    sumValue.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +sumValue.value;
                precent = +percentValue.value;

            appData.monthIncome = sum/100/12*precent;
            appData.yearIncome = sum/100*precent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }

    });
    percentValue.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +sumValue.value;
                precent = +percentValue.value;

        appData.monthIncome = sum/100/12*precent;
        appData.yearIncome = sum/100*precent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }

    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        additionalIncome: "",
        savings: false,
    };

    

    

