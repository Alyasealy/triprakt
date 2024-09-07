'use strict';

// задачка 1
let price = prompt('прайс товара', '100');
let mani = prompt('скока в кошельке есть', '150');

price = parseFloat(price);
mani = parseFloat(mani);

if (isNaN(price) || isNaN(mani) || price < 0 || mani < 0) {
    alert('ошибк')
}
 else if(price==mani) {
    alert('успешно')
} else if (mani<price) {
    let nyzno = price - mani;
    alert(`не хватает ${nyzno} руб`)
} else if (mani>price) {
    let sdacha = mani - price;
    alert(`успешно ваша сдача ${sdacha} р`)
}



// задачка 2
let chislo = prompt('чило', '1')

if (isNaN(chislo)) {
    alert('это не число')
} else if (chislo>0) {
    alert('1')
} else if(chislo<0) {
    alert('-1')
} else if (chislo==0) {
    alert('0')
}

// 3
let a = prompt('введите', 'цифр');
let b = prompt('второе число', 'цифр');
let res = (a+b<4) ? 'Маловато' : 'Многовато'
alert(res)

// четвертое 
let vhod = prompt ('логин', '');
let message;
let result = (vhod=='Сотрудник') ? 'ghbdtn' : (vhod=='Директор') ? 'здравств' : (vhod=='') ? 'логина нет' : '';
alert(result)

// пятое задание
let logo = prompt('ваш логин', '');
if (logo == 0 || logo===null) {
    alert('отменена');
} else if (logo !== 'Админ') {
    alert('ят вас не знаю');
} 
 else {
    let password = prompt(' пароль', '');
    if (password == 0 || password === null) {
        alert('отменв');
    } else if (password !== 'Я главный') {
        alert('Неверный пароль');
    } else {
        alert('Здравствуйте!');
    }
}