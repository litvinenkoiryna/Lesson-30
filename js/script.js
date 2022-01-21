"use strict";
//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і
// куплений він .и ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.


let list = [
    {name: "apple", number: 2, bought: true, price: 21.20, sum: 42.40,},
    {name: "milk", number: 1, bought: false, price: 25.00, sum: 25.00,},
    {name: "bread", number: 2, bought: true, price: 17.40, sum: 34.80,},
    {name: "water", number: 5, bought: true, price: 40.00, sum: 200.00,},
    {name: "tomato", number: 6, bought: false, price: 10.10, sum: 60.60,},
    {name: "lemon", number: 2, bought: true, price: 15.10, sum: 30.20,},
    {name: "onion", number: 1, bought: false, price: 14.00, sum: 14.00,},
    {name: "meat", number: 2, bought: false, price: 112.10, sum: 224.20,},
    {name: "fish", number: 1, bought: false, price: 100.50, sum: 100.50,},
];

/*list.sort(function (a, b) {
    if (a.bought > b.bought) {
       return 1;}
    if (a.bought < b.bought) {
        return -1;}
        return 0;
});
 console.log(list.sort());*/

// const newlist = list.map(e => e.name);
// alert (newlist);

// Покупка

/*function Shopping (a) {

    for(let i = 0; i < list.length; i++) {
        if (list[i].name === a) {
            list[i].bought = true;
    break;
        }
    }
    console.log(list);
}
Shopping("milk");
Shopping(prompt ('add product in list'));*/

//Створення списку (не) придбаних продуктів.

/* let needToBuyList = [];
list.forEach((item) => {
    if(item.bought === false){
        needToBuyList.push(item);
    }
});
console.log(needToBuyList);
alert(needToBuyList.map(e =>e.name));*/

// или с помощью filter

/*list = list.filter(item => item.bought === false);
console.log(list)
alert(list.map(e => e.name));*/

// сума покупки
// let total_sum = 0
// list.forEach(function(order){
//     list.forEach(function(item){
//         if(item.bought === true){
//         total_sum += item.sum} // cума покупок , що bought === true
//         return total_sum
//     })
//     console.log(total_sum)
//     total_sum = 0
// })

//Видалення продукту зі списку (видалення повинно проводитися шляхом створення
// нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)


// list.splice(6,1);
// let newListItem = list;
//
// console.log(newListItem);
//
// let item = newListItem.find(function(value){return value === newListItem.name;});
// if(item === undefined)alert('немає в списку');
// else alert('є в списку');
// console.log(item);




