const hamburgers_sizes = {
    small: { cost: 50, calories: 20 },
    large: { cost: 100, calories: 40 }
};

const toppings = {
    cheese: { cost: 10, calories: 20 },
    salad: { cost: 20, calories: 5 },
    potato: { cost: 15, calories: 10 }
};

const addons = {
    seasoning: { cost: 15, calories: 0 },
    mayyonaise: { cost: 20, calories: 5 }
};


class Hamburger {
    constructor(size) {
        this.size = size;
        this.toppings = [];
        this.addons = []
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    addAddon(addon) {
        this.addons.push(addon);
    }

    calculateCost() {
        let totalCost = this.size.cost;
        this.toppings.forEach((topping) => {
            totalCost += topping.cost;
        });
        this.addons.forEach((addon) => {
            totalCost += addon.cost;
        });
        return totalCost;
    }

    calculateCalories() {
        let totalCalories = this.size.calories;
        this.toppings.forEach((topping) => {
            totalCalories += topping.calories;
        });
        this.addons.forEach((addon) => {
            totalCalories += addon.calories;
        });
        return totalCalories;
    }
}


const myHamburger = new Hamburger(hamburgers_sizes.small);

myHamburger.addTopping(toppings.cheese);
myHamburger.addTopping(toppings.salad);
myHamburger.addAddon(addons.seasoning);

console.log(`Hamburger of your choise, cost: ${myHamburger.calculateCost()}`);
console.log(`Hamburger of your choice, calories: ${myHamburger.calculateCalories()}`);













