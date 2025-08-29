// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button1");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            const name = card.querySelector("h4").innerText;
            const price = parseFloat(card.querySelector(".u-pull-right").innerText.replace("Rs.", ""));
            const image = card.querySelector("img").src;

            const item = { name, price, image, quantity: 1 };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingItem = cart.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${item.name} added to cart.`);
        });
    });
});
