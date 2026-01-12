document.getElementById('offerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Teşekkürler! Teklif talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
  this.reset();
});