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
        while(typeof(income) != 'string' || income === null || income == ''){
            let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)","");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что то еще?",''));
        appData.income.sort();
        console.log("Способы доп.заработка:")
        appData.income.forEach(function(item, i, arr){

        }
    };

};
