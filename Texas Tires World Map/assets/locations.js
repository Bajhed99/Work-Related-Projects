document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".location-search-btn-wrapper");
  const modal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const modalStoreName = document.getElementById("modalStoreName");
  const modalPhone = document.getElementById("modalPhone");
  const modalEmail = document.getElementById("modalEmail");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const location = btn.dataset.location;
      const phone = btn.dataset.phone;
      const email = btn.dataset.email;
      const storeName = btn.querySelector(".store-name").textContent;
      
      updateMap(location, btn);

      // Populate modal     
      modalStoreName.textContent = storeName;
      modalPhone.href = `tel:${phone}`;
      modalPhone.innerHTML = `<i class="fa-solid fa-phone"></i> ${phone}`;
      modalEmail.href = `mailto:${email}`;
      modalEmail.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email}`;
      
      // Show modal
      modal.style.display = "block";
    });
  });
  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});

function updateMap(location, element) {
  document.getElementById('dynamicMap').src =
    `https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  document
    .querySelectorAll('.location-search-btn-wrapper')
    .forEach(card => card.classList.remove('active'));

  element.classList.add('active');
}

function useCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      document.getElementById('dynamicMap').src =
        `https://maps.google.com/maps?q=${lat},${lng}&output=embed`;
    }, () => {
      alert('Unable to access location. Please enable GPS or location services.');
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
}