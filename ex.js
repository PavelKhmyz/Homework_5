// Банк

const bankProduct = [];
class Product {
    constructor(name, percent, capt){
        this.name = name,
        this.percent = percent,
        this.capt = capt
    }
};
function getBankValues() {
    const a = new Product (
             document.querySelector('.num1').value, 
             document.querySelector('.num2').value,
             document.querySelector('.num3').value
            );
    bankProduct.push(a);

    const option = document.createElement('option');
    option.innerHTML = a.name;
    sel.append(option);                   
};
document
    .querySelector('.save')
    .addEventListener('click', getBankValues);

// Клиент

function getUserValues() {
    return [
        document.querySelector('.num4').value,
        document.querySelector('.num5').value,
        document.querySelector('.num6').value
    ];
};
function user (){
    const x = getUserValues();
    for (let i = 0; i < bankProduct.length; i++){
        let u = Object.values(bankProduct[i]);
        for (let i = 0; i < u.length; i++){
            if (x[0] === u[i]){
                const result = (x[1] * ((1 + (u[i+1] / 100) / (12 / u[i+2])) ** (x[2] / u[i+2]))).toFixed(3);                
                answer(x[0] + '<br \/><br \/>Депозит:' + ' ' + x[1] + '<br \/><br \/>Процентов начисленно:' + ' ' + (result - x[1]).toFixed(3) + ' ' + '<br \/><br \/>Общая сумма выплат:' + ' ' + result);            
            };
            break;
        };
    };   
};

// Результат

function answer (user){
    const money = document.createElement('div');
    money.className = 'foo';
    money.innerHTML = String(user);
    rum.append(money);  
}
document
    .querySelector('.sum')
    .addEventListener('click', user);