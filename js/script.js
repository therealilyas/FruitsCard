// DOM Elements
const fruitsUL = document.getElementById('fruitsUL');
const fruitsInput = document.getElementById('fruitInput');
const addButton = document.getElementById('addBtn');
const deleteButton = document.getElementById('deleteBtn');

// Custom Variables
let fruitsCart = [];


fruitsInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        triggerFruitAddition(e.target.value);
    }
});

addButton.addEventListener('click', () => {
    triggerFruitAddition(fruitsInput.value);
});

deleteButton.addEventListener('click', (e) => {
    let numbersOfItems = fruitsCart.length;
    let max = numbersOfItems;

    const randomIndex = Math.floor(max * Math.random());
    delete fruitsCart[randomIndex];

    fruitsCart = fruitsCart.filter((fruit) => {
        if (fruit !== undefined) {
            return fruit;
        }
    });
    updateULElement();
});

function triggerFruitAddition(fruit) {
    if (isCartFull()) {
        alert("Ibi Ko'payib Ketopti Hay Qara Lekin!");
        return;
    }

    addFruitToCart(fruit);
    updateULElement();
    clearInput();

}

function addFruitToCart(fruit) {
    fruitsCart.push({
        name: fruit,
        id: fruitsCart.length
    });
}

function updateULElement() {
    fruitsUL.innerHTML = '';

    fruitsCart.forEach((fruit) => {
        const fruitLI = document.createElement('li');
        fruitLI.className = "fruit-li";
        fruitLI.id = fruit.id

        const fruitSpan = document.createElement('span');
        fruitSpan.innerText = fruit.name;

        const deleteFruitBtn = document.createElement('button');
        deleteFruitBtn.className = "delete-fruit-btn";
        deleteFruitBtn.innerText = 'X'

        deleteFruitBtn.addEventListener('click', () => {
            console.log("Number of elements in array " + fruitsCart.length);
            delete fruitsCart[fruit.id];

            fruitsCart = fruitsCart.filter((fruit) => {
                if (fruit !== undefined) {
                    return fruit;
                }
            });
            updateULElement();
            console.log("Number of elements in array after deletion and filteration " + fruitsCart.length)
        })
        fruitLI.appendChild(fruitSpan);
        fruitLI.appendChild(deleteFruitBtn);

        fruitsUL.appendChild(fruitLI);
    });
}

function clearInput() {
    fruitsInput.value = '';
}

function isCartFull() {
    if (fruitsCart.length == 10) {
        return true;
    }
}