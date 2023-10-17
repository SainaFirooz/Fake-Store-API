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
  updateCart();
  saveLocalStorage();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
  saveLocalStorage();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = cartItems
    .map((item, index) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
        <div class="cart-item-info">
          <p>${item.title}</p>
          <p>${item.price}</p>
          <button onclick="removeFromCart(${index})"><i class='bx bx-trash'></i></button>
        </div>
      </div>
    `)
    .join('');
}

function saveLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
