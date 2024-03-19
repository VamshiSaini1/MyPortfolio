function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Optional: Close modal if clicked outside of it
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  }
  
