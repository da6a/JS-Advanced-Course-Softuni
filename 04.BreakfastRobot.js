function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function manager(input) {
        let actionHandler = commandOption();
        let [command, property, quantity] = input.split(' ');
        return actionHandler[command](property, quantity);
    }

    function commandOption() {
        return {
            restock: (microelement, quantity) => {
                store[microelement] += Number(quantity)
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let copyStore = JSON.parse(JSON.stringify(store));
                let text = '';
                for (let [key, value] of Object.entries(recipes[recipe])) {
                    let neededQuantity = Number(quantity) * value;
                    if (store[key] < neededQuantity) {
                        isDone = false;
                        text = `Error: not enough ${key} in stock`;
                        break;
                    }
                    copyStore[key] -= neededQuantity;
                }
                if (!isDone) {
                    return text;
                }
                store = copyStore;
                return 'Success';
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
            }
        }
    }
}
let manager = solution();

console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));//Success
console.log(manager("restock flavour 10"));// Success
console.log(manager("prepare apple 1"));// Success
console.log(manager("restock fat 10"));// Success
console.log(manager("prepare burger 1"));// Success
console.log(manager("report"));// protein=0 carbohydrate=4 fat=3 flavour=55