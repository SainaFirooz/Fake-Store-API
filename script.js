const PRODUCTS_URL = "https://fakestoreapi.com/products";


const displayProducts = (products) => {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.classList.add('product-image');
    img.onclick = function() {
      openModal(product.title, product.description, product.price, product.category, product.rating.rate);
    };

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.innerHTML = `
      <h2>${product.title}</h2>
      <p><b>Price: $</b>${product.price}</p>
      <p><b>Category:</b> ${product.category}</p>
      <p><b>Rating: </b>${product.rating.rate} (${product.rating.count} reviews)</p>
      <button onclick="addToCart('${product.title}', '$${product.price}', '${product.image}')">Add to Cart</button>
    `;

    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    productContainer.appendChild(productCard);
  }
};



const fetchProducts = async () => {
  try {
    const response = await fetch(PRODUCTS_URL);
    if (!response.ok) {
      throw new Error('error');
    }
    const products = await response.json();
    return products;
  } catch (error) {
  }
};



const loadProducts = async () => {
  try {
    const products = await fetchProducts();
    displayProducts(products);
  } catch (error) {
  }
};

loadProducts();