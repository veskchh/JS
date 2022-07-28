function moneyForFruit(fruit, grams, ppkilo) {
    let type_of_fruit = fruit
    let price_per_kilo = ppkilo
    let kilos = grams / 1000
    let money_needed = kilos * price_per_kilo
    console.log(`I need $${money_needed.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${type_of_fruit}.`)
}


