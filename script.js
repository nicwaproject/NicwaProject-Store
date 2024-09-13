document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    // Retrieve form data
    var name = document.getElementById('name').value;
    var product = document.getElementById('product').value;
  
    // Format the message
    var message = `Hello, my name is ${name}. I would like to order the theme: ${product}.`;
  
    // WhatsApp Business number (include country code, e.g., +6281234567890)
    var phoneNumber = '+6285974176110';
    
    // Create WhatsApp URL
    var whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp with the formatted message
    window.open(whatsappUrl, '_blank');
  });
    

