const grid = document.getElementById("productGrid");

for (const key in products) {
  const product = products[key];

  const card = document.createElement("a");
  card.href = `product.html?item=${key}`;
  card.className = "product-card";

  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>Click to learn more →</p>
  `;

  grid.appendChild(card);
}
