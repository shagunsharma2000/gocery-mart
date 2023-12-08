function saveAndContinue(event) {
    event.preventDefault();
  
   
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
  
   
    const shippingData = {
      fullName,
      address,
      city,
      zipCode,
    };
    localStorage.setItem('shippingData', JSON.stringify(shippingData));
  
   
    window.location.href = 'invoice.html';
  }
  

