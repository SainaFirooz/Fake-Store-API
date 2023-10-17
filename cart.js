class CartItem {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
}

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(title, price, image) {
  const item = new CartItem(title, price, image);
  cartItems.push(item);
  updateCartDisplay();
  saveCartItemsToLocalStorage();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartDisplay();
  saveCartItemsToLocalStorage();
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = cartItems
    .map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
        <div class="cart-item-info">
          <p>${item.title}</p>
          <p>${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      </div>
    `)
    .join('');
}

function saveCartItemsToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
