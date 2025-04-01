const cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}
