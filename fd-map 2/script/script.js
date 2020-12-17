var addToCartButtons = document.querySelectorAll("button.shop");

for (i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", updateShoppingCart);
}

function updateShoppingCart() {

    let shoppingCartAmount = document.querySelector(".shopping-cart span");


    let currentAmount = shoppingCartAmount.innerHTML;

    currentAmount = parseInt(currentAmount);


    let newAmount = currentAmount + 1;


    if (newAmount == 1) {

        shoppingCartAmount.classList.add("positive");
    }


    shoppingCartAmount.innerHTML = newAmount;
}
