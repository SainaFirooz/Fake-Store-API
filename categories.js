async function fetchCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await response.json();

  const categoryDropdown = document.getElementById('categoryDropdown');
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryDropdown.appendChild(option);
  });
}

fetchCategories();



async function categoryChanged() {
  const categoryDropdown = document.getElementById('categoryDropdown');
  const selectedCategory = categoryDropdown.value;

  // Clear the previous content in productContainer
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  if (selectedCategory) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
    const products = await response.json();

    const productContainer = document.getElementById('productContainer');
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <div class="product-info">
          <h2>${product.title}</h2>
          <p>$${product.price}</p>
          <button onclick="addToCart('${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(productCard);
    });
  }
}


