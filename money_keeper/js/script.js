let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optionalexpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector('day-value');


let money,time;

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
 };

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYY-MM-DD" , "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", "");
    }
    appData.budjet = money;
    appData.timeData = time;
    
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for(let i=0; i< expensesItem.length; i++) {
       let a = expensesItem[i].value ,
           b = expensesItem[++i].value;
    
        if ((typeof (a)) != null && (typeof(a)) != null && (typeof(b)) != null
             && a != '' && b !='' && a.length < 50) {
                 console.log("done");
                 appData.expenses[a] = b;
                 sum += +b;
        }else{
            i = i - 1;
        }
    
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i=0; i< optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click' , function() {

if(appData.budjet != undefined) {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100){
        levelValue.textContent = "Минимальный уровень достатка";
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000){
        levelValue.textContent = "Средний уровень достатка";
    }else if(appData.moneyPerDay >2000) {
        levelValue.textContent = "Высокий уровень достатка";
    }else{
        levelValue.textContent = "Произошла ошибка"
    }
}else {
     daybudgetValue.textContent = "Произошла ошибка!"
}
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});