let startButton = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    
    expensesItems = document.querySelector(".expenses-item"),
    buttons = document.querySelectorAll("button"),
    
    expensesItemBtn = buttons[0],
    optionalExpensesBtn = buttons[1],
    countBudgetBtn = buttons[2],

    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),

    income = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    mounth = document.querySelector(".mounth-value"),
    day = document.querySelector(".day-value");

    let money, time;

    function start(){
        money = +prompt("Ваш бюджет на месяц?","");
        time = prompt("Введите дату в формате YYYY-MM-DD","");
    
        while(isNaN(money) || money=='' || money == null){
             money = +prompt("Ваш бюджет на месяц?","");
        }
    }
    
    
    start();
    
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function(){
            for(let i = 0; i < 2; i++){
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько это обойдется?", "");
            
                if((typeof(a)) === 'string' && a != null && b != null && a != '' && b != '' && a.length < 50){
                      console.log("Done");
                      appData.expenses[a] = b;
                  } else{
                      i--;
                  }
            }
        },
        detectDayBudget: function(){
            appData.moneyPerDay = (appData.budget/30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
    
        detectLevel: function(){
            if(appData.moneyPerDay < 100){
                console.log("Минимальный уровень дохода");
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                console.log("Средний уровень дохода");
            } else if(appData.moneyPerDay > 2000){
                console.log("Высокий уровень дохода");
            } else {
                console.log("Произошла ошибка");
            }
        },
        checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("Какова сумма накоплений?",""),
                percent = +prompt("Под какой процент?","");
        
                appData.mounthIncome = save/100/12*percent;
                
                alert("Месячный доход с вашего депозита " + appData.mounthIncome.toFixed());
            }
        },
        chooseOptExpenses: function(){
            for(let i = 0; i < 3; i++){
                let a = prompt("Статья необязательных расходов?");
        
                if((typeof(a)) === 'string' && a != null && a != '' && a.length < 50){
                appData.optionalExpenses[i+1] = a;
                } else i--;
            }
        },
        chooseIncome: function(){
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    
            if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
    
            appData.income.forEach (function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            }); 
        }
    
    };
    
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }  






