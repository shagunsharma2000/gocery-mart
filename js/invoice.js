document.addEventListener('DOMContentLoaded', displayInvoice);

function displayInvoice() {
  
  const shippingData = JSON.parse(localStorage.getItem('shippingData'));

  if (shippingData) {
    
    const invoiceDataElement = document.getElementById('invoiceData');
    invoiceDataElement.innerHTML = `
      <p><strong>Full Name:</strong> ${shippingData.fullName}</p>
      <p><strong>Address:</strong> ${shippingData.address}</p>
      <p><strong>City:</strong> ${shippingData.city}</p>
      <p><strong>ZIP Code:</strong> ${shippingData.zipCode}</p>
    `;
  } else {

    window.location.href = 'index.html';
  }
}



