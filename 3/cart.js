// cart.js
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    let total = 0;
    cart.forEach(item => {
        const row = document.createElement("tr");

        const subtotal = item.price * item.quantity;
        total += subtotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td><img src="${item.image}" style="width: 80px;"></td>
            <td>Rs.${item.price}</td>
            <td>${item.quantity}</td>
            <td>Rs.${subtotal}</td>
        `;
        cartItems.appendChild(row);
    });

    totalPrice.innerText = `Total: Rs.${total}`;
});
