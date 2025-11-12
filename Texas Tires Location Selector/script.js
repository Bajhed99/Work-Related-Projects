function updateMap(location, element) {
  document.getElementById('dynamicMap').src =
    `https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
  document.querySelectorAll('.location-card').forEach(card => card.classList.remove('active'));
  if (element) element.classList.add('active');
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
