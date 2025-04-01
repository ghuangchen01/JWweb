function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  const itemKey = getQueryParam("item");
  const product = products[itemKey];
  const container = document.getElementById("productDetail");
  
  if (product) {
    container.innerHTML = `
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    `;
  } else {
    container.innerHTML = `<p>Item not found.</p>`;
  }
  