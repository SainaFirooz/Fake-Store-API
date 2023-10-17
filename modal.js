function openModal(title, description, price, category, ratingRate) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
      <h2>${title}</h2>
      <p><b>Description:</b> ${description}</p>
      <p><b>Price: $</b>${price}</p>
      <p><b>Category:</b> ${category}</p>
      <p><b>Rating:</b> ${ratingRate}</p>
      <div class="button-container">
    <button onclick="closeModal()" class="modal-button">Close</button>
    <button onclick="addToCart('${title}', '${price}')" class="modal-button">Add to Cart</button>
  </div>
    `;
  
    const modal = document.getElementById('modalBox');
    modal.style.display = 'block';
  
  }
  
  function closeModal() {
    const modal = document.getElementById('modalBox');
    modal.style.display = 'none';
  
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = ''; 
  }
  
  