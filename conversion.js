const _ = require('lodash');

class Currency {
    constructor(gold, silver, copper) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let wallet1 = new Currency(_.random(0, 300), _.random(0, 100), _.random(0, 1000));
let sword = new Item('sword', new Currency(0, 0, _.random(2000, 6000)));
let moneyearned = new Currency(0, 0, _.random(0, 999999));

conversionToGold = (total) => {
    while (total.copper >= 100) {
        total.silver++;
        total.copper = (total.copper - 100);
    }
    while (total.silver >= 100) {
        total.gold++;
        total.silver = (total.silver - 100);
    }
};

conversionToCopper = (total) => {
    while (total.gold > 0) {
        total.gold--;
        total.silver = total.silver + 100;
    }
    while (total.silver >= 1) {
        total.silver--;
        total.copper = total.copper + 100;
    }
}

buySomething = (wallet, item) => {
    conversionToGold(item.price);
    console.log('You just bought', item.name, 'for', item.price);
    conversionToCopper(item.price);
    conversionToCopper(wallet);
    wallet.copper = wallet.copper - item.price.copper;
    conversionToGold(wallet);
    console.log('Funds after purchase', wallet1);
    console.log('-------------------------------------------------------------------------');
};

earnMoney = (wallet, earned) => {
    conversionToGold(earned);
    console.log('You just made', earned);
    conversionToCopper(earned);
    conversionToCopper(wallet);
    wallet.copper = wallet.copper + earned.copper;
    conversionToGold(wallet);
    console.log('Funds after earning', wallet1);
    console.log('-------------------------------------------------------------------------');
}

console.log('-------------------------------------------------------------------------');
conversionToGold(wallet1);
console.log('Funds before purchase', wallet1);
console.log('-------------------------------------------------------------------------');

buySomething(wallet1, sword);

earnMoney(wallet1, moneyearned);