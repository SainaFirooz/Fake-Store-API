// function displayProducts(products) {
//   productContainer.innerHTML = products
//     .map(
//       (product) => `
//         <div class="product-card" onclick="openModal('${product.title}', '${product.description}', '${product.price}')">
//           <img src="${product.image}" alt="${product.title}" class="product-image" />
//           <div class="product-info">
//             <h2>${product.title}</h2>
//             <p>${product.description}</p>
//             <p>Price: ${product.price}</p>
//           </div>
//         </div>
//       `
//     )
//     .join('');
// }
  
//   function openModal(title, description, price) {
//     const modalContent = document.getElementById('modalContent');
//     modalContent.innerHTML = `
//       <h2>${title}</h2>
//       <p>${description}</p>
//       <p>Price: ${price}</p>
//       <button onclick="closeModal()">Close</button>
//     `;
  
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     document.removeEventListener('click', outsideModalClick);
//     document.addEventListener('click', outsideModalClick);
//   }

//   function closeModal() {
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'none';
  
//     const modalContent = document.getElementById('modalContent');
//     modalContent.innerHTML = ''; // Clear the modal content

//     document.removeEventListener('click', outsideModalClick);
//   }
  

//  const productElement = document.querySelector('productContainer');

//  productElement.addEventListener('click', () => {
//   productElement.close()
//  });


