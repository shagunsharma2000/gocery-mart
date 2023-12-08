let productData = localStorage.getItem('productData');

if (!productData) {
 
  fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((objectData) => {
     
      localStorage.setItem('productData', JSON.stringify(objectData));
      productData = objectData;
      displayProducts(productData);
    })
    .catch((err) => console.log(err));
} else {

  productData = JSON.parse(productData);
  displayProducts(productData);
}

function displayProducts(data) {
  let productContainer = document.getElementById("product_container");

  data.forEach((values) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-info">
        <h3>${values.title}</h3>
        <img src="${values.image}" alt="${values.title}">
        <p>Price: $${values.price}</p>
        <button class="price-button" onclick="openNextPage(${values.id})">Click here for details</button>
      </div>
    `;
    productContainer.appendChild(card);
  });
}

function openNextPage(productId) {
  
  const selectedProduct = productData.find(product => product.id === productId);
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  
  window.location.href = 'addtocart.html';
}
