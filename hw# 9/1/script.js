//******************************************************//
//**Это первый способ которым сделал, когда разбирался**//
//******************************************************//

// function Manager(name, sales, age) {
//     this.name = name;
//     this.sales = sales;
//     this.age = age;
// }
// Manager.prototype.sell = function (thing) {
//     this.sales += 1;
//     return 'Manager ' + this.name + ', ' + this.age + ' age, ' + ' sold ' + thing;
// };
//
// let ivan = new Manager('Ivan', 10, 25);
// let petr = new Manager('Petr', 5, 20);
// let artem = new Manager('Artem', 50, 33);
// artem.sell = function (thing){
//     return 'Manager ' + this.name + ', ' + this.age + ' age, ' + ' sold ' + thing + ', because He is a Super Manager!';
// };
//
// console.log(ivan.sales, petr.sales, artem.sales);
// console.log(ivan.sell('Bread'));
// console.log(petr.sell('Meat'));
// console.log(artem.sell('Apple Watch'));


//******************************************************//
//**После сделал вторым способом (переделал синтаксис)**//
//******************************************************//

class Manager {
    constructor(name, sales, age) {
        this.name = name;
        this.sales = sales;
        this.age = age;
    }
    sell(thing){
        this.sales += 1;
        return 'Manager ' + this.name + ', ' + this.age + ' age, ' + ' sold ' + thing;
    }
}

let ivan = new Manager('Ivan', 10, 25);
let petr = new Manager('Petr', 5, 20);
let artem = new Manager('Artem', 50, 33);
artem.sell = function(thing){
    return 'Manager ' + this.name + ', ' + this.age + ' age, ' + ' sold ' + thing + ', because He is a Super Manager!';
};
console.log(ivan.sell('Bread'));
console.log(petr.sell('Meat'));
console.log(artem.sell('Apple Watch'));

console.log(ivan.sales, petr.sales, artem.sales);

//********************************************//
//************оба способа работают************//
//********************************************//