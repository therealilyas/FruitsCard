// DOM Elements
const fruitsUL = document.getElementById('fruits-ul');
const fruitsInput = document.getElementById('fruit-input');
const deleteButton = document.getElementById('delete-Button');

// Custom Variables
let fruitsCart = [];


fruitsInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (isCartFull()) {
            alert("Ibi Ko'payib Ketopti Hay Qara Lekin!");
            return;
        }

        addFruitToCart(e.target.value);
        updateULElement();
        clearInput();

    }
});

deleteButton.onclick = function randomDell() {
    let randomIndex = Math.floor(Math.random * fruitsCart.length);
    fruitsCart.slice(randomIndex, 1);

    updateULElement();

}

function addFruitToCart(fruit) {
    fruitsCart.push(fruit);
}

function updateULElement() {
    fruitsUL.innerHTML = '';

    fruitsCart.forEach((fruit) => {
        const fruitLI = document.createElement('li');
        fruitLI.innerText = fruit;
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