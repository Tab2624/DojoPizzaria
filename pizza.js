function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}
    pizza.bread = crustType
    pizza.sauce = sauceType
    pizza.cheese = cheeses
    pizza.toppings = toppings
return pizza
}

var p1 = pizzaOven(['deep dish', 'hand tossed'], ['traditional', 'marinara'], 
['mozarella', 'provalone', 'feta'], ['pepperoni', {name: ['sausage', 'pork', 'chicken']}, 
{wet: ['mushrooms', 'olives', 'onions']}])
console.log(p1.bread[0], p1.sauce[0], p1.cheese[0], p1.toppings[0], p1.toppings[1].name[0])
console.log(p1.bread[1], p1.sauce[1], p1.cheese[0], p1.cheese[2], p1.toppings[2].wet[0], p1.toppings[2].wet[1], p1.toppings[2].wet[2])
console.log(p1.bread[1], p1.sauce[1], p1.cheese[2], p1.toppings[1].name[2], p1.toppings[1].name[0])
console.log(p1.bread[0], p1.sauce[0], p1.cheese[1], p1.toppings[1].name[1], p1.toppings[2].wet[2])



function randomPizza(){
    var crust =['deep dish', 'hand tossed']
    var sauce = ['traditional', 'marinara']
    var cheese = ['mozarella', 'provalone', 'feta']
    crustIndex = Math.floor(Math.random()*crust.length)
    sauceIndex = Math.floor(Math.random()*sauce.length)
    cheeseIndex = Math.floor(Math.random()*cheese.length)
    // option 1
    // var pizza = {
    //     bread: crust[crustIndex], 
    //     sauce: sauce[sauceIndex],
    //     cheese: cheese[cheeseIndex]
    // }
    // option 2
    // pizza.bread = crust[crustIndex]
    // pizza.sauce = sauce[sauceIndex]
    // pizza.cheese = cheese[cheeseIndex]
    // pizza.toppings = toppings
    // option 3
return  {
    bread: crust[crustIndex], 
    sauce: sauce[sauceIndex],
    cheese: cheese[cheeseIndex]
}
}

console.log(randomPizza())
