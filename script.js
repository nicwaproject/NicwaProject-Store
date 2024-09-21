document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Retrieve form data
  var name = document.getElementById('name').value;
  var theme = document.getElementById('theme').value;
  var package = document.getElementById('package').value;

  // Format the message
  var message = `Hello, nama saya ${name}. Aku ingin memesan undangan dengan:\n- Tema: ${theme}\n- Paket: ${package}`;

  // WhatsApp Business number (include country code, e.g., +6281234567890)
  var phoneNumber = '+6285974176110';
  
  // Create WhatsApp URL
  var whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // Open WhatsApp with the formatted message
  window.open(whatsappUrl, '_blank');
});
    
// Function to toggle between light and dark mode
function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById('theme-button');

  // Toggle between dark and light mode
  body.classList.toggle('dark-mode');

  // Update the button icon
  if (body.classList.contains('dark-mode')) {
      themeButton.textContent = '🌙'; // Moon icon for dark mode
  } else {
      themeButton.textContent = '🌞'; // Sun icon for light mode
  }
}

// Function to toggle mobile menu visibility
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Testimoni
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentPosition = 0;
let itemsPerPage = window.innerWidth < 768 ? 2 : 3; // Tampilkan 2 testimoni di mobile, 3 di desktop
const totalItems = testimonialItems.length;

// Fungsi untuk menampilkan testimoni berdasarkan posisi saat ini
function showTestimonials() {
  // Sembunyikan semua testimoni terlebih dahulu
  testimonialItems.forEach(item => {
    item.style.display = 'none';
  });

  // Tampilkan item yang sesuai dengan posisi sekarang
  const start = currentPosition * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = start; i < end && i < totalItems; i++) {
    testimonialItems[i].style.display = 'block'; // Tampilkan item
  }
}

// Fungsi untuk memperbarui itemsPerPage berdasarkan ukuran layar
function updateItemsPerPage() {
  itemsPerPage = window.innerWidth < 768 ? 2 : 3; // 2 untuk mobile, 3 untuk desktop
  showTestimonials(); // Perbarui tampilan testimoni
}

// Event listener untuk mengubah jumlah testimoni ketika ukuran layar berubah
window.addEventListener('resize', updateItemsPerPage);

// Event listener untuk tombol Next dan Prev
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPosition < Math.ceil(totalItems / itemsPerPage) - 1) {
    currentPosition++;
    showTestimonials();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    showTestimonials();
  }
});

// Inisialisasi tampilan awal
showTestimonials();

// FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active'); // Toggle kelas active
    const answer = item.querySelector('.faq-answer');
    
    // Jika FAQ aktif, atur max-height sesuai konten
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});
