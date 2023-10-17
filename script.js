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
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>Rating: ${product.rating.rate} (based on ${product.rating.count} reviews)</p>
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
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};



const loadProducts = async () => {
  try {
    const products = await fetchProducts();
    displayProducts(products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

loadProducts();


  
// modal

function openModal(title, description, price, category, ratingRate) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h2>${title}</h2>
    <p>Description: ${description}</p>
    <p>Price: ${price}</p>
    <p>Category: ${category}</p>
    <p>Rating: ${ratingRate}</p>
    <div class="button-container">
  <button onclick="closeModal()" class="modal-button">Close</button>
  <button onclick="addToCart('${title}', '${price}')" class="modal-button">Add to Cart</button>
</div>
  `;

  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  document.removeEventListener('click', outsideModalClick);
  document.addEventListener('click', outsideModalClick);
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';

  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = ''; 

  document.removeEventListener('click', outsideModalClick);
}


function outsideModalClick(event) {
  if (event.target === productContainer) {
    closeModal();
  }
}


